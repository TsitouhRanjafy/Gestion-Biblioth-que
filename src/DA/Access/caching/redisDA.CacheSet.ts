import { createClient } from "redis";

export class CacheDataDASet {

    public async CacheData(data: string,offset: number, limit: number) {
        const client = createClient();
        try {
            await client.connect();
            const response = await client.set(`livreOffset${offset}Limit${limit}`,data)
            console.log(response);
        } catch (error) {
            console.error(" Error Data Caching ",error)
        } finally {
            await client.quit();
        }
    }

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