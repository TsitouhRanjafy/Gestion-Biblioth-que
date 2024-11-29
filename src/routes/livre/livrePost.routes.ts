import { Router , Request , Response } from "express";
import { LivreServicePost } from "../../service"; 
import { ILivre } from "../../types";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const LivreRouterPost = (router: Router,  service: LivreServicePost ) => {

    router.post('/new/book', async (req: Request, res: Response) => {
        try {
            const newData: Required<ILivre> = req.body;
            const result = await service.NewLivre(newData)
            res.status(StatusCodes.OK).json({ "status": result })
        } catch (error) {
            console.error(" Router Livre Post Error ",error);
            res.status(StatusCodes.BAD_REQUEST).json({"status": ReasonPhrases.BAD_REQUEST});
        }
    })
}