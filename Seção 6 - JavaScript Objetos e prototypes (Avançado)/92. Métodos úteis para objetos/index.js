/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')

//? Ja visto
... (spread)
Object.keys
Object.freeze
Object.defineProperties
Object.defineProperty
*/

const produto = { nome: "Produto", preco: 1.8 };
// const outraCoisa = produto; //* o objeto esta ligado ao valor atribuido da variavel produto e para conseguir alterar ele, sem mudar as duas variaveis tem alguns metodos que podem ser usados.
// outraCoisa.nome = "Garrafa";
// console.log(outraCoisa);

const caneca = { ...produto, material: "Porcelana" }; //* usando o spread > Tambem eh possivel criar chaves, metodos, propriedades, etc... dentro do spread
caneca.nome = "Caneca";
caneca.preco = 5.5;
console.log("Alterando o valor com spread:");
console.log(produto);
console.log(caneca);

console.log("\nAlterando o valor com Object.assign:"); //* (muito mais verboso do que o spread.)
const garrafa = Object.assign({}, produto, {
  preco: 2.66,
  nome: "Garrafa",
  material: "plastico",
});
console.log(garrafa);

//
console.log("\nAlterando o valor com Object literal:"); //* (muito mais verboso do que o spread.)
const mesa = { nome: produto.nome, preco: produto.preco };
mesa.nome = "Mesa";
mesa.preco = 120.3;
console.log(mesa);

//
console.log("\nKeys:"); //* mostra as chaves do objetos.
console.log(Object.keys(produto));

//
console.log("\nObject.values: "); //* pega o valor da chave do objeto
console.log(Object.values(produto));

//
console.log("\nObject.entries: "); //* cria um array de cada chave e valor do objeto.
console.log(Object.entries(produto));

console.log("\nDesestruturando o Object.entries: ");
for (let entry of Object.entries(produto)) {
    console.log(entry);
}

//
console.log("\nFreeze:"); //* congela o objeto, travando qualquer alteração.
Object.freeze(produto);
produto.nome = "Cadeira";
console.log(produto);

//
console.log("\ngetOwnPropertyDescriptor, Define Properties & Property:"); //* getOwnPropertyDescriptor > entrega a descrição do property do objeto.

const produto2 = { nome: "Produto", preco: 2.5 };
Object.defineProperty(produto2, "nome", {
  writable: false,
  configurable: false,
  value: "Qualquer coisa",
});
console.log(Object.getOwnPropertyDescriptor(produto2, "nome"));
console.log(produto2);
