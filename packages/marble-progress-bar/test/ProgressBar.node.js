/**
 * @jest-environment node
 */

import Component from 'metal-component';
import ProgressBar from '../src/ProgressBar';

describe('ProgressBar.node', () => {
  it('should not fail on the server side', () => {
    const progressBar = Component.renderToString(ProgressBar);
    expect(progressBar).not.toBeNull();
  });
});
