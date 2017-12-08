/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Spinner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Spinner.
 * @public
 */

goog.module('Spinner.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  isDone: (boolean|null|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {boolean|null|undefined} */
  var isDone = soy.asserts.assertType(opt_data.isDone == null || (goog.isBoolean(opt_data.isDone) || opt_data.isDone === 1 || opt_data.isDone === 0), 'isDone', opt_data.isDone, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var size = soy.asserts.assertType(opt_data.size == null || (goog.isString(opt_data.size) || opt_data.size instanceof goog.soy.data.SanitizedContent), 'size', opt_data.size, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var style = soy.asserts.assertType(opt_data.style == null || (goog.isString(opt_data.style) || opt_data.style instanceof goog.soy.data.SanitizedContent), 'style', opt_data.style, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var doneClass__soy7 = '';
  doneClass__soy7 += isDone ? 'spinner-done' : '';
  var sizeClass__soy14 = '';
  sizeClass__soy14 += size ? 'spinner-' + size : '';
  var styleClass__soy22 = '';
  styleClass__soy22 += style ? 'spinner-' + style : '';
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'spinner ' + doneClass__soy7 + ' ' + sizeClass__soy14 + ' ' + styleClass__soy22);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('span');
}
exports.render = $render;
/**
 * @typedef {{
 *  isDone: (boolean|null|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Spinner.render';
}

exports.render.params = ["isDone","size","style"];
exports.render.types = {"isDone":"bool","size":"string","style":"string"};
templates = exports;
return exports;

});

class Spinner extends Component {}
Soy.register(Spinner, templates);
export { Spinner, templates };
export default templates;
/* jshint ignore:end */
