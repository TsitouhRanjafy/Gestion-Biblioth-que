import { UtilisateurDAGet } from "../../DA/index";

export class UtilisateurServiceGet {
    private utilisateurDAGet: UtilisateurDAGet;

    constructor(utilisateurDAGet: UtilisateurDAGet){
        this.utilisateurDAGet = utilisateurDAGet;
    }

    public async GetUtilisateurs() {
        try {
            const data = await this.utilisateurDAGet.GetUtilisateurs();
            return data;
        } catch (error) {
            console.error(" Erro Service Utilisateur Get ",error)
        }
    }

    public async GetUtilisateurById(id: string) {
        try {
            const data = await this.utilisateurDAGet.GetUtilisateurById(id)
            return data;
        } catch (error) {
            console.error(" Erro Service Utilisateur Get ",error)
        }
    }
}