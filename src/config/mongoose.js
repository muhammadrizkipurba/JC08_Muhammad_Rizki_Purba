const mongoose = require("mongoose");

// localhost : mongodb://127.0.0.1:27017/jc8ReactMongoose

mongoose.connect("mongodb+srv://expressmongoose:anakmedan123@cluster0-9fuxa.mongodb.net/ReactMongoose?retryWrites=true", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
