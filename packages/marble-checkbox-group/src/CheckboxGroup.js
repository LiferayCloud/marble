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
   * The list of radio items
   * @type {?Array|undefined}
   * @default undefined
   */
  items: Config.arrayOf(
    Config.shapeOf({
      id: Config.string(),
      checked: Config.bool(),
      label: Config.string(),
      value: Config.string(),
    })
  ),

  /**
   * The name param used on each radio
   * @type {?String}
   * @default undefined
   */
  name: Config.string(),

  /**
   * The style of the radio group
   * @type {!String}
   * @default radio-group
   */
  style: Config.oneOf([
    'checkbox-group',
    'checkbox-group checkbox-group-inline'
  ]).value('checkbox-group'),
};

Soy.register(CheckboxGroup, templates);

export {CheckboxGroup};
export default CheckboxGroup;
