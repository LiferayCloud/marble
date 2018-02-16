/**
 * @jest-environment node
 */

import Component from 'metal-component';
import Slider from '../src/Slider';

describe('Slider.node', () => {
  it('should not fail on the server side', () => {
    const slider = Component.renderToString(Slider);
    expect(slider).not.toBeNull();
  });
});
