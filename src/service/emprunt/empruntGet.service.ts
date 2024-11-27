import { EmpruntDAGet } from "../../DA/index";

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
}