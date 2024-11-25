import { Livre } from "../livre/type.livre";

export interface IDBManager {
    ReadData(query : Livre[]) : Promise<any>
}