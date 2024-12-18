export interface ILivre {
    titre: string,
    auteur: string,
    sortie: Date,
    disponible: string
}

export enum triMethodeLivre {
    ASC_BY_DATESORTIE=1,
    ASC_BY_DATEALPHABETIQUE=2,
    DESC_BY_DATESORTIE=3,
    DESC_BY_DATEALPHABETIQUE=4
}