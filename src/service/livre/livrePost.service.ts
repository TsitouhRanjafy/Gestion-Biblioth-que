import { DACache, LivreDAPost } from "../../DA";
import { ILivre, LivreCreationAttributes } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { CacheService } from "../cache/cache.service";

export class LivreServicePost {
    constructor(
        private livreDAPost: LivreDAPost,
        private cacheService: CacheService,
        private dACache: DACache ){}

    public async NewLivre(newPartialData: Required<ILivre>) {
        try {
            const id = uuidv4(); 
            const newData : LivreCreationAttributes = {
                id: id,
                titre: newPartialData.titre,
                auteur: newPartialData.auteur,
                sortie: newPartialData.sortie,
                disponible: newPartialData.disponible
            }
            const data = await this.livreDAPost.NewLivre(newData)
            if (!data) return
            await this.dACache.RestoreCache();
            await this.cacheService.CacheNombreToutLivre("nombreToutLivre");
            return data;
        } catch (error) {
            console.error(" Service Livre Post Error ",error)
        }
    }
}