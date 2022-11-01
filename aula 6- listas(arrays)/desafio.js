// 1) Crie um programa que dado um número imprima sua tabuada.

const tabuada = 1

for (let i = 0; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprime
// cada número par encontrado.

const numeros = [23, 20, 5, 2, 12, 28, 27, 9, 3, 5, 2]

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if (numero % 2 === 0) {
        console.log(numero)
    }
}
