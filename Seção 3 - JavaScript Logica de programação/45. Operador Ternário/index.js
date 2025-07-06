// * Estrutura do operador ternario
// *                valor p/True         valor p/ False
// * (condicao) ? se for true faça x : se for false faça y

const pontuacaoUser = 999;
const levelUser = pontuacaoUser >= 1000 ? "User VIP" : "Normal User";
console.log(levelUser);


// ? Setando um valor padrao para a variavel (fallback) - variavel sempre vai ter um valor, ex: corUser = 'pink' em corDefault = corUser || 'black' vai imprimir pink pois é uma cor valida, se fosse null/undefined/0 qualquer elemento falso/falsy... ele vai imprimir o black.
const corUser = null;
const corDefault = corUser || "black";
console.log(corDefault);
