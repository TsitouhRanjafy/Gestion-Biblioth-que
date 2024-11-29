import { CacheDataDAGet, CacheDataDASet, LivreDAGet } from "../../DA/index";
import { Livre, triMethodeLivre } from "../../types";
import { CacheService } from "../cache/cache.service";

export class LivreServiceGet {

    constructor(
        private livreDAGet : LivreDAGet,
        private cacheDataDASet: CacheDataDASet,
        private cacheDataDAGet: CacheDataDAGet,
        private cacheService: CacheService
    ){}

    public async GetLivres(offset: number,limit: number): Promise<Livre[] | void> {
        try {
            const nbToutLivre : number | void = await this.cacheService.getNombreToutLivre();
            if (!nbToutLivre) return;
            if(offset>=0 && limit>=0 && limit<=nbToutLivre){
                const dataCache = await this.cacheDataDAGet.getCacheSimpleData(`livreOffset${offset}Limit${limit}`);
                if (!dataCache){
                    const data = await this.livreDAGet.GetLivres(offset,limit);
                    await this.cacheDataDASet.CacheSimpleData(`livreOffset${offset}Limit${limit}`,JSON.stringify(data))
                    return data;
                }
                return JSON.parse(dataCache);
            }
        } catch (error) {
            console.error(" Error Service Livre Get ",error)
        }
    }

    public async GetLivresTri(offset: number,limit: number,triMethode: triMethodeLivre): Promise<Livre[] | void> {
        try {
            const nbToutLivre : number | void = await this.cacheService.getNombreToutLivre();
            if (!nbToutLivre) return;
            if (triMethode && offset>=0 && limit>=0 && limit<=nbToutLivre){
                const dataCache = await this.cacheDataDAGet.getCacheSimpleData(`livreOffset${offset}Limit${limit}Tri${triMethode}`);
                if (!dataCache){
                    const data = await this.livreDAGet.GetLivres(offset,limit,triMethode)
                    await this.cacheDataDASet.CacheSimpleData(`livreOffset${offset}Limit${limit}Tri${triMethode}`,JSON.stringify(data))
                    return data;
                }
                return JSON.parse(dataCache);
            }
        } catch (error) {
            console.error(" Error Service Livre Get ",)
        }
    }

    public async GetLivreById(id: string): Promise<Livre | void> {
        try {
            const data = await this.livreDAGet.GetLivresById(id);
            return data;
        } catch (error) {
            console.error(" Error Service Livre Get ",error);
        }
    }
    
    public async GetTopLivres(top: number): Promise<Livre[] | void> {
        try {
            if (Math.floor(top)<=0){
                return;
            }
            const dataCache = await this.cacheDataDAGet.getCacheSimpleData(`topLivre${top}`);
            if (!dataCache){
                const data = await this.livreDAGet.GetTopLivres(Math.floor(top));
                await this.cacheDataDASet.CacheSimpleData(`topLivre${top}`,JSON.stringify(data));
                return data;
            }
            return JSON.parse(dataCache);
        } catch (error) {
            console.error(" Error Service Livre Get ",error)
        }
    }
}

