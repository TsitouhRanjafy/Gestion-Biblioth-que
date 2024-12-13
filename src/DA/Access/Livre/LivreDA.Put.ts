import { DBManager } from "../../DBManager";
import { Livre, LivreCreationAttributes } from "../../../types/index";



export class LivreDAPut extends DBManager {

    public async UpdateLivreById(Id: string,newData: Partial<LivreCreationAttributes>){
        try {
            const [nbLignesAffectees]= await Livre.update(
                newData,
                {
                    where: {
                        id: Id
                    },
                }
            )
            return nbLignesAffectees;
        } catch (error) {
            console.error(' Data Access Error', error)
            throw error
        }
    }
}