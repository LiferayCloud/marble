/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Datatable from '../src/Datatable';

describe('Datatable.node', () => {
  it('should not fail on the server side', () => {
    const datatable = Component.renderToString(Datatable);
    expect(datatable).not.toBeNull();
  });
});
