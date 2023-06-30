let valor = 0;
let ProdutosCarrinho = [];
let ProdutosStore = [
        {id: 0, 
        nome: "Far Cry 5", 
        valor: 119.99, 
        quantidade: 5, 
        categoria: "action", 
        imagem: "../images/img jogos/farcry5.jpg",
        vendidos: 10},
        
        {id: 1, 
        nome: "Far Cry 6", 
        valor: 219.99, 
        quantidade: 5, 
        categoria: "action", 
        imagem: "../images/img jogos/farcry6.jpg",
        vendidos: 3},

        {id: 2, 
        nome: "Far Cry Primal", 
        valor: 89.99, 
        quantidade: 5, 
        categoria: "action", 
        imagem: "../images/img jogos/primal.jpg",
        vendidos: 1},

        {id: 3, 
        nome: "Mortal Kombat 11", 
        valor: 59.99, 
        quantidade: 5, 
        categoria: "action", 
        imagem: "../images/img jogos/MK11.jpg",
        vendidos: 6},

        {id: 4, 
        nome: "Uncharted 4", 
        valor: 219.99, 
        quantidade: 5, 
        categoria: "adventure", 
        imagem: "../images/img jogos/rocklaser-ps4-uncharted4.jpg",
        vendidos: 4},

        {id: 5, 
        nome: "Assassin's Creed Odyssey Omega Edition", 
        valor: 319.99, 
        quantidade: 5, 
        categoria: "adventure", 
        imagem: "../images/img jogos/assassin.jpg",
        vendidos: 2},

        {id: 6, 
        nome: "Dark Souls 3", 
        valor: 119.99, 
        quantidade: 5, 
        categoria: "RPG", 
        imagem: "../images/img jogos/dark.jpg",
        vendidos: 1},

        {id: 7, 
        nome: "The Witcher 3", 
        valor: 59.99, 
        quantidade: 5, 
        categoria: "RPG", 
        imagem: "../images/img jogos/witcher.jpg",
        vendidos: 0},

        {id: 8, 
        nome: "Dark Souls 2", 
        valor: 19.99, 
        quantidade: 5, 
        categoria: "RPG", 
        imagem:"../images/img jogos/dark_souls_ii_scholar_of_the_first_sin.jpg",
        vendidos: 2},

        {id: 9, 
        nome: "Horizon Zero Dawn", 
        valor: 259.99, 
        quantidade: 5, 
        categoria: "RPG", 
        imagem: "../images/img jogos/horizon.jpg",
        vendidos: 4},

        {id: 10, 
        nome: "FIFA 23", 
        valor: 319.99, 
        quantidade: 5, 
        categoria: "sports", 
        imagem: "../images/img jogos/fifa23.jpg",
        vendidos: 10},

        {id: 11, 
        nome: "NBA 2K19", 
        valor: 79.99, 
        quantidade: 5, 
        categoria: "sports", 
        imagem: "../images/img jogos/nba.jpg",
        vendidos: 3},

        {id: 12, 
        nome: "FIFA 20", 
        valor: 49.99, 
        quantidade: 5, 
        categoria: "sports", 
        imagem: "../images/img jogos/fifa20.jpg",
        vendidos: 5},
    
        {id: 13, 
        nome: "Madden NFL 22", 
        valor: 249.99, 
        quantidade: 5, 
        categoria: "sports", 
        imagem: "../images/img jogos/NFl.jpg",
        vendidos: 0},

        {id: 14, 
        nome: "Tetris Effect", 
        valor: 1.99, 
        quantidade: 5, 
        categoria: "strategy", 
        imagem: "../images/img jogos/tetris.jpg",
        vendidos: 1},

        {id: 15, 
        nome: "Pure Chess", 
        valor: 21.99, 
        quantidade: 5, 
        categoria: "strategy", 
        imagem: "../images/img jogos/chess.jpg",
        vendidos: 2},

        {id: 16, 
        nome: "Farming Simulator 19 Platinum Edition", 
        valor: 111.99, 
        quantidade: 5, 
        categoria: "strategy", 
        imagem: "../images/img jogos/farm.jpg",
        vendidos: 4},

        {id: 17, 
        nome: "The Last of Us", 
        valor: 29.99, 
        quantidade: 5, 
        categoria: "adventure", 
        imagem: "../images/img jogos/the-last-of-us-remastered.jpg",
        vendidos: 13}
]


if(localStorage.getItem("games") == null){
    localStorage.setItem("games",JSON.stringify(ProdutosStore)); 
    localStorage.setItem("cart",JSON.stringify(ProdutosCarrinho));    
    localStorage.setItem("total", JSON.stringify(valor));
    
    best_sellers_update();
}
