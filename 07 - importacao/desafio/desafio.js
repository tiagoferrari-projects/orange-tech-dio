/**
 * Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
 * Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
 * 
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * Saída:
 * 98
 * 
 */

const { gets, print } = require('./funcoes-desafio')

// Forma mais breve, focado na lógica de encontrar número maior.
// let maiorValorEncontrado = 0
// for (let i = 0; i < 5; i++) {
//     const numeroSorteado = gets();
//     if (numeroSorteado > maiorValorEncontrado) {
//         maiorValorEncontrado = numeroSorteado
//     }
// }

// print(maiorValor)

const numerosSorteados = []

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets()
    numerosSorteados.push(numerosSorteado)
}

// print(numerosSorteados)

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i]
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado
    }

}

print(maiorValor)
