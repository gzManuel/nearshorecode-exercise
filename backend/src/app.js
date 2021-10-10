// Importing
const express = require('express');
const mongoose = require('mongoose');

const mainRoutes = require('./routes/main.routes');
const app = express();
const cors = require('cors')
mongoose.connect(
    'mongodb://127.0.0.1:27017/loans?directConnection=true&serverSelectionTimeoutMS=2000'
);

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/',mainRoutes);


app.listen(process.env.PORT, () => {
    console.log('Server running on port 3333');
});