/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Toast from '../src/Toast';

describe('Toast.node', () => {
  it('should not fail on the server side', () => {
    const tooltip = Component.renderToString(Toast);
    expect(tooltip).not.toBeNull();
  });
});
