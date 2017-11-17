'use strict';

import Topbar from '../src/Topbar';

let topbar;

describe('Topbar', function() {
  afterEach(() => {
    if (topbar) {
      topbar.dispose();
    }
  });

  it('should generate the default markup', () => {
    topbar = new Topbar();

    expect(topbar).toMatchSnapshot();
  });
});
