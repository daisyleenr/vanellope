import express from 'express';
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.status(200).send({message: 'hello world'});
});

module.exports = indexRouter;
