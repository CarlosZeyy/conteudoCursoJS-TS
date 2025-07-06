/*
? Operadores Lógicos

* && -> AND / E //? Todas as expressões precisam ser verdadeiras para retornar true;

* || -> OR / OU //? Se apenas 1 expressão for verdadeira ja vai retornar true;

* ! -> NOT / NÃO //? Inverte o valor do booleano ex: console.log(!true) = false / tambem é possivel usar mais de uma negação no elemento ex: console.log(!!true) = true, console.log(!!!true) = false...

*/

const tenhoDinheiro = false;

const queroSair = true;

if (tenhoDinheiro && queroSair) {
    console.log(true, `\nVai dar para sair`);
} else {
    console.log(false, `\nnao vai dar pra sair`);
}

if (tenhoDinheiro || queroSair) {
    console.log(true, `\nVai dar para sair`);
} else {
    console.log(false, `\nnao vai dar pra sair`);
}

if (!queroSair) {
    console.log(true, `\nVai dar para sair`);
} else {
    console.log(false, `\nnao vai dar pra sair`);
}