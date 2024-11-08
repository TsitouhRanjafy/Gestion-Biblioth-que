import express,{ Request, Response, Application } from "express";
import dotenv from 'dotenv';
import Route from "./Router/route";
dotenv.config()

const app : Application = express();
const port = process.env.PORT || 30000

app.use(express.json())

const routes : Route = new Route(app)
routes.initialiser();

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})


