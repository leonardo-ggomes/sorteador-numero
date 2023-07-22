
var inputQtdeNumero = document.querySelector("#qtdeNumero")
var inputNumeroMaximo = document.querySelector("#numeroMaximo")
var painelNumeros = document.querySelector("#numeros")

document.querySelector("#sortearNumeros").addEventListener('click', function(event){

   var numeros = sortear(inputQtdeNumero.value, inputNumeroMaximo.value)   
   painelNumeros.innerHTML = ""

   for (let index = 0; index < numeros.length; index++) {
       var numero = document.createElement("div")
       numero.classList.add("numero")
       numero.innerHTML = numeros[index]

       painelNumeros.appendChild(numero)
   }

})


function sortear(qtdeNumeros, numeroMaximo){

    let numeros = []

    for (let i = 0; i < qtdeNumeros; i++) {   
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo)
        numeros[i] = numeroAleatorio
    }

    return numeros.sort(function(a,b){return a - b;})
}

