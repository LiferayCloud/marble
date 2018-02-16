import { async } from 'metal';
import dom from 'metal-dom';
// import DragTestHelper from 'metal-drag-drop/test/fixtures/DragTestHelper';
import Position from 'metal-position';
import Slider from '../src/Slider';

var slider;

describe('Slider', () => {
  afterEach(() => {
    if (slider) {
      slider.dispose();
    }
  });

  it('should create a hidden named input so it can be embedded in a form', () => {
    slider = new Slider({
      inputName: 'sliderInput',
      value: 50
    });

    var sliderInput = slider.element.querySelector('input[name="sliderInput"]');

    expect(sliderInput).toBeTruthy();
    expect('50').toBe(sliderInput.getAttribute('value'));
  });

  it('should update the value of the hidden input when the slider value changes', (done) => {
    slider = new Slider({
      inputName: 'sliderInput',
      value: 20
    });

    expect('20').toBe(
      slider.element.querySelector('input[name="sliderInput"]').getAttribute('value')
    );

    slider.value = 80;

    async.nextTick(() => {
      expect('80').toBe(
        slider.element.querySelector('input[name="sliderInput"]').getAttribute('value')
      );
      done();
    });
  });

  it.skip('should update the value of the slider when clicking on the rail area', (done) => {
    slider = new Slider({
      min: 0,
      value: 50,
      max: 100
    });

    const rail = Position.getRegion(slider.element, true);
    dom.triggerEvent(slider.element.querySelector('.rail'), 'click', {
      offsetX: 0.9 * rail.width
    });

    async.nextTick(() => {
      expect(90).toBe(slider.value);

      dom.triggerEvent(slider.element.querySelector('.rail-active'), 'click', {
        offsetX: 0.1 * rail.width
      });

      async.nextTick(() => {
        expect(10).toBe(slider.value);
        done();
      });
    });
  });

  it('should update the position percentage to next value if clicking close to the right of the handle', (done) => {
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

    async.nextTick(() => {
      expect('100%').toBe(slider.element.querySelector('.rail-handle').style.left);
      done();
    });
  });

  it.skip('should update the position percentage to previous value if clicking close to the left of the handle', (done) => {
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

    async.nextTick(() => {
      expect('0%').toBe(slider.element.querySelector('.rail-handle').style.left);
      done();
    });
  });

  it('should not update the value if clicking on handle', (done) => {
    slider = new Slider({
      min: 0,
      value: 1,
      max: 2
    });

    const railHandleEl = slider.element.querySelector('.rail-handle');
    expect('50%').toBe(railHandleEl.style.left);

    dom.triggerEvent(slider.element.querySelector('.handle'), 'click');
    async.nextTick(() => {
      expect('50%').toBe(railHandleEl.style.left);
      done();
    });
  });

  it.skip('should update the value of the slider when dragging the rail handle', (done) => {
    slider = new Slider({
      min: 0,
      value: 0,
      max: 100
    });

    var rail = Position.getRegion(slider.element, true);
    var handle = slider.element.querySelector('.handle');

    DragTestHelper.triggerMouseEvent(handle, 'mousedown', 0, 0);
    DragTestHelper.triggerMouseEvent(document, 'mousemove', rail.width / 2, 0);

    async.nextTick(() => {
      expect(50).toBe(slider.value);
      done();
    });
  });

  it.skip('should update the position percentage to 0% when dragged to before beginning of rail', (done) => {
    slider = new Slider({
      min: 0,
      value: 50,
      max: 100
    });

    var rail = Position.getRegion(slider.element, true);
    var handle = slider.element.querySelector('.handle');

    DragTestHelper.triggerMouseEvent(handle, 'mousedown', rail.width / 2, 0);
    DragTestHelper.triggerMouseEvent(document, 'mousemove', -10, 0);

    async.nextTick(() => {
      expect('0%').toBe(slider.element.querySelector('.rail-handle').style.left);
      done();
    });
  });

  it.skip('should update the position percentage to 100% when dragged to after end of rail', (done) => {
    slider = new Slider({
      min: 0,
      value: 0,
      max: 100
    });

    var rail = Position.getRegion(slider.element, true);
    var handle = slider.element.querySelector('.handle');

    DragTestHelper.triggerMouseEvent(handle, 'mousedown', 0, 0);
    DragTestHelper.triggerMouseEvent(document, 'mousemove', rail.right + 10, 0);

    async.nextTick(() => {
      expect('100%').toBe(slider.element.querySelector('.rail-handle').style.left);
      done();
    });
  });

  it('should update aria attributes when value changes', (done) => {
    slider = new Slider({
      max: 100,
      min: 0,
      value: 20
    });

    const handle = slider.element.querySelector('.handle');
    expect('20').toBe(handle.getAttribute('aria-valuenow'));

    slider.value = 80;
    slider.once('stateSynced', () => {
      expect('80').toBe(handle.getAttribute('aria-valuenow'));
      done();
    });
  });

  it('should update the drag container when element changes', () => {
    slider = new Slider();
    expect(slider.element).toBe(slider.getDrag().container);

    slider.element = document.createElement('div');
    expect(slider.element).toBe(slider.getDrag().container);
  });

  it('should not update the drag container when element changes to null', () => {
    slider = new Slider();
    slider.element = null;
  });

  it('should update the drag container element when element changes', () => {
    slider = new Slider();
    expect(slider.element).toBe(slider.getDrag().container);

    var element = document.createElement('div');
    dom.append(element, '<div class="rail"></div>');
    slider.element = element;
    expect(element).toBe(slider.getDrag().container);
  });

  it('shouldnt update value if its smaller than min', () => {
    slider = new Slider({
      min: 30,
      value: 50
    });

    slider.value = 10;

    expect(50).toBe(slider.value);
  });

  it('shouldnt update value if its bigger than max', () => {
    slider = new Slider({
      max: 100,
      value: 50
    });

    slider.value = 200;

    expect(50).toBe(slider.value);
  });

  it('should update value when max becomes smaller than value', (done) => {
    slider = new Slider({
      min: 0,
      value: 50
    });

    slider.min = 80;

    async.nextTick(() => {
      expect(80).toBe(slider.value);
      done();
    });
  });

  it('should update value when min becomes bigger than value', (done) => {
    slider = new Slider({
      max: 100,
      value: 50
    });

    slider.max = 20;

    async.nextTick(() => {
      expect(20).toBe(slider.value);
      done();
    });
  });

  it('should add aria attributes for min/max values', () => {
    slider = new Slider({
      max: 100,
      min: 0
    });

    const handle = slider.element.querySelector('.handle');
    expect('100').toBe(handle.getAttribute('aria-valuemax'));
    expect('0').toBe(handle.getAttribute('aria-valuemin'));
  });

  it('should allow calling the soy template without params', () => {
    var element = document.createElement('div');
    IncrementalDOM.patch(element, Slider.TEMPLATE);
    expect('0%').toBe(element.querySelector('.rail-active').style.width);
    expect('0').toBe(element.textContent);
  });
});
