import { Emprunt } from "../../../types"
import { DBManager } from "../../DBManager";

export class EmpruntDADelete extends DBManager {

    public async DeleteEmpruntById(Id: string) {
        const deferredQuery = (): Promise<any> => {
            return Emprunt.destroy({
                where: {
                    id_emprunt: Id
                }
            });
        }
        try {
            const result = await this.DeleteData(deferredQuery);
            return result;
        } catch (error) {
            console.error(" Error DA Emprunt Delete ",error)
        }
    }
}