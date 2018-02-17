import {core, isServerSide} from 'metal';
import dom from 'metal-dom';
import templates from './Datatable.soy.js';
import Component from 'metal-component';
import KeyboardFocusManager from 'metal-keyboard-focus';
import Soy from 'metal-soy';
import UA from 'metal-useragent';

class Datatable extends Component {
  /**
   * @inheritDoc
   */
  attached() {
    if (isServerSide()) {
      return;
    }

    this.keyboardFocusManager_ = new KeyboardFocusManager(this, 'td,th')
      .setFocusHandler(this.handleNextFocus_.bind(this))
      .start();
  }

  /**
   * Visits array items and asserts that it only contains one literal type.
   * @param {array} value
   * @protected
   * @throws {Error} If types are different.
   */
  assertNoMixedTypesInArrays_(value) {
    let lastType;
    let acceptArray = v => {
      let type = this.getValueType_(v);
      this.assertSameTypes_(lastType, type);
      lastType = type;
      this.assertNoMixedTypesInArrays_(v);
    };
    let acceptObject = v => this.assertNoMixedTypesInArrays_(v);
    this.visit_(value, acceptArray, acceptObject);
  }

  /**
   * Asserts literal types are not the same.
   * @param {string} type1
   * @param {string} type2
   * @protected
   * @throws {Error} If types are different.
   */
  assertSameTypes_(type1, type2) {
    if (type1 && type2 && type1 !== type2) {
      throw new Error('Datatable does not support mixed types in arrays.');
    }
  }

  /**
   * Builds a ref with for the given row and column positions.
   * @param {string} prefix
   * @param {number} row
   * @param {number} col
   * @return {string}
   * @protected
   */
  buildRef_(prefix, row, col) {
    return prefix + row + '-' + col;
  }

  /**
   * Builds a ref string pointing to the last column.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {string}
   * @protected
   */
  buildRefLastColumn_(event, data) {
    const element = event.delegateTarget;
    const cellLength = parseInt(element.getAttribute('data-cols'), 10);
    return this.buildRef_(data.prefix, data.row, cellLength - 1);
  }

  /**
   * Builds a ref string pointing to the last row.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {string}
   * @protected
   */
  buildRefLastRow_(event, data) {
    const element = event.delegateTarget.parentNode;
    const rowLength = parseInt(element.getAttribute('data-rows'), 10);
    return this.buildRef_(data.prefix, rowLength - 1, data.col);
  }

  /**
   * Extract keys from an array of objects. Column values are aggregated from
   * extracting 1-deep key values. For other array types keys are not
   * extracted and values are plotted in one column vertically.
   * @param {object} expandedValue
   * @protected
   */
  collectColumnsFromArrayValues_(expandedValue) {
    let value = expandedValue.value;
    let isFirstArrayItemObject =
      value[0] && value[0].type === Datatable.TYPES.OBJECT;
    if (isFirstArrayItemObject) {
      let columns = {};
      let columnsType = {};
      value.forEach(item =>
        Object.keys(item.value).forEach(key => {
          columns[key] = true;
          columnsType[key] = item.value[key].type;
        })
      );
      expandedValue.columns = this.formatColumns(Object.keys(columns));
      expandedValue.columnsType = this.formatColumnsType(columnsType);
    }
  }

  /**
   * Extract columns from object keys.
   * @param {object} expandedValue
   * @protected
   */
  collectColumnsFromObjectKeys_(expandedValue) {
    let value = expandedValue.value;
    let columns = {};
    let columnsType = {};
    Object.keys(value).forEach(key => {
      columns[key] = true;
      columnsType[key] = value[key].type;
    });
    expandedValue.columns = this.formatColumns(Object.keys(columns));
    expandedValue.columnsType = this.formatColumnsType(columnsType);
  }

  /**
   * Analyzes the expanded object containing type and value and extracts an
   * array of columns to be used for plotting.
   * @param {object} expandedValue
   * @protected
   */
  collectColumnsFromValues_(expandedValue) {
    switch (expandedValue.type) {
    case Datatable.TYPES.ARRAY:
      this.collectColumnsFromArrayValues_(expandedValue);
      break;
    case Datatable.TYPES.OBJECT:
      this.collectColumnsFromObjectKeys_(expandedValue);
      break;
    }
  }

  /**
   * @inheritDoc
   */
  disposed() {
    if (this.keyboardFocusManager_) {
      this.keyboardFocusManager_.dispose();
      this.keyboardFocusManager_ = null;
    }
  }

  /**
   * Gets data (prefix, row and column) from the given ref.
   * @param {string} ref
   * @return {!{col: number, prefix: string, row: number}}
   * @protected
   */
  extractDataFromRef_(ref) {
    const matches = Datatable.REF_REGEX.exec(ref);
    return {
      col: parseInt(matches[2], 10),
      prefix: ref.substr(0, ref.length - matches[0].length),
      row: parseInt(matches[1], 10),
    };
  }

  /**
   * Internal helper to get literal JSON type of a value.
   * @param {*} value
   * @return {string} Type inferred from JSON value.
   */
  getValueType_(value) {
    if (value === null) {
      return Datatable.TYPES.NULL;
    }
    if (value === undefined) {
      return Datatable.TYPES.UNDEFINED;
    }
    if (Array.isArray(value)) {
      return Datatable.TYPES.ARRAY;
    }
    if (core.isObject(value) && value.contentKind === 'HTML') {
      return Datatable.TYPES.STRING;
    }
    return typeof value;
  }

  /**
   * Handles a 'click' event on a table label. Shows/hides the table.
   * @param {!Event} event
   * @protected
   */
  handleClickToggle_(event) {
    this.toggleTableContents(event.delegateTarget);
  }

  /**
   * Handles pressing the down arrow key inside a datatable grid.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {string|boolean}
   * @protected
   */
  handleDownArrowKey_(event, data) {
    if (event.metaKey && UA.isMac) {
      return this.buildRefLastRow_(event, data);
    } else {
      return this.buildRef_(data.prefix, data.row + 1, data.col);
    }
  }

  /**
   * Handles pressing the enter key inside a datatable grid. Shows/hides the
   * datatable inside the columns, if there is one.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @protected
   */
  handleEnterKey_(event, data) {
    const ref = this.buildRef_(data.prefix, data.row, data.col) + '-label';
    if (this.refs[ref]) {
      this.toggleTableContents(this.refs[ref]);
    }
    event.stopPropagation();
  }

  /**
   * Handles a 'keydown' event on a table label. Shows/hides the table if the
   * pressed key was either ENTER or SPACE.
   * @param {!Event} event
   * @protected
   */
  handleKeydownToggle_(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.toggleTableContents(event.delegateTarget);
    }
  }

  /**
   * Handles pressing the left arrow key inside a datatable grid.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {string|boolean}
   * @protected
   */
  handleLeftArrowKey_(event, data) {
    if (event.metaKey && UA.isMac) {
      return this.buildRef_(data.prefix, data.row, 0);
    }
    return true;
  }

  /**
   * Handles pressing the right arrow key inside a datatable grid.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {string|boolean}
   * @protected
   */
  handleRightArrowKey_(event, data) {
    if (event.metaKey && UA.isMac) {
      return this.buildRefLastColumn_(event, data);
    }
    return true;
  }

  /**
   * Handles pressing the up arrow key inside a datatable grid.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {string|boolean}
   * @protected
   */
  handleUpArrowKey_(event, data) {
    if (event.metaKey && UA.isMac) {
      return this.buildRef_(data.prefix, 0, data.col);
    } else {
      return this.buildRef_(data.prefix, data.row - 1, data.col);
    }
  }

  /**
   * Handles focus through keyboard, given the extracted ref data.
   * @param {!Event} event
   * @param {!Object} data Data extracted from the current cell's ref.
   * @return {boolean|string|Element}
   * @protected
   */
  handleNextFocusData_(event, data) {
    switch (event.keyCode) {
    case 13:
    case 32:
      return this.handleEnterKey_(event, data);
    case 33:
      return this.buildRef_(data.prefix, 0, data.col);
    case 34:
      return this.buildRefLastRow_(event, data);
    case 35:
      return this.buildRefLastColumn_(event, data);
    case 36:
      return this.buildRef_(data.prefix, data.row, 0);
    case 37:
      return this.handleLeftArrowKey_(event, data);
    case 38:
      return this.handleUpArrowKey_(event, data);
    case 39:
      return this.handleRightArrowKey_(event, data);
    case 40:
      return this.handleDownArrowKey_(event, data);
    }
  }

  /**
   * Handles focus through keyboard.
   * @param {!Event} event
   * @return {boolean|string|Element}
   * @protected
   */
  handleNextFocus_(event) {
    const ref = event.delegateTarget.getAttribute('ref');
    const data = this.extractDataFromRef_(ref);
    const returnValue = this.handleNextFocusData_(event, data);
    if (returnValue) {
      event.preventDefault();
      event.stopPropagation();
    }
    return returnValue;
  }

  /**
   * Returns true if data is already expanded, false otherwise.
   * @param {*} data
   * @return {boolean}
   */
  isAlreadyExpanded(data) {
    return core.isObject(data) && 'columns' in data && 'type' in data;
  }

  /**
   * Setter for the `data` state property.
   * @param {!Object}
   * @return {!Object}
   * @protected
   */
  setData_(data) {
    if (!this.isAlreadyExpanded(data)) {
      this.assertNoMixedTypesInArrays_(data);
      data = this.visitValuesAndExpandType_(data);
    }
    return this.visitValuesAndWrapStringValues_(data);
  }

  /**
   * Toggles sibling table content related to given label.
   * @param {!Element} label
   */
  toggleTableContents(label) {
    dom.toggleClasses(label, this.labelClasses);
    dom.toggleClasses(dom.next(label, 'table'), this.hiddenClasses);
  }

  /**
   * Internal non-recursive visitor helper to navigate over JSON values.
   * @param {*} value The value to start the visit.
   * @param {!function} acceptArray Accept logic for array items.
   * @param {!function} acceptObject Accept logic for object keys and values.
   * @protected
   */
  visit_(value, acceptArray, acceptObject) {
    switch (this.getValueType_(value)) {
    case Datatable.TYPES.ARRAY:
      value.forEach((v, k) => acceptArray(v, k, value));
      break;
    case Datatable.TYPES.OBJECT:
      Object.keys(value).forEach(k => acceptObject(value[k], k, value));
      break;
    }
  }

  /**
   * Visits all json values and wraps it in object containing its type and
   * value.
   * @param {*} value The value to start the visit.
   * @return {object} Wrapped object containing type and value.
   * @protected
   */
  visitValuesAndExpandType_(value) {
    let acceptArray = (val, key, reference) =>
      (reference[key] = this.visitValuesAndExpandType_(val));
    let acceptObject = (val, key, reference) =>
      (reference[key] = this.visitValuesAndExpandType_(val));
    this.visit_(value, acceptArray, acceptObject);
    let type = this.getValueType_(value);
    let expanded = {
      type: type,
      value: value,
    };
    this.collectColumnsFromValues_(expanded);
    return expanded;
  }

  /**
   * Visits all json values and wraps it in special `Soy.toIncDom` helper if
   * it's string.
   * @param {*} value The value to start the visit.
   * @return {object} Wrapped string.
   * @protected
   */
  visitValuesAndWrapStringValues_(value) {
    let acceptArray = (val, key, reference) =>
      (reference[key] = this.visitValuesAndWrapStringValues_(val));
    let acceptObject = (val, key, reference) =>
      (reference[key] = this.visitValuesAndWrapStringValues_(val));
    this.visit_(value, acceptArray, acceptObject);
    if (core.isObject(value)) {
      let type = this.getValueType_(value.value);
      if (type === Datatable.TYPES.STRING) {
        value.value = Soy.toIncDom(value.value);
      }
    }
    return value;
  }
}
Soy.register(Datatable, templates);

Datatable.STATE = {
  /**
   * Data to be plotted on datatable. Any JSON type is supported if it does
   * not contain mixed types inside an array.
   * @type {*}
   */
  data: {
    setter: 'setData_',
  },

  /**
   * If true displays types in column.
   * @type {boolean}
   * @default true
   */
  displayColumnsType: {
    validator: core.isBoolean,
    value: true,
  },

  /**
   * Formats array of columns extracted from JSON data. Relevant for operates
   * over column values, such as sorting and formatting.
   * @type {function(array.<string>)}
   */
  formatColumns: {
    validator: core.isFunction,
    value: (columns) => {
      return columns.sort();
    },
  },

  /**
   * Formats map of columns type extracted from JSON data. Relevant for
   * operates over column values, such as sorting and formatting.
   * @type {function(map.<string,string>)}
   */
  formatColumnsType: {
    validator: core.isFunction,
    value: (columnstype) => {
      return columnstype;
    },
  },

  /**
   * Css classes to be used for hidden state.
   * @type {string}
   * @default 'hidden'
   */
  hiddenClasses: {
    validator: core.isString,
    value: 'hidden',
  },

  /**
   * Css classes to be used for labels.
   * @type {string}
   * @default 'collapsed expanded'
   */
  labelClasses: {
    validator: core.isString,
    value: 'collapsed expanded',
  },

  /**
   * Css classes to be used for tables.
   * @type {string}
   * @default 'table table-condensed table-hover'
   */
  tableClasses: {
    validator: core.isString,
    value: 'table table-bordered table-condensed table-hover',
  },
};

// The regex used to extract the row/column positions from an element's ref.
Datatable.REF_REGEX = /(\d+)-(\d+)$/;

/**
 * Datatable supported types.
 * @type {object}
 * @static
 */
Datatable.TYPES = {
  ARRAY: 'array',
  BOOLEAN: 'boolean',
  NULL: 'null',
  NUMBER: 'number',
  OBJECT: 'object',
  STRING: 'string',
  UNDEFINED: 'undefined',
};

export {Datatable};
export default Datatable;
