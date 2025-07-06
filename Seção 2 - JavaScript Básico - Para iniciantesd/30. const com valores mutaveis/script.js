const valor = [1, 2, 3];
console.log(valor);

valor.push(4);
valor[0] = "Carlos";

console.log(valor);

//* é possivel mudar o valor que está dentro de uma constante porém não é possivel redefinir o valor da constante ex:

//! Codigo quando for executado vai dar erro pois o valor da const nao pode ser redefinida
// valor = 'Carlos';
// console(valor);