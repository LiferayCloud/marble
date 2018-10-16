import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './Button.soy.js';

/**
 * Button component.
 */
class Button extends Component {}

/**
 * @static
 * @type {!Object}
 */
Button.STATE = {
  /**
   * @default false
   * @type {?boolean}
   */
  block: Config.bool().value(false),

  /**
   * @default false
   * @type {?boolean}
   */
  disabled: Config.bool().value(false),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  elementAttributes: Config.string(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  elementClasses: Config.string(),

  /**
   * @default undefined
   * @type {?string}
   */
  format: Config.oneOf(['squared', 'rounded']),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  href: Config.string(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  icon: Config.string(),

  /**
   * @default left
   * @type {?string}
   */
  iconAlignment: Config.oneOf(['left', 'right']).value('left'),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  id: Config.string(),

  /**
   * @default undefined
   * @type {?(html|string|undefined)}
   */
  label: Config.any(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  name: Config.string(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  rel: Config.string(),

  /**
   * Button size.
   * @default md
   * @type {?(string|undefined)}
   */
  size: Config.oneOf(['xs', 'sm', 'md', 'lg']).value('md'),

  /**
   * @default default
   * @type {?(string|undefined)}
   */
  style: Config.oneOf(['accent', 'default', 'link', 'primary', 'success', 'danger', 'warning']).value(
    'default'
  ),

  /**
   * @default undefined
   * @type {?string}
   */
  target: Config.oneOf(['_blank', '_self', '_parent', '_top']),

  /**
   * @default button
   * @type {?string}
   */
  type: Config.oneOf(['button', 'reset', 'submit']).value('button'),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  value: Config.string(),
};

Soy.register(Button, templates);

export {Button};
export default Button;
