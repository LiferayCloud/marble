/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Datatable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Datatable.
 * @public
 */

goog.module('Datatable.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
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
      incrementalDom.attr('class', 'datatable' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
  incrementalDom.elementOpenEnd();
    $render_(soy.$$assignDefaults({displayColumnsType: opt_data.displayColumnsType, path: 'table', tableClasses: opt_data.tableClasses}, opt_data.data), null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Datatable.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  var $tmp = opt_data.type;
  switch (goog.isObject($tmp) ? $tmp.toString() : $tmp) {
    case 'array':
      if (opt_data.columns) {
      $renderArrayOfObjects_(opt_data, null, opt_ijData);
    } else {
      $renderArray_(opt_data, null, opt_ijData);
    }
      break;
    case 'boolean':
      $renderBoolean_(opt_data, null, opt_ijData);
      break;
    case 'null':
      $renderNull_(opt_data, null, opt_ijData);
      break;
    case 'number':
      $renderNumber_(opt_data, null, opt_ijData);
      break;
    case 'object':
      $renderObject_(opt_data, null, opt_ijData);
      break;
    case 'string':
      $renderString_(opt_data, null, opt_ijData);
      break;
    case 'undefined':
      $renderUndefined_(opt_data, null, opt_ijData);
      break;
  }
}
exports.render_ = $render_;
if (goog.DEBUG) {
  $render_.soyTemplateName = 'Datatable.render_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderArray_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-array');
  incrementalDom.elementOpenEnd();
    $tableLabel({number: (opt_data.value.length), path: opt_data.path, type: 'Array'}, null, opt_ijData);
    incrementalDom.elementOpenStart('table');
        incrementalDom.attr('class', (opt_data.tableClasses ? opt_data.tableClasses + '' : '') + ' hidden');
        incrementalDom.attr('role', 'grid');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpen('tbody');
        var itemValue72List = opt_data.value;
        var itemValue72ListLen = itemValue72List.length;
        for (var itemValue72Index = 0; itemValue72Index < itemValue72ListLen; itemValue72Index++) {
            var itemValue72Data = itemValue72List[itemValue72Index];
            $renderObjectRow_({columns: [0], displayColumnsType: opt_data.displayColumnsType, path: opt_data.path + '-' + itemValue72Index, rowIndex: itemValue72Index, rowLength: (opt_data.value.length), tableClasses: opt_data.tableClasses, value: [itemValue72Data]}, null, opt_ijData);
          }
      incrementalDom.elementClose('tbody');
    incrementalDom.elementClose('table');
  incrementalDom.elementClose('span');
}
exports.renderArray_ = $renderArray_;
if (goog.DEBUG) {
  $renderArray_.soyTemplateName = 'Datatable.renderArray_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderArrayOfObjects_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-array-object');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('table');
        incrementalDom.attr('class', opt_data.tableClasses ? opt_data.tableClasses : '');
        incrementalDom.attr('role', 'grid');
    incrementalDom.elementOpenEnd();
      $renderObjectHeaders_({columns: opt_data.columns, columnsType: opt_data.columnsType, displayColumnsType: opt_data.displayColumnsType, path: opt_data.path + '-0', rowLength: (opt_data.value.length) + 1}, null, opt_ijData);
      incrementalDom.elementOpen('tbody');
        var itemValue97List = opt_data.value;
        var itemValue97ListLen = itemValue97List.length;
        for (var itemValue97Index = 0; itemValue97Index < itemValue97ListLen; itemValue97Index++) {
            var itemValue97Data = itemValue97List[itemValue97Index];
            $renderObjectRow_({columns: opt_data.columns, displayColumnsType: opt_data.displayColumnsType, path: opt_data.path + '-' + (itemValue97Index + 1), rowIndex: itemValue97Index + 1, rowLength: (opt_data.value.length) + 1, tableClasses: opt_data.tableClasses, value: itemValue97Data.value}, null, opt_ijData);
          }
      incrementalDom.elementClose('tbody');
    incrementalDom.elementClose('table');
  incrementalDom.elementClose('span');
}
exports.renderArrayOfObjects_ = $renderArrayOfObjects_;
if (goog.DEBUG) {
  $renderArrayOfObjects_.soyTemplateName = 'Datatable.renderArrayOfObjects_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderBoolean_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-boolean');
  incrementalDom.elementOpenEnd();
    soyIdom.print(opt_data.value);
  incrementalDom.elementClose('span');
}
exports.renderBoolean_ = $renderBoolean_;
if (goog.DEBUG) {
  $renderBoolean_.soyTemplateName = 'Datatable.renderBoolean_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderNull_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-null');
  incrementalDom.elementOpenEnd();
    incrementalDom.text('null');
  incrementalDom.elementClose('span');
}
exports.renderNull_ = $renderNull_;
if (goog.DEBUG) {
  $renderNull_.soyTemplateName = 'Datatable.renderNull_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderNumber_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-number');
  incrementalDom.elementOpenEnd();
    soyIdom.print(opt_data.value);
  incrementalDom.elementClose('span');
}
exports.renderNumber_ = $renderNumber_;
if (goog.DEBUG) {
  $renderNumber_.soyTemplateName = 'Datatable.renderNumber_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderObject_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-object');
  incrementalDom.elementOpenEnd();
    $tableLabel({number: ((soy.$$getMapKeys(opt_data.value)).length), path: opt_data.path, type: 'Object'}, null, opt_ijData);
    incrementalDom.elementOpenStart('table');
        incrementalDom.attr('class', (opt_data.tableClasses ? opt_data.tableClasses : '') + ' hidden');
        incrementalDom.attr('role', 'grid');
    incrementalDom.elementOpenEnd();
      $renderObjectHeaders_({columns: opt_data.columns, columnsType: opt_data.columnsType, displayColumnsType: opt_data.displayColumnsType, path: opt_data.path + '-0', rowLength: 2}, null, opt_ijData);
      incrementalDom.elementOpen('tbody');
        $renderObjectRow_({columns: opt_data.columns, displayColumnsType: opt_data.displayColumnsType, path: opt_data.path + '-1', rowIndex: 1, rowLength: 2, tableClasses: opt_data.tableClasses, value: opt_data.value}, null, opt_ijData);
      incrementalDom.elementClose('tbody');
    incrementalDom.elementClose('table');
  incrementalDom.elementClose('span');
}
exports.renderObject_ = $renderObject_;
if (goog.DEBUG) {
  $renderObject_.soyTemplateName = 'Datatable.renderObject_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderObjectHeaders_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('thead');
    incrementalDom.elementOpenStart('tr');
        incrementalDom.attr('data-rows', opt_data.rowLength);
    incrementalDom.elementOpenEnd();
      var column161List = opt_data.columns;
      var column161ListLen = column161List.length;
      for (var column161Index = 0; column161Index < column161ListLen; column161Index++) {
          var column161Data = column161List[column161Index];
          var currPath__soy145 = opt_data.path + '-' + column161Index;
          incrementalDom.elementOpenStart('th');
              incrementalDom.attr('role', 'columnheader');
              incrementalDom.attr('scope', 'col');
              incrementalDom.attr('ref', currPath__soy145);
              incrementalDom.attr('tabindex', column161Index == 0 ? '0' : '-1');
              incrementalDom.attr('data-cols', (opt_data.columns.length));
          incrementalDom.elementOpenEnd();
            soyIdom.print(column161Data);
            if (opt_data.displayColumnsType && opt_data.columnsType) {
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('class', 'datatable-type');
              incrementalDom.elementOpenEnd();
                soyIdom.print(opt_data.columnsType[column161Data]);
              incrementalDom.elementClose('span');
            }
          incrementalDom.elementClose('th');
        }
    incrementalDom.elementClose('tr');
  incrementalDom.elementClose('thead');
}
exports.renderObjectHeaders_ = $renderObjectHeaders_;
if (goog.DEBUG) {
  $renderObjectHeaders_.soyTemplateName = 'Datatable.renderObjectHeaders_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderObjectRow_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('tr');
      incrementalDom.attr('data-rows', opt_data.rowLength);
  incrementalDom.elementOpenEnd();
    var column183List = opt_data.columns;
    var column183ListLen = column183List.length;
    for (var column183Index = 0; column183Index < column183ListLen; column183Index++) {
        var column183Data = column183List[column183Index];
        var currPath__soy170 = opt_data.path + '-' + column183Index;
        incrementalDom.elementOpenStart('td');
            incrementalDom.attr('role', 'gridcell');
            incrementalDom.attr('ref', currPath__soy170);
            incrementalDom.attr('tabindex', opt_data.rowIndex == 0 && column183Index == 0 ? '0' : '-1');
            incrementalDom.attr('data-cols', (opt_data.columns.length));
        incrementalDom.elementOpenEnd();
          $render_(soy.$$assignDefaults({displayColumnsType: opt_data.displayColumnsType, path: currPath__soy170, tableClasses: opt_data.tableClasses}, opt_data.value[column183Data]), null, opt_ijData);
        incrementalDom.elementClose('td');
      }
  incrementalDom.elementClose('tr');
}
exports.renderObjectRow_ = $renderObjectRow_;
if (goog.DEBUG) {
  $renderObjectRow_.soyTemplateName = 'Datatable.renderObjectRow_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderUndefined_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-undefined');
  incrementalDom.elementOpenEnd();
    incrementalDom.text('undefined');
  incrementalDom.elementClose('span');
}
exports.renderUndefined_ = $renderUndefined_;
if (goog.DEBUG) {
  $renderUndefined_.soyTemplateName = 'Datatable.renderUndefined_';
}


/**
 * @param {{
 *  value: function()
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderString_(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {function()} */
  var value = soy.asserts.assertType(goog.isFunction(opt_data.value), 'value', opt_data.value, 'function()');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-string');
  incrementalDom.elementOpenEnd();
    value();
  incrementalDom.elementClose('span');
}
exports.renderString_ = $renderString_;
/**
 * @typedef {{
 *  value: function()
 * }}
 */
$renderString_.Params;
if (goog.DEBUG) {
  $renderString_.soyTemplateName = 'Datatable.renderString_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $tableLabel(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'datatable-label collapsed');
      incrementalDom.attr('data-onkeydown', 'handleKeydownToggle_');
      incrementalDom.attr('data-onclick', 'handleClickToggle_');
      incrementalDom.attr('ref', opt_data.path + '-label');
      incrementalDom.attr('tabindex', opt_data.path == 'table' ? 0 : -1);
  incrementalDom.elementOpenEnd();
    soyIdom.print(opt_data.type);
    incrementalDom.text(', ');
    soyIdom.print(opt_data.number);
    incrementalDom.text(' items');
  incrementalDom.elementClose('span');
}
exports.tableLabel = $tableLabel;
if (goog.DEBUG) {
  $tableLabel.soyTemplateName = 'Datatable.tableLabel';
}

exports.render.params = ["data","displayColumnsType","elementClasses","tableClasses"];
exports.render.types = {"data":"any","displayColumnsType":"any","elementClasses":"any","tableClasses":"any"};
exports.render_.params = ["path","type","columns"];
exports.render_.types = {"path":"any","type":"any","columns":"any"};
exports.renderArray_.params = ["path","value","displayColumnsType","tableClasses"];
exports.renderArray_.types = {"path":"any","value":"any","displayColumnsType":"any","tableClasses":"any"};
exports.renderArrayOfObjects_.params = ["columns","value","columnsType","displayColumnsType","path","tableClasses"];
exports.renderArrayOfObjects_.types = {"columns":"any","value":"any","columnsType":"any","displayColumnsType":"any","path":"any","tableClasses":"any"};
exports.renderBoolean_.params = ["value"];
exports.renderBoolean_.types = {"value":"any"};
exports.renderNull_.params = [];
exports.renderNull_.types = {};
exports.renderNumber_.params = ["value"];
exports.renderNumber_.types = {"value":"any"};
exports.renderObject_.params = ["columns","value","columnsType","displayColumnsType","path","tableClasses"];
exports.renderObject_.types = {"columns":"any","value":"any","columnsType":"any","displayColumnsType":"any","path":"any","tableClasses":"any"};
exports.renderObjectHeaders_.params = ["columns","columnsType","displayColumnsType","path","rowLength"];
exports.renderObjectHeaders_.types = {"columns":"any","columnsType":"any","displayColumnsType":"any","path":"any","rowLength":"any"};
exports.renderObjectRow_.params = ["columns","value","displayColumnsType","path","rowIndex","rowLength","tableClasses"];
exports.renderObjectRow_.types = {"columns":"any","value":"any","displayColumnsType":"any","path":"any","rowIndex":"any","rowLength":"any","tableClasses":"any"};
exports.renderUndefined_.params = [];
exports.renderUndefined_.types = {};
exports.renderString_.params = ["value"];
exports.renderString_.types = {"value":"html"};
exports.tableLabel.params = ["number","path","type"];
exports.tableLabel.types = {"number":"any","path":"any","type":"any"};
templates = exports;
return exports;

});

class Datatable extends Component {}
Soy.register(Datatable, templates);
export { Datatable, templates };
export default templates;
/* jshint ignore:end */
