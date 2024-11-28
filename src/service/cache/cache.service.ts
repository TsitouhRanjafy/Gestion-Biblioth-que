import { CacheDataDAGet, CacheDataDASet, LivreDAGet } from "../../DA";

export class CacheService {
    constructor(private cacheDASet: CacheDataDASet,private cacheDAGet: CacheDataDAGet,private livreDAGet: LivreDAGet){}

    public async CacheNombreToutLivre(cle: string){
        try {
            const nombreToutLivre = await this.livreDAGet.getNombreToutLivre();
            const result = this.cacheDASet.CacheSimpleData(cle,JSON.stringify(nombreToutLivre));
            return result;
        } catch (error) {
            console.error(" Error Cache Service ",error)
        }
    }

    public async getNombreToutLivre(){
        try {
            const nombreToutLivre = await this.cacheDAGet.getCacheSimpleData("nombreToutLivre");
            return nombreToutLivre;
        } catch (error) {
            console.error(" Error Cache Service getNombreToutLivre ",error)
        }
    }
}