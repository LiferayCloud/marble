import Banner from '../src/Banner';

describe('Banner', () => {
  let component;

  afterEach(() => {
    component.dispose();
  });

  it('should render html body', () => {
    component = new Banner({
      body: '<div class="myContent"></div>',
    });
    expect(component.element.querySelector('.myContent')).toBeTruthy();
  });

  it('should hide the banner', (done) => {
    component = new Banner();
    component.hide();
    component.once('stateChanged', () => {
      component.once('stateChanged', () => {
        expect(!component.isVisible).toBeTruthy();
        component.dispose();
        done();
      });
    });
  });

  it('should toggle the banner', (done) => {
    component = new Banner();
    expect(component.isVisible).toBeTruthy();
    component.toggle();
    component.once('stateChanged', () => {
      component.once('stateChanged', () => {
        expect(!component.isVisible).toBeTruthy();
        component.toggle();
        component.once('stateChanged', () => {
          expect(component.isVisible).toBeTruthy();
          component.dispose();
          done();
        });
      });
    });
  });
});
