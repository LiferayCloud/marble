/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Topbar from '../src/Topbar';

describe('Topbar.node', () => {
  it('should not fail on the server side', () => {
    const topbar = Component.renderToString(Topbar);
    expect(topbar).not.toBeNull();
  });
});
