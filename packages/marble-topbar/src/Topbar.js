'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';
import {Config} from 'metal-state';

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
   * The background theme of the topbar
   * @type {!String}
   * @default topbar
   */
  theme: Config.oneOf([
    'topbar',
    'topbar topbar-light'
  ]).value('topbar'),

  /**
   * Defines how the logo should look like
   * @type {?Object|undefined}
   * @default undefined
   */
  logo: Config.shapeOf({
    href: Config.string(),
    icon: Config.string(),
    image: Config.string(),
    text: Config.string(),
  }),

  /**
   * The list of menu items
   * @type {?Array|undefined}
   * @default undefined
   */
  items: Config.arrayOf(
    Config.shapeOf({
      href: Config.string(),
      label: Config.string(),
      selected: Config.bool(),
    })
  ).value([]),
};

Soy.register(Topbar, templates);

export {Topbar};
export default Topbar;
