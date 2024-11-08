import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

// créer un pool de connexion pour les interactions de abse de données MYSQL
// réutilisable plutôt que de créer de nouvelle connexion à chaque demande
export const pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER
    })
