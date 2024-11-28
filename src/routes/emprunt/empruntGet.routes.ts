import { Router , Request , Response } from "express";
import { EmpruntServiceGet } from "../../service/index";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const EmpruntRouterGet = (router: Router, service: EmpruntServiceGet) => {

    router.get('/emprunt/:id',async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const data = await service.GetEmpruntById(id);
            res.status(StatusCodes.OK).send(data);
        } catch (error) {
            console.error(" Error Router Emprunt Get ",error);
            res.status(StatusCodes.BAD_REQUEST).json({"status": ReasonPhrases.BAD_REQUEST})
        }
    })

    router.get('/emprunts/:filter',async (req: Request, res: Response) => {
        const filter = req.params.filter;
        try {
            const data = await service.GetAllEmprunt(parseInt(filter));
            res.status(StatusCodes.OK).send(data);
        } catch (error) {
            console.error(" Router Error ",error);
            res.status(StatusCodes.BAD_REQUEST).json({"status": ReasonPhrases.BAD_REQUEST})
        }
    })

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