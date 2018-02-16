import dom from 'metal-dom';
import CancellablePromise from 'metal-promise';
import AutocompleteBase from '../src/AutocompleteBase';

var component;
var input;

describe('AutocompleteBase', () => {
  afterEach(() => {
    if (component) {
      component.dispose();
    }
    if (input) {
      dom.exitDocument(input);
    }
  });

  beforeEach(() => {
    input = document.createElement('input');
    input.type = 'text';
    dom.enterDocument(input);
  });

  it('should wrap data value in a function', () => {
    var data = [];
    component = new AutocompleteBase({
      data: data,
      inputElement: input
    });
    expect(typeof component.data).toBe('function');
    expect(data).toBe(component.data());
  });

  it('should not wrap data value in a function if it is already a function', () => {
    var items = [];
    var data = () => {
      return items;
    };
    component = new AutocompleteBase({
      data: data,
      inputElement: input
    });
    expect(items).toBe(component.data());
    expect(data).toBe(component.data);
  });

  it('should not throw exception if inputElement is not specified', () => {
    expect(() => {
      component = new AutocompleteBase();
    }).not.toThrow();
  });

  it('should invoke deferred data handler passing the user input as query', (done) => {
    var data = (query) => {
      expect('foo').toBe(query);
      done();
    };
    component = new AutocompleteBase({
      data: data,
      inputElement: input
    });
    input.value = 'foo';
    dom.triggerEvent(input, 'input');
  });

  it('should invoke deferred data handler passing the query as argument', (done) => {
    var data = (query) => {
      expect('foo').toBe(query);
      done();
    };
    component = new AutocompleteBase({
      data: data,
      inputElement: input
    });
    component.request('foo');
  });

  it('should cancel pending request', (done) => {
    component = new AutocompleteBase({
      data: new CancellablePromise(() => {}),
      inputElement: input
    });
    component.request().catch((reason) => {
      expect('Cancelled by another request').toBe(reason.message);
      done();
    });
    component.request();
  });

  it('should format data items', (done) => {
    var formatter = (item) => {
      return item + 1;
    };
    component = new AutocompleteBase({
      data: [1, 2],
      inputElement: input,
      format: formatter
    });
    component.request().then((data) => {
      expect([2, 3]).toEqual(data);
      done();
    });
  });

  it('should removes format data items null', (done) => {
    var formatter = () => {
      return null;
    };
    component = new AutocompleteBase({
      data: [1, 2],
      inputElement: input,
      format: formatter
    });
    component.request().then((data) => {
      expect([]).toEqual(data);
      done();
    });
  });

  it('should removes format data items undefined', (done) => {
    var formatter = () => {
      return undefined;
    };
    component = new AutocompleteBase({
      data: [1, 2],
      inputElement: input,
      format: formatter
    });
    component.request().then((data) => {
      expect([]).toEqual(data);
      done();
    });
  });

  it('should default select function set value and focus input element', () => {
    component = new AutocompleteBase({
      data: [],
      inputElement: input
    });
    component.emit('select', {
      text: 'foo'
    });
    expect('foo').toBe(input.value);
  });

});
