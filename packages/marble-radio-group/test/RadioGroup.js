'use strict';

import RadioGroup from '../src/RadioGroup';

let radioGroup;

describe('RadioGroup', function() {
  afterEach(() => {
    if (radioGroup) {
      radioGroup.dispose();
    }
  });

  it('should generate the default markup', () => {
    radioGroup = new RadioGroup();

    expect(radioGroup).toMatchSnapshot();
  });
});
