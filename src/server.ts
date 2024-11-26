import express,{ Application } from "express";
import dotenv from 'dotenv';

import { EmpruntDAPost, LivreDAGet, syncDatabaseMysql, UtilisateurDAGet } from "./DA/index";
import { connectMongo } from "./DA/index";
import { LivreRouterGet , UtilisateurRouterGet} from "./routes/index";
import { EmpruntServicePost, LivreService, UtilisateurService } from "./service";
import { EmpruntRouterPost } from "./routes/index";

dotenv.config()

const app : Application = express();
const router = express.Router();
const port = process.env.PORT || 30000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',router)
// const routes : Route = new Route(app)
// routes.initialiser();

LivreRouterGet(router,new LivreService(new LivreDAGet))
UtilisateurRouterGet(router,new UtilisateurService(new UtilisateurDAGet))
EmpruntRouterPost(router,new EmpruntServicePost(new EmpruntDAPost,new UtilisateurDAGet,new LivreDAGet))

app.listen(port, () =>{
    try{
        console.log(`server running on port ${port}`);
        syncDatabaseMysql();
        connectMongo();    
    } catch(error){
        console.error(error);
    }
})


