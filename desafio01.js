const nome = 'Patricia'
const peso = 50
const altura = 1.72

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}