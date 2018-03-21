/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Button.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Button.
 * @public
 */

goog.module('Button.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  block: (boolean|null|undefined),
 *  disabled: (boolean|null|undefined),
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  format: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  opt_data = opt_data || {};
  /** @type {boolean|null|undefined} */
  var block = soy.asserts.assertType(opt_data.block == null || (goog.isBoolean(opt_data.block) || opt_data.block === 1 || opt_data.block === 0), 'block', opt_data.block, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var disabled = soy.asserts.assertType(opt_data.disabled == null || (goog.isBoolean(opt_data.disabled) || opt_data.disabled === 1 || opt_data.disabled === 0), 'disabled', opt_data.disabled, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var format = soy.asserts.assertType(opt_data.format == null || (goog.isString(opt_data.format) || opt_data.format instanceof goog.soy.data.SanitizedContent), 'format', opt_data.format, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var href = soy.asserts.assertType(opt_data.href == null || (goog.isString(opt_data.href) || opt_data.href instanceof goog.soy.data.SanitizedContent), 'href', opt_data.href, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var icon = soy.asserts.assertType(opt_data.icon == null || (goog.isString(opt_data.icon) || opt_data.icon instanceof goog.soy.data.SanitizedContent), 'icon', opt_data.icon, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var iconAlignment = soy.asserts.assertType(opt_data.iconAlignment == null || (goog.isString(opt_data.iconAlignment) || opt_data.iconAlignment instanceof goog.soy.data.SanitizedContent), 'iconAlignment', opt_data.iconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || goog.isFunction(opt_data.label) || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var name = soy.asserts.assertType(opt_data.name == null || (goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var size = soy.asserts.assertType(opt_data.size == null || (goog.isString(opt_data.size) || opt_data.size instanceof goog.soy.data.SanitizedContent), 'size', opt_data.size, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var style = soy.asserts.assertType(opt_data.style == null || (goog.isString(opt_data.style) || opt_data.style instanceof goog.soy.data.SanitizedContent), 'style', opt_data.style, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy18 = function() {
    incrementalDom.attr('class', 'btn' + (block ? ' btn-block' : '') + (elementClasses ? ' ' + elementClasses : '') + (format ? ' btn-' + format : '') + (size ? ' btn-' + size : '') + (style ? ' btn-' + style : ' btn-default'));
    if (disabled) {
      incrementalDom.attr('disabled', 'disabled');
    }
    if (href) {
      incrementalDom.attr('href', href);
    }
    if (id) {
      incrementalDom.attr('id', id);
    }
    if (name) {
      incrementalDom.attr('name', name);
    }
    if (value) {
      incrementalDom.attr('value', value);
    }
    if (!href) {
      incrementalDom.attr('type', type);
    }
  };
      if (href) {
        incrementalDom.elementOpenStart('a');
        attributes__soy18();
    incrementalDom.elementOpenEnd();
      } else {
        incrementalDom.elementOpenStart('button');
          attributes__soy18();
      incrementalDom.elementOpenEnd();
      }
      $content({icon: icon, iconAlignment: ($$temp = iconAlignment) == null ? 'left' : $$temp, label: label}, null, opt_ijData);
  if (href) {
    incrementalDom.elementClose('a');
  } else {
    incrementalDom.elementClose('button');
  }
}
exports.render = $render;
/**
 * @typedef {{
 *  block: (boolean|null|undefined),
 *  disabled: (boolean|null|undefined),
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  format: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Button.render';
}


/**
 * @param {{
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $content(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var icon = soy.asserts.assertType(opt_data.icon == null || (goog.isString(opt_data.icon) || opt_data.icon instanceof goog.soy.data.SanitizedContent), 'icon', opt_data.icon, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var iconAlignment = soy.asserts.assertType(opt_data.iconAlignment == null || (goog.isString(opt_data.iconAlignment) || opt_data.iconAlignment instanceof goog.soy.data.SanitizedContent), 'iconAlignment', opt_data.iconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || goog.isFunction(opt_data.label) || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  if (!label) {
    if (icon) {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'icon ' + icon);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('span');
    }
  } else {
    if (icon && iconAlignment == 'left') {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'icon ' + icon + ' icon-' + iconAlignment);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('span');
    }
    soyIdom.print(($$temp = label) == null ? '' : $$temp);
    if (icon && iconAlignment == 'right') {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'icon ' + icon + ' icon-' + iconAlignment);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('span');
    }
  }
}
exports.content = $content;
/**
 * @typedef {{
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$content.Params;
if (goog.DEBUG) {
  $content.soyTemplateName = 'Button.content';
}

exports.render.params = ["block","disabled","elementClasses","format","href","icon","iconAlignment","id","label","name","size","style","type","value"];
exports.render.types = {"block":"bool","disabled":"bool","elementClasses":"string","format":"string","href":"string","icon":"string","iconAlignment":"string","id":"string","label":"html|string","name":"string","size":"string","style":"string","type":"string","value":"string"};
exports.content.params = ["icon","iconAlignment","label"];
exports.content.types = {"icon":"string","iconAlignment":"string","label":"html|string"};
templates = exports;
return exports;

});

class Button extends Component {}
Soy.register(Button, templates);
export { Button, templates };
export default templates;
/* jshint ignore:end */
