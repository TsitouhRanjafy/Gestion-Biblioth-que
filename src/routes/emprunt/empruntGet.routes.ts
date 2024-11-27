import { Router , Request , Response } from "express";
import { EmpruntServiceGet } from "../../service/index";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const EmpruntRouterGet = (router: Router, service: EmpruntServiceGet) => {

    router.get('/emprunt/book/:id', async (req: Request, res: Response) => {
        const { id: id_livre } = req.params

        try {
            const data = await service.GetEmpruntLivreById(id_livre)
            res.status(StatusCodes.OK).send(data)
        } catch (error) {
            res.status(StatusCodes.NOT_FOUND).json({"status":ReasonPhrases.NOT_FOUND})
        }
    });
}