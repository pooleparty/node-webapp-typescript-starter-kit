module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  transform: {
    '^.+\\.(j|t)sx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  testMatch: ['**/__tests__/*.(ts|tsx)'],
  testURL: 'http://localhost',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/src/typings.d.ts',
    '/src/global.d.ts',
    '/src/types.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  setupFiles: ['./test/setup.js'],
  moduleNameMapper: {
    '\\.(css|jpg|png|svg)$': '<rootDir>/test/empty-module.js',
  },
  watchPathIgnorePatterns: ['<rootDir>/public', '<rootDir>/build'],
};
