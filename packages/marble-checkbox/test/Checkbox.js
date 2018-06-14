import Checkbox from '../src/Checkbox';

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
});
