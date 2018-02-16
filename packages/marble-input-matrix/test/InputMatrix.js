import dom from 'metal-dom';
import InputMatrix from '../src/InputMatrix';

describe('InputMatrix', () => {
  let comp;

  afterEach(() => {
    if (comp) {
      comp.dispose();
    }
  });

  it('should render a single row with a single empty field by default', () => {
    comp = new InputMatrix();
    expect(2).toBe(comp.element.childNodes.length);
    expect(dom.hasClass(comp.element.childNodes[0], 'input-matrix-labels')).toBeTruthy();

    let fields = getFieldsForRow(comp.element, 0);
    expect(1).toBe(fields.length);
    expect('').toBe(fields[0].value);
  });

  it('should render a single text field for the given value plus an empty one below', () => {
    comp = new InputMatrix({
      fields: [[{
        value: 'foo'
      }]]
    });
    expect(3).toBe(comp.element.childNodes.length);

    let fields = getFieldsForRow(comp.element, 0);
    expect(1).toBe(fields.length);
    expect('foo').toBe(fields[0].value);

    fields = getFieldsForRow(comp.element, 1);
    expect(1).toBe(fields.length);
    expect('').toBe(fields[0].value);

    var expectedFields = [
      [{
        value: 'foo'
      }],
      []
    ];
    expect(expectedFields).toEqual(comp.fields);
  });

  it('should render error messages when given', () => {
    comp = new InputMatrix({
      fields: [[{
        error: 'Test error message'
      }]]
    });
    expect(2).toBe(comp.element.childNodes.length);

    let fields = getFieldsForRow(comp.element, 0);
    expect(dom.hasClass(fields[0].parentNode, 'has-error')).toBeTruthy();

    var errorBox = fields[0].nextSibling;
    expect(errorBox).toBeTruthy();
    expect('Test error message').toBe(errorBox.textContent);
  });

  it('should render multiples rows with multiple text field for the given value plus empty row', () => {
    comp = new InputMatrix({
      fields: [
        [
          {
            value: 'col1.1'
          },
          {
            value: 'col1.2'
          }
        ],
        [
          {
            value: 'col2.1'
          },
          {
            value: 'col2.2'
          }
        ]
      ],
      fieldsConfig: [{}, {}]
    });
    expect(4).toBe(comp.element.childNodes.length);

    let fields = getFieldsForRow(comp.element, 0);
    expect(2).toBe(fields.length);
    expect('col1.1').toBe(fields[0].value);
    expect('col1.2').toBe(fields[1].value);

    fields = getFieldsForRow(comp.element, 1);
    expect(2).toBe(fields.length);
    expect('col2.1').toBe(fields[0].value);
    expect('col2.2').toBe(fields[1].value);

    fields = getFieldsForRow(comp.element, 2);
    expect(2).toBe(fields.length);
    expect('').toBe(fields[0].value);
    expect('').toBe(fields[1].value);
  });

  it('should add labels as specified in "fieldsConfig"', () => {
    comp = new InputMatrix({
      fields: [[], []],
      fieldsConfig: [
        {
          label: 'Label 1'
        },
        {
          label: 'Label 2'
        }
      ]
    });

    const labels = comp.element.childNodes[0].childNodes;
    expect(2).toBe(labels.length);
    expect('Label 1').toBe(labels[0].textContent);
    expect('Label 2').toBe(labels[1].textContent);
  });

  it('should add names with "[]" for array fields', () => {
    comp = new InputMatrix({
      fields: [[], []],
      fieldsConfig: [
        {
          isArray: true,
          name: 'address'
        },
        {
          name: 'age'
        },
        {}
      ]
    });
    expect(3).toBe(comp.element.childNodes.length);

    let fields = getFieldsForRow(comp.element, 0);
    expect(3).toBe(fields.length);
    expect('address[]').toBe(fields[0].getAttribute('name'));
    expect('age1').toBe(fields[1].getAttribute('name'));
    expect('').toBe(fields[2].getAttribute('name'));

    fields = getFieldsForRow(comp.element, 1);
    expect(3).toBe(fields.length);
    expect('address[]').toBe(fields[0].getAttribute('name'));
    expect('age2').toBe(fields[1].getAttribute('name'));
    expect('').toBe(fields[2].getAttribute('name'));
  });

  it('should add new row with empty fields if field in last row is typed on', (done) => {
    comp = new InputMatrix({
      fields: [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        []
      ]
    });

    let lastField = getFieldsForRow(comp.element, 2)[0];
    lastField.value = 'last';
    dom.triggerEvent(lastField, 'input');

    comp.once('stateSynced', () => {
      var expectedFields = [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        [{
          value: 'last'
        }],
        []
      ];
      expect(expectedFields).toEqual(comp.fields);
      expect(5).toBe(comp.element.childNodes.length);

      lastField = getFieldsForRow(comp.element, 3)[0];
      expect('').toBe(lastField.value);
      done();
    });
  });

  it('should not add new row with empty fields if field in last row is typed on', (done) => {
    comp = new InputMatrix({
      fields: [
        [{
          value: 'foo'
        }],
        [],
        []
      ]
    });

    let lastField = getFieldsForRow(comp.element, 1)[0];
    lastField.value = 'bar';
    dom.triggerEvent(lastField, 'input');

    comp.once('stateSynced', () => {
      var expectedFields = [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        []
      ];
      expect(expectedFields).toEqual(comp.fields);
      expect(4).toBe(comp.element.childNodes.length);
      done();
    });
  });

  it('should not add new row with empty fields if field with "disableDuplication" is typed on', (done) => {
    comp = new InputMatrix({
      fields: [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        []
      ],
      fieldsConfig: [{
        disableDuplication: true
      }]
    });

    let lastField = getFieldsForRow(comp.element, 2)[0];
    lastField.value = 'last';
    dom.triggerEvent(lastField, 'input');

    comp.once('stateSynced', () => {
      var expectedFields = [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        [{
          value: 'last'
        }]
      ];
      expect(expectedFields).toEqual(comp.fields);
      expect(4).toBe(comp.element.childNodes.length);
      done();
    });
  });

  it('should render a remove button for each row except the last one', () => {
    comp = new InputMatrix({
      fields: [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        []
      ]
    });

    const children = comp.element.children;
    expect(children[1].querySelector('button')).toBeTruthy();
    expect(children[2].querySelector('button')).toBeTruthy();
    expect(!children[3].querySelector('button')).toBeTruthy();
  });

  it('should remove field when the remove button is clicked', (done) => {
    comp = new InputMatrix({
      fields: [
        [{
          value: 'foo'
        }],
        [{
          value: 'bar'
        }],
        []
      ]
    });

    let removeButton = comp.element.childNodes[1].querySelector('button');
    dom.triggerEvent(removeButton, 'click');

    comp.once('stateSynced', () => {
      var expectedFields = [
        [{
          value: 'bar'
        }],
        []
      ];
      expect(expectedFields).toEqual(comp.fields);
      expect(3).toBe(comp.element.childNodes.length);
      done();
    });
  });

  it('should set new fields to current fields internal state', (done) => {
    comp = new InputMatrix();

    comp.setCurrentFields([
      [{
        value: 'foo'
      }],
      [{
        value: 'bar'
      }]
    ]);

    comp.once('stateSynced', () => {
      expect(4).toBe(comp.element.childNodes.length);
      done();
    });
  });

  function getFieldsForRow(parent, rowIndex) {
    return parent.childNodes[rowIndex + 1].querySelectorAll('input');
  }
});
