import sinon from 'sinon';
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
    expect(component.element.querySelector('.myHeader')).toBeTruthy();
  });

  it('should render html body', function() {
    component = new Dropdown({
      body: '<div class="myBody"></div>'
    });
    expect(component.element.querySelector('.myBody')).toBeTruthy();
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

    expect('<div class="myHeader"></div>').toBe(component.header);
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

    expect('<div class="myBody"></div>').toBe(component.body);
  });

  it('should open dropdown', function(done) {
    component = new Dropdown();
    expect(!component.expanded).toBeTruthy();
    expect(!dom.hasClass(component.element, 'open')).toBeTruthy();
    component.open();
    component.once('stateChanged', function() {
      expect(component.expanded).toBeTruthy();
      expect(dom.hasClass(component.element, 'open')).toBeTruthy();
      component.dispose();
      done();
    });
  });

  it('should close dropdown', function(done) {
    component = new Dropdown({
      expanded: true
    });
    expect(dom.hasClass(component.element, 'open')).toBeTruthy();
    component.close();
    component.once('stateChanged', function() {
      expect(!component.expanded).toBeTruthy();
      expect(!dom.hasClass(component.element, 'open')).toBeTruthy();
      component.dispose();
      done();
    });
  });

  it('should toggle dropdown', function(done) {
    component = new Dropdown();
    expect(!component.expanded).toBeTruthy();
    expect(!dom.hasClass(component.element, 'open')).toBeTruthy();
    component.toggle();
    component.once('stateChanged', function() {
      expect(component.expanded).toBeTruthy();
      expect(dom.hasClass(component.element, 'open')).toBeTruthy();
      component.toggle();
      component.once('stateChanged', function() {
        expect(!component.expanded).toBeTruthy();
        expect(!dom.hasClass(component.element, 'open')).toBeTruthy();
        component.dispose();
        done();
      });
    });
  });

  it('should change dropdown position', function(done) {
    component = new Dropdown({
      position: 'up'
    });
    expect(!dom.hasClass(component.element, 'dropdown')).toBeTruthy();
    expect(dom.hasClass(component.element, 'dropup')).toBeTruthy();

    component.position = 'down';
    component.once('stateChanged', function() {
      expect(dom.hasClass(component.element, 'dropdown')).toBeTruthy();
      expect(!dom.hasClass(component.element, 'dropup')).toBeTruthy();
      done();
    });
  });

  it('should only accept valid positions', function() {
    component = new Dropdown({
      position: 'up'
    });
    expect(Align.TopLeft).toBe(component.position);

    component.position = 'down';
    expect(Align.BottomLeft).toBe(component.position);

    component.position = Align.TopCenter;
    expect(Align.TopCenter).toBe(component.position);

    component.position = 'invalid';
    expect(Align.TopCenter).toBe(component.position);
  });

  it('should set position css class on dropdown-menu when positionClassOnMenu is true', function() {
    component = new Dropdown({
      position: Align.RightCenter,
      positionClassOnMenu: true
    });
    var element = component.element;
    expect(!dom.hasClass(element, 'dropright')).toBeTruthy();
    expect(dom.hasClass(element.querySelector('.dropdown-menu'), 'dropright')).toBeTruthy();
  });

  it('should set class for the current position according to `classMap` state', function() {
    component = new Dropdown({
      classMap: {
        [Align.RightCenter]: 'my-right-class'
      },
      position: Align.RightCenter
    });
    var element = component.element;
    expect(!dom.hasClass(element, 'dropright')).toBeTruthy();
    expect(dom.hasClass(element, 'my-right-class')).toBeTruthy();
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

      expect(0).toBe(Align.align.callCount);
      component.expanded = true;
      component.once('stateSynced', function() {
        expect(1).toBe(Align.align.callCount);
        done();
      });
    });

    it('should not automatically align through Align.align if alignElementSelector doesn\'t match anything', function(done) {
      component = new Dropdown({
        alignElementSelector: 'nomatch',
        header: '<button></button>'
      });

      expect(0).toBe(Align.align.callCount);
      component.expanded = true;
      component.once('stateSynced', function() {
        expect(0).toBe(Align.align.callCount);
        done();
      });
    });
  });

  it('should close dropdown when click outside', function(done) {
    component = new Dropdown();
    component.open();

    expect(component.isOpen()).toBeTruthy();
    dom.triggerEvent(component.element.firstChild, 'click');
    async.nextTick(function() {
      expect(component.isOpen()).toBeTruthy();
      dom.triggerEvent(document, 'click');
      async.nextTick(function() {
        expect(!component.isOpen()).toBeTruthy();
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

    expect(component.element.outerHTML).toBe(markupFromDom);
  });
});
