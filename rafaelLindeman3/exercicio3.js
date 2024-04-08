let numero = Number(prompt('escolha um numero de 1 a 10: ')) 
let result = ""

for(let i = 0; i <= 10; i++){
    result += `${numero} x ${i} = ${numero * i}
`
    
}
alert(result)