const express = require('express');
const morgan = require('morgan');
const index = require('./views/index');
const main = require('./views/main');
const layout = require('./views/layout');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  const page = layout('');
  res.send(page);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

