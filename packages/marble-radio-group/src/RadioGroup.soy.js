/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RadioGroup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RadioGroup.
 * @public
 */

goog.module('RadioGroup.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  items: !Array<?>,
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<?>} */
  var items = soy.asserts.assertType(goog.isArray(opt_data.items), 'items', opt_data.items, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var name = soy.asserts.assertType(opt_data.name == null || (goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var style = soy.asserts.assertType(opt_data.style == null || (goog.isString(opt_data.style) || opt_data.style instanceof goog.soy.data.SanitizedContent), 'style', opt_data.style, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', style);
  incrementalDom.elementOpenEnd();
    var item30List = items;
    var item30ListLen = item30List.length;
    for (var item30Index = 0; item30Index < item30ListLen; item30Index++) {
        var item30Data = item30List[item30Index];
        var checkedAttr__soy11 = function() {
          if (item30Data.checked) {
            incrementalDom.attr('checked', 'checked');
          }
        };
        incrementalDom.elementOpen('li');
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('id', item30Data.id);
              incrementalDom.attr('name', name);
              incrementalDom.attr('value', item30Data.value);
              incrementalDom.attr('type', 'radio');
              checkedAttr__soy11();
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
          incrementalDom.elementOpenStart('label');
              incrementalDom.attr('for', item30Data.id);
          incrementalDom.elementOpenEnd();
            soyIdom.print(item30Data.label);
          incrementalDom.elementClose('label');
        incrementalDom.elementClose('li');
      }
  incrementalDom.elementClose('ul');
}
exports.render = $render;
/**
 * @typedef {{
 *  items: !Array<?>,
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RadioGroup.render';
}

exports.render.params = ["items","name","style"];
exports.render.types = {"items":"list<?>","name":"string","style":"string"};
templates = exports;
return exports;

});

class RadioGroup extends Component {}
Soy.register(RadioGroup, templates);
export { RadioGroup, templates };
export default templates;
/* jshint ignore:end */
