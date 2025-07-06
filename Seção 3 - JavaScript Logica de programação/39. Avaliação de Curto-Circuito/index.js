/*
//* && -> false && true -> false "o valor mesmo"
//* || -> true || false -> retorna "o valor verdadeiro mesmo"

//* Falsy
//* false
//* 0
//* '' "" ``
//* null / undefined
//* NaN
*/

//? Exemplo &&
//? function falaOi() {
//?     return 'Oi';
//? }
//? 
//? let vaiExecutar = `Ola` /* null, undefined, NaN, 0, ' ', " ", ` ` retorna ele mesmo | se colocar um valor valido a funtion eh executada.*/
//? 
//? console.log(vaiExecutar && falaOi());

//? Exemplo OR
//? const corUser = 'red';
//? const corDefault = corUser || 'black';
//? console.log(corDefault);

const a = 0;
const b = null;
const c = false;
const d = 'false'; 
const e = NaN; 

console.log(a || b || c || d || e); //* 'd' nao eh uma string vazia entao ela eh um valor true, se fosse false igual 'c' o valor impresso teria sido o 'e' ja o JS so imprime o ultimo valor