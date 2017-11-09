/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from MarbleTooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MarbleTooltip.
 * @public
 */

goog.module('MarbleTooltip.incrementaldom');

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
 *    alignedPosition: (?),
 *    elementClasses: (?),
 *    position: (?),
 *    title: (?soydata.SanitizedHtml|string|undefined),
 *    description: (?soydata.SanitizedHtml|string|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  soy.asserts.assertType(opt_data.title == null || (opt_data.title instanceof Function) || (opt_data.title instanceof goog.soy.data.SanitizedContent) || (opt_data.title instanceof soydata.UnsanitizedText) || goog.isString(opt_data.title), 'title', opt_data.title, '?soydata.SanitizedHtml|string|undefined');
  var title = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.title);
  soy.asserts.assertType(opt_data.description == null || (opt_data.description instanceof Function) || (opt_data.description instanceof goog.soy.data.SanitizedContent) || (opt_data.description instanceof soydata.UnsanitizedText) || goog.isString(opt_data.description), 'description', opt_data.description, '?soydata.SanitizedHtml|string|undefined');
  var description = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.description);
  var positionClasses__soy3 = ['top', 'top', 'right', 'bottom', 'bottom', 'bottom', 'left', 'top'];
  var currentPosition__soy4 = opt_data.alignedPosition != null ? opt_data.alignedPosition : opt_data.position;
  var positionClass__soy5 = currentPosition__soy4 != null ? positionClasses__soy3[currentPosition__soy4] : 'bottom';
  ie_open('div', null, null,
      'class', 'tooltip ' + positionClass__soy5 + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''),
      'role', 'tooltip');
    ie_open('section', null, null,
        'class', 'tooltip-inner');
      if (title) {
        ie_open('div', null, null,
            'class', 'tooltip-title');
          var dyn0 = title;
          if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
        ie_close('div');
      }
      if (description) {
        ie_open('div', null, null,
            'class', 'tooltip-description');
          var dyn1 = description;
          if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
        ie_close('div');
      }
    ie_close('section');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'MarbleTooltip.render';
}

exports.render.params = ["title","description","alignedPosition","elementClasses","position"];
exports.render.types = {"title":"html|string","description":"html|string","alignedPosition":"any","elementClasses":"any","position":"any"};
templates = exports;
return exports;

});

class MarbleTooltip extends Component {}
Soy.register(MarbleTooltip, templates);
export { MarbleTooltip, templates };
export default templates;
/* jshint ignore:end */
