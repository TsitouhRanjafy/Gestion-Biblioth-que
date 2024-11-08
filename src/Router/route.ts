import { Application, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { pool } from "../db/connect";
import { v4 as uuidv4 } from "uuid"

export default class Route {
    private rout : Application

    constructor(app : Application){
        this.rout = app;
    }

    public initialiser(){

        this.rout.get('/livres', async (req : Request, res : Response) =>{
            const livres = await pool.query("SELECT * FROM livres");
            res.status(StatusCodes.OK).json(livres[0])
        })

        this.rout.get('/livres/trend',async (req : Request, res : Response) =>{
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

        this.rout.post('/emprunter/:id_livre',async (req : Request, res : Response) =>{
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
}