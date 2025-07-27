//* Retorne a soma do dobro de todos os pares
//* Filtrar pares
//* Dobrar valores
//* Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((acc, value) => acc + value, 0);

console.log(total);

//* ou

// const total = numeros
//   .filter((numero) => numero % 2 === 0)
//   .map((numero) => numero * 2)
//   .reduce((acc, value) => acc + value);

//* ou

// const total = numeros
//   .filter((numero) => numero % 2 === 0)
//   .map((numero) => numero * 2)
//   .reduce((acc, value) => {
//     acc += value;
//     return acc;
//   });
