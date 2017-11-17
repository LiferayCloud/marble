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

  it('should render a topbar light', () => {
    topbar = new Topbar({
      theme: 'topbar topbar-light'
    });

    expect(topbar).toMatchSnapshot();
  });

  it('should render a logo with text', () => {
    topbar = new Topbar({
      logo: {
        text: 'Marble'
      }
    });

    expect(topbar).toMatchSnapshot();
  });

  it('should render a logo with icon', () => {
    topbar = new Topbar({
      logo: {
        icon: 'icon-12-github'
      }
    });

    expect(topbar).toMatchSnapshot();
  });

  it('should render a logo with icon and text', () => {
    topbar = new Topbar({
      logo: {
        text: 'Marble',
        icon: 'icon-12-github'
      }
    });

    expect(topbar).toMatchSnapshot();
  });

  it('should render a logo with image', () => {
    topbar = new Topbar({
      logo: {
        image: 'logo.svg'
      }
    });

    expect(topbar).toMatchSnapshot();
  });

  it('should render a logo with image and text', () => {
    topbar = new Topbar({
      logo: {
        text: 'Marble',
        image: 'logo.svg'
      }
    });

    expect(topbar).toMatchSnapshot();
  });
});
