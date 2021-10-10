// Importing
const express = require('express');
const mongoose = require('mongoose');

const mainRoutes = require('./routes/main.routes');
const app = express();

mongoose.connect(
    'mongodb://127.0.0.1:27017/loans?directConnection=true&serverSelectionTimeoutMS=2000'
);

app.use(express.json());

app.use('/',mainRoutes);

app.listen(3333, () => {
    console.log('Server running on port 3333');
});