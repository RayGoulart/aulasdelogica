//6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
//Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
//no primeiro Array.

let numero1 = []
for(let i = 0; i < 10; i++){
    let num = prompt(`digite o numero ${i + 1}: `)
    numero1.push(num)
}

let numero2 = []
for(let i = 0; i < numero1.length; i++ ){
    if(numero1[i] % 2 !== 0){
        numero2.push(numero1[i])
    }
}
console.log('os numeros impares são: ', numero2)