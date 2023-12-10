import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//mongodb://localhost:27017/Ecommerce-api
const dbConect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb conected`);
    // console.log(connected);
  } catch (error) {
    console.log(`Error :${error.message}`);
    process.exit();
  }
};

export default dbConect;
