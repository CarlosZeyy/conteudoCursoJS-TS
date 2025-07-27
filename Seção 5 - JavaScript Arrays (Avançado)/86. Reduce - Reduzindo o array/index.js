//* Some todos os numeros (reduce)
//* Retorne um array com os pares (filter)
//* Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acc, value, index, array) => {
  acc += value;
  return acc; //* sempre usar return no reduce.
}, 0); //* 0 valor de acumulador, pode ser qualquer outra coisa.
console.log(total);

const totalPares = numeros.reduce((acc, numbers) => {
  if (numbers % 2 === 0) acc.push(numbers);
  return acc;
}, []);
console.log(totalPares);

const dobroValores = numeros.reduce((acc, value) => {
  acc.push(value * 2);
  return acc;
}, []);
console.log(dobroValores);

console.log("\nExemplo 2");
//* pessoa mais velha

const pessoas = [
  { nome: "Carlos", idade: 64 },
  { nome: "Joao", idade: 55 },
  { nome: "Maria", idade: 24 },
  { nome: "Zina", idade: 18 },
  { nome: "Clara", idade: 40 },
  { nome: "Leandro", idade: 75 },
];

const oldMan = pessoas.reduce((acc, value) => {
    if (acc.idade > value.idade) return acc;
    return value;
});
console.log(oldMan);

//* Se quiser ver o que o reduce esta fazendo em cada iteração:
// const oldMan2 = pessoas.reduce((acc, value) => {
//     console.log(`Acumulador atual: ${acc.nome}, ${acc.idade} anos`);
//     console.log(`Valor atual: ${value.nome}, ${value.idade} anos`);
//     if (acc.idade > value.idade) {
//         console.log("-> Acumulador é mais velho, continua o mesmo.\n");
//         return acc;
//     } else {
//         console.log(`-> Valor é mais velho, o acumulador agora é ${value.nome}.\n`);
//         return value;
//     }
// });


// console.log(oldMan2);