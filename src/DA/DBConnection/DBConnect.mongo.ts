import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/bibliotheque'

export const connectMongo = async () =>{
    try {
        await mongoose.connect(URL)
        console.error("DataBase MongoDB Connected");
    } catch (error) {
        console.error('Error of Connection DataBase MongoDB:',error);
        throw error
    }
}