import express, { Router,Response, Request } from "express";
import { pool } from "../db/connect";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";

export default class RouteEmprunt{
    private router : Router

    constructor(){
        this.router = express.Router()
        this.initialiser();
    }

    private initialiser(){
        this.router.post('/:id_livre',async (req : Request, res : Response) =>{
            const  { id_livre : id_livre } = req.params
            const { 
                id_utilisateur : id_utilisateur,
                date_emprunt : date_emprunt,
                date_retour : date_retour 
            } = req.body

            try {
                // Verifier si l'id d'utilisateur exist
                const exist : any = await pool.query(`
                    SELECT * FROM utilisateurs WHERE id=?;
                    `,[id_utilisateur]);
                    
                if (!exist[0][0]){
                    res.status(StatusCodes.NOT_FOUND).json({
                        "status" : ReasonPhrases.NOT_FOUND,
                        "message" : "cette utilisateur n'exist pas"
                    })
                }
                // si oui,nouvelle emprunt
                await pool.query(`
                        INSERT INTO emprunts (
                            id_emprunt,
                            date_emprunt,
                            date_retour,
                            id_utilisateur,
                            id_livre 
                        ) VALUES (
                            ?,?,?,?,?
                        )
                    `,[uuidv4(),date_emprunt,date_retour,id_utilisateur,id_livre])
                res.status(StatusCodes.OK)
            } catch (error) {
                res.status(StatusCodes.BAD_REQUEST)
                throw error
            }
        })
    }

    public getRouter() : Router {
        return this.router
    }
}
