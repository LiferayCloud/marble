import dom from 'metal-dom';
import Alert from '../src/Alert';

describe('Alert', function() {
  var component;

  afterEach(function() {
    component.dispose();
  });

  it('should show alert and fire transitionend', function(done) {
    component = new Alert();
    expect(!component.visible).toBeTruthy();
    dom.once(component.element, 'transitionend', function() {
      expect(component.visible).toBeTruthy();
      component.dispose();
      done();
    });
    component.visible = true;
  });

  it('should hide alert and fire transitionend', function(done) {
    component = new Alert({
      visible: true
    });
    expect(component.visible).toBeTruthy();
    dom.once(component.element, 'transitionend', function() {
      expect(!component.visible).toBeTruthy();
      component.dispose();
      done();
    });
    component.visible = false;
  });

  it('should toggle alert and fire transitionend', function(done) {
    component = new Alert({
      visible: true
    });
    expect(component.visible).toBeTruthy();
    dom.once(component.element, 'transitionend', function() {
      expect(!component.visible).toBeTruthy();
      dom.once(component.element, 'transitionend', function() {
        component.dispose();
        done();
      });
      component.toggle();
    });
    component.toggle();
  });

  it('should close alert, fire transitionend and dispose itself', function(done) {
    component = new Alert({
      visible: true
    });
    component.close();
    dom.once(component.element, 'transitionend', function() {
      expect(component.isDisposed()).toBeTruthy();
      done();
    });
  });

  it('should hide alert and fire transitionend from close element', function(done) {
    component = new Alert({
      visible: true
    });
    dom.triggerEvent(component.element.querySelector('.close'), 'click');
    dom.once(component.element, 'transitionend', function() {
      expect(!component.visible).toBeTruthy();
      done();
    });
  });

  it('should show alert via `show` method', function() {
    component = new Alert();
    component.show();
    expect(component.visible).toBeTruthy();
  });

  it('should alert be not dismissible', function() {
    component = new Alert({
      visible: true,
      dismissible: false
    });
    expect(!dom.hasClass(component.element, 'alert-dismissible')).toBeTruthy();
    expect(!component.element.querySelector('.close')).toBeTruthy();
  });

  it('should close alert when click outside', function(done) {
    component = new Alert({
      visible: true
    });

    expect(component.visible).toBeTruthy();
    dom.triggerEvent(component.element, 'click');
    dom.once(component.element, 'transitionend', function() {
      expect(component.visible).toBeTruthy();
      dom.triggerEvent(document, 'click');
      dom.once(component.element, 'transitionend', function() {
        expect(!component.visible).toBeTruthy();
        done();
      });
    });
  });

  it('should not close alert when click on the element', function(done) {
    component = new Alert({
      visible: true
    });

    expect(component.visible).toBeTruthy();
    dom.triggerEvent(component.element, 'click');
    dom.once(component.element, 'transitionend', function() {
      expect(component.visible).toBeTruthy();
      dom.triggerEvent(component.element, 'click');
      expect(component.visible).toBeTruthy();
      done();
    });
  });

  it('should hide alert after delay', function(done) {
    component = new Alert({
      hideDelay: 0
    });

    expect(!component.visible).toBeTruthy();
    component.visible = true;
    dom.once(component.element, 'transitionend', function() {
      dom.once(component.element, 'transitionend', function() {
        setTimeout(function() {
          expect(!component.visible).toBeTruthy();
          done();
        }, 100);
      });
    });
  });

  it('should define a new close button', function() {
    component = new Alert({
      closeButtonHtml: '<span class="icon-16-cancel">x</span>'
    });

    let closeButton = component.element.querySelector('span');
    expect(dom.hasClass(closeButton, 'icon-16-cancel')).toBeTruthy();
  });

  it('should set a text as the close button value', function() {
    component = new Alert({
      closeButtonHtml: 'close'
    });

    let closeButton = component.element.querySelector('button');
    expect(closeButton.textContent).toBe('close');
  });
});
