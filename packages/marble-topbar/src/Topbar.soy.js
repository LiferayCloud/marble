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
 * @hassoydeltemplate {Topbar.item.idom}
 * @hassoydelcall {Topbar.item.idom}
 * @public
 */

goog.module('Topbar.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
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
  var styleClasses__soy4 = opt_data.style ? 'topbar ' + opt_data.style : 'topbar';
  incrementalDom.elementOpenStart('nav');
      incrementalDom.attr('class', styleClasses__soy4);
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
    var href__soy17 = opt_data.logo && opt_data.logo.href ? opt_data.logo.href : '/';
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'topbar-logo-link');
        incrementalDom.attr('href', href__soy17);
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
  var $$temp;
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
        var item54List = opt_data.items;
        var item54ListLen = item54List.length;
        for (var item54Index = 0; item54Index < item54ListLen; item54Index++) {
            var item54Data = item54List[item54Index];
            var localVariant__soy45 = ($$temp = item54Data.variant) == null ? 'default' : $$temp;
            soy.$$getDelegateFn(soy.$$getDelTemplateId('Topbar.item.idom'), localVariant__soy45, false)({href: item54Data.href, label: item54Data.label, target: item54Data.target, type: item54Data.type, selected: item54Data.selected}, null, opt_ijData);
          }
      incrementalDom.elementClose('ul');
    incrementalDom.elementClose('nav');
  }
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'Topbar.menu';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s58_d4587e08(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var selectedClass__soy60 = opt_data.selected ? 'topbar-link-selected' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'topbar-item');
  incrementalDom.elementOpenEnd();
    if (opt_data.type == 'button') {
      incrementalDom.elementOpenStart('a');
          incrementalDom.attr('class', 'btn btn-accent');
          incrementalDom.attr('href', opt_data.href);
          incrementalDom.attr('target', opt_data.target);
      incrementalDom.elementOpenEnd();
        soyIdom.print(opt_data.label);
      incrementalDom.elementClose('a');
    } else {
      incrementalDom.elementOpenStart('a');
          incrementalDom.attr('class', 'topbar-link ' + selectedClass__soy60);
          incrementalDom.attr('href', opt_data.href);
          incrementalDom.attr('target', opt_data.target);
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('span');
          soyIdom.print(opt_data.label);
        incrementalDom.elementClose('span');
      incrementalDom.elementClose('a');
    }
  incrementalDom.elementClose('li');
}
exports.__deltemplate_s58_d4587e08 = __deltemplate_s58_d4587e08;
if (goog.DEBUG) {
  __deltemplate_s58_d4587e08.soyTemplateName = 'Topbar.__deltemplate_s58_d4587e08';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Topbar.item.idom'), 'default', 0, __deltemplate_s58_d4587e08);

exports.render.params = ["items","logo","style"];
exports.render.types = {"items":"any","logo":"any","style":"any"};
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
