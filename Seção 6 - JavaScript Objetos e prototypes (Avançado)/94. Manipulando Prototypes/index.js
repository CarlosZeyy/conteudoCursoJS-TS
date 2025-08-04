function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percent) {
  this.preco = (this.preco - this.preco * (percent / 100)).toFixed(2);
};

Produto.prototype.aumento = function (percent) {
  this.preco = (this.preco + this.preco * (percent / 100)).toFixed(2);
};

const p1 = new Produto("Camiseta", 55);

//* Literal
const p2 = {
  nome: "Meia",
  preco: 12.25,
};

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Luvas",
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 18.59,
  },
});

console.log(p1);
p1.aumento(10);
console.log(p1);
p1.desconto(25);
console.log(p1);

console.log("\n");

console.log(p2);
p2.aumento(10);
console.log(p2);
p2.desconto(25);
console.log(p2);

console.log("\n");

console.log(p3);
p3.aumento(10);
console.log(p3);
p3.desconto(25);
console.log(p3);
