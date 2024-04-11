let sorvete = []

while (true){
    let menu = prompt(`escolha como deseja montar seu sorvete: 
    (1) Adicionar sabor
    (2) Remover sabor
    (3) Visualizar sorvete
    (4) Finalizar pedido`)

    switch(menu){
        case '1':
            if(sorvete.length < 3){
                let sabor = prompt('digite o sabor para adicionar: ')
                sorvete.push(sabor)
                alert('sabor adicionado! ')
            }else{
                alert('limite de sabores atingidos ,remova um sabor!')
            }
            break
        case '2':
            if (sorvete.length > 0) {
                sorvete.pop();
                alert("Sabor removido!");
            } else {
                alert("Não existem sabores adicionados!");
            }
            break;
        
        case "3":
            if (sorvete.length > 0) {
                alert("Seu sorvete possui os seguintes sabores:");
                for (let i = 0; i < sorvete.length; i++) {
                    alert(`Camada ${i + 1} - ${sorvete[i]}`);
                }
            } else {
                alert("Seu sorvete não possui sabores!");
            }
            break;
        
        case "4":
            if (sorvete.length > 0) {
                alert("Pedido realizado!");
                break;
            } else {
                alert("Adicione pelo menos um sabor!");
                break;
            }
        
        default:
            alert("Opção inválida!");
            break;
    }
    
}