function confirmar_compra(){
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
        if (data[i] === ''){
            alert("Todos os campos são necessários");
            verificador = false;
            break;
        }
    }

    if (verificador == true){
        alert("Pedido realizado!");
        window.location.href = "index.html";
    }
    

}
