


    let all_games_in_store = JSON.parse(localStorage.getItem("games"));
    let main = document.querySelector("main");
    let page_category = main.id;
    let games_in_this_category = [];

    all_games_in_store.forEach(game => {
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



