import ValidadorCpf from "./ValidadorCPF";

export default class GeradorCPF {  
    rand(min = 100000000, max = 999999999) {
        const digitos = String(Math.floor(Math.random() * (max - min) + min));

        const sequency = Array.from(digitos).map(numero => {
            return digitos[0] === numero;
        })

        if (sequency.length === digitos.length) return this.rand();

        return digitos;
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geradorCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidadorCpf.criaDigito(cpfSemDigito);
        const digito2 = ValidadorCpf.criaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCpf);
    }

    //* Se o metodo criaDigito do ValidadorCPF não for static a função ficaria assim.
    // geradorCpf() {
    //     const cpfSemDigito = this.rand();
    //     const validador = new ValidadorCpf('');
    //     const digito1 = validador.criaDigito(cpfSemDigito);
    //     const digito2 = validador.criaDigito(cpfSemDigito + digito1); 
    //     const novoCpf = cpfSemDigito + digito1 + digito2;
    //     return this.formatado(novoCpf);
    // }
}