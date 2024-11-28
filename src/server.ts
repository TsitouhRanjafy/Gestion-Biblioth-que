import express,{ Application } from "express";
import dotenv from 'dotenv';

import { 
    EmpruntDAPost, 
    LivreDAGet, 
    syncDatabaseMysql, 
    UtilisateurDAGet , 
    connectMongo, 
    AvisDAPost,
    LivreDADelete,
    EmpruntDAGet,
    LivreDAPut,
    LivreDAPost,
    CacheDataDASet,
    CacheDataDAGet,
    DACache,
    EmpruntDADelete,
} from "./DA/index";
import { 
    LivreRouterGet , 
    UtilisateurRouterGet , 
    EmpruntRouterPost , 
    AvisRouterPost,
    LivreRouterDelete,
    EmpruntRouterGet,
    LivreRouterPut,
    LivreRouterPost,
    InitRouterGet,
    EmpruntRouterDelete,
} from "./routes/index";
import { 
    AvisServicePost, 
    EmpruntServicePost, 
    LivreServiceGet, 
    UtilisateurServiceGet,
    LivreServiceDelete,
    EmpruntServiceGet,
    LivreServicePut,
    LivreServicePost,
    CacheService,
    InitServiceGet,
    EmpruntServiceDelete
} from "./service/index";

dotenv.config()

const app : Application = express();
const router = express.Router();
const port = process.env.PORT || 30000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',router)
// const routes : Route = new Route(app)
// routes.initialiser();

LivreRouterGet(router,new LivreServiceGet(new LivreDAGet,new CacheDataDASet,new CacheDataDAGet,new CacheService(new CacheDataDASet,new CacheDataDAGet,new LivreDAGet,new DACache)))
UtilisateurRouterGet(router,new UtilisateurServiceGet(new UtilisateurDAGet))
EmpruntRouterPost(router,new EmpruntServicePost(new EmpruntDAPost,new UtilisateurDAGet,new LivreDAGet,new LivreDAPut))
AvisRouterPost(router,new AvisServicePost(new AvisDAPost))
LivreRouterDelete(router,new LivreServiceDelete(new LivreDADelete,new CacheService(new CacheDataDASet,new CacheDataDAGet,new LivreDAGet,new DACache),new LivreDAGet))
EmpruntRouterGet(router,new EmpruntServiceGet(new EmpruntDAGet));
LivreRouterPut(router,new LivreServicePut(new LivreDAPut))
LivreRouterPost(router,new LivreServicePost(new LivreDAPost,new CacheService(new CacheDataDASet,new CacheDataDAGet,new LivreDAGet,new DACache)));
InitRouterGet(router,new InitServiceGet(new CacheService(new CacheDataDASet,new CacheDataDAGet,new LivreDAGet,new DACache)));
EmpruntRouterDelete(router,new EmpruntServiceDelete(new EmpruntDADelete,new LivreServicePut(new LivreDAPut),new EmpruntDAGet,new EmpruntDAPost));

app.listen(port, async () =>{
    const cacheService = new CacheService(new CacheDataDASet,new CacheDataDAGet,new LivreDAGet,new DACache);
    try{
        console.log(`server running on port ${port}`);
        syncDatabaseMysql();
        connectMongo();    
        await cacheService.CacheNombreToutLivre("nombreToutLivre");
    } catch(error){
        console.error(error);
    } 
})


