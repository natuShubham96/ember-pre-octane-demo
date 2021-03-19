export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

    this.get('/pictures', function() {
    return {
      "data": [  
        {
          "type": "picture",
            "id": 1,
           "title": "accusamus beatae ad facilis cum similique qui sunt",
           "url": "https://via.placeholder.com/600/92c952",
           "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
   {
     "type": "picture",
    "id": 66,
    "title": "provident rerum voluptatem illo asperiores qui maiores",
    "url": "https://via.placeholder.com/600/ee0a7e",
    "thumbnailUrl": "https://via.placeholder.com/150/ee0a7e"
  },
  ]
    };
  });
  
}
