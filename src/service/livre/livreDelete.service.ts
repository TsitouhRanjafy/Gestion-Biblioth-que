import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { EmpruntDAGet, LivreDADelete, LivreDAGet } from "../../DA/index";


export class LivreServiceDelete {
    constructor(private livreDADelete: LivreDADelete,private empruntDAGet: EmpruntDAGet,private livreDAGet: LivreDAGet){};

    public async DeleteLivreById(Id: string) {
        try {
            
            
        } catch(error) {
            throw error
        }
    }

}