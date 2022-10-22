
const precoGasolina = 4.79;
const precoEtanol = 3.49
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'gasolina';
//const tipoCombustivel = 'etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'etanol'){
    const gastoViagem = precoEtanol * litrosConsumidos;
    console.log('Gasto Viagem R$' + gastoViagem.toFixed(2));
} else if (tipoCombustivel === 'gasolina'){
    const gastoViagem = precoGasolina * litrosConsumidos;
    console.log('Gasto Viagem R$' + gastoViagem.toFixed(2));
}
