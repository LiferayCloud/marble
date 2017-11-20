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

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('nav');
      incrementalDom.attr('class', opt_data.theme);
  incrementalDom.elementOpenEnd();
    $logo(opt_data, null, opt_ijData);
    $menu(opt_data, null, opt_ijData);
  incrementalDom.elementClose('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Topbar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $logo(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'topbar-logo');
  incrementalDom.elementOpenEnd();
    var href__soy16 = opt_data.logo && opt_data.logo.href ? opt_data.logo.href : '/';
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'topbar-logo-link');
        incrementalDom.attr('href', href__soy16);
    incrementalDom.elementOpenEnd();
      if (opt_data.logo && opt_data.logo.icon) {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'topbar-logo-icon ' + opt_data.logo.icon);
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('span');
      }
      if (opt_data.logo && opt_data.logo.image) {
        incrementalDom.elementOpenStart('img');
            incrementalDom.attr('class', 'topbar-logo-image');
            incrementalDom.attr('src', opt_data.logo.image);
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('img');
      }
      if (opt_data.logo && opt_data.logo.text) {
        incrementalDom.elementOpenStart('h3');
            incrementalDom.attr('class', 'topbar-logo-text');
        incrementalDom.elementOpenEnd();
          soyIdom.print(opt_data.logo.text);
        incrementalDom.elementClose('h3');
      }
    incrementalDom.elementClose('a');
  incrementalDom.elementClose('div');
}
exports.logo = $logo;
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
  if ((opt_data.items.length)) {
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
        var item52List = opt_data.items;
        var item52ListLen = item52List.length;
        for (var item52Index = 0; item52Index < item52ListLen; item52Index++) {
            var item52Data = item52List[item52Index];
            var selected__soy44 = item52Data.selected ? 'topbar-link-selected' : '';
            incrementalDom.elementOpenStart('li');
                incrementalDom.attr('class', 'topbar-item');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'topbar-link ' + selected__soy44);
                  incrementalDom.attr('href', item52Data.href);
              incrementalDom.elementOpenEnd();
                soyIdom.print(item52Data.label);
              incrementalDom.elementClose('a');
            incrementalDom.elementClose('li');
          }
      incrementalDom.elementClose('ul');
    incrementalDom.elementClose('nav');
  }
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'Topbar.menu';
}

exports.render.params = ["theme","logo","items"];
exports.render.types = {"theme":"any","logo":"any","items":"any"};
exports.logo.params = ["logo"];
exports.logo.types = {"logo":"any"};
exports.menu.params = ["items"];
exports.menu.types = {"items":"any"};
templates = exports;
return exports;

});

class Topbar extends Component {}
Soy.register(Topbar, templates);
export { Topbar, templates };
export default templates;
/* jshint ignore:end */
