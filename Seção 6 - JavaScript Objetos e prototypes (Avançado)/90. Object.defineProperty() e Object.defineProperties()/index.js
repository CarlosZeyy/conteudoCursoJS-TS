//* DefineProperty -> DefineProperties

function Produto(nome, preco, estoque) {
  //   this.nome = nome;
  //   this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque || 0, // valor
    writable: false, // pode alterar
    configurable: false, // configuravel
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome || 'Sem nome',
      writable: true,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: preco || 0,
      writable: true,
      configurable: false,
    },
  });
}

const p1 = new Produto("Camiseta", 30, 10);
p1.estoque = 4000;
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));

for (let key in p1) {
  console.log(key);
}
