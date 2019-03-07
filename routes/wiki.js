const express = require('express');
const addPage = require('../views/addPage');
const layout = require('../views/layout');
const { Page } = require('../models');

const wikiRouter = express.Router();

wikiRouter.get('/', async (req, res, next) => {
  try {
    const page = layout(' ');
    res.send(page);
    console.log('wiki get /');
  } catch (error) {
    next(error);
  }
});

wikiRouter.post('/', async (req, res, next) => {
  try {
    const page = new Page({
      title: req.body.title,
      content: req.body.content,
    });
    console.log(page.title);
    console.log(page.content);

    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise.

    page.save();
    res.redirect('/');
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
