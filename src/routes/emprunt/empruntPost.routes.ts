import { Router , Request , Response } from "express";
import { EmpruntServicePost } from "../../service/index";
import { IEmprunt } from "../../types/index";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const EmpruntRouterPost = (router: Router, service: EmpruntServicePost) => {

    router.post('/new/emprunt/:idLivre/:idUtilisateur', async (req: Request, res: Response) => {
        const { 
            idLivre: id_livre, 
            idUtilisateur: id_utilisateur 
        } = req.params;
        const { 
            date_emprunt : dateEmprunt,
            date_retour : dateRetour  
        } = req.body

        const newData : IEmprunt = {
            date_emprunt: dateEmprunt,
            date_retour: dateRetour,
            id_utilisateur: id_utilisateur.toString(),
            id_livre: id_livre.toString()
        }
        try {
            const result = await service.NewEmprunt(newData);
            res.status(StatusCodes.OK).send(result)
        } catch (error) {
            console.error(" Error Router Emprunt Post ", error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                "status" : ReasonPhrases.INTERNAL_SERVER_ERROR,
            })
        }
    })
}