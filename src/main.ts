import { createClient } from "redis";

const test = async () => {
    try {
        const client = await createClient()
        .on('error',err => console.log(err))
        .connect();

        await client.set("nom","Tsitohaina");
        const value = await client.get("nom");
        console.log(value);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("fin");   
    }
}    
test();