import { createClient } from "redis";

export class CacheData {

    public async CacheData(data: string) {
        const client = createClient();
        try {
            await client.connect();
            const response = await client.lPush("donne1",data)
            console.log(response);
        } catch (error) {
            console.error(" Errer Data Caching ",error)
        } finally {
            client.quit();
        }
    }
}