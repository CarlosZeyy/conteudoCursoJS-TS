//? For comum/classico -> Geralmente com iteráveis (array ou strings)
//? For in -> Retorna o index(indíce) ou key(chave) (arrays, strings, objetos)
//? For of -> Retorna o valor em si (iteráveis, arrays ou strings)

const pessoa = {
  nome: "Carlos",
  sobrenome: "Ferreira",
};

const nomes = ["Carlos", "Moises", "Mariano", "Lopes", "Ferreira"];

console.log("\n\x1b[31m" + "For Classico/Comum: \x1b[0m");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("\n\x1b[31m" + "For Classico/Comum: Objetos \x1b[0m"); //* Não executa pois não é um iterável - tentar rodar o for classico em objetos não retorna nada.
for (let i = 0; i < pessoa; i++) {
  console.log(i, pessoa[i]);
}

console.log("\n\x1b[34m" + "For in: \x1b[0m");
for (nome in nomes) {
  console.log(nomes[nome]);
}

console.log("\n\x1b[34m" + "For in em Objetos: \x1b[0m");
for (chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

console.log("\n\x1b[33m" + "For of: \x1b[0m");
for (nome of nomes) {
  console.log(nome);
}

console.log("\n\x1b[34m" + "For of em Objetos:  \x1b[0m"); //! For of não executa pois não é um iterável - tentar rodar o for of em objetos resulta em ERROR.
// for (chave of pessoa) {
//   console.log(chave, pessoa[chave]);
// }

console.log("\n\x1b[32m" + "ForEach \x1b[0m");
nomes.forEach((value, index, array) => {
  console.log(value, index, array);
});
