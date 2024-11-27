import { LivreDAPost } from "../../DA";
import { ILivre, LivreCreationAttributes } from "../../types";
import { v4 as uuidv4 } from "uuid";

export class LivreServicePost {
    constructor(private livreDAPost: LivreDAPost){}

    public async NewLivre(newPartialData: ILivre) {
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
            return data;
        } catch (error) {
            console.error(" Service Livre Post Error ",error)
        }
    }
}