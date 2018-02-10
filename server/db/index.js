var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var chat = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

chat.connect((err, cb) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('sucess');
  }
});

module.exports = chat;