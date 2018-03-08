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

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('Spinner.incrementaldom', 'render');


/**
 * @param {{
 *  body: (function()|null|undefined),
 *  closeButton: (?),
 *  closeButtonHtml: (function()|null|undefined),
 *  elementClasses: (?),
 *  spinner: (?),
 *  spinnerClasses: (?),
 *  spinnerDone: (?)
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
  /** @type {function()|null|undefined} */
  var body = soy.asserts.assertType(opt_data.body == null || goog.isFunction(opt_data.body), 'body', opt_data.body, 'function()|null|undefined');
  /** @type {?} */
  var closeButton = opt_data.closeButton;
  /** @type {function()|null|undefined} */
  var closeButtonHtml = soy.asserts.assertType(opt_data.closeButtonHtml == null || goog.isFunction(opt_data.closeButtonHtml), 'closeButtonHtml', opt_data.closeButtonHtml, 'function()|null|undefined');
  /** @type {?} */
  var elementClasses = opt_data.elementClasses;
  /** @type {?} */
  var spinner = opt_data.spinner;
  /** @type {?} */
  var spinnerClasses = opt_data.spinnerClasses;
  /** @type {?} */
  var spinnerDone = opt_data.spinnerDone;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'alert' + (elementClasses ? ' ' + elementClasses : ''));
      incrementalDom.attr('role', 'alert');
  incrementalDom.elementOpenEnd();
    if (spinner && spinnerDone) {
      var spinnerStyle__soy17 = '';
      var $tmp = null;
if ((('' + spinnerClasses).indexOf('danger') != -1)) {
  $tmp = 'danger';
} else if ((('' + spinnerClasses).indexOf('warning') != -1)) {
  $tmp = 'warning';
} else {
  $tmp = 'success';
}
spinnerStyle__soy17 += $tmp;
      $templateAlias1({isDone: spinnerDone ? true : false, style: ($$temp = spinnerStyle__soy17) == null ? 'success' : $$temp, size: 'small'}, null, opt_ijData);
    }
    if (body) {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'alert-body');
      incrementalDom.elementOpenEnd();
        body();
      incrementalDom.elementClose('span');
    }
    if (closeButton || closeButtonHtml) {
      incrementalDom.elementOpenStart('button');
          incrementalDom.attr('type', 'button');
          incrementalDom.attr('class', 'close');
          incrementalDom.attr('aria-label', 'Close');
          incrementalDom.attr('data-onclick', 'toggle');
      incrementalDom.elementOpenEnd();
        if (closeButtonHtml) {
          closeButtonHtml();
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
 *  body: (function()|null|undefined),
 *  closeButton: (?),
 *  closeButtonHtml: (function()|null|undefined),
 *  elementClasses: (?),
 *  spinner: (?),
 *  spinnerClasses: (?),
 *  spinnerDone: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Toast.render';
}

exports.render.params = ["body","closeButton","closeButtonHtml","elementClasses","spinner","spinnerClasses","spinnerDone"];
exports.render.types = {"body":"html","closeButton":"?","closeButtonHtml":"html","elementClasses":"?","spinner":"?","spinnerClasses":"?","spinnerDone":"?"};
templates = exports;
return exports;

});

class Toast extends Component {}
Soy.register(Toast, templates);
export { Toast, templates };
export default templates;
/* jshint ignore:end */
