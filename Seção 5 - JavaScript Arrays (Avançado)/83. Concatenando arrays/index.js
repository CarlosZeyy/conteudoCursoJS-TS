const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = a1.concat(a2, [7,8,9], 'Carlos');

const a4 = [...a1, ...a2, ...[7,8,9], 'Carlos']; 

//* No spread se for passar um array tipo o [7,8,9] tem que usar o ... se nao o JS vai entender como um array literal e vai criar um outro array dentro do array
const a4_1 = [...a1, ...a2, [7,8,9], 'Carlos'];

console.log(a3);
console.log(a4);
console.log(a4_1);