'use strict';

import Spinner from '../src/Spinner';

let spinner;

describe('Spinner', function() {
  afterEach(() => {
    if (spinner) {
      spinner.dispose();
    }
  });

  it('should generate the default markup', () => {
    spinner = new Spinner();

    expect(spinner).toMatchSnapshot();
  });
});
