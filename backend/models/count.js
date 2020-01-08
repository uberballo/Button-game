const mongoose = require("mongoose");

const countSchema = mongoose.Schema({
  count: Number
});

countSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Count = mongoose.model("Count", countSchema);

module.exports = Count;
