import {isServerSide} from 'metal';
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
    if (isServerSide()) {
      return;
    }

    this.toggler = new Toggler({
      content: '.topbar-list',
      header: '.topbar-toggle',
      expandedClasses: 'topbar-list-expanded'
    });

    document.documentElement.classList.add('topbar-canvas');

    this.toggler.on('headerExpanded', () => {
      document.documentElement.classList.add('topbar-canvas-expanded');
    });

    this.toggler.on('headerCollapsed', () => {
      document.documentElement.classList.remove('topbar-canvas-expanded');
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
   * Additional CSS classes to be added
   * @type {!String}
   * @default undefined
   */
  style: Config.string(),

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
      target: Config.string(),
      type: Config.string(),
      variant: Config.string(),
    })
  ).value([]),
};

Soy.register(Topbar, templates);

export {Topbar};
export default Topbar;
