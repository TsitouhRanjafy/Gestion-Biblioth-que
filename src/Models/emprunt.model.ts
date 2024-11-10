import { ExpressYupMiddlewareInterface } from "express-yup-middleware";
import * as Yup from "yup";
import { Model,DataTypes, Optional } from "sequelize";
import Livre from "./livre.model";
import Utilisateur from "./utilisateur.model";
import sequelize from "../db/connect";


export const empruntSchemaValidator : ExpressYupMiddlewareInterface = {
    schema : {
        body : {
            yupSchema : Yup.object().shape({
                id_utilisateur : Yup.string().min(6).max(15).required(),
                date_emprunt : Yup.date().required(),
                date_retour : Yup.date().required()
            })
        }
    }
}

interface EmpruntAttributes {
    id_emprunt: string,
    date_emprunt: Date,
    date_retour: Date,
    id_utilisateur: string,
    id_livre: string,
    createdAt: Date,
    updatedAt: Date,
}

interface EmpruntCreationOptional extends Optional<EmpruntAttributes,'createdAt' | 'updatedAt'>  {}

class Emprunt extends Model<EmpruntAttributes,EmpruntCreationOptional> implements EmpruntAttributes {
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
        timestamps: true
    }
)

export default Emprunt