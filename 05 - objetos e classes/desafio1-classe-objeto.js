/*  1 - Crie uma classe para representar carros.
    - Os carros possuem uma marca, uma cor e um gasto médido de combustível por km rodado.
    - Crie um método que dado a quantidade de km e o preço do combustível, nos dê o valor
    gasto em R$ para realizar este percurso. 
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoViagem(distancia, precoCombustivel) {
        return distancia * precoCombustivel * this.gastoMedioPorKm
    }

}

const fordKa = new Carro('Ford', 'Preto', 1 / 12)
console.log(`Você gastou R$${fordKa.calcularGastoViagem(30, 3.28).toFixed(2)}`)

const palio = new Carro('Fiat', 'Preto', 1 / 10)
console.log(`Você gastou R$${palio.calcularGastoViagem(30, 3.28).toFixed(2)}`)