/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable strict */
/* eslint-disable import/no-unresolved */

'use strict';

const BrowserEnvironment = require('jest-environment-jsdom');

class MyEnvironment extends BrowserEnvironment {
  constructor(config) {
    super(
      {
        ...config,
        globals: {
          ...config.globals, Uint32Array, Uint8Array, ArrayBuffer,
        },
      },
    );
  }

  async setup() {}

  async teardown() {}
}

module.exports = MyEnvironment;
