'use stinct';

module.exports = [
  {
    'transformer_type': 'Request',
    'mapping': [
      {
        'key': 'key',
        'jsonKey': 'key',
        'helper': 'getISBN'
      },
      {
        'key': 'authentication',
        'jsonKey': 'authentication'
      },
      {
        'key': 'method',
        'jsonKey': 'method',
        'helper': 'getISBN'
      }
    ]
  },

  {
    'transformer_type': 'work-ids',
    'mapping': [
      {
        'key': 'item',
        'jsonKey': 'id'
      }
    ]
  },

  {
    'transformer_type': 'book',
    'mapping': [
      {
        'key': 'isbn',
        'jsonKey': 'isbn',
        'helper': 'getISBN'
      },
      {
        'key': 'id',
        'jsonKey': 'goodreads_id'
      },
      {
        'key': 'isbn13',
        'jsonKey': 'isbn13',
        'helper': 'getISBN'
      },
      {
        'key': 'title',
        'jsonKey': 'title'
      },
      {
        'key': 'url',
        'jsonKey': 'url',
        'helper': 'getISBN'
      },
      {
        'key': 'small_image_url',
        'jsonKey': 'small_image_url'
      },
      {
        'key': 'num_pages',
        'jsonKey': 'num_pages',
        'helper': 'getISBN'
      },
      {
        'key': 'image_url',
        'jsonKey': 'image_url'
      },
      {
        'key': 'link',
        'jsonKey': 'link',
        'helper': 'getISBN'
      },
      {
        'key': 'format',
        'jsonKey': 'format',
        'helper': 'getISBN'
      },
      {
        'key': 'publisher',
        'jsonKey': 'publisher'
      },
      {
        'key': 'publication_day',
        'jsonKey': 'publication_day'
      },
      {
        'key': 'publication_year',
        'jsonKey': 'publication_year'
      },
      {
        'key': 'publication_month',
        'jsonKey': 'publication_month'
      },
      {
        'key': 'average_rating',
        'jsonKey': 'average_rating'
      },
      {
        'key': 'ratings_count',
        'jsonKey': 'ratings_count'
      }
    ]
  },

  {
    'transformer_type': 'author',
    'mapping': [
      {
        'key': 'isbn',
        'jsonKey': 'isbn',
        'helper': 'getISBN'
      },
      {
        'key': 'id',
        'jsonKey': 'goodreads_id'
      },
      {
        'key': 'isbn13',
        'jsonKey': 'isbn13',
        'helper': 'getISBN'
      },
      {
        'key': 'title',
        'jsonKey': 'title'
      },
      {
        'key': 'url',
        'jsonKey': 'url',
        'helper': 'getISBN'
      },
      {
        'key': 'small_image_url',
        'jsonKey': 'small_image_url'
      },
      {
        'key': 'num_pages',
        'jsonKey': 'num_pages',
        'helper': 'getISBN'
      },
      {
        'key': 'image_url',
        'jsonKey': 'image_url'
      },
      {
        'key': 'link',
        'jsonKey': 'link',
        'helper': 'getISBN'
      },
      {
        'key': 'format',
        'jsonKey': 'format',
        'helper': 'getISBN'
      },
      {
        'key': 'publisher',
        'jsonKey': 'publisher'
      },
      {
        'key': 'publication_day',
        'jsonKey': 'publication_day'
      },
      {
        'key': 'publication_year',
        'jsonKey': 'publication_year'
      },
      {
        'key': 'publication_month',
        'jsonKey': 'publication_month'
      },
      {
        'key': 'average_rating',
        'jsonKey': 'average_rating'
      },
      {
        'key': 'ratings_count',
        'jsonKey': 'ratings_count'
      }
    ]
  }
];