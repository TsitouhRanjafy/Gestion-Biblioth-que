import {  LivreDAPost } from "../../DA";
import { ILivre, Livre, LivreCreationAttributes } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { CacheService } from "../cache/cache.service";

export class LivreServicePost {
    constructor(
        private livreDAPost: LivreDAPost,
        private cacheService: CacheService
    ){}

    public async NewLivre(newDataWithoutId: Required<ILivre>): Promise< 0 | Livre | void> {
        try {
            const id = uuidv4(); 
            const newData : LivreCreationAttributes = {
                id: id,
                titre: newDataWithoutId.titre,
                auteur: newDataWithoutId.auteur,
                sortie: newDataWithoutId.sortie,
                disponible: newDataWithoutId.disponible
            }
            if (!newData.titre) return 0;
            const data = await this.livreDAPost.NewLivre(newData)
            if (!data) return 0;
            await this.cacheService.reinitialiseCache();
            return data;
        } catch (error) {
            console.error(" Service Livre Post Error ",error)
        }
    }
}