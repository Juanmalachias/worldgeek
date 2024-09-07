// Simula um banco de dados de produtos
const products = [
    { id: 1, name: 'Action Figure Darth Vader', price: 25.00, image: "./asserts/DarthVader.jpg", description: 'Figura de ação detalhada do Darth Vader de Star Wars.' },
    { id: 2, name: 'Camiseta do Capitão América', price: 35.00, image: './asserts/Camiseta_do_Capitão_América.jpg', description: 'Camiseta com estampa do escudo do Capitão América.' },
    { id: 3, name: 'Mug do Batman', price: 15.00, image: './asserts/Mug_do_Batman.jpg', description: 'Caneca do Batman, ideal para bebidas quentes.' },
    { id: 4, name: 'Poster do Senhor dos Anéis', price: 20.00, image: './asserts/Poster_do_Senhor_dos_Anéis.jpg', description: 'Poster de alta qualidade do filme Senhor dos Anéis.' },
    { id: 5, name: 'Camiseta do Doctor Who', price: 30.00, image: './asserts/Camiseta_do_Doctor_Who.jpg', description: 'Camiseta com design exclusivo do Doctor Who.' },
    { id: 6, name: 'Action Figure do Iron Man', price: 40.00, image: './asserts/Action_Figure_do_Iron_Man.jpg', description: 'Figura de ação do Iron Man com detalhes em armadura.' },
    { id: 7, name: 'Chaveiro do Harry Potter', price: 10.00, image: './asserts/Chaveiro_do_Harry_Potter.jpg', description: 'Chaveiro com tema de Harry Potter, ideal para colecionadores.' },
    { id: 8, name: 'Caneca do Groot', price: 18.00, image: './asserts/Caneca_do_Groot.jpg', description: 'Caneca com design do Groot dos Guardiões da Galáxia.' },
    { id: 9, name: 'Boneco do Pikachu', price: 20.00, image: './asserts/PikachuToy.jpg', description: 'Boneco do Pikachu, ideal para fãs de Pokémon.' },
    { id: 10, name: 'Pôster do Game of Thrones', price: 22.00, image: './asserts/GameOfThronesPoster.jpg', description: 'Pôster com arte do seriado Game of Thrones.' },
    { id: 11, name: 'Action Figure do Harry Potter', price: 25.00, image: './asserts/HarryPotterFigure.jpg', description: 'Figura de ação do Harry Potter com varinha.' },
    { id: 12, name: 'Chaveiro do Super Mario', price: 12.00, image: './asserts/SuperMarioKeychain.jpg', description: 'Chaveiro do Super Mario, um item nostálgico para os fãs dos videogames.' },
    { id: 13, name: 'Luminária do Batmóvel', price: 45.00, image: './asserts/BatmobileLamp.jpg', description: 'Luminária em formato do Batmóvel para decorar seu quarto.' },
    { id: 14, name: 'Action Figure do Spider-Man', price: 30.00, image: './asserts/SpiderManFigure.jpg', description: 'Figura de ação do Spider-Man em pose dinâmica.' },
    { id: 15, name: 'Caneca do Jedi Master', price: 20.00, image: './asserts/JediMasterMug.jpg', description: 'Caneca com design de Jedi Master.' },
    { id: 16, name: 'Action Figure do Deadpool', price: 35.00, image: './asserts/DeadpoolFigure.jpg', description: 'Figura de ação do Deadpool com várias articulações.' }
];

window.products = products; // Torna a lista de produtos globalmente acessível
