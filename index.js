module.exports = function (broccoli) {
  var jsStringEscape = require('js-string-escape')

  TemplateFilter.prototype = Object.create(broccoli.Filter.prototype)
  TemplateFilter.prototype.constructor = TemplateFilter
  function TemplateFilter (inputTree, options) {
    this.inputTree = inputTree
    this.extensions = options.extensions
    this.compileFunction = options.compileFunction || ''
  }

  TemplateFilter.prototype.targetExtension = 'js'

  TemplateFilter.prototype.processString = function (string) {
    return 'export default ' + this.compileFunction +
      '("' + jsStringEscape(string) + '");\n'
  }

  return function (inputTree, options) {
    return new TemplateFilter(inputTree, options)
  }
}
