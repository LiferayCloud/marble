'use strict';

import { assert } from 'chai';
import dom from 'metal-dom';
import Toast from '../src/Toast';

describe('Toast', function() {
  it('should update spinner as done', function(done) {
    var toast = new Toast({
      spinner: true,
      spinnerDone: false
    });

    assert.ok(!dom.hasClass(toast.element.querySelector('.spinner'), 'spinner-done'));

    toast.once('stateChanged', () => {
      assert.ok(dom.hasClass(toast.element.querySelector('.spinner'), 'spinner-done'));

      done();
    });

    toast.spinnerDone = true;
  });
});
