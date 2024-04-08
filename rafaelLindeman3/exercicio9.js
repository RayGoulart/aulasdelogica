function gerarFizzBuzz(){
    let resultado09 = document.getElementById('resultado09')
    for(i=1; i<=100; i++){
        let fizzBuzz = false
        
        if(i % 3 == 0){
            resultado09.innerHTML += 'fizz'
            fizzBuzz = true

        } 
        if(i % 5 == 0) {
            resultado09.innerHTML += 'buzz' 
            fizzBuzz =  true
        }
        
        resultado09

        
    }
}