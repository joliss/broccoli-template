# broccoli-template

A generic preprocessor for Broccoli that turns template files into ES6
JavaScript modules. It wraps templates in a function call of your choice. Note
that no precompilation happens.

## Usage Example

```js
var TemplatePreprocessor = require('broccoli-template')(broccoli);
preprocessorPipeline.addPreprocessor(new TemplatePreprocessor({
  extensions: ['hbs', 'handlebars'],
  compileFunction: 'Ember.Handlebars.compile'
}));
```

Given a file `template.hbs`

```handlebars
{{foo}}
```

this `TemplatePreprocessor` instance will emit a file `template.js`:

```js
export default Ember.Handlebars.compile("{{foo}}");
```

Note that if you need to support different template formats, you will
typically create a separate `TemplatePreprocessor` instance for each format.

### Options

#### extensions (required)

A list of file extensions that this `TemplatePreprocessor` instance applies
to.

#### compileFunction

The client-side compiler function to pass the template string into. If none is
provided, the JavaScript module will export the template string without any
compilation.

## Caveats

* Import statements are not yet supported. The `compileFunction` must be
  globally available.

* Module formats other than ES6 are not supported.
