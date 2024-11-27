import { Model,DataTypes, Optional } from "sequelize";
import { Livre } from "../livre/livre.type";
import { Utilisateur } from "../utilisateur/utilisateur.type";
import { sequelize } from "../../DA/index";

interface EmpruntAttributes {
    id_emprunt: string,
    date_emprunt: Date,
    date_retour: Date,
    id_utilisateur: string,
    id_livre: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface EmpruntCreationOptional extends Optional<EmpruntAttributes,'createdAt' | 'updatedAt'>  {}

export class Emprunt extends Model<EmpruntAttributes,EmpruntCreationOptional> implements EmpruntAttributes {
    public id_emprunt!: string;
    public date_emprunt!: Date;
    public date_retour!: Date;
    public id_utilisateur!: string;
    public id_livre!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Emprunt.init(
    {
        id_emprunt: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        date_emprunt: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        date_retour: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_utilisateur: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Utilisateur,
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        id_livre: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Livre,
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
    },
    {
        sequelize,
        tableName: 'emprunts',
        timestamps: true,
        paranoid: true,
    }
)
Livre.hasMany(Emprunt,{ foreignKey: 'id_livre', as: 'allEmprunt' });
Emprunt.belongsTo(Livre,{ foreignKey: 'id_livre', as: 'livreEmprunter' });