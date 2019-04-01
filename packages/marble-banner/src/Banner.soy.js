/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Banner.
 * @public
 */

goog.module('Banner.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  elementClasses: (?),
 *  closeButton: (?),
 *  closeButtonHtml: (?),
 *  body: (function()|null|undefined)
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
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'banner ' + opt_data.elementClasses);
  incrementalDom.elementOpenEnd();
    soyIdom.print(body);
  incrementalDom.elementClose('div');
  if (opt_data.closeButton || opt_data.closeButtonHtml) {
    incrementalDom.elementOpenStart('button');
        incrementalDom.attr('type', 'button');
        incrementalDom.attr('class', 'close');
        incrementalDom.attr('aria-label', 'Close');
        incrementalDom.attr('data-onclick', 'toggle');
    incrementalDom.elementOpenEnd();
      if (opt_data.closeButtonHtml) {
        soyIdom.print(opt_data.closeButtonHtml);
      } else {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('aria-hidden', 'true');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('\u00D7');
        incrementalDom.elementClose('span');
      }
    incrementalDom.elementClose('button');
  }
}
exports.render = $render;
/**
 * @typedef {{
 *  elementClasses: (?),
 *  closeButton: (?),
 *  closeButtonHtml: (?),
 *  body: (function()|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Banner.render';
}

exports.render.params = ["body","elementClasses","closeButton","closeButtonHtml"];
exports.render.types = {"body":"html","elementClasses":"any","closeButton":"any","closeButtonHtml":"any"};
templates = exports;
return exports;

});

class Banner extends Component {}
Soy.register(Banner, templates);
export { Banner, templates };
export default templates;
/* jshint ignore:end */
