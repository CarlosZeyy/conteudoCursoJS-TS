//* Closure é a habilidade da função em acessar seu escopo léxico.

function returnFunction(nome) {
  return function () {
    return nome;
  };
}

const funcao = returnFunction('Carlos');
const funcao2 = returnFunction('Moises');

//* console.dir para vizualizar as funções anonimas no navegador, consegue visualizar os escopos que elas tem acesso, seus valores,etc...
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());