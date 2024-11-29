import { DBManager } from "../../DBManager";
import { Livre, triMethodeLivre } from "../../../types/index";
import { sequelize } from "../../DBConnection/DBSync.mysql";

export class LivreDAGet extends DBManager {

    public async GetLivres(offset: number, limit: number,triMethode: triMethodeLivre | void): Promise<Livre[] | void>{
        const deferredQuery = (): Promise<any> => {
                switch (triMethode) {
                    case triMethodeLivre.ASC_BY_DATEALPHABETIQUE:
                        return Livre.findAll({
                            order: [['titre','ASC']],
                            limit: limit,
                            offset: offset
                        });
                    case triMethodeLivre.ASC_BY_DATESORTIE:
                        return Livre.findAll({
                            order: [['sortie','ASC']],
                            limit: limit,
                            offset: offset
                        });
                    case triMethodeLivre.DESC_BY_DATESORTIE:
                        return Livre.findAll({
                            order: [['sortie','DESC']],
                            limit: limit,
                            offset: offset
                        });
                    case triMethodeLivre.DESC_BY_DATEALPHABETIQUE:
                        return Livre.findAll({
                            order: [['sortie','DESC']],
                            limit: limit,
                            offset: offset
                        });
                    default:
                        return Livre.findAll({
                            order: [['id','ASC']],
                            limit: limit,
                            offset: offset
                        });
                }
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch (error) {
            console.error(" Error DA Livre Get ",error);
        }
    }

    public async GetLivresById(id: string){
        const deferredQuery = (): Promise<any> => {
            return Livre.findByPk(id);
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch (error) {
            console.error(" Error DA Livre Get ",error);
        }
    }

    public async GetTopLivres(top: number) {
        const deferredQuery = (): Promise<any> => {
            return Livre.findAll({
                attributes : [
                    'id',
                    'titre',
                    'auteur',
                    'sortie',
                    'disponible',
                    'nombre_emprunts'
                ],
                group : "id",
                order : [['nombre_emprunts','DESC']],
                limit: top,
                offset: 0,
            });
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch (error) {
            console.error(" Error DA Livre Get ",error);
        }
    }

    public async getNombreToutLivre(){
        const deferredQuery = (): Promise<any> => {
            return Livre.findAll({
                attributes: [
                    [sequelize.fn('COUNT',sequelize.col('Livre.id')),'nombreToutLivre'],
                ]
            });
        }
        try {
            const nombreToutLivre = await this.ReadData(deferredQuery);
            return nombreToutLivre;
        } catch (error) {
            console.error(" Error DA Livre Get ",error);
        }
    }
}
