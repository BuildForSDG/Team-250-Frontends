module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'png', 'md', 'html'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|html)$': '<rootDir>/__test__',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  rootDir: '__tests__',
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node'
};
