import <%= componentName %> from '../src/<%= componentName %>';

let <%= kebabCaseName %>;

describe('<%= componentName %>', () => {
  afterEach(() => {
    if (<%= kebabCaseName %>) {
      <%= kebabCaseName %>.dispose();
    }
  });

  it('should generate the default markup', () => {
    <%= kebabCaseName %> = new <%= componentName %>();

    expect(<%= kebabCaseName %>).toMatchSnapshot();
  });
});
