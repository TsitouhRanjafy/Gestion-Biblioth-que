import { Router , Request , Response } from "express";
import { LivreServicePut } from "../../service";
import { LivreCreationAttributes } from "../../types";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const LivreRouterPut = (router: Router, service: LivreServicePut) => {

    router.put('/book/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        const newData : Partial<LivreCreationAttributes> = req.body;
        try {
            const result = await service.UpdateLivreById(id,newData);
            res.status(StatusCodes.OK).json({
                "result": result
            })
        } catch (error) {
            console.error(" Route error", error);
            res.status(StatusCodes.BAD_REQUEST).json({
                "status" : ReasonPhrases.BAD_REQUEST
            })
        }
    })
}