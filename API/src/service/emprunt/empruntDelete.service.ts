import { EmpruntDADelete, EmpruntDAGet, EmpruntDAPost } from "../../DA";
import { LivreServicePut } from "../livre/livrePut.service";

export class EmpruntServiceDelete {

    constructor(
        private empruntDADelete: EmpruntDADelete,
        private livreServicePut: LivreServicePut,
        private empruntDAGet: EmpruntDAGet,
        private empruntDAPost: EmpruntDAPost
    ){}

    public async DeleteEmpruntById(id: string) {
        try {
            const data = await this.empruntDAGet.GetEmpruntById(id)
            if (!data[0]) return 0;
            const id_livre = data[0].dataValues.id_livre;
            await this.empruntDAPost.NewEmpruntHistorique(data[0].dataValues)
            const result = await this.empruntDADelete.DeleteEmpruntById(id);
            await this.livreServicePut.UpdateLivreById(id_livre,{ "disponible":"oui"})
            return result;
        } catch (error) {
            console.error(" Error Service Emprunt Delete ",error);
        }
    }
}