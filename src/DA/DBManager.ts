import { IDBManager } from "../types/index";

export class DBManager implements IDBManager{
    
    public async ReadData(queryFunction: () => Promise<any>): Promise<any> {
        try {
            const data = await queryFunction();
            return data;
        } catch (error) {
            throw error
        }
    }

    public async InsertData(queryFunction: () => Promise<any>): Promise<any> {
        try {
            const result = await queryFunction()
            return result;
        } catch (error) {
            throw error
        }
    }

    public async DeleteData(queryFunction: () => Promise<any>): Promise<any> {
        try {
            const result = await queryFunction();
            return result;
        } catch(error) {
            throw error
        }
    }
}