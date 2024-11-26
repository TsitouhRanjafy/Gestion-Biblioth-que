import { IDBManager } from "../types/index";

export class DBManager implements IDBManager{
    
    public async ReadData(queryFunction: () => Promise<any>): Promise<any> {
        try {
            const data = await queryFunction();
            return data;
        } catch (error) {
            return error
        }
    }

    public InsertData(queryFunction: () => Promise<any>): Promise<any> {
        throw new Error("Method not implemented.");
    }
}