import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './<%= componentName %>.soy.js';

/**
 * <%= componentName %> component.
 */
class <%= componentName %> extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
<%= componentName %>.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!String}
   * @default example
   */
  id: Config.string().value('example'),
};

Soy.register(<%= componentName %>, templates);

export {<%= componentName %>};
export default <%= componentName %>;
