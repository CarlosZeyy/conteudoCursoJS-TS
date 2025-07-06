//? "..." serve tanto para spread quanto para rest ex:

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [first, second, ...rest] = numbers; //* <= estou desestruturando o array numbers e pegando os valores que quero, como o primeiro e o segundo e o "...rest" está pegando o restante dos valores do array (300, 400, 500...)

console.log("Exemplo 1:");
console.log(first, second);
console.log(rest);
//
//* Outro exemplo:

const numbers2 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [first2, second2, third, ...rest2] = numbers2; //* <= pegando mais um valor (third) e ele vai pegar o first, second e agora o third e depois o console.log vai imprimir o restante dos valores (400, 500...)

console.log("\nExemplo 2:");
console.log(first2, second2, third);
console.log(rest2);
//
//* Selecionado valores pulando indices do array

const numbers3 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [one, , three, , five, , seven, ...rest3] = numbers3; //* <= escolhendo o indice do valor que quero selecionar enquanto pulo o indice do valor que nao quero mantendo um espaço em branco no array usando a virgula.

console.log("\nExemplo 3:");
console.log(one, three, five, seven);
console.log(rest3);

//
//* Array dentro de array
//*                        0          1         2         < Indices de Arrays
//*                     0  1  2    0  1  2   0  1  2      < Indices dos Arrays
const numbersArray = [ [1, 2, 3], [4, 5, 6],[7, 8, 9]];
console.log("\nExemplo 4:");
console.log(numbersArray[1][2]); //* < mostra o numero 6

// 
//* Outro exemplo usando desestruturação para pegar o valor desejado - atribuição via desestruturação
const numbersArray1 = [ [1, 2, 3], [4, 5, 6],[7, 8, 9]];
const [[], [, ,six], []] = numbersArray1; //* desestruturando o array e deixando em branco os espaços que não quero pegar o valor.
console.log("\nExemplo 5:");
console.log(six); //* < mostra o numero 6

// 
//* ultimo exemplo para atribuição via desestruturação
const numbersArray2 = [ [1, 2, 3], [4, 5, 6],[7, 8, 9]];
const [list1, list2, list3] = numbersArray2; //* desestruturando o array e deixando em branco os espaços que não quero pegar o valor.
console.log("\nExemplo 6:");
console.log(list3[2]); //* < mostra o numero 9
