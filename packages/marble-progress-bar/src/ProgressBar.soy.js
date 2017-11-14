/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ProgressBar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ProgressBar.
 * @public
 */

goog.module('ProgressBar.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  barClass: (?),
 *  elementClasses: (?),
 *  max: (?),
 *  min: (?),
 *  value: (?),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || goog.isFunction(opt_data.label) || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  var curMax__soy5 = opt_data.max ? opt_data.max : 100;
  var curMin__soy7 = opt_data.min ? opt_data.min : 0;
  var curValue__soy9 = opt_data.value ? opt_data.value : 0;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'progress ' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('role', 'progressbar');
      incrementalDom.attr('aria-valuemax', curMax__soy5);
      incrementalDom.attr('aria-valuemin', curMin__soy7);
      incrementalDom.attr('aria-valuenow', curValue__soy9);
      incrementalDom.attr('tabindex', '0');
  incrementalDom.elementOpenEnd();
    var percentage__soy19 = (Math.floor((curValue__soy9 - curMin__soy7) * 100 / (curMax__soy5 - curMin__soy7)));
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'progress-bar' + (opt_data.barClass ? ' ' + opt_data.barClass : ''));
        incrementalDom.attr('style', 'width: ' + percentage__soy19 + '%');
    incrementalDom.elementOpenEnd();
      soyIdom.print(label ? label : '');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  barClass: (?),
 *  elementClasses: (?),
 *  max: (?),
 *  min: (?),
 *  value: (?),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ProgressBar.render';
}

exports.render.params = ["label","barClass","elementClasses","max","min","value"];
exports.render.types = {"label":"html|string","barClass":"any","elementClasses":"any","max":"any","min":"any","value":"any"};
templates = exports;
return exports;

});

class ProgressBar extends Component {}
Soy.register(ProgressBar, templates);
export { ProgressBar, templates };
export default templates;
/* jshint ignore:end */
