const countRouter = require('express').Router();
const Count = require('../models/count');

countRouter.get('/', async (request, response) => {
  const currentCount = await Count.findOne({});
  response.json(currentCount.count);
});

countRouter.put('/', async (request, response) => {
  const currentCount = await Count.findOneAndUpdate(
    {},
    {
      $inc: {
        count: 1
      }
    }
  );
  response.json(currentCount.count);
});

module.exports = countRouter;
