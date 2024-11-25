import { DBManager } from "../DBManager";
import { Livre } from "../../types/index";

export class LivreDA extends DBManager {

    public async GetLivres(){
        const query = await Livre.findAll();
        try{
            const data = await this.ReadData(query)
            return data
        }catch(error){
            throw error
        }
    }
}
