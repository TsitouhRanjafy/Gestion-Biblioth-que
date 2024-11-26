import { DBManager } from "../../DBManager";
import { Identifier } from "sequelize";
import { Livre } from "../../../types/index";
import { sequelize } from "../../DBConnection/DBSync.mysql";
import Emprunt from "../../../Models/emprunt.model";


export class LivreDAGet extends DBManager {

    public async GetLivres(){
        const deferredQuery = (): Promise<any> => {
            return Livre.findAll();
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
