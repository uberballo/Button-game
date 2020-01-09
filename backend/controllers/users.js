const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
  const body = request.body;
  const users = await User.findOne({ username: body.username });

  response.json(users.map(u => u.toJSON()));
});

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body;
    const user = await User.findOne({ username: body.username });
    if (!user) {
      const username = request.body;

      const user = new User({
        username,
        count: 20
      });

      const savedUser = await user.save();
      response.json(savedUser);
    } else {
      const user = await User.findOne({ username: body.username });
      response.json(user);
    }
  } catch (exception) {
    next(exception);
  }
});

module.exports = usersRouter;
