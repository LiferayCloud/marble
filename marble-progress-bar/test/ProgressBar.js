'use strict';

import dom from 'metal-dom';
import ProgressBar from '../src/ProgressBar';

describe('ProgressBar', function() {
	var progressBar;

	afterEach(function() {
		progressBar.dispose();
	});

	describe('Label', function() {
		it('should render specified label', function() {
			progressBar = new ProgressBar({
				label: 'My Label'
			});
			assert.strictEqual('My Label', progressBar.element.textContent);
		});

		it('should render specified label via incremental dom function', function() {
			progressBar = new ProgressBar({
				label: () => IncrementalDOM.text('My Label')
			});
			assert.strictEqual('My Label', progressBar.element.textContent);
		});

		it('should not render any text if no label is specified', function() {
			progressBar = new ProgressBar();
			assert.strictEqual('', progressBar.element.textContent);
		});

		it('should update the rendered label when the state changes', function(done) {
			progressBar = new ProgressBar();

			progressBar.label = 'My Label';
			progressBar.once('stateSynced', function() {
				assert.strictEqual('My Label', progressBar.element.textContent);
				done();
			});
		});
	});

	describe('Size', function() {
		it('should render bar with 0% width by default', function() {
			progressBar = new ProgressBar();
			assert.strictEqual('0%', progressBar.element.childNodes[0].style.width);
		});

		it('should render bar with the correct width according to `value`', function() {
			progressBar = new ProgressBar({
				value: 60
			});
			assert.strictEqual('60%', progressBar.element.childNodes[0].style.width);
		});

		it('should render bar with the correct width according to `min`, `max` and `value`', function() {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 250
			});
			assert.strictEqual('50%', progressBar.element.childNodes[0].style.width);
		});

		it('should render bar with the correct width after `value` changes', function(done) {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 250
			});

			progressBar.value = 300;
			progressBar.once('stateSynced', function() {
				assert.strictEqual('75%', progressBar.element.childNodes[0].style.width);
				done();
			});
		});

		it('should render bar with the correct width after `min` changes', function(done) {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 250
			});

			progressBar.min = 200;
			progressBar.once('stateSynced', function() {
				assert.strictEqual('33%', progressBar.element.childNodes[0].style.width);
				done();
			});
		});

		it('should render bar with the correct width after `max` changes', function(done) {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 250
			});

			progressBar.max = 300;
			progressBar.once('stateSynced', function() {
				assert.strictEqual('66%', progressBar.element.childNodes[0].style.width);
				done();
			});
		});

		it('should update `value` if it becomes bigger than `max` after `max` changes', function(done) {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 250
			});

			progressBar.max = 200;
			progressBar.once('stateSynced', function() {
				assert.strictEqual(200, progressBar.value);
				progressBar.once('stateSynced', function() {
					assert.strictEqual('100%', progressBar.element.childNodes[0].style.width);
					done();
				});
			});
		});

		it('should update `value` if it becomes smaller than `min` after `min` changes', function(done) {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 250
			});

			progressBar.min = 300;
			progressBar.once('stateSynced', function() {
				assert.strictEqual(300, progressBar.value);
				progressBar.once('stateSynced', function() {
					assert.strictEqual('0%', progressBar.element.childNodes[0].style.width);
					done();
				});
			});
		});

		it('should update specified value to be within specified min and max', function() {
			progressBar = new ProgressBar({
				max: 350,
				min: 150,
				value: 100
			});
			assert.strictEqual(150, progressBar.value);

			progressBar.value = 400;
			assert.strictEqual(350, progressBar.value);
		});
	});

	describe('Bar Class', function() {
		it('should add the specified class to the inner bar element', function() {
			progressBar = new ProgressBar({
				barClass: 'progress-bar-danger'
			});
			assert.ok(dom.hasClass(progressBar.element.childNodes[0], 'progress-bar-danger'));
		});

		it('should update the inner bar element\'s class when `barClass` changes', function(done) {
			progressBar = new ProgressBar({
				barClass: 'progress-bar-danger'
			});

			progressBar.barClass = 'progress-bar-info';
			progressBar.once('stateSynced', function() {
				assert.ok(!dom.hasClass(progressBar.element.childNodes[0], 'progress-bar-danger'));
				assert.ok(dom.hasClass(progressBar.element.childNodes[0], 'progress-bar-info'));
				done();
			});
		});
	});

	describe('ARIA', function() {
		it('should have the progressbar role', function() {
			progressBar = new ProgressBar();
			assert.strictEqual('progressbar', progressBar.element.getAttribute('role'));
		});

		it('should set and update the aria-valuenow ARIA attribute', function(done) {
			progressBar = new ProgressBar({
				value: 20
			});
			assert.strictEqual('20', progressBar.element.getAttribute('aria-valuenow'));

			progressBar.value = 40;
			progressBar.once('stateSynced', function() {
				assert.strictEqual('40', progressBar.element.getAttribute('aria-valuenow'));
				done();
			});
		});

		it('should set and update the aria-valuemin ARIA attribute', function(done) {
			progressBar = new ProgressBar({
				min: 20
			});
			assert.strictEqual('20', progressBar.element.getAttribute('aria-valuemin'));

			progressBar.min = 40;
			progressBar.once('stateSynced', function() {
				assert.strictEqual('40', progressBar.element.getAttribute('aria-valuemin'));
				done();
			});
		});

		it('should set and update the aria-valuemax ARIA attribute', function(done) {
			progressBar = new ProgressBar({
				max: 20
			});
			assert.strictEqual('20', progressBar.element.getAttribute('aria-valuemax'));

			progressBar.max = 40;
			progressBar.once('stateSynced', function() {
				assert.strictEqual('40', progressBar.element.getAttribute('aria-valuemax'));
				done();
			});
		});
	});
});
