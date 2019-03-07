const express = require('express');
const { addPage } = require('../views/addPage');

const wikiRouter = express.Router();

wikiRouter.get('/', async (req, res, next) => {
  try {
    res.send('THIS IS THE GET ROUTER /');
    console.log('wiki get /');
  } catch (error) {
    next(error);
  }
});

wikiRouter.post('/', async (req, res, next) => {
  try {
    res.send('THIS IS THE POST ROUTER /');
    console.log('wiki post /');
  } catch (error) {
    next(error);
  }
});

wikiRouter.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
    console.log('wiki get /ADD');
  } catch (error) {
    next(error);
  }
});

module.exports = wikiRouter;
