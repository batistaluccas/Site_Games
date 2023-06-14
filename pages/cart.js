    load_cart();
    
    function load_cart(){
        
        
        if(localStorage.getItem("cart")!==null){
           

            let cart = localStorage.getItem("cart");
            cart = JSON.parse(cart);
            let div = document.getElementById("cart_description");

            for(i = 0; i < cart.length; i++){
                let section = document.createElement("section");
                let item = document.createElement("label");                
                let button = document.createElement("button");
                item.setAttribute("id", "item");
                section.setAttribute("id","item_section");
                button.setAttribute("id", cart[i][0]);
                button.setAttribute("class","item_button");
                button.setAttribute("onClick", "remove(this.id)");
                button.textContent = "Remover";                
                item.innerHTML = [cart[i][2]] + " - R$ " +[cart[i][3]];
                div.appendChild(section);
                section.appendChild(item);
                section.appendChild(button);
            }

            let buy_section = document.createElement("section");
            let total = document.createElement("label");
            let buy_button = document.createElement("button");
            buy_button.textContent = "Finalizar Pedido";
            total.setAttribute("id", "buy_section");
            buy_section.setAttribute("id", "buy_section");
            buy_button.setAttribute("id", "buy_section");
            buy_button.setAttribute("class", "button_section");
            let aux = (localStorage.getItem("total"));
            
            total.textContent = "Valor Total - R$ " + parseFloat(aux).toFixed(2);
            
            div.appendChild(buy_section);
            buy_section.appendChild(total);
            buy_section.appendChild(buy_button);
        }
    }

    function remove(button_ID){
        let cart = JSON.parse(localStorage.getItem("cart"));
        let valor = JSON.parse(localStorage.getItem("total"));
        let matriz_games = JSON.parse(localStorage.getItem("games"));
        for (i = 0; i < cart.length; i++){
            if(cart[i][0] == (button_ID)){
                let game_in_store = matriz_games[button_ID - 1];
                game_in_store[4]++;
                matriz_games[button_ID - 1] = game_in_store;
                localStorage.removeItem("games");
                localStorage.setItem("games",JSON.stringify(matriz_games));
                valor = parseFloat((valor - (cart[i][3])).toFixed(2));
                cart.splice(i, 1);
                i = cart.length;
            }
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.removeItem("total");
        localStorage.setItem("total",JSON.stringify(valor));
        let item_section = document.querySelectorAll("#item_section");
        item_section.forEach(element => {
            element.parentNode.removeChild(element);
        });
        let buy_section = document.querySelectorAll("#buy_section");
        buy_section.forEach(element => {
            element.parentNode.removeChild(element);
        })
        load_cart();
    }
