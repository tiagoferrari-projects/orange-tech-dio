// para fazer melhoria
/*const formaPagamento = (`Valor do Produto R$${valorProduto}\n
Informe o número da condição de pagamento:\n
[1] À vista Débito, recebe 10 % de desconto;
[2] À vista no Dinheiro ou PIX, recebe 15 % de desconto;
[3] Em duas vezes, preço normal de etiqueta sem juros;
[4] Acima de duas vezes, preço normal de etiqueta mais juros de 10 %;`)
*/

const valorProduto = 1000.0
const formaPagamento = 2

if(formaPagamento === 1){
    const totalPagar = valorProduto * 0.9
    console.log(`Pagamento no débito\nTotal a pagar R$${totalPagar.toFixed(2)}`)
} else if(formaPagamento === 2){
    const totalPagar = valorProduto * 0.85
    console.log(`Pagamento no PIX\nTotal a pagar R$${totalPagar.toFixed(2)}`)
} else if (formaPagamento === 3) {
    const totalPagar = valorProduto * 1
    console.log(`Parcelado em 2x\nTotal a pagar sem juros, R$${totalPagar.toFixed(2)}`)
} else if (formaPagamento === 4) {
    const totalPagar = valorProduto * 1.10
    console.log(`Parcelado acima de 2x\nTotal a pagar R$${totalPagar.toFixed(2)}`)
}
