let valor = 0;
let ProdutosCarrinho = [];
let ProdutosMatriz = [
    [1, "FC5", "Far Cry 5", 119.99, 5], 
    [2, "FC6", "Far Cry 6", 219.99, 5],
    [3, "FCP", "Far Cry Primal", 89.99, 5],
    [4, "MK11", "Mortal Kombat 11", 59.99, 5],
    [5, "UC4", "Uncharted 4", 219.99, 5],
    [6, "ASO", "Assassin's Creed Odyssey Omega Edition", 319.99, 5],
    [7, "DS3", "Dark Souls 3", 119.99, 5],
    [8, "TW3", "The Witcher 3", 59.99, 5],
    [9, "TW2", "The Witcher 2", 19.99, 5],
    [10, "HZD", "Horizon Zero Dawn", 259.99, 5],
    [11, "F23", "FIFA 23", 319.99, 5],
    [12, "NBA", "NBA 2K19", 79.99, 5],
    [13, "F20", "FIFA 20", 49.99, 5],
    [14, "NFL", "Madden NFL 22", 249.99, 5],
    [15, "TET", "Tetris Effect", 1.99, 5],
    [16, "CSS", "Pure Chess", 21.99, 5],
    [17, "FS", "Farming Simulator 19 Platinum Edition", 111.99, 5],
    [18, "TLU", "The Last of Us", 29.99, 5]
]

if(localStorage.getItem("games") === null){
    localStorage.setItem("games",JSON.stringify(ProdutosMatriz)); 
    localStorage.setItem("cart",JSON.stringify(ProdutosCarrinho));    
    localStorage.setItem("total", JSON.stringify(valor));
}



function adicionar_ao_carrinho(item){    
    let matriz_games = localStorage.getItem("games");
    matriz_games = JSON.parse(matriz_games);
    let game_in_cart = matriz_games[item -1];
    game_in_cart[4] = 1;
    
    let matriz_cart = localStorage.getItem("cart");
    matriz_cart = JSON.parse(matriz_cart);
    

    matriz_games = localStorage.getItem("games");
    matriz_games = JSON.parse(matriz_games);
    let game_in_store = matriz_games[item - 1];
    if (game_in_store[4] != 0){
        game_in_store[4] -= 1;
        matriz_cart.push(game_in_cart);
        localStorage.setItem("cart",JSON.stringify(matriz_cart));

        let cart = localStorage.getItem("cart");
        cart = JSON.parse(cart);
        let valor = (cart[0][3]);
            for(i = 1; i < (cart.length); i++){
                valor = parseFloat((valor + (cart[i][3])).toFixed(2));
            }
            localStorage.removeItem("total");
            localStorage.setItem("total",JSON.stringify(valor));
    } else {
        alert("Item Esgotado");
        game_in_store[4] = 0;
    }

    matriz_games[item - 1] = game_in_store;
    localStorage.removeItem("games");
    localStorage.setItem("games",JSON.stringify(matriz_games));
        
}

