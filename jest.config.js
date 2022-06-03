/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  testEnvironment: './custom-jest-environment.js',
  // testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js',
  },

};
