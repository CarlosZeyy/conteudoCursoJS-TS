import GeradorCPF from "./modules/GeradorCPF";
import ValidadorCpf from "./modules/ValidadorCPF";

import "./assets/css/style.css";

const textoCpf = document.querySelector(".gerador-cpf");

function geradorDeCpf() {
  const cpfGerado = new GeradorCPF();
  const geraBtn = document.querySelector(".gera-btn");
  const copyBtn = document.querySelector(".copy-btn");

  geraBtn.addEventListener("click", () => {
    textoCpf.textContent = cpfGerado.geradorCpf();
    copyBtn.classList.remove("hidden");
  });

  copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(textoCpf.textContent).then(() => {
        copyBtn.textContent = 'Copiado';
        setTimeout(() => {
            copyBtn.textContent = 'Copiar CPF';
        }, 2000)
      }).catch(e => console.error(`Erro ao copiar CPF: ${e}`))
    });
}

function validadorDeCpf() {
  const textoValida = document.querySelector(".validador-cpf");
  const validaInput = document.querySelector("#valida-input");
  const validaBtn = document.querySelector(".valida-btn");

  validaBtn.addEventListener("click", () => {
    const validador = new ValidadorCpf(validaInput.value);

    if (validaInput.value === '') {
        textoValida.innerHTML = `Campo de validação não pode ser vazio.`;
        return;
    } 

    if (validador.valida()) {
      textoValida.innerHTML = `CPF Válido!`;
    } else {
      textoValida.innerHTML = `CPF Inválido!`;
    }

  });
}

geradorDeCpf();
validadorDeCpf();
