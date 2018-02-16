import Spinner from '../src/Spinner';

let spinner;

describe('Spinner', () => {
  afterEach(() => {
    if (spinner) {
      spinner.dispose();
    }
  });

  it('should generate the default markup', () => {
    spinner = new Spinner();

    expect(spinner).toMatchSnapshot();
  });

  it('should render with a completion state', () => {
    spinner = new Spinner({
      isDone: true
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with a different size', () => {
    spinner = new Spinner({
      size: 'large'
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with a different style', () => {
    spinner = new Spinner({
      style: 'warning'
    });

    expect(spinner).toMatchSnapshot();
  });
});
