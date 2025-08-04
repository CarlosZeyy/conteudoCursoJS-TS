//* DefineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configuravel
    get: function () {
      return estoquePrivado;
    },
    set: function (value) {
      if (typeof value != "number") {
        throw new TypeError("Valor invalido");
      }

      estoquePrivado = value;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(value) {
      value = value.replace("coisa", "");
      nome = value;
    },
  };
}

const p1 = new Produto("Camiseta", 30, 10);
// console.log(p1);
// p1.estoque = 'Oi';
p1.estoque = 5000;
console.log(p1.estoque);

const p2 = new criaProduto("Camisa");
console.log(p2);
p2.nome = "qualquer coisa";
console.log(p2.nome);
