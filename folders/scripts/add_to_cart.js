
check_if_game_is_available();

function check_if_game_is_available(){
    
    let all_games = JSON.parse(localStorage.getItem("games"));
    let buttons = document.querySelectorAll('.games_buttons');
    let buttons_id = [];
    
    buttons.forEach(element => {
        buttons_id.push(element.id);
    });
    
    buttons_id.forEach(element_id => {
        if(all_games[element_id].quantidade == 0){
            game_unavailable(element_id);
        }
    });

}

function game_unavailable(itemID){

    let change_button = document.getElementById(itemID);
        change_button.textContent = "Item Esgotado";
        change_button.classList.remove('games_buttons');
        change_button.classList.add('games_buttons_unavailable');
        change_button.removeAttribute("onclick");

}

function add_to_cart(itemID){    

    let all_games = JSON.parse(localStorage.getItem("games"));
    let game_in_cart = all_games[itemID];
    game_in_cart.quantidade = 1;    
        
    let all_cart = JSON.parse(localStorage.getItem("cart"));
    all_games = JSON.parse(localStorage.getItem("games"));
    
    let game_in_store = all_games[itemID];
    
    if (game_in_store.quantidade > 0){
        game_in_store.quantidade -= 1;        
        all_cart.push(game_in_cart);
        localStorage.setItem("cart",JSON.stringify(all_cart));

        let valor = JSON.parse(localStorage.getItem("total"));
            valor = parseFloat((valor + game_in_cart.valor).toFixed(2)); 
            localStorage.removeItem("total");
            localStorage.setItem("total",JSON.stringify(valor));
    } 

    all_games[itemID] = game_in_store;
    localStorage.removeItem("games");
    localStorage.setItem("games",JSON.stringify(all_games));
    check_if_game_is_available();
        
}
