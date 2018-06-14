/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Checkbox.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Checkbox.
 * @public
 */

goog.module('Checkbox.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  checked: (boolean|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var checked = soy.asserts.assertType(opt_data.checked == null || (goog.isBoolean(opt_data.checked) || opt_data.checked === 1 || opt_data.checked === 0), 'checked', opt_data.checked, 'boolean|null|undefined');
  var checkedAttr__soy8 = function() {
    if (checked) {
      incrementalDom.attr('checked', 'checked');
    }
  };
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'checkbox');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('input');
        incrementalDom.attr('id', id);
        incrementalDom.attr('name', id);
        incrementalDom.attr('value', value);
        incrementalDom.attr('type', 'checkbox');
        incrementalDom.attr('data-onchange', 'handleCheck');
        checkedAttr__soy8();
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('input');
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
    incrementalDom.elementClose('label');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  checked: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Checkbox.render';
}

exports.render.params = ["id","value","label","checked"];
exports.render.types = {"id":"string","value":"string","label":"string","checked":"bool"};
templates = exports;
return exports;

});

class Checkbox extends Component {}
Soy.register(Checkbox, templates);
export { Checkbox, templates };
export default templates;
/* jshint ignore:end */
