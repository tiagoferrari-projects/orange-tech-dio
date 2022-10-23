// Calculo do IMC

const peso = 84
const altura = 1.70

const calculoImc = peso / (Math.pow(altura, 2))
console.log(`Seu IMC é de ${calculoImc.toFixed(2)}`)

if(calculoImc < 18.5){
    console.log(`Você está Abaixo do Peso. \nProcure ajuda médica!`)
} else if(calculoImc >= 18.5 && calculoImc < 25){
    console.log(`Você está com o Peso Normal!`)
} else if(calculoImc < 30){
    console.log(`Você está Acima do Peso.\nProcure ajuda médica!`)
} else if(calculoImc < 40){
    console.log(`Você está Obeso.\nProcure ajuda médica!`)
} else if(calculoImc > 40){
    console.log(`Você está com Obesidade Grave.\nProcure ajuda médica, urgente!`)
}
