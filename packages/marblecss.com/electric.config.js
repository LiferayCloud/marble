'use strict';

var marble = require('marble');

module.exports = {
  metalComponents: [
    'electric-marble-components',
    'metal-dropdown',
    'metal-progressbar',
    'metal-select',
    'metal-slider',
    'metal-input-matrix',
    'metal-input',
    'metal-toast',
    'metal-alert',
    'metal-tooltip'
  ],
  sassOptions: {
    includePaths: ['node_modules', marble.src]
  },
  vendorSrc: ['node_modules/marble/build/fonts/**']
};
