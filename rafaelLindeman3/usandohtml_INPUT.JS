let numero = document.getElementById('inpNumero')
let resultado = document.getElementById('resultado')

function gerarTabuada(){
    let n = Number(numero.value)
    resultado.innerHTML = ''
    for(let i=1; i<=10; i++){
        let multiplicação = n * i
        resultado.innerHTML += n + "x" + i + "= " + multiplicação + "<br>"
    }
}
