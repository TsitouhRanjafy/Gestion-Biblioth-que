import { createClient } from 'redis';

export const CacheRedisToutLivre = async (livres : Object) =>{
    try{
        const client = createClient();
        await client.connect();

        const nombreToutLivres = await client.get('nombreToutLivres');
        if (nombreToutLivres){
            console.log("exist"+nombreToutLivres);
            await client.flushAll();
        }

        let i = 0;
        Object.values(livres).forEach(async livre =>{
            await client.hSet(`livres:${i++}`,{ 
                'id': livre.id+" ",
                'titre': livre.titre+" ", 
                'auteur': livre.auteur+" ", 
                'sortie': livre.sortie+" ",
                'disponible': livre.disponible+" "
            })
        })

        await client.set('nombreToutLivres',`${i}`);
        await client.quit();
    } catch(error){
        console.error(error)
    }
}