import express, { Router,Response, Request } from "express";
import { pool } from "../db/connect";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { createClient } from "redis";
import { CacheRedisToutLivre } from "../db/cache";

export default class RouteLivre{
    private router : Router

    constructor(){
        this.router = express.Router()
        this.initialiser();
    }

    private initialiser(){
        this.router.get('/', async (req : Request, res : Response) =>{
            try{
                const livres = await pool.query("SELECT * FROM livres");
               

                // Sequelize , model
                // const client = createClient();
                // await client.connect();

                // const nombreToutLivres = await client.get('nombreToutLivres');
                // if (nombreToutLivres){
                //     console.log("exist"+nombreToutLivres);
                //     await client.flushAll();
                // }

                // let i = 0;
                // Object.values(livres[0]).forEach(async livre =>{
                //     await client.hSet(`livres:${i++}`,{ 
                //         'id': livre.id+" ",
                //         'titre': livre.titre+" ", 
                //         'auteur': livre.auteur+" ", 
                //         'sortie': livre.sortie+" ",
                //         'disponible': livre.disponible+" "
                //     })
                // })

                // await client.set('nombreToutLivres',`${i}`);
                // await client.quit();






                res.status(StatusCodes.OK).json(livres[0])
            } catch(error){
                console.error(error);
            }
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                "status": ReasonPhrases.INTERNAL_SERVER_ERROR
            })
        })

        this.router.get('/trend',async (req : Request, res : Response) =>{
            const livres = await pool.query(`
                SELECT  l.id,
                        l.titre,
                        l.auteur,
                        l.sortie, 
                        l.disponible,
                        COUNT(e.id_emprunt) AS nombre_emprunts 
                FROM livres l
                JOIN emprunts e ON e.id_livre = l.id
                GROUP BY l.id
                ORDER BY nombre_emprunts DESC
            `);
            res.status(StatusCodes.OK).json(livres[0])
        })
    }

    public getRouter() : Router {
        return this.router
    }
}