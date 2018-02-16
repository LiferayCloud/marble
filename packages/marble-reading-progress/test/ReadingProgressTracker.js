import dom from 'metal-dom';
import ReadingProgressTracker from '../src/ReadingProgressTracker';

describe('ReadingProgressTracker', function() {
  var readingProgress;

  beforeAll(function() {
    dom.enterDocument('<style id="style">body{margin:0;padding:0;}');
    dom.enterDocument('<div id="content">' +
      '<div id="content1" style="height:5000px;">Link1</div>' +
      '<div id="content2" style="height:5000px;">Link2</div>' +
      '<div id="content3" style="height:5000px;">Link3</div></div>'
    );
    dom.enterDocument('<ul id="links">' +
      '<li><a id="link1" href="#content1">link1</a></li>' +
      '<li><a id="link2" href="#content2">link2</a></li>' +
      '<li><a id="link3" href="#content3">link3</a></li></ul>'
    );
  });

  afterEach(function() {
    if (readingProgress) {
      readingProgress.dispose();
    }
  });

  afterAll(function() {
    document.body.innerHTML = '';
  });

  it.skip('should update progress while scrolling', function(done) {
    readingProgress = new ReadingProgressTracker({
      element: '#links'
    });
    dom.once(document, 'scroll', function() {
      expect(0).toBe(readingProgress.activeIndex);
      expect(20).toBe(readingProgress.progress);

      dom.once(document, 'scroll', function() {
        expect(0).toBe(readingProgress.activeIndex);
        expect(60).toBe(readingProgress.progress);
        done();
      });
      window.scrollTo(0, 3000);
    });
    window.scrollTo(0, 1000);
  });

  it.skip('should set "data-reading-progress" to the progress percentage', function(done) {
    readingProgress = new ReadingProgressTracker({
      element: '#links'
    });
    var contents = document.querySelectorAll('#links a');

    dom.once(document, 'scroll', function() {
      expect(0).toBe(readingProgress.activeIndex);
      expect('20').toBe(contents.item(0).getAttribute('data-reading-progress'));
      expect(!contents.item(1).hasAttribute('data-reading-progress')).toBeTruthy();
      expect(!contents.item(2).hasAttribute('data-reading-progress')).toBeTruthy();

      dom.once(document, 'scroll', function() {
        expect(1).toBe(readingProgress.activeIndex);
        expect(!contents.item(0).hasAttribute('data-reading-progress')).toBeTruthy();
        expect('60').toBe(contents.item(1).getAttribute('data-reading-progress'));
        expect(!contents.item(2).hasAttribute('data-reading-progress')).toBeTruthy();
        done();
      });
      window.scrollTo(0, 8000);
    });
    window.scrollTo(0, 1000);
  });

  it.skip('should mark as complete/incomplete while scrolling', function(done) {
    readingProgress = new ReadingProgressTracker({
      element: '#links'
    });
    var contents = document.querySelectorAll('#links a');

    dom.once(document, 'scroll', function() {
      expect(!dom.hasClass(contents.item(0), readingProgress.completedClass)).toBeTruthy();
      expect(!dom.hasClass(contents.item(1), readingProgress.completedClass)).toBeTruthy();
      expect(!dom.hasClass(contents.item(2), readingProgress.completedClass)).toBeTruthy();

      dom.once(document, 'scroll', function() {
        expect(dom.hasClass(contents.item(0), readingProgress.completedClass)).toBeTruthy();
        expect(!dom.hasClass(contents.item(1), readingProgress.completedClass)).toBeTruthy();
        expect(!dom.hasClass(contents.item(2), readingProgress.completedClass)).toBeTruthy();

        dom.once(document, 'scroll', function() {
          expect(dom.hasClass(contents.item(0), readingProgress.completedClass)).toBeTruthy();
          expect(dom.hasClass(contents.item(1), readingProgress.completedClass)).toBeTruthy();
          expect(dom.hasClass(contents.item(2), readingProgress.completedClass)).toBeTruthy();

          dom.once(document, 'scroll', function() {
            expect(dom.hasClass(contents.item(0), readingProgress.completedClass)).toBeTruthy();
            expect(dom.hasClass(contents.item(1), readingProgress.completedClass)).toBeTruthy();
            expect(!dom.hasClass(contents.item(2), readingProgress.completedClass)).toBeTruthy();
            done();
          });
          window.scrollTo(0, 12000);
        });
        window.scrollTo(0, 15000);
      });
      window.scrollTo(0, 8000);
    });
    window.scrollTo(0, 1000);
  });

  it.skip('should not set progress on any link if none is active', function(done) {
    dom.enterDocument('<style id="style">body{ margin-top: 100px; }');
    readingProgress = new ReadingProgressTracker({
      element: '#links'
    });
    var links = document.querySelectorAll('#links a');

    dom.once(document, 'scroll', function() {
      expect(-1).toBe(readingProgress.activeIndex);
      expect(!links.item(0).hasAttribute('data-reading-progress')).toBeTruthy();
      expect(!links.item(1).hasAttribute('data-reading-progress')).toBeTruthy();
      expect(!links.item(2).hasAttribute('data-reading-progress')).toBeTruthy();
      done();
    });
    window.scrollTo(0, 50);
  });
});
