/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ReadingProgress.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ReadingProgress.
 * @public
 */

goog.module('ReadingProgress.incrementaldom');

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
      incrementalDom.attr('class', 'reading-progress' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('ul');
      var item11List = opt_data.items;
      var item11ListLen = item11List.length;
      for (var item11Index = 0; item11Index < item11ListLen; item11Index++) {
          var item11Data = item11List[item11Index];
          $item({item: item11Data}, null, opt_ijData);
        }
    incrementalDom.elementClose('ul');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ReadingProgress.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $item(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('li');
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('href', opt_data.item.href);
    incrementalDom.elementOpenEnd();
      if (opt_data.item.title) {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'reading-title');
        incrementalDom.elementOpenEnd();
          soyIdom.print(opt_data.item.title);
        incrementalDom.elementClose('span');
      }
      if (opt_data.item.time) {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'reading-subtitle');
        incrementalDom.elementOpenEnd();
          soyIdom.print(opt_data.item.time < 60 ? opt_data.item.time + ' sec read' : (Math.round(opt_data.item.time / 60)) + ' min read');
        incrementalDom.elementClose('span');
      }
      incrementalDom.elementOpenStart('svg');
          incrementalDom.attr('x', '0px');
          incrementalDom.attr('y', '0px');
          incrementalDom.attr('width', '36px');
          incrementalDom.attr('height', '36px');
          incrementalDom.attr('viewBox', '0 0 36 36');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('circle');
            incrementalDom.attr('fill', 'none');
            incrementalDom.attr('stroke-width', '2');
            incrementalDom.attr('cx', '18');
            incrementalDom.attr('cy', '18');
            incrementalDom.attr('r', '16');
            incrementalDom.attr('stroke-dasharray', '100 100');
            incrementalDom.attr('transform', 'rotate(-90 18 18)');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('circle');
      incrementalDom.elementClose('svg');
    incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
}
exports.item = $item;
if (goog.DEBUG) {
  $item.soyTemplateName = 'ReadingProgress.item';
}

exports.render.params = ["elementClasses","items"];
exports.render.types = {"elementClasses":"any","items":"any"};
exports.item.params = ["item"];
exports.item.types = {"item":"any"};
templates = exports;
return exports;

});

class ReadingProgress extends Component {}
Soy.register(ReadingProgress, templates);
export { ReadingProgress, templates };
export default templates;
/* jshint ignore:end */
