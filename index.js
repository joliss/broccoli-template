var jsStringEscape = require('js-string-escape')
var broccoli = require('broccoli')

module.exports = TemplateFilter
TemplateFilter.prototype = Object.create(broccoli.Filter.prototype)
TemplateFilter.prototype.constructor = TemplateFilter
function TemplateFilter (inputTree, options) {
  if (!(this instanceof TemplateFilter)) return new TemplateFilter(inputTree, options)
  this.inputTree = inputTree
  this.extensions = options.extensions
  this.compileFunction = options.compileFunction || ''
}

TemplateFilter.prototype.targetExtension = 'js'

TemplateFilter.prototype.processString = function (string) {
  return 'export default ' + this.compileFunction +
    '("' + jsStringEscape(string) + '");\n'
}
