import Soy from 'metal-soy';

var data_nested_deep = [{
  'name': 'Eduardo Lundgren',
  'email': 'edu@rdo.io',
  'address': {
    'street': {
      'name': 'The Bowery',
      'coordinates': [40.574788, -73.980954]
    },
    'city': 'New York'
  }
}, {
  'name': 'Adélaide',
  'email': 'adelaide@domain.com',
  'address': {
    'street': {
      'name': 'La Pigalle',
      'coordinates': [48.882245, 2.337238]
    },
    'city': 'Paris'
  }
}];

var data_nested_deep_expanded_fn = function() {
  return {
    'type': 'array',
    'value': [
      {
        'type': 'object',
        'value': {
          'name': {
            'type': 'string',
            'value': Soy.toIncDom('Eduardo Lundgren')
          },
          'email': {
            'type': 'string',
            'value': Soy.toIncDom('edu@rdo.io')
          },
          'address': {
            'type': 'object',
            'value': {
              'street': {
                'type': 'object',
                'value': {
                  'name': {
                    'type': 'string',
                    'value': Soy.toIncDom('The Bowery')
                  },
                  'coordinates': {
                    'type': 'array',
                    'value': [
                      {
                        'type': 'number',
                        'value': 40.574788
                      },
                      {
                        'type': 'number',
                        'value': -73.980954
                      }
                    ]
                  }
                },
                'columns': [
                  'coordinates',
                  'name'
                ],
                'columnsType': {
                  'name': 'string',
                  'coordinates': 'array'
                }
              },
              'city': {
                'type': 'string',
                'value': Soy.toIncDom('New York')
              }
            },
            'columns': [
              'city',
              'street'
            ],
            'columnsType': {
              'street': 'object',
              'city': 'string'
            }
          }
        },
        'columns': [
          'address',
          'email',
          'name'
        ],
        'columnsType': {
          'name': 'string',
          'email': 'string',
          'address': 'object'
        }
      },
      {
        'type': 'object',
        'value': {
          'name': {
            'type': 'string',
            'value': Soy.toIncDom('Adélaide')
          },
          'email': {
            'type': 'string',
            'value': Soy.toIncDom('adelaide@domain.com')
          },
          'address': {
            'type': 'object',
            'value': {
              'street': {
                'type': 'object',
                'value': {
                  'name': {
                    'type': 'string',
                    'value': Soy.toIncDom('La Pigalle')
                  },
                  'coordinates': {
                    'type': 'array',
                    'value': [
                      {
                        'type': 'number',
                        'value': 48.882245
                      },
                      {
                        'type': 'number',
                        'value': 2.337238
                      }
                    ]
                  }
                },
                'columns': [
                  'coordinates',
                  'name'
                ],
                'columnsType': {
                  'name': 'string',
                  'coordinates': 'array'
                }
              },
              'city': {
                'type': 'string',
                'value': Soy.toIncDom('Paris')
              }
            },
            'columns': [
              'city',
              'street'
            ],
            'columnsType': {
              'street': 'object',
              'city': 'string'
            }
          }
        },
        'columns': [
          'address',
          'email',
          'name'
        ],
        'columnsType': {
          'name': 'string',
          'email': 'string',
          'address': 'object'
        }
      }
    ],
    'columns': [
      'address',
      'email',
      'name'
    ],
    'columnsType': {
      'name': 'string',
      'email': 'string',
      'address': 'object'
    }
  };
};

export { data_nested_deep, data_nested_deep_expanded_fn };
