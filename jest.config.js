module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  testRegex: '\\.test\\.tsx?$',
  preset: 'ts-jest',
};