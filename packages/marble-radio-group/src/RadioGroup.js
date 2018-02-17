import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './RadioGroup.soy.js';

/**
 * RadioGroup component.
 */
class RadioGroup extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
RadioGroup.STATE = {
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
    'radio-group',
    'radio-group radio-group-inline'
  ]).value('radio-group'),
};

Soy.register(RadioGroup, templates);

export {RadioGroup};
export default RadioGroup;
