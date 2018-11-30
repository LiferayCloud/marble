/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Select.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Select.
 * @public
 */

goog.module('Select.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('Dropdown.incrementaldom', 'render');


/**
 * @param {{
 *  arrowClass: (?),
 *  disabled: (?),
 *  buttonClass: (?),
 *  elementClasses: (?),
 *  expanded_: (?),
 *  handleDropdownStateSynced_: (?),
 *  handleItemClick_: (?),
 *  handleItemKeyDown_: (?),
 *  hiddenInputName: (?),
 *  items: (?),
 *  values: (?),
 *  selectedIndex: (?),
 *  caret: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var caret = soy.asserts.assertType(opt_data.caret == null || goog.isFunction(opt_data.caret) || (goog.isString(opt_data.caret) || opt_data.caret instanceof goog.soy.data.SanitizedContent), 'caret', opt_data.caret, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || goog.isFunction(opt_data.label) || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'select' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      incrementalDom.attr('data-onkeydown', 'handleKeyDown_');
  incrementalDom.elementOpenEnd();
    var currSelectedIndex__soy9 = (opt_data.selectedIndex != null) ? opt_data.selectedIndex : label || (opt_data.items.length) == 0 ? -1 : 0;
    incrementalDom.elementOpenStart('input');
        incrementalDom.attr('disabled', opt_data.disabled);
        incrementalDom.attr('type', 'hidden');
        incrementalDom.attr('name', opt_data.hiddenInputName ? opt_data.hiddenInputName : '');
        incrementalDom.attr('value', currSelectedIndex__soy9 == -1 ? '' : opt_data.values ? opt_data.values[currSelectedIndex__soy9] : '');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('input');
    var param18 = function() {
      var item29List = opt_data.items;
      var item29ListLen = item29List.length;
      for (var item29Index = 0; item29Index < item29ListLen; item29Index++) {
          var item29Data = item29List[item29Index];
          incrementalDom.elementOpenStart('li');
              incrementalDom.attr('class', 'select-option' + (currSelectedIndex__soy9 == item29Index ? ' selected' : ''));
              incrementalDom.attr('data-onclick', ($$temp = opt_data.handleItemClick_) == null ? '' : $$temp);
              incrementalDom.attr('data-onkeydown', ($$temp = opt_data.handleItemKeyDown_) == null ? '' : $$temp);
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('a');
                incrementalDom.attr('href', 'javascript:;');
            incrementalDom.elementOpenEnd();
              soyIdom.print(item29Data);
            incrementalDom.elementClose('a');
          incrementalDom.elementClose('li');
        }
    };
    var param34 = function() {
      incrementalDom.elementOpenStart('button');
          incrementalDom.attr('class', (($$temp = opt_data.buttonClass) == null ? 'btn btn-default' : $$temp) + ' dropdown-select');
          incrementalDom.attr('disabled', opt_data.disabled);
          incrementalDom.attr('type', 'button');
          incrementalDom.attr('data-onclick', 'toggle');
          incrementalDom.attr('aria-haspopup', 'true');
          incrementalDom.attr('aria-expanded', opt_data.expanded_ ? 'true' : 'false');
      incrementalDom.elementOpenEnd();
        if (currSelectedIndex__soy9 == -1) {
          soyIdom.print(label);
        } else {
          soyIdom.print(opt_data.items[currSelectedIndex__soy9]);
        }
        if (caret) {
          incrementalDom.text(' ');
          soyIdom.print(caret);
        } else {
          incrementalDom.text(' ');
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', ($$temp = opt_data.arrowClass) == null ? 'caret' : $$temp);
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('span');
        }
      incrementalDom.elementClose('button');
    };
    $templateAlias1({body: param18, events: {stateSynced: opt_data.handleDropdownStateSynced_}, expanded: opt_data.disabled ? false : opt_data.expanded_, header: param34, ref: 'dropdown'}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  arrowClass: (?),
 *  disabled: (?),
 *  buttonClass: (?),
 *  elementClasses: (?),
 *  expanded_: (?),
 *  handleDropdownStateSynced_: (?),
 *  handleItemClick_: (?),
 *  handleItemKeyDown_: (?),
 *  hiddenInputName: (?),
 *  items: (?),
 *  values: (?),
 *  selectedIndex: (?),
 *  caret: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Select.render';
}

exports.render.params = ["caret","label","arrowClass","disabled","buttonClass","elementClasses","expanded_","handleDropdownStateSynced_","handleItemClick_","handleItemKeyDown_","hiddenInputName","items","values","selectedIndex"];
exports.render.types = {"caret":"html|string","label":"html|string","arrowClass":"any","disabled":"any","buttonClass":"any","elementClasses":"any","expanded_":"any","handleDropdownStateSynced_":"any","handleItemClick_":"any","handleItemKeyDown_":"any","hiddenInputName":"any","items":"any","values":"any","selectedIndex":"any"};
templates = exports;
return exports;

});

class Select extends Component {}
Soy.register(Select, templates);
export { Select, templates };
export default templates;
/* jshint ignore:end */
