import { Livre } from "../livre/type.livre";

export interface IDBManager {
    ReadData(queryFunction : () => Promise<any> ) : Promise<any>
}