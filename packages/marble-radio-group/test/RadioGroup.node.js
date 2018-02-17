/**
 * @jest-environment node
 */

import Component from 'metal-component';
import RadioGroup from '../src/RadioGroup';

describe('RadioGroup.node', () => {
  it('should not fail on the server side', () => {
    const radioGroup = Component.renderToString(RadioGroup);
    expect(radioGroup).not.toBeNull();
  });
});
