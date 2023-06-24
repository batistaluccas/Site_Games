    load_cart();
    
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
                localStorage.removeItem("games");
                localStorage.setItem("games",JSON.stringify(all_games));
                
                valor = parseFloat((valor - (cart[i].valor)).toFixed(2));
                cart.splice(i, 1);
                break;
            }
        }
        
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.removeItem("total");
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
