/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from InputMatrix.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace InputMatrix.
 * @public
 */

goog.module('InputMatrix.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('Input.incrementaldom', 'render');


/**
 * @param {{
 *  currentFields_: (?),
 *  elementClasses: (?),
 *  fieldsConfig: (?),
 *  handleInput_: (?),
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
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
  var closeButtonHtml = soy.asserts.assertType(opt_data.closeButtonHtml == null || goog.isFunction(opt_data.closeButtonHtml) || (goog.isString(opt_data.closeButtonHtml) || opt_data.closeButtonHtml instanceof goog.soy.data.SanitizedContent), 'closeButtonHtml', opt_data.closeButtonHtml, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'input-matrix ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp));
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'input-matrix-labels');
    incrementalDom.elementOpenEnd();
      var config11List = opt_data.fieldsConfig;
      var config11ListLen = config11List.length;
      for (var config11Index = 0; config11Index < config11ListLen; config11Index++) {
          var config11Data = config11List[config11Index];
          incrementalDom.elementOpenStart('label');
              incrementalDom.attr('class', 'input-matrix-label');
          incrementalDom.elementOpenEnd();
            soyIdom.print(($$temp = config11Data.label) == null ? '' : $$temp);
          incrementalDom.elementClose('label');
        }
    incrementalDom.elementClose('div');
    var fieldObjs__soy14 = opt_data.currentFields_ ? opt_data.currentFields_ : [[]];
    var shouldAddRow__soy16 = '';
    shouldAddRow__soy16 += $shouldAddRow({currentFields_: ($$temp = fieldObjs__soy14[(fieldObjs__soy14.length) - 1]) == null ? [] : $$temp, fieldsConfig: opt_data.fieldsConfig}, null, opt_ijData);
    var rowFields32List = fieldObjs__soy14;
    var rowFields32ListLen = rowFields32List.length;
    for (var rowFields32Index = 0; rowFields32Index < rowFields32ListLen; rowFields32Index++) {
        var rowFields32Data = rowFields32List[rowFields32Index];
        $row({closeButtonHtml: closeButtonHtml, fieldsConfig: opt_data.fieldsConfig, last: !shouldAddRow__soy16 && rowFields32Index == (fieldObjs__soy14.length) - 1, rowFields: rowFields32Data, rowIndex: rowFields32Index, handleInput_: opt_data.handleInput_}, null, opt_ijData);
      }
    if (shouldAddRow__soy16 != '') {
      $row({closeButtonHtml: closeButtonHtml, fieldsConfig: opt_data.fieldsConfig, last: true, rowFields: [], rowIndex: (fieldObjs__soy14.length), handleInput_: opt_data.handleInput_}, null, opt_ijData);
    }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  currentFields_: (?),
 *  elementClasses: (?),
 *  fieldsConfig: (?),
 *  handleInput_: (?),
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'InputMatrix.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $row(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'input-matrix-fields');
      incrementalDom.attr('data-row', opt_data.rowIndex);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'input-matrix-fields-left');
    incrementalDom.elementOpenEnd();
      var config61List = opt_data.fieldsConfig;
      var config61ListLen = config61List.length;
      for (var config61Index = 0; config61Index < config61ListLen; config61Index++) {
          var config61Data = config61List[config61Index];
          var index__soy53 = config61Index;
          $field(soy.$$assignDefaults({field: opt_data.rowFields ? opt_data.rowFields[index__soy53] : null, fieldIndex: index__soy53, rowIndex: opt_data.rowIndex, handleInput_: opt_data.handleInput_}, config61Data), null, opt_ijData);
        }
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'input-matrix-fields-right');
    incrementalDom.elementOpenEnd();
      if (!opt_data.last) {
        incrementalDom.elementOpenStart('button');
            incrementalDom.attr('type', 'button');
            incrementalDom.attr('class', 'close');
            incrementalDom.attr('data-onclick', 'handleRemoveClick_');
            incrementalDom.attr('data-row-index', opt_data.rowIndex);
            incrementalDom.attr('aria-label', 'Remove');
            incrementalDom.attr('tabindex', '-1');
        incrementalDom.elementOpenEnd();
          if (opt_data.closeButtonHtml) {
            soyIdom.print(opt_data.closeButtonHtml);
          } else {
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('\u00D7');
            incrementalDom.elementClose('span');
          }
        incrementalDom.elementClose('button');
      }
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.row = $row;
if (goog.DEBUG) {
  $row.soyTemplateName = 'InputMatrix.row';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $field(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  var hasError__soy80 = opt_data.field && opt_data.field.error && opt_data.field.error != '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group ' + (hasError__soy80 ? 'has-error' : ''));
  incrementalDom.elementOpenEnd();
    var nameSuffix__soy84 = opt_data.isArray ? '[]' : opt_data.rowIndex + 1;
    $templateAlias1(soy.$$assignDefaults({classes: 'form-control input-matrix-field', onInput: opt_data.handleInput_, name: (opt_data.name != null) ? opt_data.name + nameSuffix__soy84 : '', value: opt_data.field && opt_data.field.value ? opt_data.field.value : ''}, opt_data), null, opt_ijData);
    incrementalDom.elementOpenStart('p');
        incrementalDom.attr('class', 'help-block');
    incrementalDom.elementOpenEnd();
      soyIdom.print(opt_data.field && opt_data.field.error ? opt_data.field.error : '');
    incrementalDom.elementClose('p');
  incrementalDom.elementClose('div');
}
exports.field = $field;
if (goog.DEBUG) {
  $field.soyTemplateName = 'InputMatrix.field';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {string}
 * @suppress {checkTypes}
 */
function $shouldAddRow(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var output = '';
  var config105List = opt_data.fieldsConfig;
  var config105ListLen = config105List.length;
  for (var config105Index = 0; config105Index < config105ListLen; config105Index++) {
      var config105Data = config105List[config105Index];
      var index__soy97 = config105Index;
      var hasValue__soy99 = (opt_data.currentFields_[index__soy97] != null) && (opt_data.currentFields_[index__soy97].value != null) && opt_data.currentFields_[index__soy97].value != '';
      output += !config105Data.disableDuplication && hasValue__soy99 ? 'true' : '';
    }
  return output;
}
exports.shouldAddRow = $shouldAddRow;
if (goog.DEBUG) {
  $shouldAddRow.soyTemplateName = 'InputMatrix.shouldAddRow';
}

exports.render.params = ["closeButtonHtml","currentFields_","elementClasses","fieldsConfig","handleInput_"];
exports.render.types = {"closeButtonHtml":"html|string","currentFields_":"any","elementClasses":"any","fieldsConfig":"any","handleInput_":"any"};
exports.row.params = ["closeButtonHtml","fieldsConfig","last","rowIndex","handleInput_","rowFields"];
exports.row.types = {"closeButtonHtml":"any","fieldsConfig":"any","last":"any","rowIndex":"any","handleInput_":"any","rowFields":"any"};
exports.field.params = ["field","handleInput_","isArray","name","rowIndex"];
exports.field.types = {"field":"any","handleInput_":"any","isArray":"any","name":"any","rowIndex":"any"};
exports.shouldAddRow.params = ["currentFields_","fieldsConfig"];
exports.shouldAddRow.types = {"currentFields_":"any","fieldsConfig":"any"};
templates = exports;
return exports;

});

class InputMatrix extends Component {}
Soy.register(InputMatrix, templates);
export { InputMatrix, templates };
export default templates;
/* jshint ignore:end */
