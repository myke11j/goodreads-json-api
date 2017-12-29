'use stinct';

module.exports = [
  {
    'type': 'Request',
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
    'type': 'work-ids',
    'mapping': [
      {
        'key': 'item',
        'jsonKey': 'id'
      }
    ]
  },

  {
    'type': 'book',
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
      },
      {
        'key': 'description',
        'jsonKey': 'description',
        'helper': 'getISBN'
      },
    ]
  },

  {
    'type': 'author',
    'mapping': [
      {
        'key': 'id',
        'jsonKey': 'author_id'
      },
      {
        'key': 'name',
        'jsonKey': 'name'
      },
      {
        'key': 'average_rating',
        'jsonKey': 'average_rating'
      },
      {
        'key': 'ratings_count',
        'jsonKey': 'ratings_count'
      },
    ]
  },

  {
    'type': 'popular_shelves',
    'mapping': [
      {
        'key': 'shelf',
        'jsonKey': 'shelfList',
        'helper': 'shelf'
      },
    ]
  },

  {
    'type': 'shelf',
    'mapping': [
      {
        'key': 'name',
        'jsonKey': 'name'
      },
      {
        'key': 'count',
        'jsonKey': 'count'
      }
    ]
  },

  {
    'type': 'similar_books',
    'mapping': [
      {
        'key': 'book',
        'jsonKey': 'book',
        'transformer': 'book'
      }
    ]
  },
];