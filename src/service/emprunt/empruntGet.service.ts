import { EmpruntDAGet } from "../../DA/index";
import { triEmprunt } from "../../types";

export class EmpruntServiceGet {
    constructor(private empruntDAGet: EmpruntDAGet){}

    public async GetEmpruntById(Id: string){
        try {
            const data = await this.empruntDAGet.GetEmpruntById(Id)
            return data;
        } catch (error) {
            console.error(" Error Service Emprunt Get",error);
        }
    }

    public async GetEmpruntLivreById(Id: string){
        try {
            const data = await this.empruntDAGet.GetEmpruntLivreById(Id)
            return data;
        } catch (error) {
            throw error
        }
    }

    public async GetAllEmprunt(filter: triEmprunt ) {
        try {
            const data = await this.empruntDAGet.GetAllEmprunt(filter);
            console.log(filter);
            return data;
        } catch (error) {
            console.error(" Service Emprunt Error ",error)
        }
    }
}