import { Document, Schema, model } from "mongoose";

interface IEmpruntHistorique extends Document {
    id_emprunt: string,
    date_emprunt: Date,
    date_retour: Date,
    id_utilisateur: string,
    id_livre: string,
    createdAt: Date
}
export interface IEmpruntHistoriques {
    id_emprunt: string,
    date_emprunt: Date,
    date_retour: Date,
    id_utilisateur: string,
    id_livre: string,
}

const empruntSchema = new Schema<IEmpruntHistorique>({
    id_emprunt: { 
        type: String,
        required: true,
    },
    date_emprunt: {
        type: Date,
        required: true,
    },
    date_retour: {
        type: Date,
        required: true,
    },
    id_utilisateur: {
        type: String,
        required: true,
    },
    id_livre: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
})

export const EmpruntHistorique = model<IEmpruntHistorique>('HistoriqueEmprunt',empruntSchema);