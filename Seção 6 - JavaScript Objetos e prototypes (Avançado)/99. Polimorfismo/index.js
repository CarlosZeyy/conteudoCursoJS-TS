function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo)
    return console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
  this.saldo -= valor;
  this.verSaldo();
  return;
};
Conta.prototype.verSaldo = function () {
  console.log(`\nAgencia: ${this.agencia} | Conta ${this.conta}`);
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite)
    return console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
  this.saldo -= valor;
  this.verSaldo();
  return;
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const c1 = new Conta(14, 25, 0);
// c1.depositar(10);
// c1.sacar(10);
// c1.sacar(1);

// const cc1 = new ContaCorrente(11, 22, 0, 100);
// cc1.depositar(10);
// cc1.sacar(110);
// cc1.sacar(1);

// const cp1 = new ContaPoupanca(30, 42, 0);
// cp1.depositar(10);
// cp1.sacar(10);
// cp1.sacar(1);