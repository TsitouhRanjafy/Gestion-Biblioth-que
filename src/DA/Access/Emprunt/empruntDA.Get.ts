import { DBManager } from "../../DBManager";
import { Emprunt, filterEmprunt } from "../../../types/index";


export class EmpruntDAGet extends DBManager {

    public async GetEmpruntLivreById(Id: string) {
        const deferredQuery = (): Promise<any> => {
            return Emprunt.findOne({
                where: {
                    id_livre: Id
                }
            })
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch(error) {
            console.error(' Data Access Error', error)
        }
    }

    public async GetAllEmprunt(filter: filterEmprunt | any) {
        const deferredQuery = (): Promise<any> => {
            switch (filter) {
                case filterEmprunt.ASC_BY_DATEEMPRUNT:
                    return Emprunt.findAll({
                        order: [['date_emprunt','ASC']]
                    });
                case filterEmprunt.ASC_BY_DATERETOUR:
                    return Emprunt.findAll({
                        order: [['date_retour','ASC']]
                    });
                case filterEmprunt.DESC_BY_DATEEMPRUNT:
                    return Emprunt.findAll({
                        order: [['date_emprunt','DESC']]
                    });
                case filterEmprunt.DESC_BY_DATERETOUR:
                    return Emprunt.findAll({
                        order: [['date_retour','DESC']]
                    });
                default:
                    return Emprunt.findAll();
            }
        }
        try {
            const data = await this.ReadData(deferredQuery)
            return data;
        } catch(error) {
            console.error(' Data Access Error', error)
        }
    }
}                                                                                                                   