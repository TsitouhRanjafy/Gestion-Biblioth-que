export interface IEmprunt {
    date_emprunt: Date,
    date_retour: Date,
    id_utilisateur: string,
    id_livre: string,
}

export enum triEmprunt {
    ASC_BY_DATEEMPRUNT=1,
    ASC_BY_DATERETOUR=2,
    DESC_BY_DATEEMPRUNT=3,
    DESC_BY_DATERETOUR=4,
}
