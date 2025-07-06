//* For  in -> lê os indices ou chaves do objeto

const pessoa = {
  nome: "Carlos",
  sobrenome: "Ferreira",
  idade: 24,
};

console.log("Exemplo 1 - de como pegar uma chave:");
console.log(pessoa.nome);
console.log(pessoa["nome"]);

console.log('\nExemplo 2 - usando "For in"');
for (chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

console.log("\nExemplo 3 - usando For in em um array");
const frutas = ["Banana", "Maçã", "Uva", "Pêra", "Caqui"];

for (fruta in frutas) {
  console.log(fruta, frutas[fruta]);
}

console.log("\nDiferentes maneiras de ver o elemento");
for (fruta in frutas) {
  console.log(frutas[fruta]);
}

console.log("\nDiferentes maneiras de ver o elemento - 2");
for (fruta in frutas) {
  console.log(frutas);
}

console.log("\nDiferentes maneiras de ver o elemento - 3");
for (fruta in frutas) {
  console.log(fruta);
}
