'use stinct';

module.exports = [
  /**
   * Request element mapping <Request>
   */
  {
    'type': 'Request',
    'mapping': [
      {
        'key': 'key',
        'jsonKey': 'key',
        'helper': 'stripCDATA'
      },
      {
        'key': 'authentication',
        'jsonKey': 'authentication'
      },
      {
        'key': 'method',
        'jsonKey': 'method',
        'helper': 'stripCDATA'
      }
    ]
  },

  /**
   * work-ids element mapping <work-ids>
   */
  {
    'type': 'work-ids',
    'mapping': [
      {
        'key': 'item',
        'jsonKey': 'id'
      }
    ]
  },

  /**
   * book element mapping <book>
   */
  {
    'type': 'book',
    'mapping': [
      {
        'key': 'isbn',
        'jsonKey': 'isbn',
        'helper': 'stripCDATA'
      },
      {
        'key': 'id',
        'jsonKey': 'goodreads_id'
      },
      {
        'key': 'isbn13',
        'jsonKey': 'isbn13',
        'helper': 'stripCDATA'
      },
      {
        'key': 'title',
        'jsonKey': 'title',
        'helper': 'newStripCDATA'
      },
      {
        'key': 'url',
        'jsonKey': 'url',
        'helper': 'stripCDATA'
      },
      {
        'key': 'small_image_url',
        'jsonKey': 'small_image_url'
      },
      {
        'key': 'num_pages',
        'jsonKey': 'num_pages',
        'helper': 'stripCDATA'
      },
      {
        'key': 'image_url',
        'jsonKey': 'image_url'
      },
      {
        'key': 'link',
        'jsonKey': 'link',
        'helper': 'stripCDATA'
      },
      {
        'key': 'format',
        'jsonKey': 'format',
        'helper': 'stripCDATA'
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
        'helper': 'stripHTML'
      },
    ]
  },

  /**
   * author element mapping <author>
   */
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

  /**
   * popular_shelves element mapping <popular_shelves>
   */
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

  /**
   * shelf element mapping <shelf>
   */
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

  /**
   * similar_books element mapping <similar_books>
   */
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