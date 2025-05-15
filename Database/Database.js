const moongose = require("mongoose");

const db = () => {
  try {
    moongose.connect("mongodb://localhost:27017/db").then(() => {
      console.log("Database connected sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
