import express,{ Application } from "express";
import dotenv from 'dotenv';

import { LivreDAGet, syncDatabaseMysql } from "./DA/index";
import { connectMongo } from "./DA/index";
import { LivreRouter } from "./routes/index";
import { LivreService } from "./service";

dotenv.config()

const app : Application = express();
const router = express.Router();
const port = process.env.PORT || 30000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',router)
// const routes : Route = new Route(app)
// routes.initialiser();

LivreRouter(router,new LivreService(new LivreDAGet))

app.listen(port, () =>{
    try{
        console.log(`server running on port ${port}`);
        syncDatabaseMysql();
        connectMongo();    
    } catch(error){
        console.error(error);
    }
})


