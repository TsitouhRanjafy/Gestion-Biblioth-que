import { DBManager } from "../../DBManager";
import { Emprunt, EmpruntCreationOptional } from "../../../types/index";


export class EmpruntDAPost extends DBManager {

    public async NewEmprunt(DataEmprunt: EmpruntCreationOptional) {
        const data = DataEmprunt;
        const deferredQuery = (): Promise<any> => {
            return Emprunt.create(data)
        }
        try {
            const result = await this.InsertData(deferredQuery)
            return result;
        } catch (error) {
            throw error
        }
    }
}                                                                                                                   