//* Maneiras de visualizar chaves de um objeto

const pessoa = {
  nome: "Carlos",
  sobrenome: "Moises",
};

const chave = "sobrenome";
// console.log(pessoa.nome); //* Buscando o valor da chave com notação de .(ponto)
// console.log(pessoa['sobrenome']); //* Buscando o valor da chave com notação de [](colchetes)
// console.log(pessoa[chave]); //* Buscando o valor da chave com notação de [] passando o valor com uma var.

//
//* Objeto construtor e obj literal
const pessoa1 = new Object();
pessoa1.nome = "Carlos";
pessoa1.sobrenome = "Moises";

const pessoa2 = {
  nome: "Carlos",
  sobrenome: "Moises",
};

// console.log(pessoa1, pessoa2);

//
//*
const ps1 = new Object();
ps1.nome = "Carlos";
ps1.sobrenome = "Moises";
ps1.idade = 24;
ps1.falaNome = function () {
  return `${this.nome} esta falando o nome.`;
};
//* Se tentar usar arrow function vai retornar um erro - NaN. Por que a arrow function nao consegue encontrar o 'this'
ps1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
// console.log(ps1.falaNome());
// console.log(ps1.getDataNascimento());

for (key in ps1) {
  // console.log(key);
  // console.log(ps1[key]);
}

//* Factory Functions / Constructor functions / Classes

console.log('\nFactory Function');
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() { //* get esta aqui para não precisar chamar a função (transformo o metodo em uma propriedade), pode remover esse get que não vai mudar nada, só lembrar de executar o metodo depois.
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa('Carlos', 'Moises');
// console.log(p1.nomeCompleto);
// console.log(p1['nomeCompleto']);

console.log('\nConstructor Function');
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); //* Usando esse metodo consigo travar o this de um objeto, e não consigo alterar o valores do objeto, nesse metodo se necessario adicionar ou remover alguma depois desse obj ele não vai permitir.
}

const p2 = new Pessoa('Carlos', 'Moises');
const p3 = new Pessoa('João', 'Pedro');
// p3.nome = 'A' //* é possivel alterar o VALOR que está dentro da chave de uma constante, não o valor da constante em si.
// p3 = 'B' //* Isso aqui seria tentar trocar o valor da variavel, e ai sim daria um erro.
delete p3.nome;
// p3.fala = function() {
//     console.log('oi');
// }
// p3.fala();
console.log(p2);
console.log(p3);