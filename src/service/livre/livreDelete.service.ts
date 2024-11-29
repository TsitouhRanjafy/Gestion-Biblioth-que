import { DACache, LivreDADelete, LivreDAGet } from "../../DA/index";
import { CacheService } from "../cache/cache.service";


export class LivreServiceDelete {
    constructor(
        private livreDADelete: LivreDADelete,
        private cacheService: CacheService,
        private livreDAGet: LivreDAGet
    ){};

    public async DeleteLivreById(Id: string) {
        try {
            const data = await this.livreDAGet.GetLivresById(Id);
            const disponible = data.dataValues.disponible;
            if (disponible == "oui"){
                const result = await this.livreDADelete.DeleteLivreById(Id);
                await this.cacheService.reinitialiseCache();
                return result;
            }
            return 0;
        } catch(error) {
            console.error(" Error Service Livre Delete ",error)
        }
    }

}