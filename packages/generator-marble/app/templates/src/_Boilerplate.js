'use strict';

import {core} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './<%= componentName %>.soy.js';

/**
 * <%= componentName %> component.
 */
class <%= componentName %> extends Component {
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
<%= componentName %>.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!Object}
   */
  id: {
    validator: core.isString,
    value: '<%= componentName %>'
  },
};

Soy.register(<%= componentName %>, templates);

export {<%= componentName %>};
export default <%= componentName %>;
