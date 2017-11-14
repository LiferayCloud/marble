/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Tooltip.
 * @public
 */

goog.module('Tooltip.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  alignedPosition: (?),
 *  elementClasses: (?),
 *  position: (?),
 *  title: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  description: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
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
  var title = soy.asserts.assertType(opt_data.title == null || goog.isFunction(opt_data.title) || (goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent), 'title', opt_data.title, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var description = soy.asserts.assertType(opt_data.description == null || goog.isFunction(opt_data.description) || (goog.isString(opt_data.description) || opt_data.description instanceof goog.soy.data.SanitizedContent), 'description', opt_data.description, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  var positionClasses__soy6 = ['top', 'top', 'right', 'bottom', 'bottom', 'bottom', 'left', 'top'];
  var currentPosition__soy8 = (opt_data.alignedPosition != null) ? opt_data.alignedPosition : opt_data.position;
  var positionClass__soy10 = (currentPosition__soy8 != null) ? positionClasses__soy6[currentPosition__soy8] : 'bottom';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'tooltip ' + positionClass__soy10 + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('role', 'tooltip');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('section');
        incrementalDom.attr('class', 'tooltip-inner');
    incrementalDom.elementOpenEnd();
      if (title) {
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'tooltip-title');
        incrementalDom.elementOpenEnd();
          soyIdom.print(title);
        incrementalDom.elementClose('div');
      }
      if (description) {
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'tooltip-description');
        incrementalDom.elementOpenEnd();
          soyIdom.print(description);
        incrementalDom.elementClose('div');
      }
    incrementalDom.elementClose('section');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  alignedPosition: (?),
 *  elementClasses: (?),
 *  position: (?),
 *  title: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  description: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Tooltip.render';
}

exports.render.params = ["title","description","alignedPosition","elementClasses","position"];
exports.render.types = {"title":"html|string","description":"html|string","alignedPosition":"any","elementClasses":"any","position":"any"};
templates = exports;
return exports;

});

class Tooltip extends Component {}
Soy.register(Tooltip, templates);
export { Tooltip, templates };
export default templates;
/* jshint ignore:end */
