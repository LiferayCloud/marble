'use strict';

import dom from 'metal-dom';
import Toast from '../src/Toast';

describe('Toast', function() {
	it('should update spinner as done', function(done) {
		var component = new Toast({
			spinner: true,
			spinnerDone: false
		});

		assert.ok(!dom.hasClass(component.element.querySelector('.alert-spinner'), 'alert-spinner-done'));

		component.once('stateChanged', () => {
			assert.ok(dom.hasClass(component.element.querySelector('.alert-spinner'), 'alert-spinner-done'));

			component.once('stateChanged', () => {
				assert.ok(!dom.hasClass(component.element.querySelector('.alert-spinner'), 'alert-spinner-done'));
				done();
			});

			component.spinnerDone = false;
		});

		component.spinnerDone = true;
	});
});
