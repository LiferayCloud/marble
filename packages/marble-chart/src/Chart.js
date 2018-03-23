import {isServerSide} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import ChartJS from 'chart.js';

import templates from './Chart.soy.js';

/**
 * Chart component.
 */
class Chart extends Component {
  attached() {
    if (isServerSide()) {
      return;
    }

    this.chart = new ChartJS(this.refs.canvas, {
      type: this.type,
      data: this.data,
      options: this.options,
    });
  }

  willReceiveState(changes) {
    if (changes.data) {
      this.chart.data = changes.data.newVal;
      this.chart.update();
    }
  }

  disposed() {
    this.chart.destroy();
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Chart.STATE = {
  /**
   * Built-in types for Chart.js
   * @type {!String}
   */
  type: {
    value: Config.oneOf(['bar', 'bubble', 'line', 'pie', 'polarArea', 'radar']),
  },

  /**
   * Data used to render Chart.js
   * @type {!Object}
   */
  data: {
    value: {}
  },

  /**
   * Styling options for Chart.js
   * @type {!Object}
   */
  options: {
    value: {}
  }
};

Soy.register(Chart, templates);

export {Chart};
export default Chart;
