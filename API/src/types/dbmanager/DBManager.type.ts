import { Identifier } from "sequelize";

export interface IDBManager {
    ReadData(queryFunction: () => Promise<any> ) : Promise<any>
    InsertData(queryFunction: () => Promise<any>) : Promise<any>
    DeleteData(queryFunction: () => Promise<any>) : Promise<any>
}