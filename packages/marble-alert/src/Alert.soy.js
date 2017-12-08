/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Alert.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Alert.
 * @public
 */

goog.module('Alert.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  dismissible: (?),
 *  elementClasses: (?),
 *  body: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
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
  var body = soy.asserts.assertType(opt_data.body == null || goog.isFunction(opt_data.body) || (goog.isString(opt_data.body) || opt_data.body instanceof goog.soy.data.SanitizedContent), 'body', opt_data.body, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var closeButtonHtml = soy.asserts.assertType(opt_data.closeButtonHtml == null || goog.isFunction(opt_data.closeButtonHtml) || (goog.isString(opt_data.closeButtonHtml) || opt_data.closeButtonHtml instanceof goog.soy.data.SanitizedContent), 'closeButtonHtml', opt_data.closeButtonHtml, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'alert' + (opt_data.dismissible ? ' alert-dismissible' : '') + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('role', 'alert');
  incrementalDom.elementOpenEnd();
    if (body) {
      soyIdom.print(body);
    }
    if (opt_data.dismissible) {
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
 *  dismissible: (?),
 *  elementClasses: (?),
 *  body: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Alert.render';
}

exports.render.params = ["body","closeButtonHtml","dismissible","elementClasses"];
exports.render.types = {"body":"html|string","closeButtonHtml":"html|string","dismissible":"any","elementClasses":"any"};
templates = exports;
return exports;

});

class Alert extends Component {}
Soy.register(Alert, templates);
export { Alert, templates };
export default templates;
/* jshint ignore:end */
