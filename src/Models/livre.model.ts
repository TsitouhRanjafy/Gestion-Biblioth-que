import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/connect";

// Définir les attribut d'un livre
interface LivreAttributes {
    id: string,
    titre: string,
    auteur: string,
    sortie: Date,
    disponible: string
}

//  Certains attributs sont optionnels pour les nouveaux enregistrement
// interface LivreCreationAttributes extends Optional<LivreAttributes,'id'> {}

// Définir le modél de livre
class Livre extends Model<LivreAttributes/*,LivreCreationAttributes*/> implements LivreAttributes {
    public id!:string;
    public titre!: string;
    public auteur!: string;
    public sortie!: Date;
    public disponible!: string;
}

// Initialiser le modél Livre
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
    },
    {
        sequelize,
        tableName: 'livres',
        timestamps: false,
    }
)

export default Livre