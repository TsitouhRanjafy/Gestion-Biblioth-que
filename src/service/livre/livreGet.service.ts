import { Identifier } from "sequelize";
import { LivreDAGet } from "../../DA/index";
import { triMethodeLivre } from "../../types";
import { CacheService } from "../cache/cache.service";

export class LivreServiceGet {
    private livreDAGet: LivreDAGet;
    private cacheService: CacheService;

    constructor(livreDAGet : LivreDAGet,cacheService: CacheService){
        this.livreDAGet = livreDAGet;
        this.cacheService = cacheService;
    }

    public async GetLivres(offset: number,limit: number,triMethode: triMethodeLivre): Promise<any> {
        try {
            let data : Promise<any>;
            if(offset<0 || limit<0){
                return;
            }
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

