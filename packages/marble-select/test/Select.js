'use strict';

import { assert } from 'chai';
import dom from 'metal-dom';
import Dropdown from 'marble-dropdown';
import Select from '../src/Select';

describe('Select', function() {
  var select;

  afterEach(function() {
    if (select) {
      select.dispose();
    }
  });

  it('should set "items" to an empty array by default', function() {
    select = new Select();
    assert.deepEqual([], select.items);
    assert.strictEqual(-1, select.selectedIndex);
  });

  it('should render items inside dropdown', function() {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    var items = select.element.querySelectorAll('.dropdown-menu li');
    assert.strictEqual(3, items.length);
    assert.strictEqual('First', items[0].textContent);
    assert.strictEqual('Second', items[1].textContent);
    assert.strictEqual('Third', items[2].textContent);
  });

  it('should use the "btn btn-default" CSS class for the button by default', function() {
    select = new Select({
      items: ['First', 'Second', 'Third'],
      label: 'Foo'
    });

    assert.ok(dom.hasClass(select.element.querySelector('button'), 'btn'));
    assert.ok(dom.hasClass(select.element.querySelector('button'), 'btn-default'));
  });

  it('should use the CSS class given by the `buttonClass` state', function() {
    select = new Select({
      buttonClass: 'myClass',
      items: ['First', 'Second', 'Third'],
      label: 'Foo'
    });

    assert.ok(dom.hasClass(select.element.querySelector('button'), 'myClass'));
  });

  it('should render given label inside button', function() {
    select = new Select({
      items: ['First', 'Second', 'Third'],
      label: 'Foo'
    });

    assert.strictEqual('Foo ', select.element.querySelector('button').textContent);
  });

  it('should render first item inside button if no label is given', function() {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    assert.strictEqual('First ', select.element.querySelector('button').textContent);
  });

  it('should automatically select first item if no label is given', function() {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    assert.strictEqual(0, select.selectedIndex);
  });

  it('should render selected item inside button if there is one', function() {
    select = new Select({
      items: ['First', 'Second', 'Third'],
      label: 'Foo',
      selectedIndex: 1
    });

    assert.strictEqual('Second ', select.element.querySelector('button').textContent);
  });

  it('should set the hidden input\'s value as the selected item\'s value', function() {
    select = new Select({
      items: ['first', 'second'],
      values: ['first', 'second'],
      label: 'Foo',
      selectedIndex: 1
    });

    assert.strictEqual('second', select.element.querySelector('input[type="hidden"]').value);
  });

  it('should set the hidden input\'s name as specified by the `hiddenInputName` state', function() {
    select = new Select({
      hiddenInputName: 'order',
      items: ['First', 'Second', 'Third']
    });

    assert.strictEqual('order', select.element.querySelector('input[type="hidden"]').getAttribute('name'));
  });

  it('should create dropdown instance', function() {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    assert.ok(select.components.dropdown instanceof Dropdown);
    assert.ok(select.components.dropdown, select.getDropdown());
  });

  it('should open/close dropdown when button is clicked', function() {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    var dropdown = select.getDropdown();
    assert.ok(!dropdown.expanded);

    dom.triggerEvent(select.element.querySelector('button'), 'click');
    assert.ok(dropdown.expanded);

    dom.triggerEvent(select.element.querySelector('button'), 'click');
    assert.ok(!dropdown.expanded);
  });

  it('should not open dropdown when Select component is disabled', function() {
    select = new Select({
      disabled: true,
      items: ['First', 'Second', 'Third']
    });

    var dropdown = select.getDropdown();
    assert.ok(!dropdown.expanded);

    dom.triggerEvent(select.element.querySelector('button'), 'click');
    assert.ok(!dropdown.expanded);
  });

  it('should close dropdown when Select component gets disabled', function(done) {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    dom.triggerEvent(select.element.querySelector('button'), 'click');

    var dropdown = select.getDropdown();
    assert.ok(dropdown.expanded);

    select.disabled = true;
    select.once('stateChanged', function() {
      assert.ok(!dropdown.expanded);
      done();
    });
  });

  it('should allow changing `selectedIndex` even Select component is disabled', function(done) {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    assert.strictEqual(select.selectedIndex, 0);
    select.disabled = true;
    select.selectedIndex = 1;

    select.once('stateChanged', function() {
      assert.strictEqual(select.selectedIndex, 1);
      done();
    });
  });

  it('should update button text when item is selected', function(done) {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    dom.triggerEvent(select.element.querySelectorAll('li')[1], 'click');
    select.components.dropdown.once('stateChanged', function() {
      assert.strictEqual('Second ', select.element.querySelector('button').textContent);
      done();
    });
  });

  it('should update hidden input\'s value when item is selected', function(done) {
    select = new Select({
      items: ['first', 'second'],
      values: ['first', 'second']
    });

    dom.triggerEvent(select.element.querySelectorAll('li')[1], 'click');
    select.components.dropdown.once('stateChanged', function() {
      assert.strictEqual('second', select.element.querySelector('input[type="hidden"]').value);
      done();
    });
  });

  it('should update `selectedIndex` state when item is selected', function(done) {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    dom.triggerEvent(select.element.querySelectorAll('li')[1], 'click');
    select.components.dropdown.once('stateChanged', function() {
      assert.strictEqual(1, select.selectedIndex);
      done();
    });
  });

  it('should set the default value of seletectIndex state whenever items change', function() {
    select = new Select({
      items: ['First', 'Second', 'Third']
    });

    select.once('stateChanged', () => {
      assert.strictEqual(0, select.selectedIndex);
      select.selectedIndex = 2;
      select.items = ['New First', 'New Second', 'New Third'];
      assert.strictEqual(0, select.selectedIndex);
    });
  });

  describe('Keyboard', function() {
    it('should close the dropdown and focus select button when ESC key is pressed', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      const button = select.element.querySelector('button');
      dom.triggerEvent(button, 'click');
      select.getDropdown().once('stateSynced', function() {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 27
        });
        dom.on(button, 'focus', function() {
          assert.ok(!select.getDropdown().expanded);
          assert.strictEqual(button, document.activeElement);
          done();
        });
      });
    });

    it('should automatically open dropdown and focus first option if "ENTER" key is pressed on button', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', function() {
        assert.ok(select.getDropdown().expanded);
        assert.strictEqual(document.activeElement, select.element.querySelector('.select-option a'));
        done();
      });
    });

    it('should automatically open dropdown and focus first option if "SPACE" key is pressed on button', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 32
      });
      select.getDropdown().once('stateChanged', function() {
        assert.ok(select.getDropdown().expanded);
        assert.strictEqual(document.activeElement, select.element.querySelector('.select-option a'));
        done();
      });
    });

    it('should not automatically open dropdown if "ENTER" key is pressed on non button element', function() {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      dom.triggerEvent(select.element, 'keydown', {
        keyCode: 13
      });
      assert.ok(!select.getDropdown().expanded);
    });

    it('should not throw error when trying to automatically focus first option when there are no items', function(done) {
      select = new Select();

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', function() {
        assert.ok(select.getDropdown().expanded);
        done();
      });
    });

    it('should focus next items when the down arrow key is pressed after dropdown is open via keyboard', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', function() {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        assert.strictEqual(document.activeElement, options[1]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        assert.strictEqual(document.activeElement, options[2]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        assert.strictEqual(document.activeElement, options[0]);
        done();
      });
    });

    it('should focus next items when the down arrow key is pressed after dropdown is not open via keyboard', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'click');
      select.getDropdown().once('stateChanged', function() {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        assert.strictEqual(document.activeElement, options[0]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 40
        });
        assert.strictEqual(document.activeElement, options[1]);
        done();
      });
    });

    it('should focus previous items when the up arrow key is pressed after dropdown is open via keyboard', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', function() {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        assert.strictEqual(document.activeElement, options[2]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        assert.strictEqual(document.activeElement, options[1]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        assert.strictEqual(document.activeElement, options[0]);
        done();
      });
    });

    it('should focus previous items when the up arrow key is pressed after dropdown is not open via keyboard', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });
      var options = select.element.querySelectorAll('.select-option a');

      dom.triggerEvent(select.element.querySelector('button'), 'click');
      select.getDropdown().once('stateChanged', function() {
        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        assert.strictEqual(document.activeElement, options[0]);

        dom.triggerEvent(select.element, 'keydown', {
          keyCode: 38
        });
        assert.strictEqual(document.activeElement, options[2]);
        done();
      });
    });

    it('should automatically select value and focus on button if item is selected via keyboard', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third'],
        selectedIndex: -1
      });

      const button = select.element.querySelector('button');
      dom.triggerEvent(button, 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', function() {
        dom.triggerEvent(
          select.element.querySelector('.select-option a'),
          'keydown',
          {
            keyCode: 32
          }
        );
        dom.on(button, 'focus', function() {
          assert.ok(!select.getDropdown().expanded);
          assert.strictEqual(0, select.selectedIndex);
          assert.strictEqual(button, document.activeElement);
          done();
        });
      });
    });

    it('should not select value unsupported key is pressed on an item', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third'],
        selectedIndex: -1
      });

      const button = select.element.querySelector('button');
      dom.triggerEvent(button, 'keydown', {
        keyCode: 13
      });
      select.getDropdown().once('stateChanged', function() {
        dom.triggerEvent(
          select.element.querySelector('.select-option a'),
          'keydown',
          {
            keyCode: 10
          }
        );
        assert.strictEqual(-1, select.selectedIndex);
        assert.ok(select.getDropdown().expanded);
        assert.notStrictEqual(button, document.activeElement);
        done();
      });
    });

    it('should not change selected index attribute if items attribute was passed twice with the same value', function(done) {
      select = new Select({
        items: ['First', 'Second', 'Third']
      });

      select.selectedIndex = 1;
      assert.strictEqual(1, select.selectedIndex);
      select.items = ['First', 'Second', 'Third'];
      assert.strictEqual(1, select.selectedIndex);
      select.items = ['New First', 'New Second', 'New Third'];
      select.once('stateSynced', function() {
        assert.strictEqual(0, select.selectedIndex);
        done();
      });
    });
  });

  describe('Soy', function() {
    it('should render correct selected item if `selectedIndex` is given', function() {
      var element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: ['First', 'Second', 'Third'],
          values: ['First', 'Second', 'Third'],
          selectedIndex: 1
        });
      });
      assert.strictEqual('Second', element.childNodes[0].querySelector('input[type="hidden"]').value);
    });

    it('should automatically render first item as selected if `selectedIndex` is not given', function() {
      var element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: ['First', 'Second', 'Third'],
          values: ['First', 'Second', 'Third']
        });
      });
      assert.strictEqual('First', element.childNodes[0].querySelector('input[type="hidden"]').value);
    });

    it('should not select any item if `label` is given but `selectedIndex` is not', function() {
      var element = document.createElement('div');
      IncrementalDOM.patch(element, () => {
        Select.TEMPLATE({
          id: 'select',
          items: ['First', 'Second', 'Third'],
          values: ['First', 'Second', 'Third'],
          label: 'Order'
        });
      });
      assert.strictEqual('', element.childNodes[0].querySelector('input[type="hidden"]').value);
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

      classNames.forEach(className => assert.isTrue(dom.hasClass(buttonElement, className)));
    });
  });
});
