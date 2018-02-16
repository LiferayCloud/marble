/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Tooltip from '../src/Tooltip';

describe('Tooltip.node', () => {
  it('should not fail on the server side', () => {
    const tooltip = Component.renderToString(Tooltip);
    expect(tooltip).not.toBeNull();
  });
});
