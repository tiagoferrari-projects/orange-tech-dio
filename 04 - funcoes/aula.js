// function sayMyName(name){
//     console.log(`Your name is: ${name}`)
// }

// sayMyName('Tiago')
// sayMyName('João')

// function quadrado(valor){
//     return Math.pow(valor, 2)
// }

// console.log(quadrado(10) + quadrado(10))
// // const quadradoDeDez = quadrado(10)
// console.log(quadradoDeDez)

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDeAcrescimo
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))
console.log(incrementarJuros(100, 20))