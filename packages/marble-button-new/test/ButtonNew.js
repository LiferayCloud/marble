import ButtonNew from '../src/ButtonNew';

let button-new;

describe('ButtonNew', () => {
  afterEach(() => {
    if (button-new) {
      button-new.dispose();
    }
  });

  it('should generate the default markup', () => {
    button-new = new ButtonNew();

    expect(button-new).toMatchSnapshot();
  });
});
