import { createClient } from "redis";

export class CacheDataDASet {

    public async CacheSimpleData(cle: string,value: string) {
        const client = createClient();
        try {
            await client.connect();
            const response = await client.set(cle,value);
            return response;
        } catch (error) {
            console.error(" Error Data Caching",error)
        } finally {
            await client.quit();
        }
    }

}