import { EmpruntDAPost , UtilisateurDAGet , LivreDAGet } from "../../DA"
import { IEmprunt, EmpruntCreationOptional } from "../../types/index";
import { v4 as uuidv4 } from "uuid";



export class EmpruntServicePost {
    private empruntDAPost: EmpruntDAPost;
    private utilisateurDAGet: UtilisateurDAGet;
    private livreDAGet: LivreDAGet;

    constructor(empruntDAPost : EmpruntDAPost,utilisateurDAGet: UtilisateurDAGet,livreDAGet: LivreDAGet){
        this.empruntDAPost = empruntDAPost;
        this.utilisateurDAGet = utilisateurDAGet;
        this.livreDAGet = livreDAGet;
    }

    public async NewEmprunt(data: IEmprunt) {
        const id : string = uuidv4();
        const newData : EmpruntCreationOptional = {
            id_emprunt: id,
            date_emprunt: data.date_emprunt,
            date_retour: data.date_retour,
            id_utilisateur: data.id_utilisateur,
            id_livre: data.id_livre,
        }
        try {
            const utilisateur = await this.utilisateurDAGet.GetUtilisateurById(newData.id_utilisateur);
            const livre = await this.livreDAGet.GetLivresById(newData.id_livre)
            if (!utilisateur || !livre || livre.disponible=="non"){
                return
            }
            const result = await this.empruntDAPost.NewEmprunt(newData)
            return result;
        } catch (error) {
            throw error
        }
    }

}