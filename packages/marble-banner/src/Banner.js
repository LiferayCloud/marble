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
    this.animationClass = 'show-animation';

    if (body) {
      this.body = body;
    }
  }

  /**
   * @return {Promise}
   */
  async hide() {
    return new Promise(resolve => {
      this.animationClass = 'hide-animation';
      this.callAsync_(() => {
        this.isVisible = false;
        resolve();
      }, 600);
    });
  }

  /**
   * @inheritDoc
   */
  disposeInternal() {
    super.disposeInternal();
    clearTimeout(this.delay_);
  }

  /**
   * @param {!function()} fn
   * @param {number} delay
   * @private
   */
  callAsync_(fn, delay) {
    clearTimeout(this.delay_);
    this.delay_ = setTimeout(fn.bind(this), delay);
  }

  /**
   * Toggles the visibility of the banner.
   */
  async toggle() {
    if (this.isVisible) {
      await this.hide();
    } else {
      this.show();
    }
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
   * The class to apply visibility animation
   * @type {string}
   */
  animationClass: Config.string().value('show-animation'),

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
