import { DBManager } from "../../DBManager";
import { Emprunt, EmpruntCreationOptional } from "../../../types/index";


export class EmpruntDAGet extends DBManager {

    public async GetEmpruntLivreById(Id: string) {
        const deferredQuery = (): Promise<any> => {
            return Emprunt.findOne({
                where: {
                    id_livre: Id
                }
            })
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch(error) {
            throw error
        }
    }
}                                                                                                                   