import { EmpruntDAGet } from "../../DA/index";
import { filterEmprunt } from "../../types";

export class EmpruntServiceGet {
    constructor(private empruntDAGet: EmpruntDAGet){}

    public async GetEmpruntLivreById(Id: string){
        try {
            const data = await this.empruntDAGet.GetEmpruntLivreById(Id)
            return data;
        } catch (error) {
            throw error
        }
    }

    public async GetAllEmprunt(filter: filterEmprunt | any ) {
        try {
            const data = await this.empruntDAGet.GetAllEmprunt(filter);
            return data;
        } catch (error) {
            console.error(" Service Emprunt Error ",error)
        }
    }
}