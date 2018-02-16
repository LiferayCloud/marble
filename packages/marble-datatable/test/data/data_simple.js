import Soy from 'metal-soy';

var data_simple = [{
  'price': 13.42,
  'title': 'Deadpool Classic Vol. 12: Deadpool Corps',
  'description': 'Deadpool gears up for an intergalactic adventure, but to succeed, he\'ll need to assemble a crack team of special operatives! So naturally he recruits four other versions of himself! What could go wrong? Lady Deadpool, Kid Deadpool, Dogpool, Headpool and the original Merc With a Mouth form...the Deadpool Corps.',
  'cover': 'http://ecx.images-amazon.com/images/I/61bE8lOiP8L._SX321_BO1,204,203,200_.jpg',
  'link': 'http://www.amazon.com/Deadpool-Classic-Vol-12-Corps-ebook/dp/B00XZD7ETE/ref=sr_1_10?s=books&ie=UTF8&qid=1439404247&sr=1-10'
}, {
  'price': 10.40,
  'title': 'Magneto Vol. 3: Shadow Games',
  'description': 'As Magneto tries to forge a new stronghold on the devastated island nation of Genosha, the backdrop for his greatest triumphs and most devastating tragedies, he finds himself confronted by S.H.I.E.L.D.! But what ace does Magneto have up his sleeve that might allow him to turn the tables? In the wake of AXIS, Magneto had gathered a group of wayward mutants together on Genosha.',
  'cover': 'http://ecx.images-amazon.com/images/I/619G3Hjwf3L._SX323_BO1,204,203,200_.jpg',
  'link': 'http://www.amazon.com/Magneto-Vol-Shadow-Games-2014--ebook/dp/B00XZD7FA2/ref=sr_1_12?s=books&ie=UTF8&qid=1439404247&sr=1-12'
}, {
  'price': 11.35,
  'title': 'Superman: The Men of Tomorrow',
  'description': 'The powerful super-being Ulysses is the last son of a doomed planet. Our planet. Thinking Earth’s destruction was at hand, his parents used experimental science to send their son to another dimension. Now he has returned, and Superman has finally found a peer. But will Ulysses become the hero and partner that Superman wants him to be?',
  'cover': 'http://ecx.images-amazon.com/images/I/51NifbH-7DL._SX323_BO1,204,203,200_.jpg',
  'link': 'http://www.amazon.com/Superman-Men-Tomorrow-Geoff-Johns-ebook/dp/B011QG87HO/ref=sr_1_2?s=books&ie=UTF8&qid=1439404247&sr=1-2'
}, {
  'price': 10.49,
  'title': 'Wolverine: Old Man Logan',
  'description': 'Collects Wolverine (2003) #66-72 and Wolverine: Old Man Logan Giant-Size. In the future, Logan lives a quiet life. But one day an old friend shows up to ask a favor of him. And on a journey across America, the mutant Wolverine will become a hero again.',
  'cover': 'http://ecx.images-amazon.com/images/I/515qgXA5lvL._SX323_BO1,204,203,200_.jpg',
  'link': 'http://www.amazon.com/Wolverine-Old-Logan-Mark-Millar-ebook/dp/B00AAJR45A/ref=sr_1_70?s=books&ie=UTF8&qid=1439407060&sr=1-70'
}, {
  'price': 18.78,
  'title': 'Batman: The Killing Joke',
  'description': 'Presented for the first time with stark, stunning new coloring by Bolland, BATMAN: THE KILLING JOKE is Alan Moore\'s unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy.',
  'cover': 'http://ecx.images-amazon.com/images/I/51Y817VtILL._SX311_BO1,204,203,200_.jpg',
  'link': 'http://www.amazon.com/Batman-Killing-Deluxe-Alan-Moore-ebook/dp/B009POHHRG/ref=sr_1_1?s=books&ie=UTF8&qid=1439406383&sr=1-1'
}];

var data_simple_expanded_fn = function() {
  return {
    'type': 'array',
    'value': [{
      'type': 'object',
      'value': {
        'price': {
          'type': 'number',
          'value': 13.42
        },
        'title': {
          'type': 'string',
          'value': Soy.toIncDom('Deadpool Classic Vol. 12: Deadpool Corps')
        },
        'description': {
          'type': 'string',
          'value': Soy.toIncDom('Deadpool gears up for an intergalactic adventure, but to succeed, he\'ll need to assemble a crack team of special operatives! So naturally he recruits four other versions of himself! What could go wrong? Lady Deadpool, Kid Deadpool, Dogpool, Headpool and the original Merc With a Mouth form...the Deadpool Corps.')
        },
        'cover': {
          'type': 'string',
          'value': Soy.toIncDom('http://ecx.images-amazon.com/images/I/61bE8lOiP8L._SX321_BO1,204,203,200_.jpg')
        },
        'link': {
          'type': 'string',
          'value': Soy.toIncDom('http://www.amazon.com/Deadpool-Classic-Vol-12-Corps-ebook/dp/B00XZD7ETE/ref=sr_1_10?s=books&ie=UTF8&qid=1439404247&sr=1-10')
        }
      },
      'columns': [
        'cover',
        'description',
        'link',
        'price',
        'title'
      ],
      'columnsType': {
        'price': 'number',
        'title': 'string',
        'description': 'string',
        'cover': 'string',
        'link': 'string'
      }
    }, {
      'type': 'object',
      'value': {
        'price': {
          'type': 'number',
          'value': 10.4
        },
        'title': {
          'type': 'string',
          'value': Soy.toIncDom('Magneto Vol. 3: Shadow Games')
        },
        'description': {
          'type': 'string',
          'value': Soy.toIncDom('As Magneto tries to forge a new stronghold on the devastated island nation of Genosha, the backdrop for his greatest triumphs and most devastating tragedies, he finds himself confronted by S.H.I.E.L.D.! But what ace does Magneto have up his sleeve that might allow him to turn the tables? In the wake of AXIS, Magneto had gathered a group of wayward mutants together on Genosha.')
        },
        'cover': {
          'type': 'string',
          'value': Soy.toIncDom('http://ecx.images-amazon.com/images/I/619G3Hjwf3L._SX323_BO1,204,203,200_.jpg')
        },
        'link': {
          'type': 'string',
          'value': Soy.toIncDom('http://www.amazon.com/Magneto-Vol-Shadow-Games-2014--ebook/dp/B00XZD7FA2/ref=sr_1_12?s=books&ie=UTF8&qid=1439404247&sr=1-12')
        }
      },
      'columns': [
        'cover',
        'description',
        'link',
        'price',
        'title'
      ],
      'columnsType': {
        'price': 'number',
        'title': 'string',
        'description': 'string',
        'cover': 'string',
        'link': 'string'
      }
    }, {
      'type': 'object',
      'value': {
        'price': {
          'type': 'number',
          'value': 11.35
        },
        'title': {
          'type': 'string',
          'value': Soy.toIncDom('Superman: The Men of Tomorrow')
        },
        'description': {
          'type': 'string',
          'value': Soy.toIncDom('The powerful super-being Ulysses is the last son of a doomed planet. Our planet. Thinking Earth’s destruction was at hand, his parents used experimental science to send their son to another dimension. Now he has returned, and Superman has finally found a peer. But will Ulysses become the hero and partner that Superman wants him to be?')
        },
        'cover': {
          'type': 'string',
          'value': Soy.toIncDom('http://ecx.images-amazon.com/images/I/51NifbH-7DL._SX323_BO1,204,203,200_.jpg')
        },
        'link': {
          'type': 'string',
          'value': Soy.toIncDom('http://www.amazon.com/Superman-Men-Tomorrow-Geoff-Johns-ebook/dp/B011QG87HO/ref=sr_1_2?s=books&ie=UTF8&qid=1439404247&sr=1-2')
        }
      },
      'columns': [
        'cover',
        'description',
        'link',
        'price',
        'title'
      ],
      'columnsType': {
        'price': 'number',
        'title': 'string',
        'description': 'string',
        'cover': 'string',
        'link': 'string'
      }
    }, {
      'type': 'object',
      'value': {
        'price': {
          'type': 'number',
          'value': 10.49
        },
        'title': {
          'type': 'string',
          'value': Soy.toIncDom('Wolverine: Old Man Logan')
        },
        'description': {
          'type': 'string',
          'value': Soy.toIncDom('Collects Wolverine (2003) #66-72 and Wolverine: Old Man Logan Giant-Size. In the future, Logan lives a quiet life. But one day an old friend shows up to ask a favor of him. And on a journey across America, the mutant Wolverine will become a hero again.')
        },
        'cover': {
          'type': 'string',
          'value': Soy.toIncDom('http://ecx.images-amazon.com/images/I/515qgXA5lvL._SX323_BO1,204,203,200_.jpg')
        },
        'link': {
          'type': 'string',
          'value': Soy.toIncDom('http://www.amazon.com/Wolverine-Old-Logan-Mark-Millar-ebook/dp/B00AAJR45A/ref=sr_1_70?s=books&ie=UTF8&qid=1439407060&sr=1-70')
        }
      },
      'columns': [
        'cover',
        'description',
        'link',
        'price',
        'title'
      ],
      'columnsType': {
        'price': 'number',
        'title': 'string',
        'description': 'string',
        'cover': 'string',
        'link': 'string'
      }
    }, {
      'type': 'object',
      'value': {
        'price': {
          'type': 'number',
          'value': 18.78
        },
        'title': {
          'type': 'string',
          'value': Soy.toIncDom('Batman: The Killing Joke')
        },
        'description': {
          'type': 'string',
          'value': Soy.toIncDom('Presented for the first time with stark, stunning new coloring by Bolland, BATMAN: THE KILLING JOKE is Alan Moore\'s unforgettable meditation on the razor-thin line between sanity and insanity, heroism and villainy, comedy and tragedy.')
        },
        'cover': {
          'type': 'string',
          'value': Soy.toIncDom('http://ecx.images-amazon.com/images/I/51Y817VtILL._SX311_BO1,204,203,200_.jpg')
        },
        'link': {
          'type': 'string',
          'value': Soy.toIncDom('http://www.amazon.com/Batman-Killing-Deluxe-Alan-Moore-ebook/dp/B009POHHRG/ref=sr_1_1?s=books&ie=UTF8&qid=1439406383&sr=1-1')
        }
      },
      'columns': [
        'cover',
        'description',
        'link',
        'price',
        'title'
      ],
      'columnsType': {
        'price': 'number',
        'title': 'string',
        'description': 'string',
        'cover': 'string',
        'link': 'string'
      }
    }],
    'columns': [
      'cover',
      'description',
      'link',
      'price',
      'title'
    ],
    'columnsType': {
      'price': 'number',
      'title': 'string',
      'description': 'string',
      'cover': 'string',
      'link': 'string'
    }
  };
};

export { data_simple, data_simple_expanded_fn };
