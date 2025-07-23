function funcao() {
  console.log("oie");
  console.log(arguments); //* Mostra todos os argumentos passado na função em forma de objeto, um detalhe é que esse "arguments" só funciona quando uma função é definida com a palavra function.
}
funcao("valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //* no JavaScript se voce nao declarar um parametro e depois tentar passar algum valor/argumento na chamada da função ele vai "ignorar" o que foi passado.
//
//

console.log("\nFunção 2");
function funcao2(a, b, c) {
  //* Podemos enviar ou não enviar parametros na função que ela vai funcionar normalmente.
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
  console.log(a, b, c);
}
funcao2(1, 2, 3, 4, 5, 6, 7);
//
//

console.log("\nFunção 3");
function funcao3(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f); //* Se eu tentar imprimir todos os parametros sem ter passado algum valor para eles, o valor retornado desses parametros sem valores sera "undefined", pois, o parametro nao possui valor, e isso eu posso definir dentro do escopo/bloco ou definir direto no parametro
}
funcao3(1, 2, 3);
//
//

console.log("\nFunção 4");
function funcao4(a, b = 2, c = 4) {
  console.log(a + b + c); //* Ex: chamando a função como funcao4(2) seria a mesma coisa que fazer 2 + undefined = NaN, para resolver esse problema deve ser definido algum valor para o parametro Ex: b = b || 0; (maneira mais antiga de fazer) ou definir direto no parametro ex: funcao4(a, b = 0)... e quando for passado algum valor quando a function for chamada ele ira substituir esse valor definido('0').
}
funcao4(2, 10, 20);
funcao4(2, "", 20); //* Nao adianta colocar uma string vazia pois ele vai concatenar os valores, e se deixar um espaço em branco ele simplesmente vai dar erro.
funcao4(2, null, 20); //* JS vai entender o null como se fosse um zero.
funcao4(2, undefined, 20);
//
//

console.log("\nFunção 5");
function funcao5({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao5({ nome: "Carlos Moises", sobrenome: "Ferreira", idade: 24 });
let obj = { nome: "Carlos Moises", sobrenome: "Ferreira", idade: 24 };
funcao5(obj);
//
//

console.log("\nFunção 6");
function funcao6([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao6(["Carlos Moises", "Ferreira", 24]);
let arr = ["Carlos Moises", "Ferreira", 24];
funcao6(arr);
//
//

console.log("\nFunção 7");
function conta(operador, acumulador, ...numeros) {
  //* no rest operator (resto da operação) sempre deve ser o ultimo parametro, pois ele vai pegar o resto do valores depois do acumulador nesse caso e vai transformar em um array
  // console.log(operador, acumulador, numeros);

  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
console.log('Soma:');
conta("+", 0, 20, 30, 40, 50);

console.log('Subtração:');
conta("-", 0, 20, 30, 40, 50);

console.log('Divisão:');
conta("/", 1, 20, 30, 40, 50);

console.log('Multiplicação:');
conta("*", 1, 20, 30, 40, 50);
//
//
//? Exemplo 2
console.log('\nExemplo 2 da mesma function so que agora dentro de uma variavel');
const conta2 = function (operador, acumulador, ...numeros) {
  console.log(arguments)  //* ainda vou conseguir ver os arguments pois estou usando a palavra function para definir essa função.
};
conta2("+", 0, 20, 30, 40, 50);
//
//
//? Exemplo 3
console.log('\nExemplo 3 da mesma function so que agora dentro de uma arrow function');
const conta3 = (operador, acumulador, ...numeros) => {
//  console.log(arguments)  //* vai retornar uma lista de arguments que não tem nada relacionado com o que foi definido na função, apenas dados relacionados ao Node.js.
};
// conta3("+", 0, 20, 30, 40, 50);
//
//

console.log("\nFunção 8");
//* Uma maneira de 'simular' o uso de um arguments em uma arrow function é definindo como um rest operator.
function funcao8(...args) {
  console.log(args);
}
funcao8("+", 0, 20, 30, 40, 50);