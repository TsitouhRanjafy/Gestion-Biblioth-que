import { DBManager } from "../../DBManager";
import { Livre } from "../../../types/index";

export class LivreDADelete extends DBManager {

    public async DeleteDataById(Id: string){
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
            throw error
        }

    }
}