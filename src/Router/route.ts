import { Application } from "express";
import RouteLivre from "./livre.route";
import RouteEmprunt from "./emprunt.route";
import RouteAvis from "./avis.route";
import RouteUtilisateur from "./utilisateur.route";

export default class Route {
    private rout : Application

    constructor(app : Application){
        this.rout = app;
    }

    public initialiser(){

        const routeLivre : RouteLivre = new RouteLivre()
        this.rout.use('/livres',routeLivre.getRouter());

        const routeEmprunt : RouteEmprunt = new RouteEmprunt();
        this.rout.use('/emprunter',routeEmprunt.getRouter())

        const routeUtilisateur: RouteUtilisateur = new RouteUtilisateur();
        this.rout.use('/utilisateur',routeUtilisateur.getRouter())

        const routeAvis : RouteAvis = new RouteAvis();
        this.rout.use('/avis',routeAvis.getRouter())
    }
}