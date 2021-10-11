// Importing
const express = require('express');
const mongoose = require('mongoose');

const mainRoutes = require('./routes/main.routes');
const app = express();
const cors = require('cors')
require('dotenv').config();

mongoose.connect(
    process.env.MONGO_URL
);

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/',mainRoutes);


app.listen(process.env.PORT, () => {
    console.log('Server running on port 3333');
});