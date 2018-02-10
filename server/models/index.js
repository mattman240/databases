var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.chat.connect();
      db.chat.query('SELECT * FROM messages', function (error, results, fields) {
        console.log('err', error);
        console.log('results', results);
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

