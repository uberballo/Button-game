const countRouter = require("express").Router();
const Count = require("../models/count");
const User = require("../models/user");

countRouter.get("/", async (request, response) => {
  const currentCount = await Count.findOne({});
  response.json(currentCount.count);
});

countRouter.put("/", async (request, response) => {
  const user = await User.findById(request.body.id);
  user.points = user.points - 1;
  console.log("countti");
  console.log(user);
  console.log(request.body);
  await user.save();
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
