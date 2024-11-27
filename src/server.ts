import express,{ Application } from "express";
import dotenv from 'dotenv';

import { EmpruntDAPost, LivreDAGet, syncDatabaseMysql, UtilisateurDAGet , connectMongo, AvisDAPost } from "./DA/index";
import { LivreRouterGet , UtilisateurRouterGet , EmpruntRouterPost , AvisRouterPost } from "./routes/index";
import { AvisServicePost, EmpruntServicePost, LivreServiceGet, UtilisateurServiceGet } from "./service";

dotenv.config()

const app : Application = express();
const router = express.Router();
const port = process.env.PORT || 30000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',router)
// const routes : Route = new Route(app)
// routes.initialiser();

LivreRouterGet(router,new LivreServiceGet(new LivreDAGet))
UtilisateurRouterGet(router,new UtilisateurServiceGet(new UtilisateurDAGet))
EmpruntRouterPost(router,new EmpruntServicePost(new EmpruntDAPost,new UtilisateurDAGet,new LivreDAGet))
AvisRouterPost(router,new AvisServicePost(new AvisDAPost))

app.listen(port, () =>{
    try{
        console.log(`server running on port ${port}`);
        syncDatabaseMysql();
        connectMongo();    
    } catch(error){
        console.error(error);
    }
})


