import { createClient } from 'redis';
import Livre from '../Models/livre.model';


export const CacheRedisToutLivre = async (livres : Livre[]) =>{
    try{
        const client = createClient();
        await client.connect();
        const nombreToutLivres = await client.get('nombreToutLivres');
        // Oui, misy cache anaty redis isan'ny livre rehetra
        // otrzay ihany ko ny top 20, nasiako isany foana na 20 ary ilay izy
        // Tester s'il y des donnée précedant
        if (nombreToutLivres != null){
            // si oui, reinitialiser
            const n : number = parseInt(nombreToutLivres);
            console.log(' livres précedant:',n);
            
            for (let i=0;i<n;i++){
                await client.hDel(`livres:${i}`,['id','titre','auteur','sortie','disponible'])  
            }
            // fafaina isan'ny livre de lasa null fa tsy 0
            await client.del('nombreToutLivres');

        }

        let a = 0;
        Object.values(livres).forEach(async (livre,i) =>{
            const dataLivre = livre.dataValues
            a++;
            await client.hSet(`livres:${i}`,{ 
                'id': dataLivre.id+" ",
                'titre': dataLivre.titre+" ", 
                'auteur': dataLivre.auteur+" ", 
                'sortie': dataLivre.sortie+" ",
                'disponible':dataLivre.disponible+" "
            })
        })
        
        await client.set('nombreToutLivres',`${a}`);
        await client.quit();
    } catch(error){
        console.error(error)
    }
}

export const CacheRedisTopLivre = async (livres : Object) =>{
    try{
        const client = createClient();
        await client.connect();

        const nombreTopLivres = await client.get('nombreTopLivres');
        if (nombreTopLivres != null){
            const n = parseInt(nombreTopLivres);
            for (let i=0; i<n; i++){
                await client.hDel(`TopLivres:${i}`,['id','titre','auteur','sortie','disponible'])
            }
            await client.del('nombreTopLivres');
        }

        let a = 0;
        Object.values(livres).forEach(async (livre,i) =>{
            a++;
            await client.hSet(`TopLivres:${i}`,{ 
                'id': livre.id+" ",
                'titre': livre.titre+" ", 
                'auteur': livre.auteur+" ", 
                'sortie': livre.sortie+" ",
                'disponible': livre.disponible+" ",
                'nombre_emprunts': livre.nombre_emprunts+" "
            })
        })

        await client.set('nombreTopLivres',`${a}`);
        await client.quit();
    } catch(error){
        console.error(error)
    }
}
