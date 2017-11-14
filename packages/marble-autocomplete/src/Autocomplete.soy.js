/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Autocomplete.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Autocomplete.
 * @public
 */

goog.module('Autocomplete.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('List.incrementaldom', 'render');


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
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'autocomplete autocomplete-list component ' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('data-onclick', 'handleClick_');
  incrementalDom.elementOpenEnd();
    $templateAlias1({events: {itemSelected: opt_data.onListItemSelected_}, id: opt_data.listId, ref: 'list'}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Autocomplete.render';
}

exports.render.params = ["listId","elementClasses","onListItemSelected_"];
exports.render.types = {"listId":"any","elementClasses":"any","onListItemSelected_":"any"};
templates = exports;
return exports;

});

class Autocomplete extends Component {}
Soy.register(Autocomplete, templates);
export { Autocomplete, templates };
export default templates;
/* jshint ignore:end */
