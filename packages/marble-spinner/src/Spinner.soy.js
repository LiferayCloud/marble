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

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  isDone: (?),
 *  size: (?),
 *  style: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {?} */
  var isDone = opt_data.isDone;
  /** @type {?} */
  var size = opt_data.size;
  /** @type {?} */
  var style = opt_data.style;
  var spinnerClasses__soy7 = '';
  spinnerClasses__soy7 += isDone ? ' spinner-done' : '';
  spinnerClasses__soy7 += size ? ' spinner-' + size : '';
  spinnerClasses__soy7 += style ? ' spinner-' + style : '';
  var icon__soy24 = '';
  var $tmp = null;
if (style == 'danger') {
  $tmp = 'icon-12-close-short';
} else if (style == 'warning') {
  $tmp = 'icon-12-exclamation';
} else {
  $tmp = 'icon-12-check';
}
icon__soy24 += $tmp;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'spinner' + spinnerClasses__soy7);
  incrementalDom.elementOpenEnd();
    if (isDone) {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', icon__soy24);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('span');
    }
  incrementalDom.elementClose('span');
}
exports.render = $render;
/**
 * @typedef {{
 *  isDone: (?),
 *  size: (?),
 *  style: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Spinner.render';
}

exports.render.params = ["isDone","size","style"];
exports.render.types = {"isDone":"?","size":"?","style":"?"};
templates = exports;
return exports;

});

class Spinner extends Component {}
Soy.register(Spinner, templates);
export { Spinner, templates };
export default templates;
/* jshint ignore:end */
