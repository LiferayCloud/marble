/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Toast.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Toast.
 * @public
 */

goog.module('Toast.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  closeButton: (?),
 *  spinner: (?),
 *  spinnerDone: (?),
 *  elementClasses: (?),
 *  spinnerClasses: (?),
 *  body: (function()|null|undefined),
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {function()|null|undefined} */
  var body = soy.asserts.assertType(opt_data.body == null || goog.isFunction(opt_data.body), 'body', opt_data.body, 'function()|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var closeButtonHtml = soy.asserts.assertType(opt_data.closeButtonHtml == null || goog.isFunction(opt_data.closeButtonHtml) || (goog.isString(opt_data.closeButtonHtml) || opt_data.closeButtonHtml instanceof goog.soy.data.SanitizedContent), 'closeButtonHtml', opt_data.closeButtonHtml, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'alert' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('role', 'alert');
  incrementalDom.elementOpenEnd();
    if (opt_data.spinner) {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'spinner' + (opt_data.spinnerClasses ? ' ' + opt_data.spinnerClasses : '') + (opt_data.spinnerDone ? ' spinner-done' : ''));
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('span');
    }
    if (body) {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'alert-body');
      incrementalDom.elementOpenEnd();
        body();
      incrementalDom.elementClose('span');
    }
    if (opt_data.closeButton) {
      incrementalDom.elementOpenStart('button');
          incrementalDom.attr('type', 'button');
          incrementalDom.attr('class', 'close');
          incrementalDom.attr('aria-label', 'Close');
          incrementalDom.attr('data-onclick', 'toggle');
      incrementalDom.elementOpenEnd();
        if (closeButtonHtml) {
          soyIdom.print(closeButtonHtml);
        } else {
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('aria-hidden', 'true');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('\u00D7');
          incrementalDom.elementClose('span');
        }
      incrementalDom.elementClose('button');
    }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  closeButton: (?),
 *  spinner: (?),
 *  spinnerDone: (?),
 *  elementClasses: (?),
 *  spinnerClasses: (?),
 *  body: (function()|null|undefined),
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Toast.render';
}

exports.render.params = ["body","closeButtonHtml","closeButton","spinner","spinnerDone","elementClasses","spinnerClasses"];
exports.render.types = {"body":"html","closeButtonHtml":"html|string","closeButton":"any","spinner":"any","spinnerDone":"any","elementClasses":"any","spinnerClasses":"any"};
templates = exports;
return exports;

});

class Toast extends Component {}
Soy.register(Toast, templates);
export { Toast, templates };
export default templates;
/* jshint ignore:end */
