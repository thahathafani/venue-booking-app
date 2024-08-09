import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlparser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error){
        console.error("Mongo connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;