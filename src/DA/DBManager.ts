import { IDBManager, Livre } from "../types/index";

export class DBManager implements IDBManager{
    ReadData(query: Livre[] ): Promise<any> {
        return new Promise((resole,reject) =>{
            return query;
        })
    }
}