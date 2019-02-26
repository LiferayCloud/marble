/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Timestamp.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Timestamp.
 * @public
 */

goog.module('Timestamp.incrementaldom');

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
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', opt_data.elementClasses);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', opt_data.childElementClasses);
        incrementalDom.attr('data-time', opt_data.time);
        if (opt_data.hasTitle) {
          incrementalDom.attr('data-title', opt_data.title);
        }
    incrementalDom.elementOpenEnd();
      soyIdom.print(opt_data.label);
    incrementalDom.elementClose('span');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Timestamp.render';
}

exports.render.params = ["time","childElementClasses","elementClasses","label","hasTitle","title"];
exports.render.types = {"time":"any","childElementClasses":"any","elementClasses":"any","label":"any","hasTitle":"any","title":"any"};
templates = exports;
return exports;

});

class Timestamp extends Component {}
Soy.register(Timestamp, templates);
export { Timestamp, templates };
export default templates;
/* jshint ignore:end */
