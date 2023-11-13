import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




const connectDB=async()=>{
    try {
       
         if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in the environment variables.");
        }
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(` MongoDB Connected ! ! DB Host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Error",error);
        throw error
       
    }
}
export default connectDB