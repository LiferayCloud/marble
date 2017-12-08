/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Slider.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Slider.
 * @public
 */

goog.module('Slider.incrementaldom');

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
  var $$temp;
  opt_data = opt_data || {};
  var maxNumber__soy4 = ($$temp = opt_data.max) == null ? 100 : $$temp;
  var minNumber__soy6 = ($$temp = opt_data.min) == null ? 0 : $$temp;
  var valueNumber__soy8 = ($$temp = opt_data.value) == null ? 0 : $$temp;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'slider ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp));
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('input');
        incrementalDom.attr('name', ($$temp = opt_data.inputName) == null ? '' : $$temp);
        incrementalDom.attr('type', 'hidden');
        incrementalDom.attr('value', valueNumber__soy8);
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('input');
    incrementalDom.elementOpen('span');
      soyIdom.print(valueNumber__soy8);
    incrementalDom.elementClose('span');
    var percentage__soy18 = 100 * (valueNumber__soy8 - minNumber__soy6) / (maxNumber__soy4 - minNumber__soy6) + '%';
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'rail');
        incrementalDom.attr('data-onclick', 'onRailClick_');
        incrementalDom.attr('ref', 'rail');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'rail-active');
          incrementalDom.attr('style', 'width: ' + percentage__soy18);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'rail-handle');
          incrementalDom.attr('style', 'left: ' + percentage__soy18);
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'handle');
            incrementalDom.attr('ref', 'handle');
            incrementalDom.attr('tabindex', '0');
            incrementalDom.attr('role', 'slider');
            incrementalDom.attr('aria-valuemin', minNumber__soy6);
            incrementalDom.attr('aria-valuemax', maxNumber__soy4);
            incrementalDom.attr('aria-valuenow', valueNumber__soy8);
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Slider.render';
}

exports.render.params = ["elementClasses","inputName","max","min","value"];
exports.render.types = {"elementClasses":"any","inputName":"any","max":"any","min":"any","value":"any"};
templates = exports;
return exports;

});

class Slider extends Component {}
Soy.register(Slider, templates);
export { Slider, templates };
export default templates;
/* jshint ignore:end */
