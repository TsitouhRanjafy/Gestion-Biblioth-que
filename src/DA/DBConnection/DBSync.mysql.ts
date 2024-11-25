import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
export const sequelize : Sequelize = new Sequelize(process.env.MYSQL_DATABASE || 'bibliotheque',process.env.MYSQL_USER || 'roor','',{
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