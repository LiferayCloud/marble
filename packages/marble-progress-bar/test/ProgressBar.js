import dom from 'metal-dom';
import ProgressBar from '../src/ProgressBar';

describe('ProgressBar', () => {
  var progressBar;

  afterEach(() => {
    progressBar.dispose();
  });

  describe('Label', () => {
    it('should render specified label', () => {
      progressBar = new ProgressBar({
        label: 'My Label'
      });
      expect('My Label').toBe(progressBar.element.textContent);
    });

    it('should render specified label via incremental dom function', () => {
      progressBar = new ProgressBar({
        label: () => IncrementalDOM.text('My Label')
      });
      expect('My Label').toBe(progressBar.element.textContent);
    });

    it('should not render any text if no label is specified', () => {
      progressBar = new ProgressBar();
      expect('').toBe(progressBar.element.textContent);
    });

    it('should update the rendered label when the state changes', (done) => {
      progressBar = new ProgressBar();

      progressBar.label = 'My Label';
      progressBar.once('stateSynced', () => {
        expect('My Label').toBe(progressBar.element.textContent);
        done();
      });
    });
  });

  describe('Size', () => {
    it('should render bar with 0% width by default', () => {
      progressBar = new ProgressBar();
      expect('0%').toBe(progressBar.element.childNodes[0].style.width);
    });

    it('should render bar with the correct width according to `value`', () => {
      progressBar = new ProgressBar({
        value: 60
      });
      expect('60%').toBe(progressBar.element.childNodes[0].style.width);
    });

    it('should render bar with the correct width according to `min`, `max` and `value`', () => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 250
      });
      expect('50%').toBe(progressBar.element.childNodes[0].style.width);
    });

    it('should render bar with the correct width after `value` changes', (done) => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 250
      });

      progressBar.value = 300;
      progressBar.once('stateSynced', () => {
        expect('75%').toBe(progressBar.element.childNodes[0].style.width);
        done();
      });
    });

    it('should render bar with the correct width after `min` changes', (done) => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 250
      });

      progressBar.min = 200;
      progressBar.once('stateSynced', () => {
        expect('33%').toBe(progressBar.element.childNodes[0].style.width);
        done();
      });
    });

    it('should render bar with the correct width after `max` changes', (done) => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 250
      });

      progressBar.max = 300;
      progressBar.once('stateSynced', () => {
        expect('66%').toBe(progressBar.element.childNodes[0].style.width);
        done();
      });
    });

    it('should update `value` if it becomes bigger than `max` after `max` changes', (done) => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 250
      });

      progressBar.max = 200;
      progressBar.once('stateSynced', () => {
        expect(200).toBe(progressBar.value);
        progressBar.once('stateSynced', () => {
          expect('100%').toBe(progressBar.element.childNodes[0].style.width);
          done();
        });
      });
    });

    it('should update `value` if it becomes smaller than `min` after `min` changes', (done) => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 250
      });

      progressBar.min = 300;
      progressBar.once('stateSynced', () => {
        expect(300).toBe(progressBar.value);
        progressBar.once('stateSynced', () => {
          expect('0%').toBe(progressBar.element.childNodes[0].style.width);
          done();
        });
      });
    });

    it('should update specified value to be within specified min and max', () => {
      progressBar = new ProgressBar({
        max: 350,
        min: 150,
        value: 100
      });
      expect(150).toBe(progressBar.value);

      progressBar.value = 400;
      expect(350).toBe(progressBar.value);
    });
  });

  describe('Bar Class', () => {
    it('should add the specified class to the inner bar element', () => {
      progressBar = new ProgressBar({
        barClass: 'progress-bar-danger'
      });
      expect(dom.hasClass(progressBar.element.childNodes[0], 'progress-bar-danger')).toBeTruthy();
    });

    it('should update the inner bar element\'s class when `barClass` changes', (done) => {
      progressBar = new ProgressBar({
        barClass: 'progress-bar-danger'
      });

      progressBar.barClass = 'progress-bar-info';
      progressBar.once('stateSynced', () => {
        expect(!dom.hasClass(progressBar.element.childNodes[0], 'progress-bar-danger')).toBeTruthy();
        expect(dom.hasClass(progressBar.element.childNodes[0], 'progress-bar-info')).toBeTruthy();
        done();
      });
    });
  });

  describe('ARIA', () => {
    it('should have the progressbar role', () => {
      progressBar = new ProgressBar();
      expect('progressbar').toBe(progressBar.element.getAttribute('role'));
    });

    it('should set and update the aria-valuenow ARIA attribute', (done) => {
      progressBar = new ProgressBar({
        value: 20
      });
      expect('20').toBe(progressBar.element.getAttribute('aria-valuenow'));

      progressBar.value = 40;
      progressBar.once('stateSynced', () => {
        expect('40').toBe(progressBar.element.getAttribute('aria-valuenow'));
        done();
      });
    });

    it('should set and update the aria-valuemin ARIA attribute', (done) => {
      progressBar = new ProgressBar({
        min: 20
      });
      expect('20').toBe(progressBar.element.getAttribute('aria-valuemin'));

      progressBar.min = 40;
      progressBar.once('stateSynced', () => {
        expect('40').toBe(progressBar.element.getAttribute('aria-valuemin'));
        done();
      });
    });

    it('should set and update the aria-valuemax ARIA attribute', (done) => {
      progressBar = new ProgressBar({
        max: 20
      });
      expect('20').toBe(progressBar.element.getAttribute('aria-valuemax'));

      progressBar.max = 40;
      progressBar.once('stateSynced', () => {
        expect('40').toBe(progressBar.element.getAttribute('aria-valuemax'));
        done();
      });
    });
  });
});
