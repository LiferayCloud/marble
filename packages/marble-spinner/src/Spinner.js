import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './Spinner.soy.js';

/**
 * Spinner component.
 */
class Spinner extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Spinner.STATE = {
  /**
   * Indicates if the spinner rotation is done or not
   * @type {!Boolean}
   */
  isDone: Config.bool(),

  /**
   * The size of the spinner
   * @type {!String|undefined}
   */
  size: Config.oneOf(['small', 'medium', 'large']),

  /**
   * The style of the spinner
   * @type {!String|undefined}
   */
  style: Config.oneOf(['danger', 'success', 'warning']),
};

Soy.register(Spinner, templates);

export {Spinner};
export default Spinner;
