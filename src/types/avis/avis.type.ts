import { Document, Schema, model } from "mongoose";

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
    datetime : Date
}

const avisSchema = new Schema<IAvi>({
    id_livre: { type : String, required : true },
    id_utilisateur : {type : String, required : true },
    note : { type : Number },
    commentaire : { type : String, required : true },
    datetime : { type : Date, required : true }
})

export const Avis = model<IAvi>('avis',avisSchema)


