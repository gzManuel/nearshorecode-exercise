// Importing
const express = require('express');

const mainRoutes = require('./routes/main.routes');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/',mainRoutes);


module.exports = app;