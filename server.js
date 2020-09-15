const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.get('/', (req, res) => res.send('hello'));

app.use('/users', require('./routes/users'));


app.listen(process.env.PORT || 3000);

