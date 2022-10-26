// para fazer melhoria
/*const formaPagamento = (`Valor do Produto R$${valorProduto}\n
Informe o número da condição de pagamento:\n
[1] À vista Débito, recebe 10 % de desconto;
[2] À vista no Dinheiro ou PIX, recebe 15 % de desconto;
[3] Em duas vezes, preço normal de etiqueta sem juros;
[4] Acima de duas vezes, preço normal de etiqueta mais juros de 10 %;`)
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100)).toFixed(2)
}

function aplicarJuros(valor, desconto) {
    return (valor + (valor * desconto / 100)).toFixed(2)
}


const valorProduto = 1000.0
// const formaPagamento = 1
// const formaPagamento = 2
const formaPagamento = 3
// const formaPagamento = 4

if (formaPagamento === 1) {
    console.log(aplicarDesconto(valorProduto, 10))
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(valorProduto, 15))
} else if (formaPagamento === 3) {
    // console.log(aplicarDesconto(valorProduto, 0))
    console.log(valorProduto)
} else if (formaPagamento === 4) {
    console.log(aplicarJuros(valorProduto, 10))
}
