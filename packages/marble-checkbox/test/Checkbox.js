import Checkbox from '../src/Checkbox';

let checkbox;

describe('Checkbox', () => {
  afterEach(() => {
    if (checkbox) {
      checkbox.dispose();
    }
  });

  it('should generate the default markup', () => {
    checkbox = new Checkbox();

    expect(checkbox).toMatchSnapshot();
  });

  it('should be unchecked', () => {
    checkbox = new Checkbox({
      id: 'checkbox-1',
      label: 'Option 1',
      value: 'Checkbox 1',
    });

    expect(checkbox).toMatchSnapshot();
  });

  it('should be checked', () => {
    checkbox = new Checkbox({
      checked: true,
      id: 'checkbox-2',
      label: 'Option 2',
      value: 'Checkbox 2',
    });

    expect(checkbox).toMatchSnapshot();
  });
});
