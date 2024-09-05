const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection.STATES.connected) console.log("Database connected");
  } catch (error) {
    return error.message;
  }
};
MediaSourceHandle.exports = { connectDb };
