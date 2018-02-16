import Soy from 'metal-soy';

var data_nested_object = [{
  'name': 'Eduardo Lundgren',
  'address': {
    'street': 'abc',
    'foo': true
  }
}];

var data_nested_object_expanded_fn = () => {
  return {
    'type': 'array',
    'value': [{
      'type': 'object',
      'value': {
        'name': {
          'type': 'string',
          'value': Soy.toIncDom('Eduardo Lundgren')
        },
        'address': {
          'type': 'object',
          'value': {
            'street': {
              'type': 'string',
              'value': Soy.toIncDom('abc')
            },
            'foo': {
              'type': 'boolean',
              'value': true
            }
          },
          'columns': [
            'foo',
            'street'
          ],
          'columnsType': {
            'street': 'string',
            'foo': 'boolean'
          }
        }
      },
      'columns': [
        'address',
        'name'
      ],
      'columnsType': {
        'name': 'string',
        'address': 'object'
      }
    }],
    'columns': [
      'address',
      'name'
    ],
    'columnsType': {
      'name': 'string',
      'address': 'object'
    }
  };
};

export { data_nested_object, data_nested_object_expanded_fn };
