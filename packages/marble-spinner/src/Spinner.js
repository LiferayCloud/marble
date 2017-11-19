'use strict';

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
   * ID to be applied to the element.
   * @type {!String}
   * @default example
   */
  id: Config.string().value('example'),
};

Soy.register(Spinner, templates);

export {Spinner};
export default Spinner;
