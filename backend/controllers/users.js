const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});

  response.json(users.map(u => u.toJSON()));
});

usersRouter.post("/", async (request, response, next) => {
  try {
    const username = request.body;

    const user = new User({
      username,
      name,
      passwordHash
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (exception) {
    next(exception);
  }
});

module.exports = usersRouter;
