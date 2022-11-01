// // chaves são blocos de código ou objeto literal{}



// // colchetes são listas

// const alunos = ['Tiago', 'João', 'Maria']

// // a lista pode iniciar vazia, ter diferentes tipos de dados
// // const alunos2 = []
// // console.log(alunos2)
// // const alunos3 = ['Texto']
// // alunos3.push(10)
// // console.log(alunos3)

// console.log(alunos)

// // adiciona dinamicamente
// alunos.push('Ana')
// console.log(alunos)

// // remove ultimo elemento
// alunos.pop()
// console.log(alunos)

// // remove primeiro elemento
// alunos.shift()
// console.log(alunos)

// // adiciona diretamente na posição
// // alunos[4] = 'Ana'

// // substitui Maria por Ana
// // alunos[3] = 'Ana'

// // imprimi somente 'Tiago'
// // console.log(alunos[0])

// const notas = []

// notas.push(5)
// notas.push(7)
// notas.push(8)
// notas.push(2)
// notas.push(5)

// // mostra o tamanho da lista
// // console.log(notas.length)

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
// console.log(soma / 5);


// exemplo pratico
const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
notas.push(8)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length

console.log(media.toFixed(2))

// realizado depuração do código