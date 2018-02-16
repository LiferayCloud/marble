/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Autocomplete from '../src/Autocomplete';

describe('Autocomplete.node', () => {
  it('should not fail on the server side', () => {
    const autocomplete = Component.renderToString(Autocomplete);
    expect(autocomplete).not.toBeNull();
  });
});
