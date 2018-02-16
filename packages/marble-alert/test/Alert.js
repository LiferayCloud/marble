import dom from 'metal-dom';
import Alert from '../src/Alert';

describe('Alert', () => {
  var component;

  afterEach(() => {
    component.dispose();
  });

  it('should show alert and fire transitionend', (done) => {
    component = new Alert();
    expect(!component.visible).toBeTruthy();
    dom.once(component.element, 'transitionend', () => {
      expect(component.visible).toBeTruthy();
      component.dispose();
      done();
    });
    component.visible = true;
  });

  it('should hide alert and fire transitionend', (done) => {
    component = new Alert({
      visible: true
    });
    expect(component.visible).toBeTruthy();
    dom.once(component.element, 'transitionend', () => {
      expect(!component.visible).toBeTruthy();
      component.dispose();
      done();
    });
    component.visible = false;
  });

  it('should toggle alert and fire transitionend', (done) => {
    component = new Alert({
      visible: true
    });
    expect(component.visible).toBeTruthy();
    dom.once(component.element, 'transitionend', () => {
      expect(!component.visible).toBeTruthy();
      dom.once(component.element, 'transitionend', () => {
        component.dispose();
        done();
      });
      component.toggle();
    });
    component.toggle();
  });

  it('should close alert, fire transitionend and dispose itself', (done) => {
    component = new Alert({
      visible: true
    });
    component.close();
    dom.once(component.element, 'transitionend', () => {
      expect(component.isDisposed()).toBeTruthy();
      done();
    });
  });

  it('should hide alert and fire transitionend from close element', (done) => {
    component = new Alert({
      visible: true
    });
    dom.triggerEvent(component.element.querySelector('.close'), 'click');
    dom.once(component.element, 'transitionend', () => {
      expect(!component.visible).toBeTruthy();
      done();
    });
  });

  it('should show alert via `show` method', () => {
    component = new Alert();
    component.show();
    expect(component.visible).toBeTruthy();
  });

  it('should alert be not dismissible', () => {
    component = new Alert({
      visible: true,
      dismissible: false
    });
    expect(!dom.hasClass(component.element, 'alert-dismissible')).toBeTruthy();
    expect(!component.element.querySelector('.close')).toBeTruthy();
  });

  it('should close alert when click outside', (done) => {
    component = new Alert({
      visible: true
    });

    expect(component.visible).toBeTruthy();
    dom.triggerEvent(component.element, 'click');
    dom.once(component.element, 'transitionend', () => {
      expect(component.visible).toBeTruthy();
      dom.triggerEvent(document, 'click');
      dom.once(component.element, 'transitionend', () => {
        expect(!component.visible).toBeTruthy();
        done();
      });
    });
  });

  it('should not close alert when click on the element', (done) => {
    component = new Alert({
      visible: true
    });

    expect(component.visible).toBeTruthy();
    dom.triggerEvent(component.element, 'click');
    dom.once(component.element, 'transitionend', () => {
      expect(component.visible).toBeTruthy();
      dom.triggerEvent(component.element, 'click');
      expect(component.visible).toBeTruthy();
      done();
    });
  });

  it('should hide alert after delay', (done) => {
    component = new Alert({
      hideDelay: 0
    });

    expect(!component.visible).toBeTruthy();
    component.visible = true;
    dom.once(component.element, 'transitionend', () => {
      dom.once(component.element, 'transitionend', () => {
        setTimeout(() => {
          expect(!component.visible).toBeTruthy();
          done();
        }, 100);
      });
    });
  });

  it('should define a new close button', () => {
    component = new Alert({
      closeButtonHtml: '<span class="icon-16-cancel">x</span>'
    });

    let closeButton = component.element.querySelector('span');
    expect(dom.hasClass(closeButton, 'icon-16-cancel')).toBeTruthy();
  });

  it('should set a text as the close button value', () => {
    component = new Alert({
      closeButtonHtml: 'close'
    });

    let closeButton = component.element.querySelector('button');
    expect(closeButton.textContent).toBe('close');
  });
});
