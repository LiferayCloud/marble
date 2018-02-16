import dom from 'metal-dom';
import Dropdown from 'marble-dropdown';
import Select from '../src/Select';

describe('Select', () => {
  var select;

  afterEach(() => {
    if (select) {
      select.dispose();
    }
  });

  it('should set "items" to an empty array by default', () => {
    select = new Select();
    expect([]).toEqual(select.items);
    expect(-1).toBe(select.selectedIndex);
  });

  it('should render items inside dropdown', () => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    var items = select.element.querySelectorAll('.dropdown-menu li');
    expect(3).toBe(items.length);
    expect('First').toBe(items[0].textContent);
    expect('Second').toBe(items[1].textContent);
    expect('Third').toBe(items[2].textContent);
  });

  it('should use the "btn btn-default" CSS class for the button by default', () => {
    select = new Select({
      items: ['First', 'Second', 'Third'],
      label: 'Foo'
    });

    expect(dom.hasClass(select.element.querySelector('button'), 'btn')).toBeTruthy();
    expect(dom.hasClass(select.element.querySelector('button'), 'btn-default')).toBeTruthy();
  });

  it('should use the CSS class given by the `buttonClass` state', () => {
    select = new Select({
      buttonClass: 'myClass',
      items: ['First', 'Second', 'Third'],
      label: 'Foo'
    });

    expect(dom.hasClass(select.element.querySelector('button'), 'myClass')).toBeTruthy();
  });

  it('should render given label inside button', () => {
    select = new Select({
      items: ['First', 'Second', 'Third'],
      label: 'Foo'
    });

    expect('Foo ').toBe(select.element.querySelector('button').textContent);
  });

  it('should render first item inside button if no label is given', () => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    expect('First ').toBe(select.element.querySelector('button').textContent);
  });

  it('should automatically select first item if no label is given', () => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    expect(0).toBe(select.selectedIndex);
  });

  it('should render selected item inside button if there is one', () => {
    select = new Select({
      items: ['First', 'Second', 'Third'],
      label: 'Foo',
      selectedIndex: 1
    });

    expect('Second ').toBe(select.element.querySelector('button').textContent);
  });

  it('should set the hidden input\'s value as the selected item\'s value', () => {
    select = new Select({
      items: ['first', 'second'],
      values: ['first', 'second'],
      label: 'Foo',
      selectedIndex: 1
    });

    expect('second').toBe(select.element.querySelector('input[type="hidden"]').value);
  });

  it('should set the hidden input\'s name as specified by the `hiddenInputName` state', () => {
    select = new Select({
      hiddenInputName: 'order',
      items: ['First', 'Second', 'Third']
    });

    expect('order').toBe(select.element.querySelector('input[type="hidden"]').getAttribute('name'));
  });

  it('should create dropdown instance', () => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    expect(select.components.dropdown instanceof Dropdown).toBeTruthy();
    expect(select.components.dropdown).toBeTruthy();
  });

  it('should open/close dropdown when button is clicked', () => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    var dropdown = select.getDropdown();
    expect(!dropdown.expanded).toBeTruthy();

    dom.triggerEvent(select.element.querySelector('button'), 'click');
    expect(dropdown.expanded).toBeTruthy();

    dom.triggerEvent(select.element.querySelector('button'), 'click');
    expect(!dropdown.expanded).toBeTruthy();
  });

  it('should not open dropdown when Select component is disabled', () => {
    select = new Select({
      disabled: true,
      items: ['First', 'Second', 'Third']
    });

    var dropdown = select.getDropdown();
    expect(!dropdown.expanded).toBeTruthy();

    dom.triggerEvent(select.element.querySelector('button'), 'click');
    expect(!dropdown.expanded).toBeTruthy();
  });

  it('should close dropdown when Select component gets disabled', (done) => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    dom.triggerEvent(select.element.querySelector('button'), 'click');

    var dropdown = select.getDropdown();
    expect(dropdown.expanded).toBeTruthy();

    select.disabled = true;
    select.once('stateChanged', () => {
      expect(!dropdown.expanded).toBeTruthy();
      done();
    });
  });

  it('should allow changing `selectedIndex` even Select component is disabled', (done) => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    expect(select.selectedIndex).toBe(0);
    select.disabled = true;
    select.selectedIndex = 1;

    select.once('stateChanged', () => {
      expect(select.selectedIndex).toBe(1);
      done();
    });
  });

  it('should update button text when item is selected', (done) => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    dom.triggerEvent(select.element.querySelectorAll('li')[1], 'click');
    select.components.dropdown.once('stateChanged', () => {
      expect('Second ').toBe(select.element.querySelector('button').textContent);
      done();
    });
  });

  it('should update hidden input\'s value when item is selected', (done) => {
    select = new Select({
      items: ['first', 'second'],
      values: ['first', 'second']
    });

    dom.triggerEvent(select.element.querySelectorAll('li')[1], 'click');
    select.components.dropdown.once('stateChanged', () => {
      expect('second').toBe(select.element.querySelector('input[type="hidden"]').value);
      done();
    });
  });

  it('should update `selectedIndex` state when item is selected', (done) => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    dom.triggerEvent(select.element.querySelectorAll('li')[1], 'click');
    select.components.dropdown.once('stateChanged', () => {
      expect(1).toBe(select.selectedIndex);
      done();
    });
  });

  it('should set the default value of seletectIndex state whenever items change', () => {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    select.once('stateChanged', () => {
      expect(0).toBe(select.selectedIndex);
      select.selectedIndex = 2;
      select.items = ['New First', 'New Second', 'New Third'];
      expect(0).toBe(select.selectedIndex);
    });
  });

  describe('Keyboard', () => {
    it('should close the dropdown and focus select button when ESC key is pressed', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      const button = select.element.querySelector('button');
      dom.triggerEvent(button, 'click');
      select.getDropdown().once('stateSynced', () => {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 27
        });
        dom.on(button, 'focus', () => {
          expect(!select.getDropdown().expanded).toBeTruthy();
          expect(button).toBe(document.activeElement);
          done();
        });
      });
    });

    it('should automatically open dropdown and focus first option if "ENTER" key is pressed on button', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', () => {
        expect(select.getDropdown().expanded).toBeTruthy();
        expect(document.activeElement).toBe(select.element.querySelector('.select-option a'));
        done();
      });
    });

    it('should automatically open dropdown and focus first option if "SPACE" key is pressed on button', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 32
      });
      select.getDropdown().once('stateChanged', () => {
        expect(select.getDropdown().expanded).toBeTruthy();
        expect(document.activeElement).toBe(select.element.querySelector('.select-option a'));
        done();
      });
    });

    it('should not automatically open dropdown if "ENTER" key is pressed on non button element', () => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      dom.triggerEvent(select.element, 'keydown', {
        keyCode: 13
      });
      expect(!select.getDropdown().expanded).toBeTruthy();
    });

    it('should not throw error when trying to automatically focus first option when there are no items', (done) => {
      select = new Select();

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', () => {
        expect(select.getDropdown().expanded).toBeTruthy();
        done();
      });
    });

    it('should focus next items when the down arrow key is pressed after dropdown is open via keyboard', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', () => {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        expect(document.activeElement).toBe(options[1]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        expect(document.activeElement).toBe(options[2]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        expect(document.activeElement).toBe(options[0]);
        done();
      });
    });

    it('should focus next items when the down arrow key is pressed after dropdown is not open via keyboard', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'click');
      select.getDropdown().once('stateChanged', () => {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        expect(document.activeElement).toBe(options[0]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        expect(document.activeElement).toBe(options[1]);
        done();
      });
    });

    it('should focus previous items when the up arrow key is pressed after dropdown is open via keyboard', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', () => {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        expect(document.activeElement).toBe(options[2]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        expect(document.activeElement).toBe(options[1]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        expect(document.activeElement).toBe(options[0]);
        done();
      });
    });

    it('should focus previous items when the up arrow key is pressed after dropdown is not open via keyboard', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'click');
      select.getDropdown().once('stateChanged', () => {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        expect(document.activeElement).toBe(options[0]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        expect(document.activeElement).toBe(options[2]);
        done();
      });
    });

    it('should automatically select value and focus on button if item is selected via keyboard', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third'],
        selectedIndex: -1
      });

      const button = select.element.querySelector('button');
      dom.triggerEvent(button, 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', () => {
        dom.triggerEvent(
          select.element.querySelector('.select-option a'),
          'keydown',
          {
            keyCode: 32
          }
        );
        dom.on(button, 'focus', () => {
          expect(!select.getDropdown().expanded).toBeTruthy();
          expect(0).toBe(select.selectedIndex);
          expect(button).toBe(document.activeElement);
          done();
        });
      });
    });

    it('should not select value unsupported key is pressed on an item', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third'],
        selectedIndex: -1
      });

      const button = select.element.querySelector('button');
      dom.triggerEvent(button, 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', () => {
        dom.triggerEvent(
          select.element.querySelector('.select-option a'),
          'keydown',
          {
            keyCode: 10
          }
        );
        expect(-1).toBe(select.selectedIndex);
        expect(select.getDropdown().expanded).toBeTruthy();
        expect(button).not.toBe(document.activeElement);
        done();
      });
    });

    it('should not change selected index attribute if items attribute was passed twice with the same value', (done) => {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      select.selectedIndex = 1;
      expect(1).toBe(select.selectedIndex);
      select.items = ['First', 'Second', 'Third'];
      expect(1).toBe(select.selectedIndex);
      select.items = ['New First', 'New Second', 'New Third'];
      select.once('stateSynced', () => {
        expect(0).toBe(select.selectedIndex);
        done();
      });
    });
  });

  describe('Soy', () => {
    it('should render correct selected item if `selectedIndex` is given', () => {
      var element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: ['First', 'Second', 'Third'],
          values: ['First', 'Second', 'Third'],
          selectedIndex: 1
        });
      });
      expect('Second').toBe(element.childNodes[0].querySelector('input[type="hidden"]').value);
    });

    it('should automatically render first item as selected if `selectedIndex` is not given', () => {
      var element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: ['First', 'Second', 'Third'],
          values: ['First', 'Second', 'Third']
        });
      });
      expect('First').toBe(element.childNodes[0].querySelector('input[type="hidden"]').value);
    });

    it('should not select any item if `label` is given but `selectedIndex` is not', () => {
      var element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: ['First', 'Second', 'Third'],
          values: ['First', 'Second', 'Third'],
          label: 'Order'
        });
      });
      expect('').toBe(element.childNodes[0].querySelector('input[type="hidden"]').value);
    });

    it('should add default button classes in template', () => {
      const element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: [],
          values: []
        });
      });

      const classNames = Select.STATE.buttonClass.value.split(' ');
      const buttonElement = element.querySelector('button');

      classNames.forEach(className => expect(dom.hasClass(buttonElement, className)).toBe(true));
    });
  });
});
