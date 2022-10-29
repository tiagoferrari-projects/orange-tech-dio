// sintaxe de um objeto literal
// coleção dinamica de chave e valor
const tiago = {
    nome: 'Tiago O Ferrari',
    idade: 28,
    //objeto recebe uma função na qual é chamada de método
    descrever: function () {
        // this - refere-se ao conceito onde a função está sendo executada
        // this assume o objeto
        console.log(`Meu nome é ${this.nome} e minha altura é ${this.idade}`)
    }
}

// pessoa['nome'] = 'teste' // dinamico
// pessoa.nome = 'teste' // acessa direto

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa)

// //incrementando objeto
// pessoa.altura = 1.71
// console.log(pessoa)

// decrementar/excluir atribuição do objeto
// delete pessoa.nome
// console.log(pessoa)

// pessoa.descrever()

// pessoa.nome = 'Ferrari'
// pessoa.idade = 1.70
// pessoa.descrever()

