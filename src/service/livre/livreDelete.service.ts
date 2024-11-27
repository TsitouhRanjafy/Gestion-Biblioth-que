import { LivreDADelete } from "../../DA/index";


export class LivreServiceDelete {
    constructor(private livreDADelete: LivreDADelete){};

    public async DeleteLivreById(Id: string) {
        try {
            const result = await this.livreDADelete.DeleteDataById(Id)
            return result;
        } catch(error) {
            throw error
        }
    }

}