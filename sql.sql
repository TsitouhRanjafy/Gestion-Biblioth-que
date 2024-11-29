CREATE TABLE utilisateurs (
    id VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    tel VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    adresse VARCHAR(255),
    PRIMARY KEY(id)
);

INSERT INTO utilisateurs (
    id,
    nom,
    prenom,
    tel,
    email,
    adresse
) VALUES (
    "hyd67FD&",
    "RAMIARANJAFY",
    "Tsitohaina",
    "+261 38 20 002 43",
    "ranjafytsito@gmail.com",
    "Antsobolo Ambolokandrina"
),(
    'fdyzgfd',
    'RAKOTO',
    'Andry',
    '+261 32 12 345 67',
    'andry.rakoto@gmail.com',
    'Lot IVG 125, Antananarivo'
),(
    'iuzhfgze',
    'RASOLOMALALA',
    'Mialy',
    '+261 34 56 789 01',
    'mialy.rasolo@gmail.com',
    'Lot AB 203, Fianaratsoa'
),(
    'fziuhfzef',
    'RANDRIANIASIROA',
    'Hery',
    '+261 33 78 456 90',
    'hery.randrianarisoa@gmail.com',
    'Lot VA 17, Tamatave'
),(
    'fzughzeg',
    'RAVELOMANANA',
    'Tahiry',
    '+261 32 45 123 89',
    'tahiry.ravelomana@gmail.com',
    'Lot PK 9,Majunga'
),(
    'grtkfdd',
    'RAMAROSON ',
    'Niry',
    '+261 33 65 321 54',
    'niry.razafindra@gmail.com',
    'Lot ST 201, Tuléar'
),(
    'fzgpojazef',
    'RAHARISON',
    'Voahirina',
    '+261 32 14 258 96',
    'voahirana.raharison@gmail.com',
    'Lot FD 301, Antananarivo'
),(
    'ohgerdubd',
    'RANDRIAMAMPIANINA',
    'Soa',
    '+261 33 54 789 65',
    'soa.randriamampi@gmail.com',
    'Lot JL 215, Diego-Suarez'
),(
    'hrtnzvere',
    'RAHIRIJAONA',
    'Eric',
    '+261 33 54 567 43',
    'eric.rahari@gmail.com',
    'Lot BD 59, Manakara'
),(
    'hpergeb',
    'RAZAFIMANDIMBY',
    'Mamy',
    '+261 34 67 890 12',
    'mamy.razafi@gmail.com',
    'Lot GH 412, Antsiranana'
),(
    'ghortigerz',
    'RAKOTOBE',
    'Tina',
    '+261 34 67 890 12',
    'tina.rakoto@gmail.com',
    'Lot MV 125, Morondava'
);

CREATE TABLE livres (
    id VARCHAR(255) NOT NULL,
    titre VARCHAR(50) NOT NULL,
    auteur VARCHAR(255),
    sortie DATE,
    disponible VARCHAR(3) DEFAULT "OUI",
    PRIMARY KEY(id)
);

INSERT INTO livres (
    id,
    titre,
    auteur,
    sortie,
    disponible
) VALUES (
    '19485',
    'The sun',
    'Marcel Patrick',
    '2002-08-06',
    DEFAULT
),(
    '489396',
    '1984',
    'George Orwell',
    '2005',
    DEFAULT
),(
    '49308',
    'Les Misérable',
    'Victor Hugo',
    '2010',
    DEFAULT
),(
    '30549',
    'Germinal',
    'Emile Zola',
    '1980',
    DEFAULT
),(
    '73892',
    "L'Alchimiste",
    "Paulo Coelho",
    "2007",
    DEFAULT
),(
    '39280',
    'Le Petit Prince',
    'Antoine de Saint-Exupéry',
    '2024',
    DEFAULT
),(
    '12908',
    'Orgueil et Préjugés',
    'Jane Austen',
    '2014',
    DEFAULT
),(
    '35747',
    'Moby Dick',
    'Herman Melville',
    '2013',
    DEFAULT
),(
    '20689',
    'Le Métamorphose',
    'Franz Kafka',
    '2004',
    DEFAULT
),(
    '38950',
    'Les Fleurs de mal',
    'Charles Baudelaire',
    '2017',
    DEFAULT
),(
    '98376',
    'Cien anos de soledad',
    'Gabriel Garcia Marquez',
    '2017',
    DEFAULT
),(
    '37584',
    'Crime et Châtiment',
    'Fiodor Dostoievski',
    '2015',
    DEFAULT
),(
    '69504',
    'Bel-Ami',
    'Albert Camus',
    '38495',
    DEFAULT
),(
    '20954',
    'Dracula',
    'Bram Stoker',
    '56879',
    DEFAULT
),(
    '69785',
    'Le Rouge et le Noir',
    'Stendhal',
    '2022',
    DEFAULT
),(
    '485937',
    'Madame Bovary',
    'Gustave Flaubert',
    '1880',
    DEFAULT
),(
    '57495',
    'Les Trois Mousquetaires',
    'Alexandre Dumas',
    '2010',
    DEFAULT
),(
    '20236',
    'Le Vieil Homme et la Mer',
    'Ernest Hemingway',
    '2024',
    DEFAULT
),(
    '35643',
    'Alice au pays des merveilles',
    'Lewis Carrol',
    '2017',
    DEFAULT
),(
    '48593',
    'Jane Eyre',
    'Charlotte Bronte',
    '2016',
    DEFAULT
),(
    '483905',
    'Frankenstein',
    'Mary Shelley',
    '2021',
    DEFAULT
),(
    '49387',
    'Le Nom de la Rose',
    'Umberto Eco',
    '2014',
    DEFAULT
),(
    '48390',
    'Hamlet',
    'William Shakespeare',
    '1990',
    DEFAULT
),(
    '685934',
    "L'Odyssée",
    'Homère',
    '2024',
    DEFAULT
),(
    '59324',
    'Roméo et Juliette',
    'William Shakespeare',
    '2013',
    DEFAULT
),(
    '29403',
    'A la recherche du temps perdu',
    'Marcel Proust',
    '2014',
    DEFAULT
),(
    '49356',
    'Les Hauts de Hurlevent',
    'Emily Brontë',
    '2014',
    DEFAULT
),(
    '593823',
    'Le Meilleur mondes',
    'Aldous Huxley',
    '1991',
    DEFAULT
),(
    '58739',
    "Harry Potter à l'école des sorciers",
    'J.K Rowling',
    '2015',
    DEFAULT
),(
    '43732',
    'La Divina Commedia',
    'Dante Alighieri',
    '2024',
    DEFAULT
);

CREATE TABLE emprunts (
    id_emprunt VARCHAR(255) NOT NULL,
    date_emprunt DATE,
    date_retour DATE,
    id_utilisateur VARCHAR(255) NOT NULL,
    id_livre VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_emprunt),
    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id),
    FOREIGN KEY(id_livre) REFERENCES livres(id)
);


INSERT INTO emprunts (
    id_emprunt,
    date_emprunt,
    date_retour,
    id_utilisateur,
    id_livre 
) VALUES (
    'de3293625',
    '2024-06-03',
    '2024-12-30',
    'ghortigerz',
    '29403'
),(
    'fgrh6742',
    '2010-07-14',
    '2010-07-29',
    'iuzhfgze',
    '30549'
),(
    'gerthter',
    '2022-08-01',
    '2022-09-01',
    'ghortigerz',
    '35643'
),(
    'fze432o',
    '2021-01-23',
    '2021-01-25',
    'hpergeb',
    '35747'
),(
    'fgzeoi0984',
    '2024-01-08',
    '2024-06-17',
    'hrtnzvere',
    '30549'
),(
    'pjtq776u',
    '2021-12-06',
    '2022-06-16',
    'ohgerdubd',
    '37584'
),(
    'feirj7642',
    '2023-02-09',
    '2023-07-06',
    'fzgpojazef',
    '38950'
),(
    'vfedizer90',
    '2004-06-11',
    '2006-01-12',
    'grtkfdd',
    '37584'
),(
    'acvzerfgbvj',
    '2014-08-03',
    '2014-08-11',
    'fzughzeg',
    '29403'
),(
    'ff23764KHF',
    '2022-06-07',
    '2022-12-01',
    'fziuhfzef',
    '593823'
),(
    'ZVERIUGBE9',
    '2022-06-07',
    '2022-07-15',
    'iuzhfgze',
    '57495'
),(
    'fzeg4237s',
    '2001-06-07',
    '2002-01-11',
    'fdyzgfd',
    '593823'
),(
    'gzerijgzer',
    '2002-04-01',
    '2003-11-02',
    'hyd67FD&',
    '48593'
),(
    'fze420754',
    '2024-06-11',
    '2024-07-11',
    'hpergeb',
    '485937'
),(
    'fzeiubE029',
    '2011-01-11',
    '2011-03-12',
    'ghortigerz',
    '30549'
),(
    'cvbizef23JTG0',
    '2024-07-11',
    '2024-08-11',
    'grtkfdd',
    '30549'
),(
    'HRPBEONHB4237654',
    '2021-04-16',
    '2021-07-17',
    'hyd67FD&',
    '30549'
),(
    'fz7ufz567k',
    '2022-12-11',
    '2022-11-12',
    'hrtnzvere',
    '30549'
);


SELECT * FROM livres;

SELECT  l.id,
        l.titre,
        l.auteur,
        l.sortie, 
        l.disponible,
        COUNT(e.id_emprunt) AS nombre_emprunts 
FROM livres l
JOIN emprunts e ON e.id_livre = l.id
GROUP BY l.id
ORDER BY nombre_emprunts DESC

SELECT e.id_livre, COUNT(*) AS nombre_emprunts FROM emprunts e
GROUP BY e.id_livre
ORDER BY nombre_emprunts DESC

/* const livres = await Livres.findAll({
    attributes: [
        'id',
        'titre',
        'auteur',
        'sortie',
        'disponible',
        [sequelize.fn('COUNT', sequelize.col('emprunts.id_emprunt')), 'nombre_emprunts']
    ],
    include: [
        {
            model: Emprunts,
            attributes: [],
            required: true
        }
    ],
    group: ['Livres.id'],
    order: [[sequelize.literal('nombre_emprunts'), 'DESC']]
}); */

SELECT * FROM emprunts
WHERE id_livre="57495"

SELECT * FROM emprunts
ORDER BY date_emprunt DESC;

SELECT COUNT(l.id) as nombreToutLivre FROM livres l
ORDER BY id ASC

SELECT * FROM livres
GROUP BY id 
ORDER BY nombre_emprunt DESC