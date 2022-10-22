/*
    Estrutura condicional
const camisetaRenanAzul = true
const camisetaLemaoAzul = false

console.log(10 != 5) 

*/

// const numero = 0
const numeroCinco = 0
//const numeroDivisivelPor5 = (numeroCinco % 5) === 0

// um sinal de igualdade refere atribuição
//const numeroPar = (numero % 2) = 0

// dois sinais de iguais, se uma variavel é igual a x valor
// neste caso ignora o tipo da variável
//const numeroPar = (numero % 2) === 0

/// três iguais, estritamente igual
//const numeroPar = (numero % 2) === 0
//console.log(numeroPar)

/*
if(numeroPar){
    console.log('Par')
} else {
    console.log('Impar')
}

*/
const numeroDivisivelPor5 = (numeroCinco % 5) === 0


if ( numeroCinco) {
    console.log('Sim')
} else if (numeroCinco === 0) {
    console.log('O número informado é inválido')
} else if (numeroCinco === 5) {
    console.log('O número informado é inválido')
} else {
    console.log('Não')
}
