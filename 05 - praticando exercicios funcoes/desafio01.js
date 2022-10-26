// funcao para escrever o nome
function escreverNome(nome) {
    // console.log(`Meu nome é ${nome}`)
    return `Meu nome é ${nome}`
}

// escreverNome('Tiago')
// escreverNome('Angela')

// funcao para informar o nome + informar se é ou não maior de idade
function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Tiago') + ` e sou maior de idade`)
    }
    else {
        console.log('Não é maior de idade')
    }
}

verificarMaiorIdade(28)
verificarMaiorIdade(16)
verificarMaiorIdade(18)