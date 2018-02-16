import sinon from 'sinon';
import { async } from 'metal';
import { Align } from 'metal-position';
import Autocomplete from '../src/Autocomplete';
import UA from 'metal-useragent';
import dom from 'metal-dom';

var component;
var input;

var filterData = (query) => {
  return ['Alabama', 'Alaska'].filter((item) => {
    return item.toLowerCase().indexOf(query.toLowerCase()) === 0;
  });
};

var simulateFocus = (element) => {
  element.focus();

  if (UA.isFirefox) {
    dom.triggerEvent(element, 'focus');
  }
};

var getListItem = (index) => {
  return getListItems().item(index);
};

var getLastListItem = () => {
  let list = getListItems();
  return getListItem(list.length - 1);
};

var getListItems = () => {
  return component.getList().element.querySelectorAll('.listitem');
};

describe('Autocomplete', () => {
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

  it('should process valid query and display element', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    component.on('stateSynced', () => {
      expect(component.visible).toBeTruthy();
      expect(2).toBe(component.element.querySelectorAll('li').length);
      done();
    });
    component.request('a');
  });

  it('should process invalid query and hide element', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    component.request('asparagus').then(() => {
      async.nextTick(() => {
        expect(!component.visible).toBeTruthy();
        expect(0).toBe(component.element.querySelectorAll('li').length);
        done();
      });
    });
  });

  it('should process query null data and hide element', (done) => {
    component = new Autocomplete({
      data: null,
      inputElement: input
    });

    component.request('asparagus').then(() => {
      async.nextTick(() => {
        expect(!component.visible).toBeTruthy();
        expect(0).toBe(component.element.querySelectorAll('li').length);
        done();
      });
    });
  });

  it('should throws error with malformed data structure', (done) => {
    component = new Autocomplete({
      data: [1],
      inputElement: input
    });

    component.request('query').catch((reason) => {
      expect('Autocomplete item must be an object').toBe(reason.message);
      done();
    });
  });

  it('should throws error with malformed data object structure', (done) => {
    component = new Autocomplete({
      data: [{
        foo: 'foo'
      }],
      inputElement: input
    });

    component.request('query').catch((reason) => {
      expect('Autocomplete item must be an object with \'textPrimary\' key').toBe(reason.message);
      done();
    });
  });

  it('should close dropdown list when item is selected', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    component.on('stateSynced', () => {
      component.once('select', (value) => {
        expect('Alabama').toBe(value.text);
        component.on('stateSynced', () => {
          expect(!component.visible).toBeTruthy();
          done();
        });
      });
      dom.triggerEvent(component.element.querySelectorAll('li')[0], 'click');
    });

    input.setAttribute('value', 'a');
    dom.triggerEvent(input, 'input');
  });

  it('should select an option by pressing enter key', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    component.on('stateSynced', () => {
      component.once('select', (value) => {
        expect('Alabama').toBe(value.text);
        done();
      });
      dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 13});
    });

    input.value = 'Al';
    simulateFocus(input);
  });

  it('should select an option by pressing space key', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    component.on('stateSynced', () => {
      component.once('select', (value) => {
        expect('Alabama').toBe(value.text);
        done();
      });
      dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 32});
    });

    input.value = 'Al';
    simulateFocus(input);
  });


  it.skip('should hide element when click outside input', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    var otherInput = document.createElement('input');
    otherInput.type = 'text';
    dom.enterDocument(otherInput);

    component.on('stateSynced', () => {
      async.nextTick(() => {
        expect(!component.visible).toBeTruthy();
        dom.exitDocument(otherInput);
        done();
      });
      expect(component.visible).toBeTruthy();
      otherInput.focus();
      dom.triggerEvent(otherInput, 'click');
    });

    input.setAttribute('value', 'a');
    simulateFocus(input);
  });

  it('should not hide element when clicking inside input', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    component.on('stateSynced', () => {
      async.nextTick(() => {
        expect(component.visible).toBeTruthy();
        done();
      });
      expect(component.visible).toBeTruthy();
      dom.triggerEvent(input, 'click');
    });

    input.setAttribute('value', 'a');
    simulateFocus(input);
  });

  it('should show element when focus input', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input,
      visible: false
    });

    input.value = 'Alabama';

    expect(component.visible).toBeFalsy();
    component.on('stateSynced', () => {
      expect(component.visible).toBeTruthy();
      done();
    });

    simulateFocus(input);
  });

  it('should link the input with the list by aria-owns attribute', () => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    let listComponentElement = component.getList().element;
    expect(input.getAttribute('aria-owns')).toBe(listComponentElement.querySelector('.list-group').getAttribute('id'));
  });

  it('should active the first item as soon as the list appears', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    input.value = 'Al';
    simulateFocus(input);

    component.on('stateSynced', () => {
      expect(dom.hasClass(getListItem(0), 'active')).toBeTruthy();
      done();
    });
  });

  it('should navigate to the next option by pressing down arrow key', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    input.value = 'Al';
    simulateFocus(input);

    component.on('stateSynced', () => {
      expect(dom.hasClass(getListItem(0), 'active')).toBeTruthy();

      dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 40});
      expect(dom.hasClass(getListItem(0), 'active')).toBeFalsy();
      expect(dom.hasClass(getListItem(1), 'active')).toBeTruthy();
      done();
    });
  });

  it('should navigate to the last option by pressing up arrow key if the first one is selected', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    input.value = 'Al';

    component.on('stateSynced', () => {
      expect(dom.hasClass(getListItem(0), 'active')).toBeTruthy();

      dom.triggerEvent(input, 'keydown', {keyCode: 38});
      expect(dom.hasClass(getListItem(0), 'active')).toBeFalsy();
      expect(dom.hasClass(getLastListItem(), 'active')).toBeTruthy();
      done();
    });

    simulateFocus(input);
  });

  it('should navigate to the first option by pressing down arrow key if the last one is selected', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    input.value = 'Al';
    simulateFocus(input);

    component.on('stateSynced', () => {
      expect(dom.hasClass(getListItem(0), 'active')).toBeTruthy();

      dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 40});
      dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 40});

      expect(dom.hasClass(getListItem(0), 'active')).toBeTruthy();
      expect(dom.hasClass(getListItems(1), 'active')).toBeFalsy();
      done();
    });
  });

  it('should navigate to the previous option by pressing up arrow key', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    input.value = 'Al';
    simulateFocus(input);

    component.on('stateSynced', () => {
      dom.triggerEvent(input, 'keydown', {keyCode: 40});

      expect(dom.hasClass(getListItem(0), 'active')).toBeFalsy();
      expect(dom.hasClass(getListItem(1), 'active')).toBeTruthy();

      dom.triggerEvent(input, 'keydown', {keyCode: 38});

      expect(dom.hasClass(getListItem(0), 'active')).toBeTruthy();
      expect(dom.hasClass(getListItem(1), 'active')).toBeFalsy();
      done();
    });
  });

  it('should not create an exception in keydown listener if the list is not visible', (done) => {
    component = new Autocomplete({
      data: filterData,
      inputElement: input
    });

    input.value = 'New York City';
    simulateFocus(input);
    async.nextTick(() => {
      expect(() => {
        dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 40});
        dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 38});
        dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 13});
        dom.triggerEvent(component.inputElement, 'keydown', {keyCode: 32});
        done();
      }).not.toThrow();
    });
  });

  describe('Align', () => {
    beforeEach(() => {
      sinon.stub(Align, 'align');
    });

    afterEach(() => {
      Align.align.restore();
    });

    it('should update width to be equal to the input\'s width', () => {
      input.style.width = '200px';
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });
      expect(input.offsetWidth).toBe(component.element.offsetWidth);
    });

    it('should update width to be equal to the input\'s width when window resizes', (done) => {
      input.style.width = '200px';
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });

      // Simulating use case where resizing the window causes input width to change.
      input.style.width = '400px';
      dom.triggerEvent(window, 'resize');

      // Waits for the resize event's debounce function to finish.
      setTimeout(() => {
        expect(input.offsetWidth).toBe(component.element.offsetWidth);
        done();
      }, 200);
    });

    it('should align element when it is created already visible', () => {
      sinon.spy(Autocomplete.prototype, 'attached');
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });
      expect(Align.align.calledAfter(component.attached)).toBeTruthy();
      Autocomplete.prototype.attached.restore();
    });

    it('should align element when it becomes visible', (done) => {
      component = new Autocomplete({
        data: filterData,
        inputElement: input
      });
      expect(0).toBe(Align.align.callCount);

      component.visible = true;
      component.once('stateSynced', () => {
        expect(1).toBe(Align.align.callCount);
        done();
      });
    });

    it('should realign element when window resizes while the results are visible', (done) => {
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });

      Align.align.restore();
      sinon.spy(Align, 'align');
      dom.triggerEvent(window, 'resize');

      // Waits for the resize event's debounce function to finish.
      setTimeout(() => {
        expect(1).toBe(Align.align.callCount);
        done();
      }, 200);
    });

    it('should not realign element when window resizes while the results aren\'t visible', (done) => {
      component = new Autocomplete({
        data: filterData,
        inputElement: input
      });

      dom.triggerEvent(window, 'resize');

      // Waits for the resize event's debounce function to finish.
      setTimeout(() => {
        expect(0).toBe(Align.align.callCount);
        done();
      }, 200);
    });

    it('should add "autocomplete-bottom" css class if results are aligned on the bottom', () => {
      Align.align.returns(Align.Bottom);
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });

      expect(dom.hasClass(component.element, 'autocomplete-bottom')).toBeTruthy();
    });

    it('should add "autocomplete-top" css class if results are aligned on the top', () => {
      Align.align.returns(Align.Top);
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });

      expect(dom.hasClass(component.element, 'autocomplete-top')).toBeTruthy();
    });

    it('should allow stopping looking for a better region to show the list', () => {
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        autoBestAlign: false,
        visible: true
      });

      expect(false).toBe(Align.align.args[0][3]);
    });

    it('should do not stop looking for a better region to show the list by default', () => {
      component = new Autocomplete({
        data: filterData,
        inputElement: input,
        visible: true
      });

      expect(true).toBe(Align.align.args[0][3]);
    });
  });
});
