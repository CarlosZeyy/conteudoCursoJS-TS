//* Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);


console.log("\nExemplo 2");
//* Para cada elemento
//* Retorne apenas uma string com o nome da pessoa
//* Remova apenas a chave "nome" do objeto
//* Adicione a chave id em cada objeto

const pessoas = [
  { nome: "Carlos", idade: 64 },
  { nome: "Joao", idade: 55 },
  { nome: "Maria", idade: 24 },
  { nome: "Zina", idade: 18 },
  { nome: "Clara", idade: 40 },
  { nome: "Leandro", idade: 75 },
];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);

const idades = pessoas.map((obj) => ({idade: obj.idade}));
console.log(idades);

const id = pessoas.map((obj, index) => {
  const newObj = {...obj}; //* necessario fazer um spread aqui, pois iria mudar o array original.
  newObj.id = index + 1;
  return newObj;
});
console.log(id);