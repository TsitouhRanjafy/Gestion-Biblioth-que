import { createClient } from "redis";

export class DACache {

    public async RestoreCache(){
        const client = createClient();
        try {
            await client.connect();
            const response = await client.flushAll()
            return response;
        } catch (error) {
            console.error(" Error Restore Cache ",error)
        } finally {
            await client.quit();
        }
    }
}

