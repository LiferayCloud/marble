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
      isDone: true,
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with a different size', () => {
    spinner = new Spinner({
      size: 'large',
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with warning style', () => {
    spinner = new Spinner({
      style: 'warning',
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with danger style', () => {
    spinner = new Spinner({
      style: 'danger',
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with success style', () => {
    spinner = new Spinner({
      style: 'success',
    });

    expect(spinner).toMatchSnapshot();
  });

  it('should render with success style and with a completion state', () => {
    spinner = new Spinner({
      isDone: true,
      style: 'success',
    });

    expect(spinner).toMatchSnapshot();
  });
});
