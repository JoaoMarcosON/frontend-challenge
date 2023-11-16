/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!my-module)',
  ],
};