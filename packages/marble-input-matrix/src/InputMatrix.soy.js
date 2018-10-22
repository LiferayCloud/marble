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
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  hideCloseButtons: (boolean|null|undefined)
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
  /** @type {boolean|null|undefined} */
  var hideCloseButtons = soy.asserts.assertType(opt_data.hideCloseButtons == null || (goog.isBoolean(opt_data.hideCloseButtons) || opt_data.hideCloseButtons === 1 || opt_data.hideCloseButtons === 0), 'hideCloseButtons', opt_data.hideCloseButtons, 'boolean|null|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'input-matrix ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp));
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'input-matrix-labels');
    incrementalDom.elementOpenEnd();
      var config12List = opt_data.fieldsConfig;
      var config12ListLen = config12List.length;
      for (var config12Index = 0; config12Index < config12ListLen; config12Index++) {
          var config12Data = config12List[config12Index];
          incrementalDom.elementOpenStart('label');
              incrementalDom.attr('class', 'input-matrix-label');
          incrementalDom.elementOpenEnd();
            soyIdom.print(($$temp = config12Data.label) == null ? '' : $$temp);
          incrementalDom.elementClose('label');
        }
    incrementalDom.elementClose('div');
    var fieldObjs__soy15 = opt_data.currentFields_ ? opt_data.currentFields_ : [[]];
    var shouldAddRow__soy17 = '';
    shouldAddRow__soy17 += $shouldAddRow({currentFields_: ($$temp = fieldObjs__soy15[(fieldObjs__soy15.length) - 1]) == null ? [] : $$temp, fieldsConfig: opt_data.fieldsConfig}, null, opt_ijData);
    var rowFields34List = fieldObjs__soy15;
    var rowFields34ListLen = rowFields34List.length;
    for (var rowFields34Index = 0; rowFields34Index < rowFields34ListLen; rowFields34Index++) {
        var rowFields34Data = rowFields34List[rowFields34Index];
        $row({closeButtonHtml: closeButtonHtml, fieldsConfig: opt_data.fieldsConfig, hideCloseButtons: hideCloseButtons, last: !shouldAddRow__soy17 && rowFields34Index == (fieldObjs__soy15.length) - 1, rowFields: rowFields34Data, rowIndex: rowFields34Index, handleInput_: opt_data.handleInput_}, null, opt_ijData);
      }
    if (shouldAddRow__soy17 != '') {
      $row({closeButtonHtml: closeButtonHtml, fieldsConfig: opt_data.fieldsConfig, last: true, rowFields: [], rowIndex: (fieldObjs__soy15.length), handleInput_: opt_data.handleInput_}, null, opt_ijData);
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
 *  closeButtonHtml: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  hideCloseButtons: (boolean|null|undefined)
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
      var config63List = opt_data.fieldsConfig;
      var config63ListLen = config63List.length;
      for (var config63Index = 0; config63Index < config63ListLen; config63Index++) {
          var config63Data = config63List[config63Index];
          var index__soy55 = config63Index;
          $field(soy.$$assignDefaults({field: opt_data.rowFields ? opt_data.rowFields[index__soy55] : null, fieldIndex: index__soy55, rowIndex: opt_data.rowIndex, handleInput_: opt_data.handleInput_}, config63Data), null, opt_ijData);
        }
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'input-matrix-fields-right');
    incrementalDom.elementOpenEnd();
      if (!opt_data.last && !opt_data.hideCloseButtons) {
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
  var hasError__soy82 = opt_data.field && opt_data.field.error && opt_data.field.error != '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group ' + (hasError__soy82 ? 'has-error' : ''));
  incrementalDom.elementOpenEnd();
    var nameSuffix__soy86 = opt_data.isArray ? '[]' : opt_data.rowIndex + 1;
    $templateAlias1(soy.$$assignDefaults({classes: 'form-control input-matrix-field', onInput: opt_data.handleInput_, name: (opt_data.name != null) ? opt_data.name + nameSuffix__soy86 : '', value: opt_data.field && opt_data.field.value ? opt_data.field.value : ''}, opt_data), null, opt_ijData);
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
  var config107List = opt_data.fieldsConfig;
  var config107ListLen = config107List.length;
  for (var config107Index = 0; config107Index < config107ListLen; config107Index++) {
      var config107Data = config107List[config107Index];
      var index__soy99 = config107Index;
      var hasValue__soy101 = (opt_data.currentFields_[index__soy99] != null) && (opt_data.currentFields_[index__soy99].value != null) && opt_data.currentFields_[index__soy99].value != '';
      output += !config107Data.disableDuplication && hasValue__soy101 ? 'true' : '';
    }
  return output;
}
exports.shouldAddRow = $shouldAddRow;
if (goog.DEBUG) {
  $shouldAddRow.soyTemplateName = 'InputMatrix.shouldAddRow';
}

exports.render.params = ["closeButtonHtml","hideCloseButtons","currentFields_","elementClasses","fieldsConfig","handleInput_"];
exports.render.types = {"closeButtonHtml":"html|string","hideCloseButtons":"bool","currentFields_":"any","elementClasses":"any","fieldsConfig":"any","handleInput_":"any"};
exports.row.params = ["closeButtonHtml","fieldsConfig","last","rowIndex","handleInput_","hideCloseButtons","rowFields"];
exports.row.types = {"closeButtonHtml":"any","fieldsConfig":"any","last":"any","rowIndex":"any","handleInput_":"any","hideCloseButtons":"any","rowFields":"any"};
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
