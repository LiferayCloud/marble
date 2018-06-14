import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './Checkbox.soy.js';

/**
 * Checkbox component.
 */
class Checkbox extends Component {
  handleCheck(e) {
    this.emit('check', e);
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Checkbox.STATE = {
  /**
   * The check status of the element.
   * @type {!Bool}
   */
  checked: Config.bool(),

  /**
   * ID to be applied to the element.
   * @type {!String}
   */
  id: Config.string(),

  /**
   * The label of the element.
   * @type {!String}
   */
  label: Config.string(),

  /**
   * The value of the element.
   * @type {!String}
   */
  value: Config.string()
};

Soy.register(Checkbox, templates);

export {Checkbox};
export default Checkbox;
