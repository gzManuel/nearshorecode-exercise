const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((res, err) => {
        if (err) return reject(err);
        resolve();
      })
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };