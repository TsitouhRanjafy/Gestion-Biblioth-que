import { IAvis , Avis } from "../../../types/index";
import { DBManager } from "../../DBManager";

export class AvisDAPost extends DBManager {

    public async NewAvis(IData: Required<IAvis>): Promise<any> {
        const data = new Avis(IData)
        const deferredQuery = (): Promise<any> => {
            return data.save();
        }
        try {
            const result = await this.InsertData(deferredQuery);
            return result;
        } catch (error) {
            console.error(" Error DA Avis Post ",error)
            throw error
        }   
    }
}