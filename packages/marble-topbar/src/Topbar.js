'use strict';

import {core} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './Topbar.soy.js';

/**
 * Topbar component.
 */
class Topbar extends Component {
  attached() {
    this.toggler = new Toggler({
      content: '.topbar-list',
      header: '.topbar-toggle',
      expandedClasses: 'topbar-list-expanded'
    });
  }

  disposed() {
    let toggler = this.toggler;

    if (toggler) {
      toggler.dispose();
    }
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Topbar.STATE = {
  /**
   * Text used on the logo
   * @type {!String}
   */
  elementClasses: {
    validator: core.isString,
    value: 'topbar'
  },

  /**
   * Icon used on the logo
   * @type {!String}
   */
  logoIcon: {
    validator: core.isString
  },

  /**
   * Image used on the logo
   * @type {!String}
   */
  logoImage: {
    validator: core.isString
  },

  /**
   * Text used on the logo
   * @type {!String}
   */
  logoText: {
    validator: core.isString
  },
};

Soy.register(Topbar, templates);

export {Topbar};
export default Topbar;
