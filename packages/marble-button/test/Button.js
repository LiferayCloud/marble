import Button from '../src/Button';

let button;

describe('Button', () => {
  afterEach(() => {
    if (button) {
      button.dispose();
    }
  });

  it('should render with the classes `btn-default` and `btn-md` and type `button`', () => {
    button = new Button({
      label: 'Default',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with type `submit`', () => {
    button = new Button({
      label: 'Default',
      type: 'submit',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with name `button`', () => {
    button = new Button({
      label: 'Default',
      name: 'button',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with disabled attribute', () => {
    button = new Button({
      label: 'Default',
      disabled: true,
    });
    expect(button).toMatchSnapshot();
  });

  it('should render the class btn-block', () => {
    button = new Button({
      label: 'Default',
      block: true,
    });
    expect(button).toMatchSnapshot();
  });

  it('should render the class btn-dropdown', () => {
    button = new Button({
      label: 'Default',
      elementClasses: 'btn-dropdown',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render the class btn-success', () => {
    button = new Button({
      label: 'Default',
      style: 'success',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with the icon and the label', () => {
    button = new Button({
      label: 'Default',
      icon: 'icon-12-alert',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with the icon and the label, the icon should be on the right side', () => {
    button = new Button({
      label: 'Default',
      icon: 'icon-12-alert',
      iconAlignment: 'right',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with only the icon', () => {
    button = new Button({
      icon: 'icon-12-alert',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with the class btn-lg', () => {
    button = new Button({
      label: 'Default',
      size: 'lg',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render with the class btn-squared', () => {
    button = new Button({
      label: 'Default',
      format: 'squared',
    });
    expect(button).toMatchSnapshot();
  });

  it('should render as a link with href attribute', () => {
    button = new Button({
      label: 'Default',
      style: 'link',
      href: 'https://marbleui.com',
    });
    expect(button).toMatchSnapshot();
  });
});
