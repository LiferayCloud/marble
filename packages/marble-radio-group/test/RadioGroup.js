import RadioGroup from '../src/RadioGroup';

let radioGroup;

const items = [
  {
    id: 'radio-1-1',
    checked: true,
    label: 'Option 1',
    value: 'Radio 1',
  },
  {
    id: 'radio-1-2',
    label: 'Option 2',
    value: 'Radio 2',
  },
  {
    id: 'radio-1-3',
    label: 'Option 3',
    value: 'Radio 3',
  },
];

describe('RadioGroup', function() {
  afterEach(() => {
    if (radioGroup) {
      radioGroup.dispose();
    }
  });

  it('should generate the default markup', () => {
    radioGroup = new RadioGroup({
      name: 'radio-group',
      items: items
    });

    expect(radioGroup).toMatchSnapshot();
  });

  it('should render with inline style', () => {
    radioGroup = new RadioGroup({
      name: 'radio-group',
      style: 'radio-group radio-group-inline',
      items: items
    });

    expect(radioGroup).toMatchSnapshot();
  });
});
