import { Document, Schema, model } from "mongoose";
import { DATE } from "sequelize";

interface IAvi extends Document {
    id_livre : string,
    id_utilisateur : string,
    note : number,
    commentaire : string,
    datetime : Date
}

export interface IAvis {
    id_livre : string,
    id_utilisateur : string,
    note : number,
    commentaire : string,
}

const avisSchema = new Schema<IAvi>({
    id_livre: { type : String, required : true },
    id_utilisateur : {type : String, required : true },
    note : { type : Number },
    commentaire : { type : String, required : true },
    datetime : { type : Date, required : true, default: new Date() }
})

export const Avis = model<IAvi>('avis',avisSchema)


