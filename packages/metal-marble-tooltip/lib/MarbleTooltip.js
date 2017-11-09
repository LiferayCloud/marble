'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TooltipBase = exports.MarbleTooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metalDom = require('metal-dom');

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _metalTooltip = require('metal-tooltip');

var _metalTooltip2 = _interopRequireDefault(_metalTooltip);

var _MarbleTooltipSoy = require('./MarbleTooltip.soy.js');

var _MarbleTooltipSoy2 = _interopRequireDefault(_MarbleTooltipSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MarbleTooltip component.
 */
var MarbleTooltip = function (_TooltipBase) {
	_inherits(MarbleTooltip, _TooltipBase);

	function MarbleTooltip() {
		_classCallCheck(this, MarbleTooltip);

		return _possibleConstructorReturn(this, (MarbleTooltip.__proto__ || Object.getPrototypeOf(MarbleTooltip)).apply(this, arguments));
	}

	_createClass(MarbleTooltip, [{
		key: 'syncVisible',
		value: function syncVisible(visible) {
			if (visible) _metalDom2.default.addClasses(this.element, 'showing');else _metalDom2.default.removeClasses(this.element, 'showing');

			_get(MarbleTooltip.prototype.__proto__ || Object.getPrototypeOf(MarbleTooltip.prototype), 'syncVisible', this).call(this, visible);
		}
	}, {
		key: 'syncCurrentAlignElement',
		value: function syncCurrentAlignElement(alignElement, prevAlignElement) {
			_get(MarbleTooltip.prototype.__proto__ || Object.getPrototypeOf(MarbleTooltip.prototype), 'syncCurrentAlignElement', this).call(this, alignElement, prevAlignElement);
			if (alignElement) {
				var dataDescription = alignElement.getAttribute('data-description');
				if (dataDescription) {
					this.description = dataDescription;
				}
			}
		}
	}]);

	return MarbleTooltip;
}(_metalTooltip2.default);

_metalSoy2.default.register(MarbleTooltip, _MarbleTooltipSoy2.default);

MarbleTooltip.Align = _metalTooltip2.default.Align;

exports.default = MarbleTooltip;
exports.MarbleTooltip = MarbleTooltip;
exports.TooltipBase = _metalTooltip2.default;