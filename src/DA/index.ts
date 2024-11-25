import { connectMongo } from "./DBConnection/DBConnect.mongo";
import { syncDatabaseMysql , sequelize } from "./DBConnection/DBSync.mysql";


export {
    connectMongo,
    syncDatabaseMysql,
    sequelize
}