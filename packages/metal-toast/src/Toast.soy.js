/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Toast.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Toast.
 * @public
 */

goog.module('Toast.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('soy.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {{
 *    closeButton: (?),
 *    spinner: (?),
 *    spinnerDone: (?),
 *    elementClasses: (?),
 *    spinnerClasses: (?),
 *    body: (?soydata.SanitizedHtml|string|undefined),
 *    closeButtonHtml: (?soydata.SanitizedHtml|string|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  soy.asserts.assertType(opt_data.body == null || (opt_data.body instanceof Function) || (opt_data.body instanceof soydata.UnsanitizedText) || goog.isString(opt_data.body), 'body', opt_data.body, '?soydata.SanitizedHtml|string|undefined');
  var body = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.body);
  soy.asserts.assertType(opt_data.closeButtonHtml == null || (opt_data.closeButtonHtml instanceof Function) || (opt_data.closeButtonHtml instanceof goog.soy.data.SanitizedContent) || (opt_data.closeButtonHtml instanceof soydata.UnsanitizedText) || goog.isString(opt_data.closeButtonHtml), 'closeButtonHtml', opt_data.closeButtonHtml, '?soydata.SanitizedHtml|string|undefined');
  var closeButtonHtml = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.closeButtonHtml);
  ie_open('div', null, null,
      'class', 'alert' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''),
      'role', 'alert');
    if (opt_data.spinner) {
      ie_void('span', null, null,
          'class', 'spinner' + (opt_data.spinnerClasses ? ' ' + opt_data.spinnerClasses : '') + (opt_data.spinnerDone ? ' spinner-done' : ''));
    }
    if (body) {
      ie_open('span', null, null,
          'class', 'alert-body');
        body();
      ie_close('span');
    }
    if (opt_data.closeButton) {
      ie_open('button', null, null,
          'type', 'button',
          'class', 'close',
          'aria-label', 'Close',
          'data-onclick', 'toggle');
        if (closeButtonHtml) {
          var dyn0 = closeButtonHtml;
          if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
        } else {
          ie_open('span', null, null,
              'aria-hidden', 'true');
            itext('\u00D7');
          ie_close('span');
        }
      ie_close('button');
    }
  ie_close('div');
}
exports.render = $render;
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
