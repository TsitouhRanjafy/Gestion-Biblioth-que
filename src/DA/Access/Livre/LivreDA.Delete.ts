import { DBManager } from "../../DBManager";
import { Livre } from "../../../types/index";

export class LivreDADelete extends DBManager {

    public async DeleteLivreById(Id: string){
        const deferredQuery = (): Promise<any> => {
            return Livre.destroy({
                where: {
                    id: Id,
                }
            });
        }
        try {
            const result = await this.DeleteData(deferredQuery);
            return result;
        } catch (error) {
            console.error(" Error DA Livre Delete ",error)
        }

    }
}