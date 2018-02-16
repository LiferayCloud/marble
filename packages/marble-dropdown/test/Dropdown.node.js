/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Dropdown from '../src/Dropdown';

describe('Dropdown.node', () => {
  it('should not fail on the server side', () => {
    const dropdown = Component.renderToString(Dropdown);
    expect(dropdown).not.toBeNull();
  });
});
