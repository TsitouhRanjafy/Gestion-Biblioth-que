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
                const livres : Livre[] = await Livre.findAll();
                CacheRedisToutLivre(livres);
                res.status(StatusCodes.OK).json(livres)
            } catch(error){
                console.error(error);
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    "status": ReasonPhrases.INTERNAL_SERVER_ERROR
                })
            }   
        })

        this.router.get('/trend', (req : Request, res : Response) =>{
            const getLivresTop = async ()  =>{
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
                return livres;
            }
            getLivresTop()
            .then((livres) =>{
                CacheRedisTopLivre(livres);   
                res.status(StatusCodes.OK).json(livres);
            })
            .catch(error =>{
                console.error('Erreur lors de la récupération des livres top',error);
            })
        })
    }

    public getRouter() : Router {
        return this.router
    }
}