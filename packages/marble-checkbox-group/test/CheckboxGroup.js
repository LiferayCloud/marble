'use strict';

import CheckboxGroup from '../src/CheckboxGroup';

let checkbox-group;

describe('CheckboxGroup', function() {
  afterEach(() => {
    if (checkbox-group) {
      checkbox-group.dispose();
    }
  });

  it('should generate the default markup', () => {
    checkbox-group = new CheckboxGroup();

    expect(checkbox-group).toMatchSnapshot();
  });
});
