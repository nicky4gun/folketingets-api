const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(`/persons`, personRoutes);

mongoose.connect('mongodb://localhost:27017/folketinget')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error: ', err));

if(require.main === module) {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}