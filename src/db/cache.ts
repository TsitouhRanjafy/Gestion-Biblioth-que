import { createClient } from 'redis';
import { Livre } from '../types/index';


export const CacheRedisToutLivre = async (livres : Livre[]) =>{
    try{
        const client = createClient();
        await client.connect();
        const nombreToutLivres = await client.get('nombreToutLivres');
        if (nombreToutLivres != null){
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
            const dataLivre = livre.dataValues;
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

export const CacheRedisTopLivre = async (livres : Livre[]) =>{
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
            const dataLivre = livre.dataValues;
            a++;
            await client.hSet(`TopLivres:${i}`,{ 
                'id': dataLivre.id+" ",
                'titre': dataLivre.titre+" ", 
                'auteur': dataLivre.auteur+" ", 
                'sortie': dataLivre.sortie+" ",
                'disponible': dataLivre.disponible+" ",
                'nombre_emprunts': dataLivre.nombre_emprunts+" "
            })
        })

        await client.set('nombreTopLivres',`${a}`);
        await client.quit();
    } catch(error){
        console.error(error)
    }
}
