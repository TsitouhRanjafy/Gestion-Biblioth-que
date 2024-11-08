import { ExpressYupMiddlewareInterface } from "express-yup-middleware"
import * as Yup from "yup"

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