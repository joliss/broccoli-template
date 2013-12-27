module.exports = function (broccoli) {
  var jsStringEscape = require('js-string-escape')

  TemplatePreprocessor.prototype = Object.create(broccoli.Preprocessor.prototype)
  TemplatePreprocessor.prototype.constructor = TemplatePreprocessor
  function TemplatePreprocessor (options) {
    this.extensions = options.extensions
    this.compileFunction = options.compileFunction || ''
  }

  TemplatePreprocessor.prototype.targetExtension = 'js'

  TemplatePreprocessor.prototype.processString = function (string, info, callback) {
    callback(null,
      'export default ' + this.compileFunction +
      '("' + jsStringEscape(string) + '");\n')
  }

  return TemplatePreprocessor
}
