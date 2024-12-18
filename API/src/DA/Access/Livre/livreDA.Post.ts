import { DBManager } from "../../DBManager";
import { Livre, LivreCreationAttributes } from "../../../types/index";

export class LivreDAPost extends DBManager {

    public async NewLivre(newData: LivreCreationAttributes){
        const deferredQuery = (): Promise<any> => {
            return Livre.create(newData);
        }
        try {
            const result = this.InsertData(deferredQuery);
            return result;
        } catch (error) {
            console.error(" Data Access Livre Error ",error)
        }
    }
}