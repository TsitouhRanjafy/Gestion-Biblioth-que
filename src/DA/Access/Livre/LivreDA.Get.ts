import { DBManager } from "../../DBManager";
import { Identifier } from "sequelize";
import { Livre, triMethodeLivre } from "../../../types/index";
import { sequelize } from "../../DBConnection/DBSync.mysql";
import { Emprunt } from "../../../types/index";

export class LivreDAGet extends DBManager {

    public async GetLivres(offset: number, limit: number,triMethode: triMethodeLivre | void){
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
            throw error
        }
    }

    public async GetLivresById(id: Identifier){
        const deferredQuery = (): Promise<any> => {
            return Livre.findByPk(id);
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch (error) {
            throw error
        }
    }

    public async GetTopLivres() {
        const deferredQuery = (): Promise<any> => {
            return Livre.findAll({
                attributes : [
                    'id',
                    'titre',
                    'auteur',
                    'sortie',
                    'disponible',
                    [sequelize.fn('COUNT',sequelize.col('allEmprunt.id_emprunt')),'nombre_emprunts'],
                ],
                include: [
                    {
                        model : Emprunt,
                        attributes : [],
                        as: 'allEmprunt'
                    },
                ],
                group : ['livre.id'],
                order : [[sequelize.literal('nombre_emprunts'),'DESC']],
            });
        }
        try {
            const data = await this.ReadData(deferredQuery);
            return data;
        } catch (error) {
            throw error
        }
    }
}
