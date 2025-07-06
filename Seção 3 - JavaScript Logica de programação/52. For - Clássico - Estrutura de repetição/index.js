const frutas = [
  "Maçã",
  "Banana",
  "Pêra",
  "Laranja",
  "Uva",
  "Caqui",
  "Melancia",
];

// for (let i = 0; i <= frutas.length; i++) //* <-- se deixar "<= frutas.length" o js vai contar um outro elemento undefined no final do array.

for (let i = 0; i < frutas.length; i++) {
  console.log(`Index ${i}`, frutas[i]);
}
