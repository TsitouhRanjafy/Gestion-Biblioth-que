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
        } = req.body

        if (!commentaire || !note) res.status(StatusCodes.BAD_REQUEST).json({ "status": ReasonPhrases.BAD_REQUEST });
        const data: Required<IAvis> = {
            id_livre: id_livre,
            id_utilisateur: id_utilisateur,
            note:  parseInt(note),
            commentaire: commentaire
        }

        try {
            const result = await service.NewAvis(data)
            res.status(StatusCodes.OK).json({ "status": result });
        } catch (error) {
            console.error(" Error Router Avis Post ",error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                "status": ReasonPhrases.INTERNAL_SERVER_ERROR
            })
        }
    })
}