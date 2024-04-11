//Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
//Matemática. Calcular a média de todas as notas acima de 5,0.
const nome = ['jenni', 'rayssa', 'barbara', 'ana', 'maria']
const nota = [2, 10, 10, 2, 6, 4]

let somaNotas = 0
let qtdNotas = 0

for(let i = 0; i < nota.length; i++){
    if(nota[i] > 5.0){
        somaNotas = somaNotas + nota[i]
        qtdNotas++
    }
}

let mediaNotas = somaNotas / qtdNotas
mediaNotas = mediaNotas.toFixed(2);

console.log(mediaNotas)