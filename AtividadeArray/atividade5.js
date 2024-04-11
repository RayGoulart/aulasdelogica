//Localizar o maior valor dentro de um array de números
let numero = [4, 6, 2, 8]

let controle = 0
let maiorNumero

for(let i = 0; i < numero.length; i++){
    if(numero[i] > controle){
        controle = numero[i]
        maiorNumero = i
    }
} console.log(numero[maiorNumero])