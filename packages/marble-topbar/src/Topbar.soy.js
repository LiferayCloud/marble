/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Topbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Topbar.
 * @public
 */

goog.module('Topbar.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  theme: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  logo: (?),
 *  items: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var theme = soy.asserts.assertType(opt_data.theme == null || (goog.isString(opt_data.theme) || opt_data.theme instanceof goog.soy.data.SanitizedContent), 'theme', opt_data.theme, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var logo = opt_data.logo;
  /** @type {?} */
  var items = opt_data.items;
  incrementalDom.elementOpenStart('nav');
      incrementalDom.attr('class', theme);
  incrementalDom.elementOpenEnd();
    $logo(opt_data, null, opt_ijData);
    $menu(opt_data, null, opt_ijData);
  incrementalDom.elementClose('nav');
}
exports.render = $render;
/**
 * @typedef {{
 *  theme: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  logo: (?),
 *  items: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Topbar.render';
}


/**
 * @param {{
 *  logo: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $logo(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {?} */
  var logo = opt_data.logo;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'topbar-logo');
  incrementalDom.elementOpenEnd();
    var href__soy20 = logo && logo.href ? logo.href : '/';
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'topbar-logo-link');
        incrementalDom.attr('href', href__soy20);
    incrementalDom.elementOpenEnd();
      if (logo && logo.icon) {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'topbar-logo-icon ' + logo.icon);
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('span');
      }
      if (logo && logo.image) {
        incrementalDom.elementOpenStart('img');
            incrementalDom.attr('class', 'topbar-logo-image');
            incrementalDom.attr('src', logo.image);
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('img');
      }
      if (logo && logo.text) {
        incrementalDom.elementOpenStart('h3');
            incrementalDom.attr('class', 'topbar-logo-text');
        incrementalDom.elementOpenEnd();
          soyIdom.print(logo.text);
        incrementalDom.elementClose('h3');
      }
    incrementalDom.elementClose('a');
  incrementalDom.elementClose('div');
}
exports.logo = $logo;
/**
 * @typedef {{
 *  logo: (?)
 * }}
 */
$logo.Params;
if (goog.DEBUG) {
  $logo.soyTemplateName = 'Topbar.logo';
}


/**
 * @param {{
 *  items: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $menu(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {?} */
  var items = opt_data.items;
  if ((items.length)) {
    incrementalDom.elementOpenStart('nav');
        incrementalDom.attr('class', 'topbar-menu');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('button');
          incrementalDom.attr('class', 'topbar-toggle');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Menu');
      incrementalDom.elementClose('button');
      incrementalDom.elementOpenStart('ul');
          incrementalDom.attr('class', 'topbar-list');
      incrementalDom.elementOpenEnd();
        var item57List = items;
        var item57ListLen = item57List.length;
        for (var item57Index = 0; item57Index < item57ListLen; item57Index++) {
            var item57Data = item57List[item57Index];
            var selected__soy49 = item57Data.selected ? 'topbar-link-selected' : '';
            incrementalDom.elementOpenStart('li');
                incrementalDom.attr('class', 'topbar-item');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'topbar-link ' + selected__soy49);
                  incrementalDom.attr('href', item57Data.href);
              incrementalDom.elementOpenEnd();
                soyIdom.print(item57Data.label);
              incrementalDom.elementClose('a');
            incrementalDom.elementClose('li');
          }
      incrementalDom.elementClose('ul');
    incrementalDom.elementClose('nav');
  }
}
exports.menu = $menu;
/**
 * @typedef {{
 *  items: (?)
 * }}
 */
$menu.Params;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'Topbar.menu';
}

exports.render.params = ["theme","logo","items"];
exports.render.types = {"theme":"string","logo":"?","items":"?"};
exports.logo.params = ["logo"];
exports.logo.types = {"logo":"?"};
exports.menu.params = ["items"];
exports.menu.types = {"items":"?"};
templates = exports;
return exports;

});

class Topbar extends Component {}
Soy.register(Topbar, templates);
export { Topbar, templates };
export default templates;
/* jshint ignore:end */
