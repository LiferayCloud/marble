import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';
import templates from './Banner.soy.js';
// import {isServerSide} from 'metal';


/**
 * Banner component.
 */
class Banner extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Banner.STATE = {
  /**
   * The main classes of the component.
   * @type {html|string}
   */
  elementClasses: Config.string().value(''),

  /**
   * The content of the component.
   * @type {html|string}
   */
  body: Config.any(),

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
};

Soy.register(Banner, templates);

export {Banner};
export default Banner;
