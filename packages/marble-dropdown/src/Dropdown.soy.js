/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Dropdown.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Dropdown.
 * @public
 */

goog.module('Dropdown.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  alignedPosition: (?),
 *  classMap: (?),
 *  elementClasses: (?),
 *  expanded: (?),
 *  position: (?),
 *  positionClassOnMenu: (?),
 *  showConfirmationBody: (?),
 *  body: (function()|null|undefined),
 *  confirmationBody: (function()|null|undefined),
 *  header: (function()|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {function()|null|undefined} */
  var body = soy.asserts.assertType(opt_data.body == null || goog.isFunction(opt_data.body), 'body', opt_data.body, 'function()|null|undefined');
  /** @type {function()|null|undefined} */
  var confirmationBody = soy.asserts.assertType(opt_data.confirmationBody == null || goog.isFunction(opt_data.confirmationBody), 'confirmationBody', opt_data.confirmationBody, 'function()|null|undefined');
  /** @type {function()|null|undefined} */
  var header = soy.asserts.assertType(opt_data.header == null || goog.isFunction(opt_data.header), 'header', opt_data.header, 'function()|null|undefined');
  var classes__soy7 = opt_data.classMap ? opt_data.classMap : ['dropup', 'dropup', 'dropright', 'dropdown', 'dropdown', 'dropdown', 'dropleft', 'dropup'];
  var currentPosition__soy9 = (opt_data.alignedPosition != null) ? opt_data.alignedPosition : opt_data.position;
  var positionClass__soy11 = (currentPosition__soy9 != null) ? classes__soy7[currentPosition__soy9] : 'dropdown';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', (opt_data.positionClassOnMenu ? 'dropdown' : positionClass__soy11) + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + (opt_data.expanded ? ' open' : ''));
  incrementalDom.elementOpenEnd();
    if (header) {
      header();
    }
    if (opt_data.showConfirmationBody) {
      soyIdom.print(confirmationBody);
    } else {
      incrementalDom.elementOpenStart('ul');
          incrementalDom.attr('class', 'dropdown-menu' + (opt_data.positionClassOnMenu ? ' ' + positionClass__soy11 : ''));
      incrementalDom.elementOpenEnd();
        if (body) {
          body();
        }
      incrementalDom.elementClose('ul');
    }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  alignedPosition: (?),
 *  classMap: (?),
 *  elementClasses: (?),
 *  expanded: (?),
 *  position: (?),
 *  positionClassOnMenu: (?),
 *  showConfirmationBody: (?),
 *  body: (function()|null|undefined),
 *  confirmationBody: (function()|null|undefined),
 *  header: (function()|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Dropdown.render';
}

exports.render.params = ["body","confirmationBody","header","alignedPosition","classMap","elementClasses","expanded","position","positionClassOnMenu","showConfirmationBody"];
exports.render.types = {"body":"html","confirmationBody":"html","header":"html","alignedPosition":"any","classMap":"any","elementClasses":"any","expanded":"any","position":"any","positionClassOnMenu":"any","showConfirmationBody":"any"};
templates = exports;
return exports;

});

class Dropdown extends Component {}
Soy.register(Dropdown, templates);
export { Dropdown, templates };
export default templates;
/* jshint ignore:end */
