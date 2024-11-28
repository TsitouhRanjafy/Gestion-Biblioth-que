import { LivreServiceGet } from "../../service/index";
import { Router , Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";


export const LivreRouterGet = (router: Router, service: LivreServiceGet): void => {

    router.get('/books/:offset/:limit/:tri', async (req: Request, res: Response) =>{
        const { tri,offset,limit } = req.params
        try {
            const data = await service.GetLivres(parseInt(offset),parseInt(limit),parseInt(tri));
            res.status(StatusCodes.OK).send(data);
        } catch (error) {
            console.error(" Error Router Livre Get ",error)
            res.status(StatusCodes.BAD_REQUEST).send({"status": ReasonPhrases.BAD_REQUEST})
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
            console.error(" Error Router Livre Get",error)
            res.status(StatusCodes.BAD_REQUEST).json({
                "status": ReasonPhrases.BAD_REQUEST
            })
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