'use strict'

const assert = require('assert')
const eslint = require('eslint')

// Use the rules defined in this repo to test against.
const eslintOpts = {
  useEslintrc: false,
  configFile: 'index.js'
}

var code = 'const foo = 1\nconst bar = (): void => (foo)\nreturn bar\n'

// Runs the linter on the repo files and asserts no errors were found.
const report = new eslint.CLIEngine(eslintOpts).executeOnText(code)

assert.equal(report.errorCount, 0)
assert.equal(report.warningCount, 0)
