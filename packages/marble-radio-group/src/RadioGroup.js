'use strict';

import {core} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './RadioGroup.soy.js';

/**
 * RadioGroup component.
 */
class RadioGroup extends Component {
  created() {

  }

  disposed() {

  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
RadioGroup.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!Object}
   */
  id: {
    validator: core.isString,
    value: 'radio-group'
  },
};

Soy.register(RadioGroup, templates);

export {RadioGroup};
export default RadioGroup;
