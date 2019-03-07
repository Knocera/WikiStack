const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  console.log('the router is working');
});

module.exports = userRouter;
