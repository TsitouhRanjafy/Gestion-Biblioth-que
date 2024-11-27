import { Optional,Model, DataTypes } from "sequelize";
import { sequelize } from "../../DA/index";

interface UtilisateurAttributes {
    id: string,
    nom: string,
    prenom: string,
    tel: string,
    email: string,
    adresse: string,
    createdAt: Date,
    updatedAt: Date,
}

interface UtilisateurCreationOptional extends Optional<UtilisateurAttributes,'email' | 'adresse' | 'createdAt' | 'updatedAt'> {}

export class Utilisateur extends Model<UtilisateurAttributes,UtilisateurCreationOptional> implements UtilisateurAttributes {
    public id!: string;
    public nom!: string;
    public prenom!: string;
    public tel!: string;
    public email!: string;
    public adresse!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Utilisateur.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: true,
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
        }
    },
    {
        sequelize,
        tableName: 'utilisateurs',
        paranoid: true,
    }
)
