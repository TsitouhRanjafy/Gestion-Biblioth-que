import { createClient } from "redis";

export class CacheDataDAGet {


    public async getCacheSimpleData(cle: string) {
        const client = createClient();
        try {
            await client.connect();
            const response = await client.get(cle);
            return response;
        } catch (error) {
            console.error(" Error Data Caching",error)
        } finally {
            await client.quit();
        }
    }
}