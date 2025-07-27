const nomes = ["Carlos", "Moises", "Ferreira"];
const nomes2 = ["Carlos", "Pedro", "Maria", "João"];

//! Para visualizar os exemplos no node tire os comentarios "//".

// const nomesConstructor = new Array('Carlos', 'Moises', 'Ferreira');

// console.log("Exemplo 1: Array Padrão =>", nomes);
// console.log("\nExemplo 2: Constructor Array =>", nomesConstructor);

// nomes[2] = 'Mariano';
// console.log("\nExemplo 3: Mudando o valor do index 2 =>", nomes);

// delete nomes[2];
// console.log("\nExemplo 4: Apagando o valor do index 2 e deixando o index vazio =>", nomes);

// console.log("\nValor por referencia");

// const novo = nomes; //* toda modificação que for feita em nv será alterada em nomes também!
// const novo2 = [...nomes]; //* Fazendo um spread em nomes e atribuindo a uma variavel ele vai se tornar um copia e não irá mudar o valor no array original.
// novo[2] = 'Alterando o valor no array original';
// novo2[2] = 'Copia do array sem mudar o original';

// console.log("Novo: ",novo);
// console.log("\nNovo2: ",novo2);
// console.log("\nNomes: ",nomes);

// console.log("\nValor por referencia com metodos: ");
// novo[2] = 'Ferreira';
// novo2.pop() //* remove o ultimo item do array.
// console.log("pop: ",novo2);
// novo2.shift() //* remove o primeiro item do array.
// console.log("shift: ",novo2);
// console.log("Nomes: ", nomes);

//* Length eh um atributo e não um metodo (atribute != method);
// console.log(nomes2.length); //* Vai contar quantos elementos tem no array.

// nomes2.push('Zina'); //* Adiciona um elemento no final do array (ultimo index);
// nomes2.unshift('Clara'); //* Adiciona um elemento no inicio do array (primeiro index);
// novo3 = nomes2.slice(1, 3); //* Escolho de onde quero começar a recortar o meu index até onde ele vai, porém ele não conta o ultimo elemento selecionado no slice, ex: slice(1, 3) > vai pegar o index 1 e o index 2 mas o index 3 não vai ser incluido.
// console.log(novo3);
// novo4 = nomes2.slice(0, -1); //* Posso usar valores negativos para percorrer o array com slice. ex: -1 vai pegar o ultimo elemento no array.
// console.log(novo4);

const nome = 'Carlos Moises Ferreira';
const nomeStringToArray = nome.split(' '); //* Transformando uma string em um array.
console.log("String para Array =>", nomeStringToArray);

const nomeArray = [ 'Carlos', 'Moises', 'Ferreira' ]; 
const nomeArrayToString = nomeArray.join(' '); //* Transformando um array em uma string.
console.log("\nArray para String =>", nomeArrayToString);