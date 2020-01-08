const countRouter = require("express").Router();
const Count = require("../models/count");

countRouter.get("/", async (request, response) => {
  console.log("asd");
  response.send("hello");
  //const currentCount = await Count.find({});
  //response.json(currentCount.toJSON());
});

countRouter.post("/", async (request, response) => {
  const currentCount = await Count.findOne({});
  const newCount = currentCount + 1;
  response.json(newCount);
});

module.exports = countRouter;
