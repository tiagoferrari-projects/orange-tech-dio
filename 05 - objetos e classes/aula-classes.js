// definir como são, para que sejam instanciadas
// Pessoa é uma classe que descreve como uma pessoa deve ser
// classe: uma definição do que deveria ser 
// instancia: uma ocorrencia
class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    // constructor: é o que acontece quando uma pessoa é instanciada
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}
// const tiago = new Pessoa('Tiago', 28)
// console.log(tiago)
// tiago.nome = 'Tiago Ferrari'
// tiago.idade = 28

// const angela = new Pessoa('Angela', 27)
// angela.nome = 'Angela Aparecida de Almeida'
// angela.idade = 26

// console.log(tiago)
// console.log(angela)

// tiago.descrever()
// angela.descrever()

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade.`)
    }
}

const tiago = new Pessoa('Tiago', 28)
const ferrari = new Pessoa('Ferrari', 30)
const paulo = new Pessoa('Paulo', 28)

compararPessoas(tiago, ferrari)
compararPessoas(tiago, paulo)