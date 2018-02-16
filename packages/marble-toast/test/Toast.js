import dom from 'metal-dom';
import Toast from '../src/Toast';

describe('Toast', function() {
  it('should update spinner as done', function(done) {
    var toast = new Toast({
      spinner: true,
      spinnerDone: false
    });

    expect(!dom.hasClass(toast.element.querySelector('.spinner'), 'spinner-done')).toBeTruthy();

    toast.once('stateChanged', () => {
      expect(dom.hasClass(toast.element.querySelector('.spinner'), 'spinner-done')).toBeTruthy();

      done();
    });

    toast.spinnerDone = true;
  });
});
