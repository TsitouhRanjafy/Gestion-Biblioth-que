import { Identifier } from "sequelize";
import { LivreDAGet } from "../../DA/index";
import { triMethodeLivre } from "../../types";

export class LivreServiceGet {
    private livreDAGet : LivreDAGet;

    constructor(livreDAGet : LivreDAGet){
        this.livreDAGet = livreDAGet;
    }

    public async GetLivres(offset: number,limit: number,triMethode: triMethodeLivre): Promise<any> {
        try {
            let data : Promise<any>;
            if (triMethode){
                data = await this.livreDAGet.GetLivres(offset,limit,triMethode)
                return data;
            }
            data = await this.livreDAGet.GetLivres(offset,limit)
            return data;
        } catch (error) {
            throw error
        }
    }

    public async GetLivreById(id: Identifier): Promise<any> {
        try {
            const data = await this.livreDAGet.GetLivresById(id);
            return data;
        } catch (error) {
            throw error
        }
    }
    
    public async GetTopLivres(): Promise<any> {
        try {
            const data = await this.livreDAGet.GetTopLivres();
            return data;
        } catch (error) {
            throw error
        }
    }
}

