import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';

dotenv.config();
const URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/bibliotheque'

const sequelize : Sequelize = new Sequelize(process.env.MYSQL_DATABASE || 'bibliotheque',process.env.MYSQL_USER || 'roor','',{
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
})
export const syncDatabaseMysql = async () =>{
    try {
        await sequelize.sync({ alter: true })
        console.log('La base de données mysql a été synchronisée ');
    } catch (error) {
        console.error('Erreur de synchronisation de la base de donnée mysql',error)
    }
}

export const connectMongo = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("connection mongoDB ok");
    } catch (error) {
        console.log('connection mongoDB échoue:',error);
        throw error
    }
}
export default sequelize
