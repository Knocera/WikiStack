const express = require('express');
const morgan = require('morgan');
const index = require('./views/index');
const main = require('./views/main');
const layout = require('./views/layout');

const models = require('./models');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

models.db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  const page = layout(' ');
  res.send(page);
});
const PORT = 3000;
const initSync = async () => {
  await models.db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};
initSync();
