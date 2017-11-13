'use strict';

import core from 'metal';
import dom from 'metal-dom';
import Datatable from '../src/Datatable';
import Soy from 'metal-soy';
import UA from 'metal-useragent';
import { data_nested_array, data_nested_array_expanded_fn } from './data/data_nested_array.js';
import { data_nested_deep, data_nested_deep_expanded_fn } from './data/data_nested_deep.js';
import { data_nested_object, data_nested_object_expanded_fn } from './data/data_nested_object.js';
import { data_simple, data_simple_expanded_fn } from './data/data_simple.js';

describe('Datatable', function() {
  var datatable;

  afterEach(function() {
    if (datatable) {
      datatable.dispose();
    }
  });

  describe('Expand Data', function() {
    beforeEach(function() {
      sinon.stub(Soy, 'toIncDom', function(str) {
        return str;
      });
    });

    afterEach(function() {
      Soy.toIncDom.restore();
    });

    it('should expand simple data with JSON types', function() {
      var data = {
        data: data_simple
      };
      datatable = new Datatable(data, false);
      assert.deepEqual(data_simple_expanded_fn(), datatable.data);
    });

    it('should expand nested deep data with JSON types', function() {
      var data = {
        data: data_nested_deep
      };
      datatable = new Datatable(data, false);
      assert.deepEqual(data_nested_deep_expanded_fn(), datatable.data);
    });

    it('should expand nested object data with JSON types', function() {
      var data = {
        data: data_nested_object
      };
      datatable = new Datatable(data, false);
      assert.deepEqual(data_nested_object_expanded_fn(), datatable.data);
    });

    it('should expand nested array data with JSON types', function() {
      var data = {
        data: data_nested_array
      };
      datatable = new Datatable(data, false);
      assert.deepEqual(data_nested_array_expanded_fn(), datatable.data);
    });

    it('should expand null data with JSON type', function() {
      var data = {
        data: null
      };
      var expandedData = {
        type: 'null',
        value: null
      };
      datatable = new Datatable(data);
      assert.deepEqual(expandedData, datatable.data);
    });

    it('should expand undefined data with JSON type', function() {
      var data = {
        data: undefined
      };
      var expandedData = {
        type: 'undefined',
        value: undefined
      };
      datatable = new Datatable(data);
      assert.deepEqual(expandedData, datatable.data);
    });

    it('should expand string data with JSON type', function() {
      var data = {
        data: 'string'
      };
      var expandedData = {
        type: 'string',
        value: 'string'
      };
      datatable = new Datatable(data, false);
      assert.deepEqual(expandedData, datatable.data);
    });

    it('should expand number data with JSON type', function() {
      var data = {
        data: 1
      };
      var expandedData = {
        type: 'number',
        value: 1
      };
      datatable = new Datatable(data);
      assert.deepEqual(expandedData, datatable.data);
    });

    it('should expand boolean data with JSON type', function() {
      var data = {
        data: true
      };
      var expandedData = {
        type: 'boolean',
        value: true
      };
      datatable = new Datatable(data);
      assert.deepEqual(expandedData, datatable.data);
    });

    it('should expand object data with JSON type', function() {
      var object = {};
      var data = {
        data: object
      };
      datatable = new Datatable(data);
      var expandedData = datatable.data;
      assert.strictEqual('object', expandedData.type);
      assert.strictEqual(object, expandedData.value);
      assert.ok(Array.isArray(expandedData.columns));
      assert.ok(core.isObject(expandedData.columnsType));
    });
  });

  it('should expand table contents when clicking on labels', function() {
    datatable = new Datatable({
      data: [1, 2, 3]
    });
    var label = datatable.element.querySelector('.datatable-label');
    assert.ok(dom.hasClass(label, 'collapsed'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));

    dom.triggerEvent(label, 'click');
    assert.ok(dom.hasClass(label, 'expanded'));
    assert.ok(!dom.hasClass(dom.next(label, 'table'), 'hidden'));
    datatable.dispose();
  });

  it('should expand table contents when pressing enter or space on labels', function() {
    datatable = new Datatable({
      data: [1, 2, 3]
    });
    var label = datatable.element.querySelector('.datatable-label');
    assert.ok(dom.hasClass(label, 'collapsed'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));

    dom.triggerEvent(label, 'keydown', {
      keyCode: 13
    });
    assert.ok(dom.hasClass(label, 'expanded'));
    assert.ok(!dom.hasClass(dom.next(label, 'table'), 'hidden'));

    dom.triggerEvent(label, 'keydown', {
      keyCode: 32
    });
    assert.ok(!dom.hasClass(label, 'expanded'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));
    datatable.dispose();
  });

  it('should not expand table contents when pressing key other than enter or space on labels', function() {
    datatable = new Datatable({
      data: [1, 2, 3]
    });
    var label = datatable.element.querySelector('.datatable-label');
    assert.ok(dom.hasClass(label, 'collapsed'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));

    dom.triggerEvent(label, 'keydown', {
      keyCode: 10
    });
    assert.ok(dom.hasClass(label, 'collapsed'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));
    datatable.dispose();
  });

  it('should expand table contents when pressing enter or space on columns with nested tables', function() {
    datatable = new Datatable({
      data: [
        {
          arr: [1, 2, 3]
        }
      ]
    });
    var label = datatable.element.querySelector('.datatable-label');
    assert.ok(dom.hasClass(label, 'collapsed'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));


    const col = datatable.refs['table-1-0'];
    dom.triggerEvent(col, 'keydown', {
      keyCode: 13
    });
    assert.ok(dom.hasClass(label, 'expanded'));
    assert.ok(!dom.hasClass(dom.next(label, 'table'), 'hidden'));

    dom.triggerEvent(col, 'keydown', {
      keyCode: 32
    });
    assert.ok(!dom.hasClass(label, 'expanded'));
    assert.ok(dom.hasClass(dom.next(label, 'table'), 'hidden'));
    datatable.dispose();
  });

  it('should not throw error if enter or space is pressed on column without nested datatables', function() {
    datatable = new Datatable({
      data: [1, 2, 3]
    });

    const col = datatable.refs['table-1-0'];
    assert.doesNotThrow(() => {
      dom.triggerEvent(col, 'keydown', {
        keyCode: 13
      });
      dom.triggerEvent(col, 'keydown', {
        keyCode: 32
      });
    });
    datatable.dispose();
  });

  it('should throw exception when data contains mixed types inside array', function() {
    datatable = new Datatable({
      data: [0, false]
    }, false);
    assert.throws(function() {
      // Access data to trigger its setter.
      datatable.data; // jshint ignore:line
    }, Error);
  });

  it('should display column types', function() {
    datatable = new Datatable({
      data: [{
        a: {
          b: {
            c: true
          }
        }
      }]
    });
    var types = datatable.element.querySelectorAll('.datatable-type');
    assert.strictEqual(3, types.length);
    assert.strictEqual('object', types[0].innerText.trim());
    assert.strictEqual('object', types[1].innerText.trim());
    assert.strictEqual('boolean', types[2].innerText.trim());
    datatable.dispose();
  });

  it('should not display column types', function() {
    datatable = new Datatable({
      data: [{
        a: {
          b: {
            c: true
          }
        }
      }],
      displayColumnsType: false
    });
    var types = datatable.element.querySelectorAll('.datatable-type');
    assert.strictEqual(0, types.length);
    datatable.dispose();
  });

  it('should not expanded already expanded data', function() {
    var expandedData = {
      columns: [],
      type: ''
    };
    datatable = new Datatable({
      data: expandedData
    });
    assert.strictEqual(expandedData, datatable.data);
    datatable.dispose();
  });

  it('should detect sanitized html objects as string', function() {
    datatable = new Datatable({
      data: {
        content: '',
        contentKind: 'HTML'
      }
    });
    assert.strictEqual('string', datatable.data.type);
    datatable.dispose();
  });

  describe('Keyboard focus', function() {
    afterEach(function() {
      UA.testUserAgent('', '');
    });

    it('should move between columns via the left/right arrow keys', function() {
      datatable = new Datatable({
        data: {
          key1: 'value1',
          key2: 'value2'
        }
      });

      dom.triggerEvent(datatable.refs['table-0-0'], 'keydown', {
        keyCode: 39
      });
      assert.strictEqual(datatable.refs['table-0-1'], document.activeElement);

      dom.triggerEvent(datatable.refs['table-0-1'], 'keydown', {
        keyCode: 37
      });
      assert.strictEqual(datatable.refs['table-0-0'], document.activeElement);
    });

    it('should move between rows via the up/down arrow keys', function() {
      datatable = new Datatable({
        data: {
          key1: 'value1',
          key2: 'value2'
        }
      });

      dom.triggerEvent(datatable.refs['table-0-0'], 'keydown', {
        keyCode: 40
      });
      assert.strictEqual(datatable.refs['table-1-0'], document.activeElement);

      dom.triggerEvent(datatable.refs['table-1-0'], 'keydown', {
        keyCode: 38
      });
      assert.strictEqual(datatable.refs['table-0-0'], document.activeElement);
    });

    it('should move to first row of current column via cmd + up arrow on mac', function() {
      UA.testUserAgent('', 'MacIntel');

      datatable = new Datatable({
        data: [
          {
            key1: '1.1',
            key2: '1.2'
          },
          {
            key1: '2.1',
            key2: '2.2'
          }
        ]
      });

      dom.triggerEvent(datatable.refs['table-2-1'], 'keydown', {
        keyCode: 38,
        metaKey: true
      });
      assert.strictEqual(datatable.refs['table-0-1'], document.activeElement);
    });

    it('should move to first row of current column via "page up" key', function() {
      datatable = new Datatable({
        data: [
          {
            key1: '1.1',
            key2: '1.2'
          },
          {
            key1: '2.1',
            key2: '2.2'
          }
        ]
      });

      dom.triggerEvent(datatable.refs['table-2-1'], 'keydown', {
        keyCode: 33
      });
      assert.strictEqual(datatable.refs['table-0-1'], document.activeElement);
    });

    it('should move to last row of current column via cmd + down arrow on mac', function() {
      UA.testUserAgent('', 'MacIntel');

      datatable = new Datatable({
        data: [
          {
            key1: '1.1',
            key2: '1.2'
          },
          {
            key1: '2.1',
            key2: '2.2'
          }
        ]
      });

      dom.triggerEvent(datatable.refs['table-0-1'], 'keydown', {
        keyCode: 40,
        metaKey: true
      });
      assert.strictEqual(datatable.refs['table-2-1'], document.activeElement);
    });

    it('should move to last row of current column via "page down" key', function() {
      datatable = new Datatable({
        data: [
          {
            key1: '1.1',
            key2: '1.2'
          },
          {
            key1: '2.1',
            key2: '2.2'
          }
        ]
      });

      dom.triggerEvent(datatable.refs['table-0-1'], 'keydown', {
        keyCode: 34
      });
      assert.strictEqual(datatable.refs['table-2-1'], document.activeElement);
    });

    it('should move to first column of current row via cmd + left arrow on mac', function() {
      UA.testUserAgent('', 'MacIntel');

      datatable = new Datatable({
        data: {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'
        }
      });

      dom.triggerEvent(datatable.refs['table-0-2'], 'keydown', {
        keyCode: 37,
        metaKey: true
      });
      assert.strictEqual(datatable.refs['table-0-0'], document.activeElement);
    });

    it('should move to first column of current row via "home" key', function() {
      datatable = new Datatable({
        data: {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'
        }
      });

      dom.triggerEvent(datatable.refs['table-0-2'], 'keydown', {
        keyCode: 36
      });
      assert.strictEqual(datatable.refs['table-0-0'], document.activeElement);
    });

    it('should move to last column of current row via cmd + right arrow on mac', function() {
      UA.testUserAgent('', 'MacIntel');

      datatable = new Datatable({
        data: {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'
        }
      });

      dom.triggerEvent(datatable.refs['table-0-0'], 'keydown', {
        keyCode: 39,
        metaKey: true
      });
      assert.strictEqual(datatable.refs['table-0-2'], document.activeElement);
    });

    it('should move to last column of current row via "end" key', function() {
      datatable = new Datatable({
        data: {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'
        }
      });

      dom.triggerEvent(datatable.refs['table-0-0'], 'keydown', {
        keyCode: 35
      });
      assert.strictEqual(datatable.refs['table-0-2'], document.activeElement);
    });
  });
});
