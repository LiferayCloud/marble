'use strict';

import { async } from 'metal';
import dom from 'metal-dom';
import DragTestHelper from 'metal-drag-drop/test/fixtures/DragTestHelper';
import Position from 'metal-position';
import Slider from '../src/Slider';

var slider;

describe('Slider', function() {
	afterEach(function() {
		if (slider) {
			slider.dispose();
		}
	});

	it('should create a hidden named input so it can be embedded in a form', function() {
		slider = new Slider({
			inputName: 'sliderInput',
			value: 50
		});

		var sliderInput = slider.element.querySelector('input[name="sliderInput"]');

		assert.ok(sliderInput);
		assert.strictEqual('50', sliderInput.getAttribute('value'));
	});

	it('should update the value of the hidden input when the slider value changes', function(done) {
		slider = new Slider({
			inputName: 'sliderInput',
			value: 20
		});

		assert.strictEqual('20', slider.element.querySelector('input[name="sliderInput"]').getAttribute('value'));

		slider.value = 80;

		async.nextTick(function() {
			assert.strictEqual('80', slider.element.querySelector('input[name="sliderInput"]').getAttribute('value'));
			done();
		});
	});

	it('should update the value of the slider when clicking on the rail area', function(done) {
		slider = new Slider({
			min: 0,
			value: 50,
			max: 100
		});

		const rail = Position.getRegion(slider.element, true);
		dom.triggerEvent(slider.element.querySelector('.rail'), 'click', {
			offsetX: 0.9 * rail.width
		});

		async.nextTick(function() {
			assert.strictEqual(90, slider.value);

			dom.triggerEvent(slider.element.querySelector('.rail-active'), 'click', {
				offsetX: 0.1 * rail.width
			});

			async.nextTick(function() {
				assert.strictEqual(10, slider.value);
				done();
			});
		});
	});

	it('should update the position percentage to next value if clicking close to the right of the handle', function(done) {
		slider = new Slider({
			min: 0,
			value: 1,
			max: 2
		});

		var rail = Position.getRegion(slider.element, true);
		var handle = Position.getRegion(slider.element.querySelector('.handle'), true);
		dom.triggerEvent(slider.element.querySelector('.rail'), 'click', {
			offsetX: rail.width / 2 + handle.width
		});

		async.nextTick(function() {
			assert.strictEqual('100%', slider.element.querySelector('.rail-handle').style.left);
			done();
		});
	});

	it('should update the position percentage to previous value if clicking close to the left of the handle', function(done) {
		slider = new Slider({
			min: 0,
			value: 1,
			max: 2
		});

		var rail = Position.getRegion(slider.element, true);
		var handle = Position.getRegion(slider.element.querySelector('.handle'), true);
		dom.triggerEvent(slider.element.querySelector('.rail'), 'click', {
			offsetX: rail.width / 2 - handle.width
		});

		async.nextTick(function() {
			assert.strictEqual('0%', slider.element.querySelector('.rail-handle').style.left);
			done();
		});
	});

	it('should not update the value if clicking on handle', function(done) {
		slider = new Slider({
			min: 0,
			value: 1,
			max: 2
		});

		const railHandleEl = slider.element.querySelector('.rail-handle');
		assert.strictEqual('50%', railHandleEl.style.left);

		dom.triggerEvent(slider.element.querySelector('.handle'), 'click');
		async.nextTick(function() {
			assert.strictEqual('50%', railHandleEl.style.left);
			done();
		});
	});

	it('should update the value of the slider when dragging the rail handle', function(done) {
		slider = new Slider({
			min: 0,
			value: 0,
			max: 100
		});

		var rail = Position.getRegion(slider.element, true);
		var handle = slider.element.querySelector('.handle');

		DragTestHelper.triggerMouseEvent(handle, 'mousedown', 0, 0);
		DragTestHelper.triggerMouseEvent(document, 'mousemove', rail.width / 2, 0);

		async.nextTick(function() {
			assert.strictEqual(50, slider.value);
			done();
		});
	});

	it('should update the position percentage to 0% when dragged to before beginning of rail', function(done) {
		slider = new Slider({
			min: 0,
			value: 50,
			max: 100
		});

		var rail = Position.getRegion(slider.element, true);
		var handle = slider.element.querySelector('.handle');

		DragTestHelper.triggerMouseEvent(handle, 'mousedown', rail.width / 2, 0);
		DragTestHelper.triggerMouseEvent(document, 'mousemove', -10, 0);

		async.nextTick(function() {
			assert.strictEqual('0%', slider.element.querySelector('.rail-handle').style.left);
			done();
		});
	});

	it('should update the position percentage to 100% when dragged to after end of rail', function(done) {
		slider = new Slider({
			min: 0,
			value: 0,
			max: 100
		});

		var rail = Position.getRegion(slider.element, true);
		var handle = slider.element.querySelector('.handle');

		DragTestHelper.triggerMouseEvent(handle, 'mousedown', 0, 0);
		DragTestHelper.triggerMouseEvent(document, 'mousemove', rail.right + 10, 0);

		async.nextTick(function() {
			assert.strictEqual('100%', slider.element.querySelector('.rail-handle').style.left);
			done();
		});
	});

	it('should update aria attributes when value changes', function(done) {
		slider = new Slider({
			max: 100,
			min: 0,
			value: 20
		});

		const handle = slider.element.querySelector('.handle');
		assert.strictEqual('20', handle.getAttribute('aria-valuenow'));

		slider.value = 80;
		slider.once('stateSynced', function() {
			assert.strictEqual('80', handle.getAttribute('aria-valuenow'));
			done();
		});
	});

	it('should update the drag container when element changes', function() {
		slider = new Slider();
		assert.strictEqual(slider.element, slider.getDrag().container);

		slider.element = document.createElement('div');
		assert.strictEqual(slider.element, slider.getDrag().container);
	});

	it('should not update the drag container when element changes to null', function() {
		slider = new Slider();
		slider.element = null;
	});

	it('should update the drag container element when element changes', function() {
		slider = new Slider();
		assert.strictEqual(slider.element, slider.getDrag().container);

		var element = document.createElement('div');
		dom.append(element, '<div class="rail"></div>');
		slider.element = element;
		assert.strictEqual(element, slider.getDrag().container);
	});

	it('shouldnt update value if its smaller than min', function() {
		slider = new Slider({
			min: 30,
			value: 50
		});

		slider.value = 10;

		assert.strictEqual(50, slider.value);
	});

	it('shouldnt update value if its bigger than max', function() {
		slider = new Slider({
			max: 100,
			value: 50
		});

		slider.value = 200;

		assert.strictEqual(50, slider.value);
	});

	it('should update value when max becomes smaller than value', function(done) {
		slider = new Slider({
			min: 0,
			value: 50
		});

		slider.min = 80;

		async.nextTick(function() {
			assert.strictEqual(80, slider.value);
			done();
		});
	});

	it('should update value when min becomes bigger than value', function(done) {
		slider = new Slider({
			max: 100,
			value: 50
		});

		slider.max = 20;

		async.nextTick(function() {
			assert.strictEqual(20, slider.value);
			done();
		});
	});

	it('should add aria attributes for min/max values', function() {
		slider = new Slider({
			max: 100,
			min: 0
		});

		const handle = slider.element.querySelector('.handle');
		assert.strictEqual('100', handle.getAttribute('aria-valuemax'));
		assert.strictEqual('0', handle.getAttribute('aria-valuemin'));
	});

	it('should allow calling the soy template without params', function() {
		var element = document.createElement('div');
		IncrementalDOM.patch(element, Slider.TEMPLATE);
		assert.strictEqual('0%', element.querySelector('.rail-active').style.width);
		assert.strictEqual('0', element.textContent);
	});
});
