import templates from './Toast.soy.js';
import Soy from 'metal-soy';
import Alert from 'marble-alert';

class Toast extends Alert {}

Toast.STATE = {
  /**
   * Overrides `metal-alert` default values.
   */
  animClasses: {
    value: {
      show: 'animated slideInBottom',
      hide: 'animated slideOutBottom',
    },
  },

  /**
   * Close button.
   * @type {boolean}
   * @default true
   */
  closeButton: {
    value: true,
  },

  /**
   * The content of close button of the alert.
   * @type {html|string}
   */
  closeButtonHtml: {},

  /**
   * Spinner indicating.
   * @type {boolean}
   * @default true
   */
  spinner: {
    value: true,
  },

  /**
   * The CSS classes that should be added to the spinner.
   * @type {string}
   */
  spinnerClasses: {},

  /**
   * Spinner is marked as done.
   * @type {boolean}
   * @default false
   */
  spinnerDone: {
    value: false,
  },

  visible: {
    value: true,
  },
};

Soy.register(Toast, templates);

export {Toast};
export default Toast;
