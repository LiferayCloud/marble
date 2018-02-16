import sinon from 'sinon';
import dom from 'metal-dom';
import Input from '../src/Input';

describe('Input', function() {
  let comp;

  afterEach(function() {
    if (comp) {
      comp.dispose();
    }
  });

  it('should render a empty text field by default', function() {
    comp = new Input();
    expect('text').toEqual(comp.element.getAttribute('type'));
  });

  it('should set password as type to requested field', function() {
    comp = new Input({
      type: 'password'
    });
    expect('password').toEqual(comp.element.getAttribute('type'));
  });

  it('should add "name" html attribute to requested field', function() {
    comp = new Input({
      name: 'username'
    });
    expect('username').toEqual(comp.element.name);
  });

  it('should add a class to requested field', function() {
    comp = new Input({
      classes: 'form-control'
    });
    expect(dom.hasClass(comp.element, 'form-control')).toBeTruthy();
  });

  it('should add more than one class to requested field', function() {
    comp = new Input({
      classes: 'form-control has-error'
    });
    expect(dom.hasClass(comp.element, 'form-control')).toBeTruthy();
    expect(dom.hasClass(comp.element, 'has-error')).toBeTruthy();
  });

  it('should add "placeholder" html attribute to requested field', function() {
    comp = new Input({
      placeholder: 'Name'
    });
    expect('Name').toEqual(comp.element.getAttribute('placeholder'));
  });

  it('should set a value to requested field', function() {
    comp = new Input({
      value: 'Stephen Hawking'
    });
    expect('Stephen Hawking').toEqual(comp.element.value);
  });

  it('should add "autocomplete" html attribute to requested field', function() {
    comp = new Input({
      autocomplete: 'on'
    });
    expect('on').toEqual(comp.element.getAttribute('autocomplete'));

    comp.autocomplete = 'off';

    comp.once('stateSynced', function(done) {
      expect('off').toEqual(comp.element.getAttribute('autocomplete'));
      done();
    });
  });

  it('should add "readonly" html attribute to requested field', function() {
    comp = new Input({
      readonly: true
    });
    expect(comp.element.hasAttribute('readonly')).toBeTruthy();
  });

  it('should add "maxlength" html attribute to requested field', function() {
    comp = new Input({
      maxLength: 10
    });
    expect(10).toEqual(parseInt(comp.element.getAttribute('maxlength'), 10));
  });

  it('should add "data-field-index" custom attribute to requested field', function() {
    comp = new Input({
      fieldIndex: 1
    });
    expect(1).toEqual(parseInt(comp.element.getAttribute('data-field-index'), 10));
  });

  it('should add "data-row-index" custom attribute to requested field', function() {
    comp = new Input({
      rowIndex: 0
    });
    expect(0).toEqual(parseInt(comp.element.getAttribute('data-row-index'), 10));
  });

  it('should add "data-oninput" custom attribute to requested field', function() {
    var handlerFunction = sinon.stub();

    comp = new Input({
      onInput: handlerFunction
    });

    let testField = comp.element;
    testField.value = 'test';
    dom.triggerEvent(testField, 'input');

    comp.once('stateSynced', function(done) {
      expect(1).toEqual(handlerFunction.callCount);
      done();
    });
  });

  //TOGGLE PASSWORD
  it('should render the requested field as toggle password', function() {
    comp = new Input({
      isTogglePassword: true
    });
    expect(dom.hasClass(comp.element, 'has-action-button')).toBeTruthy();
  });

  it('should check if the field is hidden as default (password)', function() {
    comp = new Input({
      isTogglePassword: true
    });
    expect('password').toEqual(comp.element.childNodes[0].getAttribute('type'));
  });

  it('should set the related field visibility to exposed (text)', function() {
    comp = new Input({
      initialShow: true,
      isTogglePassword: true
    });
    expect('text').toEqual(comp.element.childNodes[0].getAttribute('type'));
  });

  it('should change the field visibility by clicking on the toogle button : hidden to exposed', function() {
    comp = new Input({
      isTogglePassword: true
    });

    let toggleButton = comp.element.querySelector('button');
    dom.triggerEvent(toggleButton, 'click');

    comp.once('stateSynced', function(done) {
      expect('text').toEqual(comp.element.childNodes[0].getAttribute('type'));
      done();
    });

  });

  it('should change the field visibility by clicking on the toogle button : exposed to hidden', function() {
    comp = new Input({
      initialShow: true,
      isTogglePassword: true
    });

    let toggleButton = comp.element.querySelector('button');
    dom.triggerEvent(toggleButton, 'click');

    comp.once('stateSynced', function(done) {
      expect('password').toEqual(comp.element.childNodes[0].getAttribute('type'));
      done();
    });
  });

  //editable while visible
  it('should be editable if "value" is empty', function() {
    comp = new Input({
      editableWhileVisible: true,
      isTogglePassword: true
    });

    expect(comp.element.childNodes[0].hasAttribute('readonly')).toBeFalsy();
    expect('text').toEqual(comp.element.childNodes[0].getAttribute('type'));
  });

  it('should start editable if "initialShow" is true and "value" is not empty', function() {
    comp = new Input({
      editableWhileVisible: true,
      initialShow: true,
      isTogglePassword: true,
      value: 'John Malkovich'
    });

    expect(comp.element.childNodes[0].hasAttribute('readonly')).toBeFalsy();
    expect('text').toEqual(comp.element.childNodes[0].getAttribute('type'));
  });

  it('should start not editable if "initialShow" is false and "value" is not empty', function() {
    comp = new Input({
      editableWhileVisible: true,
      initialShow: false,
      isTogglePassword: true,
      value: 'John Malkovich'
    });

    expect(comp.element.childNodes[0].hasAttribute('readonly')).toBeTruthy();
    expect('password').toEqual(comp.element.childNodes[0].getAttribute('type'));
  });

});
