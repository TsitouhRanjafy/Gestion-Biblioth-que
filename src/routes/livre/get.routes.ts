import { LivreService } from "../../service/index";
import { Router , Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";


export const LivreRouterGet = (router: Router, service: LivreService): void => {

    router.get('/books', async (req: Request, res: Response) =>{
        
        try {
            const data = await service.GetLivres();
            res.status(StatusCodes.OK).send(data);
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send({"error": error})
        }
    })

    router.get('/book/:id', async (req: Request, res: Response) =>{
        
        const { id: id_livre } = req.params
        try {
            const data = await service.GetLivreById(id_livre)
            if (data){
                res.status(StatusCodes.OK).send(data);
            } else {
                res.status(StatusCodes.NOT_FOUND).json({
                    "status" : ReasonPhrases.NOT_FOUND
                })
            }
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send({"error": error})
        }
    })

    router.get('/books/top',async (req: Request, res: Response) => {
        try {
            const data = await service.GetTopLivres();
            res.status(StatusCodes.OK).send(data)
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({
                "status" : ReasonPhrases.BAD_REQUEST
            })
        }
    })
}