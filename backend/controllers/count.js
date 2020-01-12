const countRouter = require("express").Router();
const Count = require("../models/count");
const User = require("../models/user");

const calculateNextPoints = currentCount => {
  if (currentCount % 500 == 0) {
    return 250;
  } else if (currentCount % 100 == 0) {
    return 40;
  } else if (currentCount % 10 == 0) {
    return 5;
  } else {
    return 0;
  }
};

countRouter.get("/", async (request, response) => {
  try {
    const currentCount = await Count.findOne({});
    response.json(currentCount.count);
  } catch (exception) {
    response.json({ error: exception });
  }
});

countRouter.put("/", async (request, response) => {
  try {
    const user = await User.findById(request.body.id);
    if (user.points != 0) {
      const currentCount = await Count.findOne({});
      currentCount.count = currentCount.count + 1;
      const newPoints = calculateNextPoints(currentCount.count) - 1;

      user.points = user.points + newPoints;

      await currentCount.save();
      await user.save();
      response.json(newPoints);
    } else {
      response.json({ endOfPoints: "No points" });
    }
  } catch (exception) {
    response.json({ error: exception });
  }
});

module.exports = countRouter;
