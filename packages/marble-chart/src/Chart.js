import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './Chart.soy.js';

/**
 * Chart component.
 */
class Chart extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Chart.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!String}
   * @default example
   */
  id: Config.string().value('example'),
};

Soy.register(Chart, templates);

export {Chart};
export default Chart;
