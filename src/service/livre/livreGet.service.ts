import { Identifier } from "sequelize";
import { CacheDataDAGet, CacheDataDASet, LivreDAGet } from "../../DA/index";
import { triMethodeLivre } from "../../types";
import { CacheService } from "../cache/cache.service";

export class LivreServiceGet {
    private livreDAGet: LivreDAGet;
    private cacheDataDASet: CacheDataDASet;
    private cacheDataDAGet: CacheDataDAGet;
    private cacheService: CacheService;

    constructor(livreDAGet : LivreDAGet,cacheDataDASet: CacheDataDASet,cacheDataDAGet: CacheDataDAGet,cacheService: CacheService){
        this.livreDAGet = livreDAGet;
        this.cacheDataDASet = cacheDataDASet;
        this.cacheDataDAGet = cacheDataDAGet;
        this.cacheService = cacheService;
    }

    public async GetLivres(offset: number,limit: number): Promise<any> {
        try {
            const nbToutLivre : number | void = await this.cacheService.getNombreToutLivre();
            if (!nbToutLivre) return;
            if(offset>=0 && limit>=0 && limit<=nbToutLivre){
                let data = await this.cacheDataDAGet.getCacheSimpleData(`livreOffset${offset}Limit${limit}`);
                if (!data){
                    data = await this.livreDAGet.GetLivres(offset,limit);
                    await this.cacheDataDASet.CacheSimpleData(`livreOffset${offset}Limit${limit}`,JSON.stringify(data))
                    return data;
                }
                return JSON.parse(data);
            }
        } catch (error) {
            console.error(" Error Service Livre Get ",error)
        }
    }

    public async GetLivresTri(offset: number,limit: number,triMethode: triMethodeLivre) {
        try {
            const nbToutLivre : number | void = await this.cacheService.getNombreToutLivre();
            if (!nbToutLivre) return;
            if (triMethode && offset>=0 && limit>=0 && limit<=nbToutLivre){
                let data = await this.cacheDataDAGet.getCacheSimpleData(`livreOffset${offset}Limit${limit}Tri${triMethode}`);
                if (!data){
                    data = await this.livreDAGet.GetLivres(offset,limit,triMethode)
                    await this.cacheDataDASet.CacheSimpleData(`livreOffset${offset}Limit${limit}Tri${triMethode}`,JSON.stringify(data))
                    return data;
                }
                return JSON.parse(data);
            }
        } catch (error) {
            console.error(" Error Service Livre Get ",)
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

