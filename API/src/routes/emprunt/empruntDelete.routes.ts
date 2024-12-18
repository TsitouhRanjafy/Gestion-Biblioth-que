import { Router , Request , Response } from "express";
import { EmpruntServiceDelete } from "../../service";
import { StatusCodes } from "http-status-codes";

export const EmpruntRouterDelete = (router: Router, service: EmpruntServiceDelete) => {

    router.delete("/emprunt/:id", async (req: Request,res: Response) => {
        const { id } = req.params;
        try {
            const result = await service.DeleteEmpruntById(id);
            res.status(StatusCodes.ACCEPTED).json({ "status": result});
        } catch (error) {
            console.error(" Error Router Emprunt Delete ",error)
        }
    })
}