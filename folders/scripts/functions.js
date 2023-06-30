function check_if_game_is_available(){
    
    let all_games = JSON.parse(localStorage.getItem("games"));
    let buttons = document.querySelectorAll('.games_buttons');
    let buttons_id = [];
    
    buttons.forEach(element => {
        buttons_id.push(element.id);
    });
    
    buttons_id.forEach(element_id => {
        if(all_games[element_id].quantidade == 0){
            let change_button = document.getElementById(element_id);
            change_button.textContent = "Item Esgotado";
            change_button.classList.remove('games_buttons');
            change_button.classList.add('games_buttons_unavailable');
            change_button.removeAttribute("onclick");
        }
    });

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
            localStorage.setItem("total",JSON.stringify(valor));
    } 

    all_games[itemID] = game_in_store;
    localStorage.setItem("games",JSON.stringify(all_games));
    check_if_game_is_available();
        
}

function best_sellers_update(){
    let MaisVendidos = JSON.parse(localStorage.getItem("games"));
    let vetor_auxiliar;
    let top_games = 4;
    
    for(i = 0; i < (MaisVendidos.length - 1); i++){
        for (j = i+1; j < MaisVendidos.length; j++){
            if (MaisVendidos[i].vendidos < MaisVendidos[j].vendidos){
                vetor_auxiliar = MaisVendidos[i];
                MaisVendidos[i] = MaisVendidos[j];
                MaisVendidos[j] = vetor_auxiliar;
            }
            
        }
    }
    
    MaisVendidos.forEach(game => {
        game.categoria = "top";
    });

    MaisVendidos.splice(top_games,(MaisVendidos.length - top_games));
    
    localStorage.setItem("best_sellers", JSON.stringify(MaisVendidos));
}

function confirm_purchase(){
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("CEP").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let data = [name, cpf, email, cep, address, number, city, state];

    let verificador = true;
        
    for (i = 0; i < data.length; i++){
        if (data[i] == ''){
            alert("Todos os campos são necessários");
            verificador = false;
            break;
        }
    }

    if (verificador == true){
        
        all_games_in_store = JSON.parse(localStorage.getItem("games"));
        all_games_in_cart = JSON.parse(localStorage.getItem("cart"));
        
        all_games_in_cart.forEach(game => {
            for (i = 0; i < all_games_in_store.length; i++){
                if(game.id == all_games_in_store[i].id){
                    all_games_in_store[i].vendidos ++;
                }
            }
        });
        
        all_games_in_cart = [];
        total = 0;
        localStorage.setItem("cart",JSON.stringify(all_games_in_cart));
        localStorage.setItem("games", JSON.stringify(all_games_in_store));
        localStorage.setItem("total",JSON.stringify(total));
        
        best_sellers_update();
        
        alert("Pedido realizado!");
        window.location.href = "../pages/index.html";
    }
    

}

function load_cart(){
        
    if(localStorage.getItem("cart") != null){           

        let cart = JSON.parse(localStorage.getItem("cart"));
        let div = document.getElementById("cart_description");
        let title = document.createElement("h1");
            title.setAttribute("id", "title");

        if (cart.length == 0){
            title.textContent = "Seu carrinho está vazio";
        }
        else {
            title.textContent = "Itens do carrinho: ";
        }
        
        div.appendChild(title);

        for(i = 0; i < cart.length; i++){
            let section = document.createElement("section");
                section.setAttribute("id","item_section");

            let item = document.createElement("label");                
                item.setAttribute("class", "item");
                item.innerHTML = [cart[i].nome] + " - R$ " + [cart[i].valor];

            let button = document.createElement("button");
                button.setAttribute("id", cart[i].id);
                button.setAttribute("class","item_button");
                button.setAttribute("onClick", "remove(this.id)");
                button.textContent = "Remover";     

            
            div.appendChild(section);
            section.appendChild(item);
            section.appendChild(button);
        }

        let buy_section = document.createElement("section");
            buy_section.setAttribute("id", "buy_section");
            
        let total = document.createElement("label");
            total.setAttribute("id", "buy_section");
            let valor = (localStorage.getItem("total"));            
            total.textContent = "Valor Total - R$ " + parseFloat(valor).toFixed(2);
            
        let button_href = document.createElement("a");
            button_href.setAttribute("href","checkout.html");
            
        let buy_button = document.createElement("button");
            buy_button.setAttribute("id", "buy_section");
            buy_button.setAttribute("class", "button_section");
            buy_button.textContent = "Finalizar Pedido";
            
        
        if (valor != 0){
            div.appendChild(buy_section);
            buy_section.appendChild(total);
            buy_section.appendChild(button_href);
            button_href.appendChild(buy_button);
        }
    }
}

function remove(button_ID){

    let cart = JSON.parse(localStorage.getItem("cart"));
    let valor = JSON.parse(localStorage.getItem("total"));
    let all_games = JSON.parse(localStorage.getItem("games"));

    for (i = 0; i < cart.length; i++){
        if(cart[i].id == (button_ID)){
            let game_in_store = all_games[button_ID];
            game_in_store.quantidade++;
            all_games[button_ID] = game_in_store;
            localStorage.setItem("games",JSON.stringify(all_games));
            
            valor = parseFloat((valor - (cart[i].valor)).toFixed(2));
            cart.splice(i, 1);
            break;
        }
    }
    
    
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total",JSON.stringify(valor));
    let item_section = document.querySelectorAll("#item_section");
    let buy_section = document.querySelectorAll("#buy_section");
    let remove_title = document.getElementById("title");

    remove_title.remove();

    item_section.forEach(element => {
        element.parentNode.removeChild(element);
    });

    buy_section.forEach(element => {
        element.parentNode.removeChild(element);
    })

    load_cart();
}

function pages_render(){

    let all_games = JSON.parse(localStorage.getItem("games"));
    let main = document.querySelector("main");
    let page_category = main.id;
    let games_in_this_category = [];
    
    if(page_category == "top"){
        all_games = JSON.parse(localStorage.getItem("best_sellers"))
    };

    all_games.forEach(game => {
        if (game.categoria == page_category){
            games_in_this_category.push(game);
        }
    });
    
    let div = document.createElement("div");
    div.setAttribute("id", "show");
    
    main.appendChild(div);
    
    games_in_this_category.forEach(game => {
        
        let section = document.createElement("section");
        
        let img = document.createElement("img");
        img.setAttribute("src", game.imagem);
        img.setAttribute("class", "games_images");
        
        let label_name = document.createElement("label");
        label_name.setAttribute("class", "games_description");
        label_name.textContent = game.nome;
        
        let label_price = document.createElement("label");
        label_price.setAttribute("class", "games_price");
        label_price.textContent = "R$ " + game.valor;
        
        let button = document.createElement("button");
        button.setAttribute("id", game.id);
        button.setAttribute("class", "games_buttons");
        button.setAttribute("onclick", "add_to_cart(this.id)");
        button.textContent = "Adicionar ao carrinho";
        
        div.appendChild(section);
        section.appendChild(img);
        section.appendChild(label_name);
        section.appendChild(label_price);
        section.appendChild(button);
        
        
    });
}
    
function find_item(){
    

    let show_options = document.getElementById("options");
    show_options.innerHTML = '';
    let typed_word = document.getElementById("find_items").value;
    console.log(typed_word);
    all_games = JSON.parse(localStorage.getItem("games"));
    if (typed_word != ""){
        
        all_games.forEach(game => {
            if(((game.nome).toUpperCase()).includes(typed_word.toUpperCase())){
                let option = document.createElement('option');
                option.textContent = game.nome;
                option.addEventListener('click', function () {complete(option)});
                show_options.appendChild(option);            
            }
        });
    }
        
    function complete(option){
        document.getElementById("find_items").value = option.value;
        show_options.innerHTML = '';
    }
}