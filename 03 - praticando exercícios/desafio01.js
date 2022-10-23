//Média de notas

const nota1 = 2
const nota2 = 10
const nota3 = 8


const media = (nota1 + nota2 + nota3) / 3

console.log(`Média Final ${media.toFixed(2)}`)

if(media < 5){
    console.log('Aluno REPROVADO!')
} else if(media >=5 && media <=7){
    console.log('Fará RECUPERAÇÃO!')
} else if(media > 7){
     console.log('Aluno APROVADO!')
}