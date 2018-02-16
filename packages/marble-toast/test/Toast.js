import dom from 'metal-dom';
import Toast from '../src/Toast';

describe('Toast', () => {
  it('should update spinner as done', (done) => {
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
