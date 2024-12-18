import { DBManager } from "../../DBManager";
import { Emprunt, Livre, triEmprunt } from "../../../types/index";


export class EmpruntDAGet extends DBManager {

    public async GetEmpruntById(Id: string) {
        const deferredQuery = (): Promise<any> => {
            return Emprunt.findAll({
                where: {
                    id_emprunt: Id
                }
            })
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch (error) {
            console.error(" Error DA Emprunt Get ");
        }
    }
    public async GetEmpruntByIdLivre(Id: string) {
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

    public async GetAllEmprunt(tri: triEmprunt | any): Promise<Livre[] | void> {
        const deferredQuery = (): Promise<any> => {
            switch (tri) {
                case triEmprunt.ASC_BY_DATEEMPRUNT:
                    return Emprunt.findAll({
                        order: [['date_emprunt','ASC']]
                    });
                case triEmprunt.ASC_BY_DATERETOUR:
                    return Emprunt.findAll({
                        order: [['date_retour','ASC']]
                    });
                case triEmprunt.DESC_BY_DATEEMPRUNT:
                    return Emprunt.findAll({
                        order: [['date_emprunt','DESC']]
                    });
                case triEmprunt.DESC_BY_DATERETOUR:
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