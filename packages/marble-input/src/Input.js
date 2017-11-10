'use strict';

import core from 'metal';
import templates from './Input.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Input extends Component {

	created() {
		this.isShowing_ = this.initialShow;
		
		if(this.editableWhileVisible) {
			if(!this.value || (this.value && this.valeu === '')) {
				this.isShowing_ = true;
				this.readonly = false;
			} else {
				if(this.isShowing_) {
					this.readonly = false;
				} else {
					this.readonly = true;
				}
			}
		}
	}

	toggle() {
		this.isShowing_ = !this.isShowing_;
		
		if(this.editableWhileVisible) {
			if(this.isShowing_) {
				this.readonly = false;
			} else {
				this.readonly = true;
			}
		}
	}
	
}
Soy.register(Input, templates);

Input.STATE = {
	/**
	 * Defines "autocomplete" html attribute [on/off]
	 * @type {string}
	 * @default 'on'
	 */
	autocomplete: {
		validator: core.isString,
		value: 'on'
	},
	/**
	 * Defines which classes this input field should have
	 * @type {string}
	 */
	classes: {
		validator: core.isString
	},
	/**
	 * Defines if while exposed state, the related field shall be editable
	 * It only works combined with isTogglePassword
	 * @type {boolean}
	 */
	editableWhileVisible: {
		validator: core.isBoolean,
		value: false
	},
	/**
	 * Defines the index of the field
	 * @type {number}
	 */
	fieldIndex: {
		validator: core.isNumber
	},
	/**
	 * Defines if the value will appear as password or not when it starts
	 * It only works combined with isTogglePassword
	 * @type {boolean}
	 * @default false
	 */
	initialShow: {
		validator: core.isBoolean,
		value: false
	},
	/**
	 * Defines the internal value that controls the related field logic visibility
	 * @type {boolean}
	 * @default false
	 */
	isShowing_: {
		validator: core.isBoolean,
		value: false,
		internal: true
	},
	/**
	 * Defines if this field has a behavior to hide and show the value
	 * @type {boolean}
	 * @default false
	 */
	isTogglePassword: {
		validator: core.isBoolean,
		value: false
	},
	/**
	 * Defines the maximum length for this field.
	 * @type {number}
	 */
	maxLength: {
		validator: core.isNumber

	},
	/**
	 * Defines the function name to 'oninput' event
	 * @type {function}
	 */
	onInput: {
		validator: core.isFunction
	},
	/**
	 * Defines "name" html attribute
	 * @type {string}
	 */
	name: {
		validator: core.isString
	},
	/**
	 * Defines "placeholder" html attribute
	 * @type {string}
	 */
	placeholder: {
		validator: core.isString
	},
	/**
	 * Defines "readonly" html attribute
	 * @type {boolean}
	 */
	readonly: {
		validator: core.isBoolean
	},
	/**
	 * Defines which row this field belongs to
	 * @type {number}
	 */
	rowIndex: {
		validator: core.isNumber
	},
	/**
	 * @type {string}
	 * @default 'text'
	 */
	type: {
		validator: core.isString,
		value: 'text'
	},
	/**
	 * Defines the current value
	 * @type {string}
	 */
	value: {
		validator: core.isString
	}
};

export default Input;
