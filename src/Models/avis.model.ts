import { Document, Schema, model } from "mongoose";

interface IAvis extends Document {
    id_livre : string,
    id_utilisateur : string,
    note : number,
    commentaire : string,
    datetime : Date
}

const avisSchema = new Schema<IAvis>({
    id_livre: { type : String, required : true },
    id_utilisateur : {type : String, required : true },
    note : { type : Number },
    commentaire : { type : String, required : true },
    datetime : { type : Date, required : true }
})

const Avis = model<IAvis>('avis',avisSchema)

export default Avis
