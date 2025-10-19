const Person = require("./Z/mod2.js");
const path = require("path");

const p1 = new Person("Carlos");
p1.saudacao();

console.log('\nDirname: ')
console.log(__dirname); //* Mostra o diretorio até a pasta
console.log('\nFilname: ')
console.log(__filename); //* Mostra o diretorio até o arquivo

console.log(`\nPaths:`)
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'qualquerCoisa'));
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'qualquerCoisa'));
