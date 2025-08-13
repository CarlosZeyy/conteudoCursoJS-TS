class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} ja está ligado.`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} ja esta desligado`);
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, modelo, cor) {
    super(nome);
    this.modelo = modelo;
    this.cor = cor;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log(`Alterando o metodo ligar.`);
  }

  falaOi() {
    console.log(`Oi`);
  }
}

const s1 = new Smartphone('Xioami', 'Poco X6', 'Preto');
s1.ligar();
console.log(s1);

const t1 = new Tablet('Samsung', true);
t1.ligar();
console.log(t1);