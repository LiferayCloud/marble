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
   * The checked status of the input element.
   * @type {!Bool}
   */
  checked: Config.bool(),

  /**
   * The name and ID of the input element.
   * @type {!String}
   */
  id: Config.string(),

  /**
   * The label of the input element.
   * @type {!String}
   */
  label: Config.string(),

  /**
   * The value of the input element.
   * @type {!String}
   */
  value: Config.string()
};

Soy.register(Checkbox, templates);

export {Checkbox};
export default Checkbox;
