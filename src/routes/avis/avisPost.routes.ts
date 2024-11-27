import  { Router , Request , Response } from 'express';
import { AvisServicePost } from '../../service/index';
import { IAvis } from '../../types/index';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';


export const AvisRouterPost = (router: Router, service: AvisServicePost) => {

    router.post('/avis/:idLivre/:idUtilisateur',async (req: Request, res: Response) => {
        const { 
            idLivre: id_livre,
            idUtilisateur: id_utilisateur
        } = req.params;
        const {
            note : note,
            commentaire : commentaire,
            datetime : datetime
        } = req.body

        const data: IAvis = {
            id_livre: id_livre,
            id_utilisateur: id_utilisateur,
            note:  note,
            commentaire: commentaire,
            datetime : datetime
        }
        try {
            const result = await service.NewAvis(data)
            res.status(StatusCodes.OK).send(result);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                "status": ReasonPhrases.INTERNAL_SERVER_ERROR
            })
        }


    })
}