'use strict'

const assert = require('assert')
const eslint = require('eslint')

const eslintOpts = {
  useEslintrc: false,
  configFile: 'index.js'
}

var code = 'const foo = 1\nconst bar = (): void => (foo)\nreturn bar\n'

const report = new eslint.CLIEngine(eslintOpts).executeOnText(code)

assert.equal(report.errorCount, 0)
assert.equal(report.warningCount, 0)
