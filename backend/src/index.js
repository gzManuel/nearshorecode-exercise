const app = require('./app.js');
const db = require('./utils/db');
require('dotenv').config();

const PORT = process.env.PORT ;

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
    });
  });