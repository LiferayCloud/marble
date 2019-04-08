import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';
import templates from './Banner.soy.js';

/**
 * Banner component.
 */
class Banner extends Component {
  /**
   * @param {string} body
   */
  show(body) {
    this.isVisible = true;

    if (body) {
      this.body = body;
    }
  }

  /**
   */
  hide() {
    this.isVisible = false;
  }

  /**
   * Toggles the visibility of the banner.
   */
  toggle() {
    this.isVisible = !this.isVisible;
  }
}

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
   * Close button html.
   * @type {html|string}
   */
  closeButtonHtml: Config.any(),

  /**
   * Is visible flag.
   * @type {boolean}
   * @default true
   */
  isVisible: {
    value: true,
  },
};

Soy.register(Banner, templates);

export {Banner};
export default Banner;
