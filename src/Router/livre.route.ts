import express, { Router,Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { createClient } from "redis";
import { CacheRedisTopLivre, CacheRedisToutLivre } from "../db/cache";
import sequelize from "../db/connect";
import Livre from "../Models/livre.model";

export default class RouteLivre{
    private router : Router

    constructor(){
        this.router = express.Router()
        this.initialiser();
    }

    private initialiser(){
        this.router.get('/', async (req : Request, res : Response) =>{
            try{
                let livres = [];

                const client = createClient();
                await client.connect();
                const nombreToutLivres = await client.get('nombreToutLivres');
                if (nombreToutLivres != null){
                    const n : number = parseInt(nombreToutLivres);
                    for (let i=0;i<n;i++){
                        livres.push(await client.hGetAll(`livres:${i}`));
                    }
                    res.status(StatusCodes.OK).json({
                        "status" : ReasonPhrases.OK,
                        "nombreToutLivres": n,
                        "toutLivres" : livres
                    });
                    return;
                }

                livres  = await Livre.findAll();
                CacheRedisToutLivre(livres);
                res.status(StatusCodes.OK).json(livres)
            } catch(error){
                console.error(error);
                res.status(StatusCodes.BAD_REQUEST).json(error)
            }   
        })

        this.router.get('/trend', (req : Request, res : Response) =>{
            const getLivresTop = async ()  =>{
                try {
                    let topLivres = [];

                    const client = createClient();
                    await client.connect();
                    const nombreTopLivres = await client.get('nombreTopLivres');
                    if (nombreTopLivres != null){
                        const n : number = parseInt(nombreTopLivres);
                        for (let i=0;i<n;i++){
                            topLivres.push(await client.hGetAll(`TopLivres:${i}`));
                        }
                        res.status(StatusCodes.OK).json({
                            "nombreTopLivres": n,
                            "topLivres" : topLivres
                        });
                        return;
                    }
                    
                    const [livres,metadata] = await sequelize.query(
                        `
                            SELECT  
                                l.id,
                                l.titre,
                                l.auteur,
                                l.sortie, 
                                l.disponible,
                                COUNT(e.id_emprunt) AS nombre_emprunts 
                            FROM livres l
                            JOIN emprunts e ON e.id_livre = l.id
                            GROUP BY l.id
                            ORDER BY nombre_emprunts DESC
                       `
                    )
                    console.log(livres);
                    CacheRedisTopLivre(livres);   
                    res.status(StatusCodes.OK).json(livres);
                } catch (error) {
                    console.error(error);
                    res.status(StatusCodes.BAD_REQUEST).json(error)
                }
            }
            getLivresTop();
        })
    }

    public getRouter() : Router {
        return this.router
    }
}