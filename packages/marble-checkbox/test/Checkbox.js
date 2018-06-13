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
});
