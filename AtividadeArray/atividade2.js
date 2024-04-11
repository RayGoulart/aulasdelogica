
// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba- o.
//Modifique os elementos do array de modo que a sequência de números fique do contrário.
//Ou seja, se digitou: 1,2,3
//Vai aparecer: 3,2,1


let numero = []

for(let i = 0; i < 3; i++){
    let num = prompt(`digite o numero ${i + 1}: `)
    numero.push(num)
}

numero.reverse()

alert(numero)