var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (error, results, fields) => {
        console.log('err', error);
        console.log('results', results);
        callback(error, results, fields);
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      console.log(message, 'I AM INSIDE THE MODEL');
      var messageData = [message.message, message.username, message.roomname];
      db.query(`INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)`, messageData, (error, results, fields) => {
        console.log('err', error);
        console.log('req.body', message);
        callback(error, results, fields);
      }); 
    }
  },
  //

  users: {
    // Ditto as above.
    get: function (callback) {
      // db.connect();
      db.query('SELECT * FROM users', (error, results, fields) => {
        console.log('err', error);
        console.log('results', results);
        callback(error, results, fields);
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      });
    },
    post: function (user, callback) {
      db.query(`INSERT INTO users (username) VALUES ("${user.username}")`, (error, results, fields) => {
        console.log('err', error);
        console.log('req.body', user);
        callback(error, results, fields);
      }); 
    }
  }
};

