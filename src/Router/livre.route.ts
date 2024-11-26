// import express, { Router,Response, Request } from "express";
// import { ReasonPhrases, StatusCodes } from "http-status-codes";
// import { createClient } from "redis";
// import { CacheRedisTopLivre, CacheRedisToutLivre } from "../db/cache";
// import { sequelize } from "../DA/index";
// import { Livre } from "../types/index";
// import Emprunt from "../Models/emprunt.model";

// export default class RouteLivre{
//     private router : Router

//     constructor(){
//         this.router = express.Router()
//         this.initialiser();
//     }

//     private initialiser(){
//         this.router.get('/', async (req : Request, res : Response) =>{
//             try{
//                 let livres = [];

//                 const client = createClient();
//                 await client.connect();
//                 const nombreToutLivres = await client.get('nombreToutLivres');
//                 // Tester s'il y des livres dans redis
//                 if (nombreToutLivres != null){
//                     // si oui, recuperer oui oui
//                     const n : number = parseInt(nombreToutLivres);
//                     for (let i=0;i<n;i++){
//                         livres.push(await client.hGetAll(`livres:${i}`));
//                         // Hash nampiasaiko
//                         // izany hoe O(n) 
//                         // ka amizay afaka tena mahaleo tena ilay Base de donne redis
//                         // ohatra hoe aka livre izay tiko zah
//                     }
//                     res.status(StatusCodes.OK).json({
//                         "status" : ReasonPhrases.OK,
//                         "nombreToutLivres": n,
//                         "toutLivres" : livres
//                     });
//                     return;
//                     // mijanona eto ilay izy 
//                 }
//                 // De si non, any amn mysql no maka ilay tout livres
//                 livres  = await Livre.findAll();
//                 // miditra aon amo zany
//                 // Livre Model 
//                 // de sady cachena nay amn redis
//                 CacheRedisToutLivre(livres);
//                 res.status(StatusCodes.OK).json(livres)
//             } catch(error){
//                 console.error(error);
//                 res.status(StatusCodes.BAD_REQUEST).json(error)
//             }   
//         })

//         this.router.get('/trend', (req : Request, res : Response) =>{
//             const getLivresTop = async ()  =>{
//                 try {
//                     let topLivres = [];

//                     const client = createClient();
//                     await client.connect();
//                     const nombreTopLivres = await client.get('nombreTopLivres');
//                     if (nombreTopLivres != null){
//                         const n : number = parseInt(nombreTopLivres);
//                         for (let i=0;i<n;i++){
//                             topLivres.push(await client.hGetAll(`TopLivres:${i}`));
//                         }
                        
//                         res.status(StatusCodes.OK).json({
//                             "nombreTopLivres": n,
//                             "topLivres" : topLivres
//                         });
//                         return;
//                     }
//                     const livres = await Livre.findAll({
//                         attributes : [
//                             'id',
//                             'titre',
//                             'auteur',
//                             'sortie',
//                             'disponible',
//                             [sequelize.fn('COUNT',sequelize.col('allEmprunt.id_emprunt')),'nombre_emprunts'],
//                         ],
//                         include: [
//                             {
//                                 model : Emprunt,
//                                 attributes : [],
//                                 as: 'allEmprunt'
//                             },
//                         ],
//                         group : ['livre.id'],
//                         order : [[sequelize.literal('nombre_emprunts'),'DESC']],
//                     });
//                     CacheRedisTopLivre(livres);   
//                     res.status(StatusCodes.OK).json(livres);
//                 } catch (error) {
//                     console.error(error);
//                     res.status(StatusCodes.BAD_REQUEST).json(error)
//                 } finally{

//                 }
//             }
//             getLivresTop();
//         })
//     }

//     public getRouter() : Router {
//         return this.router
//     }
// }

