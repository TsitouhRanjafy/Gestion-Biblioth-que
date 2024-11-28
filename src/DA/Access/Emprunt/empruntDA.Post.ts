import { DBManager } from "../../DBManager";
import { Emprunt, EmpruntCreationOptional,EmpruntHistorique, IEmpruntHistoriques } from "../../../types/index";


export class EmpruntDAPost extends DBManager {

    public async NewEmprunt(DataEmprunt: EmpruntCreationOptional) {
        const deferredQuery = (): Promise<any> => {
            return Emprunt.create(DataEmprunt)
        }
        try {
            const result = await this.InsertData(deferredQuery)
            return result;
        } catch (error) {
            throw error
        }
    }

    public async NewEmpruntHistorique(DataEmprunt: IEmpruntHistoriques) {
        const newEprtHistorique = new EmpruntHistorique(DataEmprunt);
        const deferredQuery = (): Promise<any> => {
            return newEprtHistorique.save();
        }
        try {
            const result = await this.InsertData(deferredQuery);
            return result;
        } catch (error) {
            console.error(" Error DA Emprunt Post",error)
        }
    }

}                                                                                                                   