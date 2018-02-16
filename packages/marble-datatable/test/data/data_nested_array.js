import Soy from 'metal-soy';

var data_nested_array = [{
  'name': 'Eduardo Lundgren',
  'email': 'edu@rdo.io',
  'addresses': ['The Bowery, New York', 'Casa Forte, Brazil']
}, {
  'name': 'Other Person',
  'email': 'other@domain.com',
  'addresses': ['La Pigalle, Paris', 'Harley Street, London']
}];

var data_nested_array_expanded_fn = () => {
  return {
    'type': 'array',
    'value': [
      {
        'type': 'object',
        'value': {
          'name': {
            'type': Soy.toIncDom('string'),
            'value': 'Eduardo Lundgren'
          },
          'email': {
            'type': Soy.toIncDom('string'),
            'value': 'edu@rdo.io'
          },
          'addresses': {
            'type': 'array',
            'value': [
              {
                'type': Soy.toIncDom('string'),
                'value': 'The Bowery, New York'
              },
              {
                'type': Soy.toIncDom('string'),
                'value': 'Casa Forte, Brazil'
              }
            ]
          }
        },
        'columns': [
          'addresses',
          'email',
          'name'
        ],
        'columnsType': {
          'name': 'string',
          'email': 'string',
          'addresses': 'array'
        }
      },
      {
        'type': 'object',
        'value': {
          'name': {
            'type': Soy.toIncDom('string'),
            'value': 'Other Person'
          },
          'email': {
            'type': Soy.toIncDom('string'),
            'value': 'other@domain.com'
          },
          'addresses': {
            'type': 'array',
            'value': [
              {
                'type': Soy.toIncDom('string'),
                'value': 'La Pigalle, Paris'
              },
              {
                'type': Soy.toIncDom('string'),
                'value': 'Harley Street, London'
              }
            ]
          }
        },
        'columns': [
          'addresses',
          'email',
          'name'
        ],
        'columnsType': {
          'name': 'string',
          'email': 'string',
          'addresses': 'array'
        }
      }
    ],
    'columns': [
      'addresses',
      'email',
      'name'
    ],
    'columnsType': {
      'name': 'string',
      'email': 'string',
      'addresses': 'array'
    }
  };
};

export { data_nested_array, data_nested_array_expanded_fn };
