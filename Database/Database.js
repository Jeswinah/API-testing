const mongoose = require("mongoose");

const db = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
