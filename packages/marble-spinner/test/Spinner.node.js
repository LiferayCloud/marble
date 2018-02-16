/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Spinner from '../src/Spinner';

describe('Spinner.node', () => {
  it('should not fail on the server side', () => {
    const spinner = Component.renderToString(Spinner);
    expect(spinner).not.toBeNull();
  });
});
