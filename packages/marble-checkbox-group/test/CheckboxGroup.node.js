/**
 * @jest-environment node
 */

import Component from 'metal-component';
import CheckboxGroup from '../src/CheckboxGroup';

describe('CheckboxGroup.node', () => {
  it('should not fail on the server side', () => {
    const checkboxGroup = Component.renderToString(CheckboxGroup);
    expect(checkboxGroup).not.toBeNull();
  });
});
