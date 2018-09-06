/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Input.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Input.
 * @public
 */

goog.module('Input.incrementaldom');

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
  opt_data = opt_data || {};
  if (opt_data.isTogglePassword) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'has-action-button');
    incrementalDom.elementOpenEnd();
      $input(soy.$$assignDefaults({type: opt_data.isShowing_ ? 'text' : 'password'}, opt_data), null, opt_ijData);
      $togglePassword(opt_data, null, opt_ijData);
    incrementalDom.elementClose('div');
  } else {
    $input(opt_data, null, opt_ijData);
  }
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Input.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $input(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  opt_data = opt_data || {};
  incrementalDom.elementOpenStart('input');
      incrementalDom.attr('type', ($$temp = opt_data.type) == null ? 'text' : $$temp);
      $fieldAttrs(opt_data, null, opt_ijData);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('input');
}
exports.input = $input;
if (goog.DEBUG) {
  $input.soyTemplateName = 'Input.input';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $fieldAttrs(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  opt_data = opt_data || {};
  incrementalDom.attr('autocomplete', ($$temp = opt_data.autocomplete) == null ? 'on' : $$temp);
  if ((opt_data.classes != null)) {
    incrementalDom.attr('class', opt_data.classes);
  }
  if ((opt_data.fieldIndex != null)) {
    incrementalDom.attr('data-field-index', opt_data.fieldIndex);
  }
  if ((opt_data.maxLength != null)) {
    incrementalDom.attr('maxlength', opt_data.maxLength);
  }
  if ((opt_data.name != null)) {
    incrementalDom.attr('name', opt_data.name);
  }
  if ((opt_data.onInput != null)) {
    incrementalDom.attr('data-oninput', opt_data.onInput);
  }
  if ((opt_data.placeholder != null)) {
    incrementalDom.attr('placeholder', opt_data.placeholder);
  }
  if ((opt_data.readonly != null) && opt_data.readonly) {
    incrementalDom.attr('readonly', '');
  }
  if ((opt_data.rowIndex != null)) {
    incrementalDom.attr('data-row-index', opt_data.rowIndex);
  }
  if ((opt_data.value != null)) {
    incrementalDom.attr('value', opt_data.value);
  }
  if ((opt_data.disabled != null)) {
    incrementalDom.attr('disabled', opt_data.disabled);
  }
}
exports.fieldAttrs = $fieldAttrs;
if (goog.DEBUG) {
  $fieldAttrs.soyTemplateName = 'Input.fieldAttrs';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $togglePassword(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('button');
      incrementalDom.attr('class', 'btn btn-sm btn-primary');
      incrementalDom.attr('type', 'button');
      incrementalDom.attr('data-onclick', 'toggle');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', opt_data.isShowing_ ? 'icon-12-eye-off' : 'icon-12-eye');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('span');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'btn-tooltip');
    incrementalDom.elementOpenEnd();
      soyIdom.print(opt_data.isShowing_ ? 'Hide' : 'Show');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('button');
}
exports.togglePassword = $togglePassword;
if (goog.DEBUG) {
  $togglePassword.soyTemplateName = 'Input.togglePassword';
}

exports.render.params = ["autocomplete","classes","disabled","fieldIndex","isShowing_","isTogglePassword","maxLength","name","onInput","readonly","rowIndex","type","value"];
exports.render.types = {"autocomplete":"any","classes":"any","disabled":"any","fieldIndex":"any","isShowing_":"any","isTogglePassword":"any","maxLength":"any","name":"any","onInput":"any","readonly":"any","rowIndex":"any","type":"any","value":"any"};
exports.input.params = ["type"];
exports.input.types = {"type":"any"};
exports.fieldAttrs.params = ["autocomplete","classes","disabled","fieldIndex","maxLength","name","onInput","placeholder","readonly","rowIndex","value"];
exports.fieldAttrs.types = {"autocomplete":"any","classes":"any","disabled":"any","fieldIndex":"any","maxLength":"any","name":"any","onInput":"any","placeholder":"any","readonly":"any","rowIndex":"any","value":"any"};
exports.togglePassword.params = ["isShowing_"];
exports.togglePassword.types = {"isShowing_":"any"};
templates = exports;
return exports;

});

class Input extends Component {}
Soy.register(Input, templates);
export { Input, templates };
export default templates;
/* jshint ignore:end */
