import mongoose from "mongoose";
import config from "config";
const db = config.get("mongoURI");

export const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  mongoose.connect(db, {
    useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
  });
};

export default connectDB;
