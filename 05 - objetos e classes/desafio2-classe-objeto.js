/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / altura * altura) 
 * Instancie uma pessoa chamada Jose que tenha 70kg de peso, 1.75 de altura e peça ao Jose
 * para dizer o valor do seu IMC.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return (this.peso / (Math.pow(this.altura, 2))).toFixed(2)
    }

    classificarImc() {
        const imc = this.calcularIMC()
        if (imc < 18.5) {
            return `Você está Abaixo do Peso. \nProcure ajuda médica!`
        } else if (imc < 25) {
            return `Você está com o Peso Normal!`
        } else if (imc < 30) {
            return `Você está Acima do Peso.\nProcure ajuda médica!`
        } else if (imc < 40) {
            return `Você está Obeso.\nProcure ajuda médica!`
        } else if (imc > 40) {
            return `Você está com Obesidade Grave.\nProcure ajuda médica, urgente!`
        }
    }
}

const jose = new Pessoa('José', 110, 1.75)
console.log(jose.calcularIMC())
console.log(jose.classificarImc())

const tiago = new Pessoa('Tiago', 84, 1.75)
console.log(tiago.calcularIMC())
console.log(tiago.classificarImc())

const pedro = new Pessoa('Pedro', 45, 1.68)
console.log(pedro.calcularIMC())
console.log(pedro.classificarImc())