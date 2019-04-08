/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Banner from '../src/Banner';

describe('Banner.node', () => {
  it('should not fail on the server side', () => {
    const banner = Component.renderToString(Banner);
    expect(banner).not.toBeNull();
  });
});
