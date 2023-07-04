const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1/tinkerdb";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "tinkerdb",
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("ERROR WHILE CONNECTING TO DB: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
