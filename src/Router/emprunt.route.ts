import express, { Router,Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";
import Utilisateur from "../Models/utilisateur.model";
import Emprunt from "../Models/emprunt.model";
import { Livre } from "../types/index";

export default class RouteEmprunt{
    private router : Router

    constructor(){
        this.router = express.Router()
        this.initialiser();
    }

    private initialiser(){
        this.router.post('/:id_livre',async (req : Request, res : Response) =>{
            const  { id_livre : idlivre } = req.params
            const idLivre : string = idlivre.toString()
            const { 
                id_utilisateur : idUtilisateur,
                date_emprunt : dateEmprunt,
                date_retour : dateRetour 
            } = req.body
            
            try {
                const existU = await Utilisateur.findByPk(idUtilisateur);
                const existL = await Livre.findByPk(idLivre);

                if (existU === null){
                    res.status(StatusCodes.NOT_FOUND).json({
                        "status" : ReasonPhrases.NOT_FOUND,
                        "message" : "cette utilisateur n'exist pas"
                    })
                    return;
                }
                
                if (existL === null){
                    res.status(StatusCodes.NOT_FOUND).json({
                        "status" : ReasonPhrases.NOT_FOUND,
                        "message" : "cette livre n'exist pas"
                    })
                    return;
                }
                
                const iduui: string =uuidv4()

                await Emprunt.create(
                    {
                        id_emprunt: iduui,
                        date_emprunt: dateEmprunt,
                        date_retour: dateRetour,
                        id_utilisateur: idUtilisateur,
                        id_livre: idLivre.toString(),
                    }   
                )
                res.status(StatusCodes.OK).json({
                    "status": ReasonPhrases.CREATED,
                    "message": 
                        {
                            'id_emprunt': iduui,
                            'date_emprunt': dateEmprunt,
                            'date_retour': dateRetour,
                            'id_utilisateur': idUtilisateur,
                            'id_livre': idLivre
                        }
                })
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
