'use stinct';

module.exports = [
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
      }
    ]
  }
];