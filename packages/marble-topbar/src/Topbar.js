'use strict';

import {core} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Topbar.soy.js';

/**
 * Topbar component.
 */
class Topbar extends Component {
  created() {

  }

  disposed() {

  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Topbar.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!Object}
   */
  id: {
    validator: core.isString,
    value: 'Topbar'
  },
};

Soy.register(Topbar, templates);

export {Topbar};
export default Topbar;
