import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../DA/index";

interface LivreAttributes {
    id: string,
    titre: string,
    auteur: string,
    sortie: Date,
    disponible: string,
    nombre_emprunts: number,
    createdAt: Date,
    updatedAt: Date
}

export interface LivreCreationAttributes extends Optional<LivreAttributes,'nombre_emprunts' | 'createdAt' | 'updatedAt'> {}

export class Livre extends Model<LivreAttributes,LivreCreationAttributes> implements LivreAttributes {
    public id!:string;
    public titre!: string;
    public auteur!: string;
    public sortie!: Date;
    public disponible!: string;
    public nombre_emprunts!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
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
            allowNull: false,
            defaultValue: 'oui'
        },
        nombre_emprunts: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }, 
    },
    {
        sequelize,
        tableName: 'livres',
        timestamps: true,
        paranoid: true
    }
)
