import Checkbox from '../src/Checkbox';
import dom from 'metal-dom';

let checkbox;

describe('Checkbox', () => {
  afterEach(() => {
    if (checkbox) {
      checkbox.dispose();
    }
  });

  it('should generate the default markup', () => {
    checkbox = new Checkbox({
      id: 'checkbox-1',
      label: 'Option 1',
      value: 'Checkbox 1'
    });

    expect(checkbox).toMatchSnapshot();
  });

  it('should be checked', () => {
    checkbox = new Checkbox({
      checked: true
    });

    expect(checkbox).toMatchSnapshot();
  });

  it('should be unchecked', () => {
    checkbox = new Checkbox({
      checked: false
    });

    expect(checkbox).toMatchSnapshot();
  });

  it('should trigger a check event', () => {
    checkbox = new Checkbox();

    const checkEvent = jest.fn();

    checkbox.on('check', checkEvent);

    dom.triggerEvent(checkbox.element.querySelector('input'), 'click');

    expect(checkEvent).toHaveBeenCalled();
  });

  it('should change the checked state after clicking', () => {
    checkbox = new Checkbox({
      checked: false
    });

    dom.triggerEvent(checkbox.element.querySelector('input'), 'click');

    expect(checkbox.checked).toBeTruthy();
  });
});
