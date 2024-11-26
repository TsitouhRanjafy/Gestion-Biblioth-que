import { Identifier } from "sequelize";
import { UtilisateurDAGet } from "../../DA/index";


export class UtilisateurService {
    private utilisateurDAGet: UtilisateurDAGet;

    constructor(utilisateurDAGet: UtilisateurDAGet){
        this.utilisateurDAGet = utilisateurDAGet;
    }

    public async GetUtilisateurs() {
        try {
            const data = await this.utilisateurDAGet.GetUtilisateurs();
            return data;
        } catch (error) {
            throw error
        }
    }

    public async GetUtilisateurById(id: Identifier) {
        try {
            const data = await this.utilisateurDAGet.GetUtilisateurById(id)
            return data;
        } catch (error) {
            throw error
        }
    }
}