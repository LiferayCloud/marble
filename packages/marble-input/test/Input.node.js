/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Input from '../src/Input';

describe('Input.node', () => {
  it('should not fail on the server side', () => {
    const input = Component.renderToString(Input);
    expect(input).not.toBeNull();
  });
});
