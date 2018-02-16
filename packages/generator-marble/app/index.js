let _ = require('lodash');
let chalk = require('chalk');
let yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    let done = this.async();

    let prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'How do you want to name your component?',
        default: 'Component',
        validate: function(input) {
          if (!input) {
            return 'You must provide a component name.';
          }
          if (!/^[^_\-\s\d][^_\-\s]*$/.test(input)) {
            return (
              'Invalid component name. Component names can\'t contain whitespace or ' +
              'any of the following characters: "-_". Also, class names can\'t ' +
              'start with digits.'
            );
          }

          return true;
        },
      },
    ];

    this.prompt(
      prompts,
      function(props) {
        let componentName = props.componentName;

        this.componentName = componentName;
        this.camelCaseName = _.camelCase(componentName);
        this.capitalizeName = _.startCase(componentName);
        this.kebabCaseName = _.kebabCase(componentName);

        this.packageName = `marble-${this.kebabCaseName}`;
        done();
      }.bind(this)
    );
  },

  writing: function() {
    this.destinationRoot('packages/' + this.packageName);
    this.fs.copyTpl(
      this.templatePath('_demos/_index.html'),
      this.destinationPath('demos/index.html'),
      {
        camelCaseName: this.camelCaseName,
        componentName: this.componentName,
        capitalizeName: this.capitalizeName,
        packageName: this.packageName,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_src/_Boilerplate.soy'),
      this.destinationPath('src/' + this.componentName + '.soy'),
      {
        componentName: this.componentName,
        kebabCaseName: this.kebabCaseName,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_src/_Boilerplate.js'),
      this.destinationPath('src/' + this.componentName + '.js'),
      {
        buildFormat: this.buildFormat,
        componentName: this.componentName,
        templateLanguage: this.templateLanguage,
        packageName: this.packageName,
      }
    );

    this.fs.copyTpl(
      this.templatePath('_test/_Boilerplate.js'),
      this.destinationPath('test/' + this.componentName + '.js'),
      {
        componentName: this.componentName,
        kebabCaseName: this.kebabCaseName,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_test/__snapshots__/_Boilerplate.js.snap'),
      this.destinationPath(
        'test/__snapshots__/' + this.componentName + '.js.snap'
      ),
      {
        componentName: this.componentName,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        componentName: this.componentName,
        packageName: this.packageName,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        packageName: this.packageName,
        componentName: this.componentName,
      }
    );
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {
        componentName: this.componentName,
        packageName: this.packageName,
      }
    );
  },

  install: function() {
    this.log('\nI\'m all done. Running yarn for you to install the required dependencies.\n');

    const ps = this.spawnCommand('yarn', ['install', '--no-lockfile'], {
      stdio: 'ignore',
    });

    ps.on('close', code => this.log('Done!'));
  },
});
