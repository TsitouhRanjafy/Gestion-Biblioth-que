import { Identifier } from "sequelize";
import { LivreDAGet } from "../../DA/index";

export class LivreService {
    private livreDAGet : LivreDAGet;

    constructor(livreDAGet : LivreDAGet){
        this.livreDAGet = livreDAGet;
    }

    public async GetLivres(): Promise<any> {
        try {
            const data = await this.livreDAGet.GetLivres()
            return data
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

