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
 *  logo: (null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)})
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
  var theme = soy.asserts.assertType(opt_data.theme == null || (goog.isString(opt_data.theme) || opt_data.theme instanceof goog.soy.data.SanitizedContent), 'theme', opt_data.theme, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)}} */
  var logo = soy.asserts.assertType(opt_data.logo == null || goog.isObject(opt_data.logo), 'logo', opt_data.logo, 'null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)}');
  incrementalDom.elementOpenStart('nav');
      incrementalDom.attr('class', theme);
  incrementalDom.elementOpenEnd();
    $logo(opt_data, null, opt_ijData);
    $menu(null, null, opt_ijData);
  incrementalDom.elementClose('nav');
}
exports.render = $render;
/**
 * @typedef {{
 *  theme: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  logo: (null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)})
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Topbar.render';
}


/**
 * @param {{
 *  logo: (null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)})
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $logo(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)}} */
  var logo = soy.asserts.assertType(opt_data.logo == null || goog.isObject(opt_data.logo), 'logo', opt_data.logo, 'null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)}');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'topbar-logo');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'topbar-logo-link');
        incrementalDom.attr('href', '#');
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
 *  logo: (null|undefined|{icon: (!goog.soy.data.SanitizedContent|string), image: (!goog.soy.data.SanitizedContent|string), text: (!goog.soy.data.SanitizedContent|string)})
 * }}
 */
$logo.Params;
if (goog.DEBUG) {
  $logo.soyTemplateName = 'Topbar.logo';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $menu(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
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
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'topbar-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('class', 'topbar-link topbar-link-selected');
            incrementalDom.attr('href', '#');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Apps');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'topbar-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('class', 'topbar-link');
            incrementalDom.attr('href', '#');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Documentation');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'topbar-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('class', 'topbar-link');
            incrementalDom.attr('href', '#');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Docs');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'topbar-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('class', 'topbar-link');
            incrementalDom.attr('href', '#');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Faq');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'topbar-item topbar-avatar');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('button');
            incrementalDom.attr('class', 'topbar-link btn-transparent');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('object');
              incrementalDom.attr('class', 'avatar-round avatar-small');
              incrementalDom.attr('data', 'http://www.gravatar.com/avatar/f159cc42cdb1ea7b0f757474cace8c15?d=blank&s=120');
              incrementalDom.attr('type', 'image/jpeg');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('class', 'avatar-initials avatar-small');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Z');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('object');
        incrementalDom.elementClose('button');
      incrementalDom.elementClose('li');
    incrementalDom.elementClose('ul');
  incrementalDom.elementClose('nav');
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'Topbar.menu';
}

exports.render.params = ["theme","logo"];
exports.render.types = {"theme":"string","logo":"[\n    icon: string,\n    image: string,\n    text: string\n  ]"};
exports.logo.params = ["logo"];
exports.logo.types = {"logo":"[\n    icon: string,\n    image: string,\n    text: string\n  ]"};
exports.menu.params = [];
exports.menu.types = {};
templates = exports;
return exports;

});

class Topbar extends Component {}
Soy.register(Topbar, templates);
export { Topbar, templates };
export default templates;
/* jshint ignore:end */
