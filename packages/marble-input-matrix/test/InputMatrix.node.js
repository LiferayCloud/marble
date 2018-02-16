/**
 * @jest-environment node
 */

import Component from 'metal-component';
import InputMatrix from '../src/InputMatrix';

describe('InputMatrix.node', () => {
  it('should not fail on the server side', () => {
    const inputMatrix = Component.renderToString(InputMatrix);
    expect(inputMatrix).not.toBeNull();
  });
});
