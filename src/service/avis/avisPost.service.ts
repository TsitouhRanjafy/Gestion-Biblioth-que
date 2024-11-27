import { AvisDAPost } from "../../DA/index";
import { IAvis } from "../../types/index";

export class AvisServicePost {
    private avisDaPost: AvisDAPost;

    constructor(avisDaPost: AvisDAPost){
        this.avisDaPost = avisDaPost;
    }

    public async NewAvis(IData: IAvis) {
        try {
            if ( (IData.note >= 10) && (IData.note < 0) ){
                return;
            }
            const result = await this.avisDaPost.NewAvis(IData)
            return result;
        } catch (error) {
            throw error
        }
    }
}