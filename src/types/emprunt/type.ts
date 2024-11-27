export interface IEmprunt {
    date_emprunt: Date,
    date_retour: Date,
    id_utilisateur: string,
    id_livre: string,
}

export enum triEmprunt {
    ASC_BY_DATEEMPRUNT,
    ASC_BY_DATERETOUR,
    DESC_BY_DATEEMPRUNT,
    DESC_BY_DATERETOUR,
}
