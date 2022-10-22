
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const gastoViagem = precoCombustivel * litrosConsumidos;

console.log('Gasto Viagem R$' + gastoViagem.toFixed(2));
