class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  isSequency() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCpf = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigito) {
    let total = 0;
    let reverso = cpfSemDigito.length + 1;

    for (let stringNumerica of cpfSemDigito) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequency()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
}

const cpfValido = new ValidaCPF("705.484.450-52");
const cpfValido2 = new ValidaCPF("070.987.720-03");
const cpfInvalidoSequencia = new ValidaCPF("111.111.111-11");
const cpfInvalidoDigito = new ValidaCPF("070.987.721-03"); // CPF com dígito verificador errado

console.log(`CPF 705.484.450-52 é: ${cpfValido.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
console.log(`CPF 070.987.720-03 é: ${cpfValido2.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
console.log(`CPF 111.111.111-11 é: ${cpfInvalidoSequencia.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
console.log(`CPF 070.987.721-03 é: ${cpfInvalidoDigito.valida() ? 'Válido ✅' : 'Inválido ❌'}`);
