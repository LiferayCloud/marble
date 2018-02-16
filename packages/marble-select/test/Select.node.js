/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Select from '../src/Select';

describe('Select.node', () => {
  it('should not fail on the server side', () => {
    const select = Component.renderToString(Select);
    expect(select).not.toBeNull();
  });
});
