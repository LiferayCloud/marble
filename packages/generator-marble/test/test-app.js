let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test;

describe('marble-generator:app', function() {
  beforeAll(function(done) {
    helpers
      .run(path.join(__dirname, '../app'))
      .withOptions({skipInstall: true})
      .withPrompts({
        componentName: 'MarbleComponent'
      })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      'demos/index.html',
      'src/MarbleComponent.js',
      'src/MarbleComponent.soy',
      'test/MarbleComponent.js',
      'test/__snapshots__/MarbleComponent.js.snap',
      '.babelrc',
      '.gitignore',
      'package.json',
      'README.md',
      'webpack.config.js',
    ]);
  });

  it('content of MarbleComponent.js', function() {
    assert.fileContent(
      'src/MarbleComponent.js',
      /class MarbleComponent extends Component/
    );
    assert.fileContent(
      'src/MarbleComponent.js',
      /Soy\.register\(MarbleComponent, templates\)/
    );
    assert.fileContent('src/MarbleComponent.js', /export {MarbleComponent}/);
    assert.fileContent('src/MarbleComponent.js', /export default MarbleComponent/);
  });

  it('content of MarbleComponent.soy', function() {
    assert.fileContent('src/MarbleComponent.soy', /{namespace MarbleComponent}/);
  });
});
