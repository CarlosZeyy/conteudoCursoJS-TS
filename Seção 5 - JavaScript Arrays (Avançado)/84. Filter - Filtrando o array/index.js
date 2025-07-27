//* filter(valor, index, array) -> valor retorna os valores, index retorna cada indice do array, e array retorna o array todo

//* Retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroMaior10 = numeros.filter((numero) => {
  return numero > 10;
});

console.log(numeroMaior10);

console.log("\nExemplo 2");
//* Retorne as pessoas que tem o nome com 5 letras ou mais
//* Retorne as pessoas com mais de 50 anos
//* Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: "Carlos", idade: 64 },
  { nome: "Joao", idade: 55 },
  { nome: "Maria", idade: 24 },
  { nome: "Zina", idade: 18 },
  { nome: "Clara", idade: 40 },
  { nome: "Leandro", idade: 75 },
];

console.log("Pessoas com 5 ou mais letras no nome: ");
const pessoaCincoLetras = pessoas.filter((nomes) => nomes.nome.length >= 5);
console.log(pessoaCincoLetras);

console.log("\nPessoas com 50 ou mais anos:");
const pessoaCinqtAnos = pessoas.filter((idades) => idades.idade > 50);
console.log(pessoaCinqtAnos);

console.log("\nPessoas que terminam com A:");
const pessoaTerminaA = pessoas.filter((nomeA) =>
    nomeA.nome.toLowerCase().endsWith("a")
//   nomeA.nome.endsWith("a" || "A")
);
console.log(pessoaTerminaA);
