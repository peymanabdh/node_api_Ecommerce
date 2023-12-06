import mongoose from "mongoose";
//mongodb://localhost:27017/Ecommerce-api
const dbConect = async () => {
  try {
    mongoose.set("strictQuery");
    const connected = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });
    console.log(`mongodb conected ${connected.Connection.host}`);
  } catch (error) {
    console.log(`Error :${error.message}`);
    process.exit();
  }
};

export default dbConect;
