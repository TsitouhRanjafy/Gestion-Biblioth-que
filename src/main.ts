import express,{ Application } from "express";
import dotenv from 'dotenv';
import Route from "./Router/route";
import { connectMongo } from "./db/connect";

dotenv.config()

const app : Application = express();
const port = process.env.PORT || 30000

app.use(express.json())

const routes : Route = new Route(app)
routes.initialiser();


app.listen(port, () =>{
    try{
        console.log(`server running on port ${port}`);
        connectMongo();    
    } catch(error){
        console.error(error);
    }

})


