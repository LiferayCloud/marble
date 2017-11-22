'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './CheckboxGroup.soy.js';

/**
 * CheckboxGroup component.
 */
class CheckboxGroup extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
CheckboxGroup.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!String}
   * @default example
   */
  id: Config.string().value('example'),
};

Soy.register(CheckboxGroup, templates);

export {CheckboxGroup};
export default CheckboxGroup;
