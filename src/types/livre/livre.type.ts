import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../DA/index";

interface LivreAttributes {
    id: string,
    titre: string,
    auteur: string,
    sortie: Date,
    disponible: string,
    nombre_emprunts: number
}

//  Certains attributs sont optionnels pour les nouveaux enregistrement
export interface LivreCreationAttributes extends Optional<LivreAttributes,'nombre_emprunts'> {}

export class Livre extends Model<LivreAttributes,LivreCreationAttributes> implements LivreAttributes {
    public id!:string;
    public titre!: string;
    public auteur!: string;
    public sortie!: Date;
    public disponible!: string;
    public nombre_emprunts!: number;
}

Livre.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        auteur: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sortie: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        disponible: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre_emprunts: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
    {
        sequelize,
        tableName: 'livres',
        timestamps: false,
        paranoid: true
    }
)
