/* 
Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis, sendo elas: 

 - preço do combustível;
 - gasto médio de combustível do carro por km;
 - distância em km da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const gastoViagem = precoCombustivel * litrosConsumidos;

console.log('Gasto Viagem R$' + gastoViagem.toFixed(2));
