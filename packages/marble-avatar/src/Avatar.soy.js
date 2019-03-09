/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Avatar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Avatar.
 * @public
 */

goog.module('Avatar.incrementaldom');

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
  var classDefault__soy4 = opt_data.elementClasses ? ' ' + opt_data.elementClasses : ' avatar-xsmall';
  var colorIndex__soy6 = opt_data.avatarColorIndex ? opt_data.avatarColorIndex : 0;
  var initialsClassDefault__soy8 = opt_data.initialsClasses ? ' ' + opt_data.initialsClasses : ' avatar-xsmall';
  var tooltipDefault__soy10 = opt_data.tooltipClass ? ' ' + opt_data.tooltipClass : '';
  var tooltipMessage__soy12 = '';
  tooltipMessage__soy12 += opt_data.dataTitle || opt_data.name || opt_data.email;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'avatar avatar-round' + classDefault__soy4 + tooltipDefault__soy10);
      incrementalDom.attr('data-title', tooltipMessage__soy12);
      if (opt_data.dataTitlePreventEscape) {
        incrementalDom.attr('data-escape-title', 'false');
      }
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'sa-target');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
    $icon(opt_data, null, opt_ijData);
  incrementalDom.elementClose('span');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Avatar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $icon(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  var actualIconClasses__soy30 = ($$temp = opt_data.iconClasses) == null ? 'sign-badge sign-badge-relative' : $$temp;
  if (opt_data.statusIcon) {
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', 'avatar-sign');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('svg', opt_data.statusIcon + '-iconkey');
          incrementalDom.attr('key', opt_data.statusIcon + '-iconkey');
          incrementalDom.attr('class', actualIconClasses__soy30);
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('use');
            incrementalDom.attr('xlink:href', '/static/images/sprite.svg#' + opt_data.statusIcon);
            incrementalDom.attr('href', '/static/images/sprite.svg#' + opt_data.statusIcon);
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('use');
      incrementalDom.elementClose('svg');
    incrementalDom.elementClose('span');
  }
}
exports.icon = $icon;
if (goog.DEBUG) {
  $icon.soyTemplateName = 'Avatar.icon';
}

exports.render.params = ["elementClasses","email","name","dataTitle","dataTitlePreventEscape","initialsClasses","tooltipClass","avatarColorIndex","statusIcon","iconClasses"];
exports.render.types = {"elementClasses":"any","email":"any","name":"any","dataTitle":"any","dataTitlePreventEscape":"any","initialsClasses":"any","tooltipClass":"any","avatarColorIndex":"any","statusIcon":"any","iconClasses":"any"};
exports.icon.params = ["iconClasses","statusIcon"];
exports.icon.types = {"iconClasses":"any","statusIcon":"any"};
templates = exports;
return exports;

});

class Avatar extends Component {}
Soy.register(Avatar, templates);
export { Avatar, templates };
export default templates;
/* jshint ignore:end */
