test('requiring some files does not blow up', () => {
  require('../babel-transform')
  require('../babelrc')
  require('../commitlint.config')
  require('../eslintrc')
  require('../jest.config')
  require('../lintstagedrc')
  require('../prettierrc')
  require('../rollup.config')
  require('..').getRollupConfig()
})
