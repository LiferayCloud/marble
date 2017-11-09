'use strict';

import dom from 'metal-dom';
import InputMatrix from '../src/InputMatrix';

describe('InputMatrix', function() {
	let comp;

	afterEach(function() {
		if (comp) {
			comp.dispose();
		}
	});

	it('should render a single row with a single empty field by default', function() {
		comp = new InputMatrix();
		assert.strictEqual(2, comp.element.childNodes.length);
		assert.ok(dom.hasClass(comp.element.childNodes[0], 'input-matrix-labels'));

		let fields = getFieldsForRow(comp.element, 0);
		assert.strictEqual(1, fields.length);
		assert.strictEqual('', fields[0].value);
	});

	it('should render a single text field for the given value plus an empty one below', function() {
		comp = new InputMatrix({
			fields: [[{
				value: 'foo'
			}]]
		});
		assert.strictEqual(3, comp.element.childNodes.length);

		let fields = getFieldsForRow(comp.element, 0);
		assert.strictEqual(1, fields.length);
		assert.strictEqual('foo', fields[0].value);

		fields = getFieldsForRow(comp.element, 1);
		assert.strictEqual(1, fields.length);
		assert.strictEqual('', fields[0].value);

		var expectedFields = [
			[{
				value: 'foo'
			}],
			[]
		];
		assert.deepEqual(expectedFields, comp.fields);
	});

	it('should render error messages when given', function() {
		comp = new InputMatrix({
			fields: [[{
				error: 'Test error message'
			}]]
		});
		assert.strictEqual(2, comp.element.childNodes.length);

		let fields = getFieldsForRow(comp.element, 0);
		assert.ok(dom.hasClass(fields[0].parentNode, 'has-error'));

		var errorBox = fields[0].nextSibling;
		assert.ok(errorBox);
		assert.strictEqual('Test error message', errorBox.textContent);
	});

	it('should render multiples rows with multiple text field for the given value plus empty row', function() {
		comp = new InputMatrix({
			fields: [
				[
					{
						value: 'col1.1'
					},
					{
						value: 'col1.2'
					}
				],
				[
					{
						value: 'col2.1'
					},
					{
						value: 'col2.2'
					}
				]
			],
			fieldsConfig: [{}, {}]
		});
		assert.strictEqual(4, comp.element.childNodes.length);

		let fields = getFieldsForRow(comp.element, 0);
		assert.strictEqual(2, fields.length);
		assert.strictEqual('col1.1', fields[0].value);
		assert.strictEqual('col1.2', fields[1].value);

		fields = getFieldsForRow(comp.element, 1);
		assert.strictEqual(2, fields.length);
		assert.strictEqual('col2.1', fields[0].value);
		assert.strictEqual('col2.2', fields[1].value);

		fields = getFieldsForRow(comp.element, 2);
		assert.strictEqual(2, fields.length);
		assert.strictEqual('', fields[0].value);
		assert.strictEqual('', fields[1].value);
	});

	it('should add labels as specified in "fieldsConfig"', function() {
		comp = new InputMatrix({
			fields: [[], []],
			fieldsConfig: [
				{
					label: 'Label 1'
				},
				{
					label: 'Label 2'
				}
			]
		});

		const labels = comp.element.childNodes[0].childNodes;
		assert.strictEqual(2, labels.length);
		assert.strictEqual('Label 1', labels[0].textContent);
		assert.strictEqual('Label 2', labels[1].textContent);
	});

	it('should add names with "[]" for array fields', function() {
		comp = new InputMatrix({
			fields: [[], []],
			fieldsConfig: [
				{
					isArray: true,
					name: 'address'
				},
				{
					name: 'age'
				},
				{}
			]
		});
		assert.strictEqual(3, comp.element.childNodes.length);

		let fields = getFieldsForRow(comp.element, 0);
		assert.strictEqual(3, fields.length);
		assert.strictEqual('address[]', fields[0].getAttribute('name'));
		assert.strictEqual('age1', fields[1].getAttribute('name'));
		assert.strictEqual('', fields[2].getAttribute('name'));

		fields = getFieldsForRow(comp.element, 1);
		assert.strictEqual(3, fields.length);
		assert.strictEqual('address[]', fields[0].getAttribute('name'));
		assert.strictEqual('age2', fields[1].getAttribute('name'));
		assert.strictEqual('', fields[2].getAttribute('name'));
	});

	it('should add new row with empty fields if field in last row is typed on', function(done) {
		comp = new InputMatrix({
			fields: [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[]
			]
		});

		let lastField = getFieldsForRow(comp.element, 2)[0];
		lastField.value = 'last';
		dom.triggerEvent(lastField, 'input');

		comp.once('stateSynced', function() {
			var expectedFields = [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[{
					value: 'last'
				}],
				[]
			];
			assert.deepEqual(expectedFields, comp.fields);
			assert.strictEqual(5, comp.element.childNodes.length);

			lastField = getFieldsForRow(comp.element, 3)[0];
			assert.strictEqual('', lastField.value);
			done();
		});
	});

	it('should not add new row with empty fields if field in last row is typed on', function(done) {
		comp = new InputMatrix({
			fields: [
				[{
					value: 'foo'
				}],
				[],
				[]
			]
		});

		let lastField = getFieldsForRow(comp.element, 1)[0];
		lastField.value = 'bar';
		dom.triggerEvent(lastField, 'input');

		comp.once('stateSynced', function() {
			var expectedFields = [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[]
			];
			assert.deepEqual(expectedFields, comp.fields);
			assert.strictEqual(4, comp.element.childNodes.length);
			done();
		});
	});

	it('should not add new row with empty fields if field with "disableDuplication" is typed on', function(done) {
		comp = new InputMatrix({
			fields: [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[]
			],
			fieldsConfig: [{
				disableDuplication: true
			}]
		});

		let lastField = getFieldsForRow(comp.element, 2)[0];
		lastField.value = 'last';
		dom.triggerEvent(lastField, 'input');

		comp.once('stateSynced', function() {
			var expectedFields = [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[{
					value: 'last'
				}]
			];
			assert.deepEqual(expectedFields, comp.fields);
			assert.strictEqual(4, comp.element.childNodes.length);
			done();
		});
	});

	it('should render a remove button for each row except the last one', function() {
		comp = new InputMatrix({
			fields: [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[]
			]
		});

		const children = comp.element.children;
		assert.ok(children[1].querySelector('button'));
		assert.ok(children[2].querySelector('button'));
		assert.ok(!children[3].querySelector('button'));
	});

	it('should remove field when the remove button is clicked', function(done) {
		comp = new InputMatrix({
			fields: [
				[{
					value: 'foo'
				}],
				[{
					value: 'bar'
				}],
				[]
			]
		});

		let removeButton = comp.element.childNodes[1].querySelector('button');
		dom.triggerEvent(removeButton, 'click');

		comp.once('stateSynced', function() {
			var expectedFields = [
				[{
					value: 'bar'
				}],
				[]
			];
			assert.deepEqual(expectedFields, comp.fields);
			assert.strictEqual(3, comp.element.childNodes.length);
			done();
		});
	});

	it('should set new fields to current fields internal state', function(done) {
		comp = new InputMatrix();

    comp.setCurrentFields([
      [{
        value: 'foo'
      }],
      [{
        value: 'bar'
      }]
    ]);

    comp.once('stateSynced', function() {
      assert.strictEqual(4, comp.element.childNodes.length);
      done();
    });
	});

	function getFieldsForRow(parent, rowIndex) {
		return parent.childNodes[rowIndex + 1].querySelectorAll('input');
	}
});
