class Cpf {
  constructor(cpfEnviado) {
    this.cpfLimpo = cpfEnviado.replace(/\D+/g, "").toString();
  }

  valida() {
    this.verificadores();
    const cpfParcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }

  verificadores() {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
  }

  criaDigito(cpfIncompleto) {
    const cpfArray = Array.from(cpfIncompleto).map(Number);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((acc, value) => {
      acc += regressivo * value;
      regressivo--;
      return acc;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}

const cpfValido = new Cpf("705.484.450-52");
const cpfValido2 = new Cpf("070.987.720-03");
const cpfInvalidoSequencia = new Cpf("111.111.111-11");
const cpfInvalidoDigito = new Cpf("070.987.721-03"); // CPF com dígito verificador errado

console.log(`CPF 705.484.450-52 é: ${cpfValido.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
console.log(`CPF 070.987.720-03 é: ${cpfValido2.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
console.log(`CPF 111.111.111-11 é: ${cpfInvalidoSequencia.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
console.log(`CPF 070.987.721-03 é: ${cpfInvalidoDigito.valida() ? 'Válido ✅' : 'Inválido ❌'}`);