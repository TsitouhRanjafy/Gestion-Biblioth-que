import { EmpruntDAPost , UtilisateurDAGet , LivreDAGet, LivreDAPut } from "../../DA"
import { IEmprunt, EmpruntCreationOptional, Emprunt } from "../../types/index";
import { v4 as uuidv4 } from "uuid";

export class EmpruntServicePost {

    constructor(
        private empruntDAPost : EmpruntDAPost,
        private utilisateurDAGet: UtilisateurDAGet,
        private livreDAGet: LivreDAGet,
        private livreDAPut: LivreDAPut
    ){}

    public async NewEmprunt(data: IEmprunt): Promise<Emprunt | void> {
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
            if (!utilisateur || !livre || livre.dataValues.disponible=="non"){
                return
            }
            const result = await this.empruntDAPost.NewEmprunt(newData)
            await this.livreDAPut.UpdateLivreById(livre.dataValues.id,{ "nombre_emprunts": livre.dataValues.nombre_emprunts+1, "disponible" : "non" })
            return result;
        } catch (error) {
            console.error(" Error Service Emprunt Post ",error)
        }
    }
}