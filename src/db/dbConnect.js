import mongoose from "mongoose";
import { MONGO_DB_NAME } from "../constants.js";

export const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${MONGO_DB_NAME}`);
        console.log(`MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection failed: ",error);
        process.exit(1);
    }
}