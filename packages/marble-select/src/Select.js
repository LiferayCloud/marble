import {core, array} from 'metal';
import dom from 'metal-dom';
import Component from 'metal-component';
import Soy from 'metal-soy';
import 'marble-dropdown';

import templates from './Select.soy.js';

/**
 * Responsible for rendering and handling a custom select component, based
 * on `Dropdown`.
 */
class Select extends Component {
  /**
   * @inheritDoc
   */
  attached() {
    this.on('itemsChanged', this.handleItemsChanged_);
  }

  /**
   * Finds the index of the given element in the items collection.
   * @param {!Element} element
   * @return {number}
   * @protected
   */
  findItemIndex_(element) {
    const items = this.element.querySelectorAll('li');
    for (const [index, item] of items.entries()) {
      if (item === element) {
        return index;
      }
    }
  }

  /**
   * Focuses the option at the given index.
   * @param {number} index
   * @protected
   */
  focusIndex_(index) {
    const option = this.element.querySelector(
      `.select-option:nth-child(${index + 1}) a`
    );
    if (option) {
      this.focusedIndex_ = index;
      option.focus();
    }
  }

  /**
   * Gets the `Dropdown` instance used by this `Select`.
   * @return {!Dropdown}
   */
  getDropdown() {
    return this.components.dropdown;
  }

  /**
   * Gets `seletectIndex`'s default value.
   * @return {!Dropdown}
   */
  getSelectedIndexDefaultValue_() {
    return this.label || !this.items.length ? -1 : 0;
  }

  /**
   * Handles a `stateSynced` event for the dropdown.
   * @param {!Object} data
   * @protected
   */
  handleDropdownStateSynced_(data) {
    if (this.openedWithKeyboard_) {
      // This is done on `stateSynced` because the items need to have already
      // been made visible before we try focusing them.
      this.focusIndex_(0);
      this.openedWithKeyboard_ = false;
    } else if (this.closedWithKeyboard_) {
      this.element.querySelector('.dropdown-select').focus();
      this.closedWithKeyboard_ = false;
    } else if (data.changes.expanded) {
      this.focusedIndex_ = null;
    }

    this.expanded_ = this.getDropdown().expanded;
  }

  /**
   * Handles the `itemsChanged` event. Sets the default value to the `selectedIndex`.
   * @param {!Object} data
   * @protected
   */
  handleItemsChanged_(event) {
    if (event.prevVal && !array.equal(event.newVal, event.prevVal)) {
      this.selectedIndex = this.getSelectedIndexDefaultValue_();
    }
  }

  /**
   * Handles a `click` event on one of the items. Updates `selectedIndex`
   * accordingly.
   * @param {!Event} event
   * @protected
   */
  handleItemClick_(event) {
    this.selectItem_(event.delegateTarget);
    event.preventDefault();
  }

  /**
   * Handles a `keydown` event on one of the items. Updates `selectedIndex`
   * accordingly.
   * @param {!Event} event
   * @protected
   */
  handleItemKeyDown_(event) {
    const {keyCode} = event;
    if (keyCode === 13 || keyCode === 32) {
      this.closedWithKeyboard_ = true;
      this.selectItem_(event.delegateTarget);
      event.preventDefault();
    }
  }

  /**
   * Handles a `keydown` event on this component. Handles keyboard controls.
   * @param {!Event} event
   * @protected
   */
  handleKeyDown_(event) {
    const {keyCode} = event;
    if (this.expanded_) {
      switch (keyCode) {
      case 27:
        this.closedWithKeyboard_ = true;
        this.expanded_ = false;
        break;
      case 38:
        this.focusedIndex_ = core.isDefAndNotNull(this.focusedIndex_)
          ? this.focusedIndex_
          : 1;
        this.focusIndex_(
          this.focusedIndex_ === 0
            ? this.items.length - 1
            : this.focusedIndex_ - 1
        );
        event.preventDefault();
        break;
      case 40:
        this.focusedIndex_ = core.isDefAndNotNull(this.focusedIndex_)
          ? this.focusedIndex_
          : -1;
        this.focusIndex_(
          this.focusedIndex_ === this.items.length - 1
            ? 0
            : this.focusedIndex_ + 1
        );
        event.preventDefault();
        break;
      }
    } else if (
      (keyCode === 13 || keyCode === 32) &&
      dom.hasClass(event.target, 'dropdown-select')
    ) {
      this.openedWithKeyboard_ = true;
      this.expanded_ = true;
      event.preventDefault();
      return;
    }
  }

  /**
   * @inheritDoc
   */
  prepareStateForRender(data) {
    data.items = this.items.map(item => Soy.toIncDom(item));
    return data;
  }

  /**
   * Selects the item for the given element, and closes the dropdown.
   * @param {!Element} itemElement
   * @protected
   */
  selectItem_(itemElement) {
    this.selectedIndex = this.findItemIndex_(itemElement);
    this.expanded_ = false;
  }

  /**
   * Syncs disabled closing dropdown when select is changed to disabled
   * and updates internal state expanded_ to be false.
   * @param {boolean} disabled
   */
  syncDisabled(disabled) {
    if (disabled) {
      this.expanded_ = false;
      this.getDropdown().close();
    }
  }

  /**
   * Syncs internal state expanded_ and toggle dropdown.
   * @param {boolean} expanded
   */
  syncExpanded_(expanded) {
    if (expanded) {
      this.getDropdown().open();
    } else {
      this.getDropdown().close();
    }
  }
}
Soy.register(Select, templates);

/**
 * State definition.
 * @type {!Object}
 * @static
 */
Select.STATE = {
  /**
   * The CSS class used by the select menu arrow.
   * @type {string}
   * @default 'caret'
   */
  arrowClass: {
    value: 'caret',
  },

  /**
   * The CSS class used by the select menu button.
   * @type {string}
   * @default 'btn btn-default'
   */
  buttonClass: {
    validator: core.isString,
    value: 'btn btn-default',
  },

  /**
   * Block or unblock the component behaviours.
   * @type {boolean}
   * @default false
   */
  disabled: {
    validator: core.isBoolean,
    value: false,
  },

  /**
   * Flag indicating if the select dropdown is currently expanded.
   * @type {boolean}
   */
  expanded_: {
    setter: function(value) {
      return !this.disabled ? value : false;
    },
    validator: core.isBoolean,
    value: false,
    internal: true,
  },

  /**
   * The name of the hidden input field
   * @type {string}
   */
  hiddenInputName: {
    validator: core.isString,
  },

  /**
   * A public list representing the select dropdown items. Its value is synced
   * with the `internaItems` attribute for internal manipulation.
   * @type {!Array<string>}
   * @default []
   */
  items: {
    validator: val => val instanceof Array,
    value: [],
  },

  /**
   * The label that should be used for the select menu when no item is
   * selected. If not set, the first item will be selected automatically.
   * @type {string}
   */
  label: {
    validator: core.isString,
  },

  /**
   * The index of the currently selected item, or -1 if none is selected.
   * @type {number}
   */
  selectedIndex: {
    validator: core.isNumber,
    valueFn: 'getSelectedIndexDefaultValue_',
  },

  /**
   * A list representing the select dropdown values.
   * @type {Array<string>=}
   */
  values: {
    validator: val => val instanceof Array,
  },
};

/**
 * Default element classes.
 * @type {string}
 * @static
 */
Select.ELEMENT_CLASSES = 'select';

export {Select};
export default Select;
