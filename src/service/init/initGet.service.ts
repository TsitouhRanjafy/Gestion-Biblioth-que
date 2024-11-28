import { CacheService } from "../cache/cache.service";

export class InitServiceGet {
    constructor(private cacheService: CacheService){}

    public async getPagination(dataOnePage: number): Promise<number | void> {
        try {
            const nbToutLivre = await this.cacheService.getNombreToutLivre();
            if (nbToutLivre){
                const n = Math.ceil(parseInt(JSON.parse(nbToutLivre)[0].nombreToutLivre) / Math.floor(dataOnePage));
                console.log(n);
                return n;
            }
        } catch(error) {
            console.error(" Error Service Init Get ",error);
        }
    }
}