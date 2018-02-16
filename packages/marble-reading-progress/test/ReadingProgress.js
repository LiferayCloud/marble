import dom from 'metal-dom';
import ReadingProgress from '../src/ReadingProgress';

describe('ReadingProgress', function() {
  var readingProgress;

  beforeAll(function() {
    dom.enterDocument('<style id="style">body{margin:0;padding:0;}');
    dom.enterDocument('<div id="content">' +
      '<div id="content1" style="height:5000px;"><h1>Title 1</h1><p>Content1</p></div>' +
      '<div id="content2" style="height:5000px;"><h1>Title 2</h1><p>Content2</p></div>' +
      '<div id="content3" style="height:5000px;"><h1>Title 3</h1><p>Content3</p></div></div>'
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

  it('should render the items according to the "items" attribute', function() {
    readingProgress = new ReadingProgress({
      items: [
        {
          href: '#content1',
          time: 200,
          title: 'Chosen Title 1'
        },
        {
          href: '#content2',
          time: 100,
          title: 'Chosen Title 2'
        }
      ]
    });

    var items = readingProgress.element.querySelectorAll('a');
    expect('#content1').toBe(items.item(0).hash);
    expect('Chosen Title 1').toBe(items.item(0).querySelector('.reading-title').textContent);
    expect('3 min read').toBe(items.item(0).querySelector('.reading-subtitle').textContent);
    expect('#content2').toBe(items.item(1).hash);
    expect('Chosen Title 2').toBe(items.item(1).querySelector('.reading-title').textContent);
    expect('2 min read').toBe(items.item(1).querySelector('.reading-subtitle').textContent);
  });

  it('should generate title from the referenced content when none is given', function() {
    readingProgress = new ReadingProgress({
      items: ['#content1', '#content2', '#content3']
    });

    var titles = readingProgress.element.querySelectorAll('.reading-title');
    expect('Title 1').toBe(readingProgress.items[0].title);
    expect('Title 1').toBe(titles.item(0).textContent);
    expect('Title 2').toBe(readingProgress.items[1].title);
    expect('Title 2').toBe(titles.item(1).textContent);
    expect('Title 3').toBe(readingProgress.items[2].title);
    expect('Title 3').toBe(titles.item(2).textContent);
  });

  it('should generate expected time from the referenced content when none is given', function() {
    document.querySelector('#content1 p').innerHTML = getBigText(1600);
    document.querySelector('#content2 p').innerHTML = getBigText(750);
    document.querySelector('#content3 p').innerHTML = getBigText(3100);

    readingProgress = new ReadingProgress({
      items: ['#content1', '#content2', '#content3']
    });

    var times = readingProgress.element.querySelectorAll('.reading-subtitle');
    expect(64).toBe(readingProgress.items[0].time);
    expect('1 min read').toBe(times.item(0).textContent);
    expect(30).toBe(readingProgress.items[1].time);
    expect('30 sec read').toBe(times.item(1).textContent);
    expect(124).toBe(readingProgress.items[2].time);
    expect('2 min read').toBe(times.item(2).textContent);
  });

  it('should only generate missing item info when href is hash link', function() {
    readingProgress = new ReadingProgress({
      items: ['#content1', 'noHash', '#content3']
    });

    expect('Title 1').toBe(readingProgress.items[0].title);
    expect(!readingProgress.items[1].title).toBeTruthy();
    expect('Title 3').toBe(readingProgress.items[2].title);
  });

  it('should not create new ReadingProgressTracker after each render', function(done) {
    readingProgress = new ReadingProgress({
      items: ['#content1', '#content2', '#content3']
    });

    var tracker = readingProgress.getTracker();
    expect(tracker).toBeTruthy();

    readingProgress.items = ['#content1', '#content2'];
    readingProgress.once('stateSynced', function() {
      expect(tracker).toBe(readingProgress.getTracker());
      done();
    });
  });

  it('should update progress bar when the tracker\'s progress attr changes', function() {
    readingProgress = new ReadingProgress({
      items: ['#content1', '#content2', '#content3']
    });
    var tracker = readingProgress.getTracker();

    tracker.activeIndex = 1;
    tracker.progress = 30;

    var circle = readingProgress.element.querySelectorAll('circle').item(1);
    expect('70').toBe(circle.getAttribute('stroke-dashoffset'));

    tracker.progress = 40;
    expect('60').toBe(circle.getAttribute('stroke-dashoffset'));
  });

  it('should set the title as an empty string if title element is not found', function() {
    readingProgress = new ReadingProgress({
      items: ['#content1', '#content2', '#content3'],
      titleSelector: 'h2'
    });

    expect('').toBe(readingProgress.items[0].title);
    expect('').toBe(readingProgress.items[1].title);
    expect('').toBe(readingProgress.items[2].title);
  });

  function getBigText(charCount) {
    var text = '';
    for (var i = 0; i < charCount; i++) {
      text += 'c';
    }
    return text;
  }
});
