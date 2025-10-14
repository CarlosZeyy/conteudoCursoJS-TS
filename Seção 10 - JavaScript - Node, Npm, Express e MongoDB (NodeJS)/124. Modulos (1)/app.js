const { Person } = require('./mod1.js');
const mod1 = require('./mod1.js');

const p1 = new Person('Carlos');

const nomes = `${mod1.nome} ${mod1.sobrenome}`;

console.log(mod1);
console.log(p1);
console.log(nomes);