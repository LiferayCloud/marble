import CheckboxGroup from '../src/CheckboxGroup';

let checkboxGroup;

const items = [
  {
    id: 'checkbox-1-1',
    checked: true,
    label: 'Option 1',
    value: 'Checkbox 1',
  },
  {
    id: 'checkbox-1-2',
    label: 'Option 2',
    value: 'Checkbox 2',
  },
  {
    id: 'checkbox-1-3',
    label: 'Option 3',
    value: 'Checkbox 3',
  },
];

describe('CheckboxGroup', function() {
  afterEach(() => {
    if (checkboxGroup) {
      checkboxGroup.dispose();
    }
  });

  it('should generate the default markup', () => {
    checkboxGroup = new CheckboxGroup({
      name: 'checkbox-group',
      items: items
    });

    expect(checkboxGroup).toMatchSnapshot();
  });

  it('should render with inline style', () => {
    checkboxGroup = new CheckboxGroup({
      name: 'checkbox-group',
      style: 'checkbox-group checkbox-group-inline',
      items: items
    });

    expect(checkboxGroup).toMatchSnapshot();
  });
});
