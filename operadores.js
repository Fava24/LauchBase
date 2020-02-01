/* ===========================
OPERADORES DE COMPARAÇÃO

> Maior
< Menor
>= Maior igual a
<= Menor igual a
== Igual a
=== Igual e do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo

============================*/


// DESAFIO 1
const idade = 17
// verificar se a pessoa é maior igual de 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if(idade >=18) {
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}

// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if (idade === 17) {
    console.log('Volte quando tiver 18')
}



    /* ==============================
    OPERADORES DE LÓGICOS

    && "E" As duas condições devem ser verdadeiras 
        para que a condição fnal seja verdadeira.
    || "OU" uma das condições deve ser verdadeira
        para que a condição final seja verdadeira.
    ! "NÃO" Nega uma condição
    ===============================*/

    
console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false


// dar bonificação de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos