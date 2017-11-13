'use strict';

import { async } from 'metal';
import dom from 'metal-dom';
import { Align } from 'metal-position';
import Dropdown from '../src/Dropdown';

describe('Dropdown', function() {
  var component;

  afterEach(function() {
    component.dispose();
  });

  it('should render html header', function() {
    component = new Dropdown({
      header: '<div class="myHeader"></div>'
    });
    assert.ok(component.element.querySelector('.myHeader'));
  });

  it('should render html body', function() {
    component = new Dropdown({
      body: '<div class="myBody"></div>'
    });
    assert.ok(component.element.querySelector('.myBody'));
  });

  it('should get header content from existing html', function() {
    var element = document.createElement('div');
    dom.append(
      element,
      '<div class="myHeader"></div><div class="dropdown-menu"><div class="myBody"></div></div>'
    );
    component = new Dropdown({
      element: element
    });

    assert.strictEqual('<div class="myHeader"></div>', component.header);
  });

  it('should get body content from existing html', function() {
    var element = document.createElement('div');
    dom.append(
      element,
      '<div class="myHeader"></div><div class="dropdown-menu"><div class="myBody"></div></div>'
    );
    component = new Dropdown({
      element: element
    });

    assert.strictEqual('<div class="myBody"></div>', component.body);
  });

  it('should open dropdown', function(done) {
    component = new Dropdown();
    assert.ok(!component.expanded);
    assert.ok(!dom.hasClass(component.element, 'open'));
    component.open();
    component.once('stateChanged', function() {
      assert.ok(component.expanded);
      assert.ok(dom.hasClass(component.element, 'open'));
      component.dispose();
      done();
    });
  });

  it('should close dropdown', function(done) {
    component = new Dropdown({
      expanded: true
    });
    assert.ok(dom.hasClass(component.element, 'open'));
    component.close();
    component.once('stateChanged', function() {
      assert.ok(!component.expanded);
      assert.ok(!dom.hasClass(component.element, 'open'));
      component.dispose();
      done();
    });
  });

  it('should toggle dropdown', function(done) {
    component = new Dropdown();
    assert.ok(!component.expanded);
    assert.ok(!dom.hasClass(component.element, 'open'));
    component.toggle();
    component.once('stateChanged', function() {
      assert.ok(component.expanded);
      assert.ok(dom.hasClass(component.element, 'open'));
      component.toggle();
      component.once('stateChanged', function() {
        assert.ok(!component.expanded);
        assert.ok(!dom.hasClass(component.element, 'open'));
        component.dispose();
        done();
      });
    });
  });

  it('should change dropdown position', function(done) {
    component = new Dropdown({
      position: 'up'
    });
    assert.ok(!dom.hasClass(component.element, 'dropdown'));
    assert.ok(dom.hasClass(component.element, 'dropup'));

    component.position = 'down';
    component.once('stateChanged', function() {
      assert.ok(dom.hasClass(component.element, 'dropdown'));
      assert.ok(!dom.hasClass(component.element, 'dropup'));
      done();
    });
  });

  it('should only accept valid positions', function() {
    component = new Dropdown({
      position: 'up'
    });
    assert.strictEqual(Align.TopLeft, component.position);

    component.position = 'down';
    assert.strictEqual(Align.BottomLeft, component.position);

    component.position = Align.TopCenter;
    assert.strictEqual(Align.TopCenter, component.position);

    component.position = 'invalid';
    assert.strictEqual(Align.TopCenter, component.position);
  });

  it('should set position css class on dropdown-menu when positionClassOnMenu is true', function() {
    component = new Dropdown({
      position: Align.RightCenter,
      positionClassOnMenu: true
    });
    var element = component.element;
    assert.ok(!dom.hasClass(element, 'dropright'));
    assert.ok(dom.hasClass(element.querySelector('.dropdown-menu'), 'dropright'));
  });

  it('should set class for the current position according to `classMap` state', function() {
    component = new Dropdown({
      classMap: {
        [Align.RightCenter]: 'my-right-class'
      },
      position: Align.RightCenter
    });
    var element = component.element;
    assert.ok(!dom.hasClass(element, 'dropright'));
    assert.ok(dom.hasClass(element, 'my-right-class'));
  });

  describe('Align', function() {
    beforeEach(function() {
      sinon.spy(Align, 'align');
    });

    afterEach(function() {
      Align.align.restore();
    });

    it('should automatically align through Align.align if alignElementSelector is given', function(done) {
      component = new Dropdown({
        alignElementSelector: 'button',
        header: '<button></button>'
      });

      assert.strictEqual(0, Align.align.callCount);
      component.expanded = true;
      component.once('stateSynced', function() {
        assert.strictEqual(1, Align.align.callCount);
        done();
      });
    });

    it('should not automatically align through Align.align if alignElementSelector doesn\'t match anything', function(done) {
      component = new Dropdown({
        alignElementSelector: 'nomatch',
        header: '<button></button>'
      });

      assert.strictEqual(0, Align.align.callCount);
      component.expanded = true;
      component.once('stateSynced', function() {
        assert.strictEqual(0, Align.align.callCount);
        done();
      });
    });
  });

  it('should close dropdown when click outside', function(done) {
    component = new Dropdown();
    component.open();

    assert.ok(component.isOpen());
    dom.triggerEvent(component.element.firstChild, 'click');
    async.nextTick(function() {
      assert.ok(component.isOpen());
      dom.triggerEvent(document, 'click');
      async.nextTick(function() {
        assert.ok(!component.isOpen());
        component.dispose();
        done();
      });
    });
  });

  it('should decorate', function() {
    var config = {
      element: '#dropdown',
      id: 'dropdown',
      body: () => IncrementalDOM.text('body'),
      header: () => IncrementalDOM.text('header')
    };
    var element = document.createElement('div');
    IncrementalDOM.patch(element, () => Dropdown.TEMPLATE(config));

    var markupFromDom = element.childNodes[0].outerHTML;
    component = new Dropdown(config);

    assert.strictEqual(component.element.outerHTML, markupFromDom);
  });
});
