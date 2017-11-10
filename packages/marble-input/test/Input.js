'use strict';

import dom from 'metal-dom';
import Input from '../src/Input';

describe('Input', function() {
	let comp;

	afterEach(function() {
		if (comp) {
			comp.dispose();
		}
	});

	it('should render a empty text field by default', function() {
		comp = new Input();
		assert.equal('text', comp.element.getAttribute('type'));
	});

	it('should set password as type to requested field', function() {
		comp = new Input({
			type: 'password'
		});
		assert.equal('password', comp.element.getAttribute('type'));
	});	

	it('should add "name" html attribute to requested field', function() {
		comp = new Input({
			name: 'username'
		});
		assert.equal('username', comp.element.name);
	});

	it('should add a class to requested field', function() {
		comp = new Input({
			classes: 'form-control'
		});
		assert.ok(dom.hasClass(comp.element, 'form-control'));
	});

	it('should add more than one class to requested field', function() {
		comp = new Input({
			classes: 'form-control has-error'
		});
		assert.ok(dom.hasClass(comp.element, 'form-control'));
		assert.ok(dom.hasClass(comp.element, 'has-error'));
	});

	it('should add "placeholder" html attribute to requested field', function() {
		comp = new Input({
			placeholder: 'Name'
		});
		assert.equal('Name', comp.element.getAttribute('placeholder'));
	});

	it('should set a value to requested field', function() {
		comp = new Input({
			value: 'Stephen Hawking'
		});
		assert.equal('Stephen Hawking', comp.element.value);
	});

	it('should add "autocomplete" html attribute to requested field', function() {
		comp = new Input({
			autocomplete: 'on'
		});
		assert.equal('on', comp.element.getAttribute('autocomplete'));

		comp.autocomplete = 'off';

		comp.once('stateSynced', function(done) {
			assert.equal('off', comp.element.getAttribute('autocomplete'));
			done();
		});
	});

	it('should add "readonly" html attribute to requested field', function() {
		comp = new Input({
			readonly: true
		});
		assert.ok(comp.element.hasAttribute('readonly'));
	});

	it('should add "maxlength" html attribute to requested field', function() {
		comp = new Input({
			maxLength: 10
		});
		assert.equal(10, comp.element.getAttribute('maxlength'));
	});

	it('should add "data-field-index" custom attribute to requested field', function() {
		comp = new Input({
			fieldIndex: 1
		});
		assert.equal(1, comp.element.getAttribute('data-field-index'));
	});

	it('should add "data-row-index" custom attribute to requested field', function() {
		comp = new Input({
			rowIndex: 0
		});
		assert.equal(0, comp.element.getAttribute('data-row-index'));
	});

	it('should add "data-oninput" custom attribute to requested field', function() {
		var handlerFunction = sinon.stub();

		comp = new Input({
			onInput: handlerFunction
		});

		let testField = comp.element;
		testField.value = 'test';
		dom.triggerEvent(testField, 'input');

		comp.once('stateSynced', function(done) {
			assert.equal(1, handlerFunction.callCount);
			done();
		});
	});

	//TOGGLE PASSWORD
	it('should render the requested field as toggle password', function() {
		comp = new Input({
			isTogglePassword: true
		});
		assert.ok(dom.hasClass(comp.element, 'has-action-button'));
	});

	it('should check if the field is hidden as default (password)', function() {
		comp = new Input({
			isTogglePassword: true
		});
		assert.equal('password', comp.element.childNodes[0].getAttribute('type'));
	});

	it('should set the related field visibility to exposed (text)', function() {
		comp = new Input({
			initialShow: true,
			isTogglePassword: true
		});
		assert.equal('text', comp.element.childNodes[0].getAttribute('type'));
	});

	it('should change the field visibility by clicking on the toogle button : hidden to exposed', function() {
		comp = new Input({
			isTogglePassword: true
		});

		let toggleButton = comp.element.querySelector('button');
		dom.triggerEvent(toggleButton, 'click');

		comp.once('stateSynced', function(done) {
			assert.equal('text', comp.element.childNodes[0].getAttribute('type'));
			done();
		});

	});

	it('should change the field visibility by clicking on the toogle button : exposed to hidden', function() {
		comp = new Input({
			initialShow: true,
			isTogglePassword: true
		});
		
		let toggleButton = comp.element.querySelector('button');
		dom.triggerEvent(toggleButton, 'click');

		comp.once('stateSynced', function(done) {
			assert.equal('password', comp.element.childNodes[0].getAttribute('type'));
			done();
		});
	});

	//editable while visible
	it('should be editable if "value" is empty', function() {
		comp = new Input({
			editableWhileVisible: true,
			isTogglePassword: true
		});

		assert.notOk(comp.element.childNodes[0].hasAttribute('readonly'));
		assert.equal('text', comp.element.childNodes[0].getAttribute('type'));
	});

	it('should start editable if "initialShow" is true and "value" is not empty', function() {
		comp = new Input({
			editableWhileVisible: true,
			initialShow: true,
			isTogglePassword: true,
			value: 'John Malkovich'
		});

		assert.notOk(comp.element.childNodes[0].hasAttribute('readonly'));
		assert.equal('text', comp.element.childNodes[0].getAttribute('type'));
	});

	it('should start not editable if "initialShow" is false and "value" is not empty', function() {
		comp = new Input({
			editableWhileVisible: true,
			initialShow: false,
			isTogglePassword: true,
			value: 'John Malkovich'
		});

		assert.ok(comp.element.childNodes[0].hasAttribute('readonly'));
		assert.equal('password', comp.element.childNodes[0].getAttribute('type'));
	});

});
