const nomes = ["Carlos", "Moises", "Mariano", "Lopes", "Ferreira"];

//* Simulando funções pop, push, shift, unshift com splice
//* splice(CurrentIndex, delete, element1, element2, element3);
console.log(nomes);

const test = nomes.splice(2, 2);
console.log(nomes, test);

// //* pop - remove o ultimo elemento
// const removendoPop = [...nomes].splice(-1, 1);
// console.log("\nSimulando o pop:");
// console.log(removendoPop);

// //* shift - remove o primeiro elemento
// console.log("\nSimulando o shift:");
// const removendoShift = [...nomes].splice(0, 1);
// console.log(removendoShift);

// //* push - adicionando o elemento no ultimo index do array
// console.log("\nSimulando o push:");
// const adicionandoPush = nomes.splice(nomes.length, 0, 'João', 'Maria', 'Zina');
// console.log(nomes);

// //* unshift - adicionando o elemento no primeiro index do array
// console.log("\nSimulando o Unshift:");
// const adicionandoUnshift = nomes.splice(0, 0, 'Leandro', 'Calvo');
// console.log(nomes);

