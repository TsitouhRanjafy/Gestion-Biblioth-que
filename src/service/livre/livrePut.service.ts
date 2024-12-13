import { LivreDAPut } from "../../DA";
import { LivreCreationAttributes } from "../../types";

export class LivreServicePut {
    constructor(private livreDAPut: LivreDAPut){}

    public async UpdateLivreById(id: string, newData: Partial<LivreCreationAttributes>): Promise<number> {
        try {
            newData.updatedAt = new Date();
            const result = await this.livreDAPut.UpdateLivreById(id,newData);
            return result;
        } catch (error) {
            console.error(" Error Service Livre Post ",error);
            throw error
        }
    }
}