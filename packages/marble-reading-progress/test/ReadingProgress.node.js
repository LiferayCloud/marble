/**
 * @jest-environment node
 */

import Component from 'metal-component';
import ReadingProgress from '../src/ReadingProgress';

describe('ReadingProgress.node', () => {
  it('should not fail on the server side', () => {
    const readingProgress = Component.renderToString(ReadingProgress);
    expect(readingProgress).not.toBeNull();
  });
});
