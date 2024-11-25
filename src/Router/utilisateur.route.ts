import express, { Router, Request, Response } from "express";
import { sequelize } from "../DA";
import Utilisateur from "../Models/utilisateur.model";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class RouteUtilisateur {
    private router: Router

    constructor(){
        this.router = express.Router()
        this.initialiser()
    }

    private initialiser(){
        this.router.get('/',(req : Request, res: Response) =>{
            const getToutUtilisateur = async () =>{
                try {
                    const utilisateurs = await Utilisateur.findAll()
                    res.status(StatusCodes.OK).json(utilisateurs)
                } catch (error) {
                    console.error(error)
                }
            }
            getToutUtilisateur();
        })
        
        this.router.get('/:id',(req: Request,res: Response) =>{
            const getUtilisateur = async (id : string) =>{
                try {
                    const utilisateur = await Utilisateur.findByPk(id)
                    if (utilisateur === null){
                        res.status(StatusCodes.NOT_FOUND).json({
                            "status" : ReasonPhrases.NOT_FOUND,
                            "message" : utilisateur
                        })
                        return;
                    }
                    res.status(StatusCodes.OK).json(utilisateur)
                } catch (error) {
                    console.error(error)
                }
            }
            const { id : id } = req.params
            getUtilisateur(id);
        })
    }

    getRouter() : Router {
        return this.router;
    }
}

export default RouteUtilisateur;