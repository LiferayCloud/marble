import avatar from '../src/avatar';

let avatar;

describe('avatar', () => {
  afterEach(() => {
    if (avatar) {
      avatar.dispose();
    }
  });

  it('should generate the default markup', () => {
    avatar = new avatar();

    expect(avatar).toMatchSnapshot();
  });
});
