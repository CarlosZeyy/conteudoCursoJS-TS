class ControleRemoto {
    constructor(nome) {
        this.nome = nome;
        this.volume = 0;
    }

    //* metodo de instancia
    aumentaVolume() {
        this.volume += 2;
    }

    diminuiVolume() {
        this.volume -= 2;
    }

    // metodo estático
    static soma(x, y) {
        return x, y;
    }
}

const c1 = new ControleRemoto('Samsung');
c1.aumentaVolume();
c1.aumentaVolume();
c1.aumentaVolume();
c1.aumentaVolume();
c1.aumentaVolume();
c1.diminuiVolume();

console.log(c1);

console.log();

console.log(`Executando metodo estatico`);
console.log(ControleRemoto.soma(5, 12));