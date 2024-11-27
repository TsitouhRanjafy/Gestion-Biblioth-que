import { LivreDAPut } from "../../DA";
import { LivreCreationAttributes } from "../../types";

export class LivreServicePut {
    constructor(private livreDAPut: LivreDAPut){}

    public async UpdateLivreById(id: string, newData: Partial<LivreCreationAttributes>) {
        try {
            const result = await this.livreDAPut.UpdateLivreById(id,newData);
            return result;
        } catch (error) {
            throw error
        }
    }
}