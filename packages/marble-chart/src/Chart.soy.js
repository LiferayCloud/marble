/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Chart.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Chart.
 * @public
 */

goog.module('Chart.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined)
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
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.text('Hello World');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Chart.render';
}

exports.render.params = ["id"];
exports.render.types = {"id":"string"};
templates = exports;
return exports;

});

class Chart extends Component {}
Soy.register(Chart, templates);
export { Chart, templates };
export default templates;
/* jshint ignore:end */
