import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { LivreServiceDelete } from "../../service";
import { Router , Request , Response } from "express";

export const LivreRouterDelete = (router: Router, service: LivreServiceDelete) => {    

    router.delete('/book/:id', async (req: Request, res: Response) => {
        const { id: id_livre } = req.params
        try {
           const result = await service.DeleteLivreById(id_livre);
           res.status(StatusCodes.OK).json({ "status": result })
        } catch(error) {
            console.error("Error Router Livre Delete",error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                "status": ReasonPhrases.INTERNAL_SERVER_ERROR
            })
        }
    })
}
