const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const body = request.body;
  const users = await User.findOne({ username: body.username });

  response.json(users.map(u => u.toJSON()));
});

usersRouter.post("/", async (request, response) => {
  try {
    const body = request.body;
    const user = await User.findOne({ username: body.username });

    if (!user) {
      const username = request.body.username;

      const user = new User({
        username,
        points: 2
      });

      const savedUser = await user.save();
      response.json(savedUser);
    } else {
      response.json(user);
    }
  } catch (exception) {
    response.json({ error: exception });
  }
});

usersRouter.put("/", async (request, response) => {
  try {
    const body = request.body;
    const user = await User.findById(body.id);
    console.log(user);
    user.points = 20;
    await user.save();
    response.json(user);
  } catch (exception) {
    response.json({ error: exception });
  }
});

module.exports = usersRouter;
