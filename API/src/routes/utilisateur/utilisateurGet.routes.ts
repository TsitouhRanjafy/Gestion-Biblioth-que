import { Router, Request, Response } from "express";
import { UtilisateurServiceGet } from "../../service/index";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const  UtilisateurRouterGet = (router: Router, service: UtilisateurServiceGet) =>{

    router.get('/users', async (req: Request, res: Response) => {
        try {
            const data = await service.GetUtilisateurs();
            res.status(StatusCodes.OK).send(data);
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({
                "status": ReasonPhrases.BAD_REQUEST,
                "error": error
            })
        }
    })

    router.get('/user/:id', async (req: Request, res: Response) => {
        const { id: id_utilisateur } = req.params;
        try {
            const data = await service.GetUtilisateurById(id_utilisateur)
            if (data){
                res.status(StatusCodes.OK).send(data);
            } else {
                res.status(StatusCodes.NOT_FOUND).json({"status" : ReasonPhrases.NOT_FOUND})
            }
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({ 
                "status": ReasonPhrases.BAD_REQUEST
            })
        }
    })
}