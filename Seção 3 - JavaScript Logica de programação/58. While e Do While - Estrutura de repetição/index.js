function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

console.log("While:");
//* WHILE: enquanto "rand" for diferente de 10(ou seja enquanto a condição for verdadeira) ele vai ficar executando o codigo no bloco de instrução ate que a contidição seja falsa.
while (rand !== 10) { 
    rand = random(min, max);
    console.log(rand);
}

console.log("\nDo While: ");
//* DO WHILE: primeiro ele vai executar a instrução do bloco de instruções e só depois vai ver se a condição é verdeira ou falsa.

do {
    rand = random(min, max)
    console.log(rand);
} while (rand !== 10);

console.log("\nDO WHILE fazendo a iteração mesmo a condição ja foi atendida");
//* DO WHILE: mesmo quando a condição ja é falsa ele ainda faz 1 execução do codigo e depois sai do bloco DO WHILE.
rand = 10;
do {
    console.log(rand);
} while (rand !== 10);