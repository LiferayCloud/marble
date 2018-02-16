/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Alert from '../src/Alert';

describe('Alert.node', () => {
  it('should not fail on the server side', () => {
    const alert = Component.renderToString(Alert);
    expect(alert).not.toBeNull();
  });
});
