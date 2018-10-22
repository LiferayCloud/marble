import core from 'metal';
import templates from './InputMatrix.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import 'marble-input';

/**
 * This component automatically adds new fields to guarantee that there will
 * always be an empty field at the end of the list.
 */
class InputMatrix extends Component {
  /**
   * @inheritDoc
   */
  created() {
    this.currentFields_ = this.fields;
  }

  /**
   * Set current fields.
   * @param {Object} fields
   */
  setCurrentFields(fields) {
    this.currentFields_ = fields;
  }

  /**
   * Converts the specified element attribute to an integer.
   * @param {!Element} element
   * @param {string} attrName
   * @return {number}
   * @protected
   */
  convertAttrToInt_(element, attrName) {
    return parseInt(element.getAttribute(attrName), 10);
  }

  /**
   * Handles an `input` event from one of the text fields. Updates the values
   * and adds an extra field when necessary.
   * @param {!Event} event
   * @protected
   */
  handleInput_(event) {
    const element = event.delegateTarget;
    const fieldIndex = this.convertAttrToInt_(element, 'data-field-index');
    const rowIndex = this.convertAttrToInt_(element, 'data-row-index');
    this.currentFields_[rowIndex][fieldIndex] =
      this.currentFields_[rowIndex][fieldIndex] || {};
    this.currentFields_[rowIndex][fieldIndex].value = element.value;
    this.currentFields_ = this.currentFields_;
  }

  /**
   * Handles a `click` event from one of the field's remove button.
   * @param {!Event} event
   * @protected
   */
  handleRemoveClick_(event) {
    const element = event.delegateTarget;
    const index = this.convertAttrToInt_(element, 'data-row-index');

    this.currentFields_.splice(index, 1);
    this.currentFields_ = this.currentFields_;
  }

  /**
   * Sets the `fields` and `currentFields_` state property. If the last row
   * contains at least one non empty field that doesn't have
   * `disableDuplication` set to true, a new row will be added automatically
   * here.
   * @param {!Array<!Array<string>} fields
   * @return {!Array<!Array<string>}
   * @protected
   */
  setFieldsFn_(fields) {
    if (!fields.length) {
      fields = [[]];
    }

    const lastRow = fields[fields.length - 1];
    for (let i = 0; i < this.fieldsConfig.length; i++) {
      let config = this.fieldsConfig[i];
      let hasValue = lastRow[i] && lastRow[i].value && lastRow[i].value !== '';
      if (hasValue && !config.disableDuplication) {
        fields.push([]);
        break;
      }
    }

    return fields;
  }
}
Soy.register(InputMatrix, templates);

InputMatrix.STATE = {
  /**
   * The content of close button of the alert.
   * @type {html|string}
   */
  closeButtonHtml: {},

  /**
   * Internal information for each rendered field, in each row. Each field object can
   * contain the following data:
   * - {string=} value The field's current value
   * - {string-} error The error message to be rendered for the field.
   * @type {!Array<!Array<!Object>>}
   */
  currentFields_: {
    internal: true,
    setter: 'setFieldsFn_',
    validator: core.isArray,
    valueFn: () => [],
  },

  /**
   * Information for each rendered field, in each row. Each field object can
   * contain the following data:
   * - {string=} value The field's current value
   * - {string-} error The error message to be rendered for the field.
   * @type {!Array<!Array<!Object>>}
   */
  fields: {
    setter: 'setFieldsFn_',
    validator: core.isArray,
    valueFn: () => [],
  },

  /**
   * An array of objects representing fields that should be rendered together.
   * Each field config can have one of the following configuration options:
   * - {boolean=} autocomplete Optional flag indicating that the "autocomplete"
   *     html attribute should be added to the input field.
   * - {boolean=} disableDuplication Optional flag indicating that typing on
   *     this field should not cause another row of fields to be created even if
   *     it was on the last row.
   * - {boolean=} isArray Optional flag indicating that fields with this name
   *     should be named as array fields, not by having different names with
   *     indexes.
   * - {string=} label Optional label for the field.
   * - {number=} maxLength Optional maximum length for this field.
   * - {string=} name Optional field name, which will have a counter suffix
   *     indicating its row position.
   * - {string=} placeholder Optional placeholder for the field.
   * @type {!Array<!Object>}
   */
  fieldsConfig: {
    validator: core.isArray,
    valueFn: () => [{}],
  },

  /**
   * Flag that allows hiding of close buttons.
   * @type {boolean}
   */
  hideCloseButtons: {},
};

export {InputMatrix};
export default InputMatrix;
