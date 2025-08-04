const pessoas = [
  { id: 1, nome: "Carlos" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" },
];

// const novasPessoas = {};
// for (pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoas };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

// for (const pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// }

console.log(pessoas);
console.log();
console.log(novasPessoas);

novasPessoas.delete(2);
console.log(novasPessoas);