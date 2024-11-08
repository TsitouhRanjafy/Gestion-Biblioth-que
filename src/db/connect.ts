import mysql from "mysql2/promise";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/bibliotheque'

// créer un pool de connexion pour les interactions de abse de donnéesf MYSQL
// réutilisable plutôt que de créer de nouvelle connexion à chaque demande
export const pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER
    })

export const connectMongo = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("connection mongoDB ok");
    } catch (error) {
        console.log('connection mongoDB échoue:',error);
        throw error
    }
}
