import express, { Router,Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import Avis from "../Models/avis.model";

export default class RouteAvis{
    private router : Router

    constructor(){
        this.router = express.Router()
        this.initialiser();
    }

    private initialiser(){
        this.router.post('/:id_livre',async (req : Request, res : Response) =>{
            const {
                id_utilisateur : id_utilisateur,
                note : note,
                commentaire : commentaire,
                datetime : datetime
            } = req.body
            const { id_livre : id_livre } = req.params

            const data = {
                id_livre : id_livre,
                id_utilisateur : id_utilisateur,
                note : note,
                commentaire : commentaire,
                datetime : datetime
            }

            try{
                const avis = new Avis(data)
                await avis.save();
                res.status(StatusCodes.CREATED).json({ 
                    "status" : ReasonPhrases.CREATED,
                    "message" : data
                 })
            }catch(error){
                throw error
            }
        })
    }

    public getRouter() : Router {
        return this.router
    }
}