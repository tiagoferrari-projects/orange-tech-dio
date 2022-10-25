function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2))
}

function classificarImc(valorImc) {
    if (valorImc < 18.5) {
        return `Você está Abaixo do Peso. \nProcure ajuda médica!`
    } else if (valorImc >= 18.5 && valorImc < 25) {
        return `Você está com o Peso Normal!`
    } else if (valorImc < 30) {
        return `Você está Acima do Peso.\nProcure ajuda médica!`
    } else if (valorImc < 40) {
        return `Você está Obeso.\nProcure ajuda médica!`
    } else if (valorImc > 40) {
        return `Você está com Obesidade Grave.\nProcure ajuda médica, urgente!`
    }
}

function main() {
    const peso = 84
    const altura = 1.70

    const valorImc = calcularImc(peso, altura)
    console.log(`Seu IMC é de ${valorImc.toFixed(2)}`)
    console.log(classificarImc(valorImc))
}

// invocando uma função
main()

// em javascript uma função é como se fossem valores, objetos que conseguimos manipular
// inclusive passar uma função como parâmetro de outra função 
// main = function () {
//     console.log(1)
// }
// main()
// **********************************

//função imediatamente invocada e não nomeada
// utilizada em códigos que serão utilizados somente 1 vez
// (function () {
//     const peso = 84
//     const altura = 1.70

//     const valorImc = calcularImc(peso, altura)
//     console.log(`Seu IMC é de ${valorImc.toFixed(2)}`)
//     console.log(classificarImc(valorImc))
// })()
