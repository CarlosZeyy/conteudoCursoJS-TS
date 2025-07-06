const form = document.querySelector(".form");
const resultado = document.getElementById("resultado");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

function formImc() {
  function recebeEventForm(e) {
    e.preventDefault();

    const pesoValor = Number(peso.value.replace(",", "."));
    const alturaValor = Number(altura.value.replace(",", "."));
    const imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2);

    if (isNaN(imc)) {
      resultado.style.backgroundColor = "#fa5e5e";
      resultado.style.height = "40px";
      resultado.style.textAlign = "center";
      resultado.innerHTML = `<p>Valor inválido!</p>`;
    }

    if (isNaN(pesoValor) || isNaN(alturaValor)) {
      resultado.style.backgroundColor = "#fa5e5e";
      resultado.style.height = "40px";
      resultado.style.textAlign = "center";
      resultado.innerHTML = `<p>Valor dos campos inválidos!</p>`;
    }

    if (imc < 18.5) {
      resultado.style.backgroundColor = "#fa5e5e";
      resultado.style.height = "40px";
      resultado.innerHTML = `<p>Seu IMC: ${imc} - Abaixo do peso</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.style.backgroundColor = "#90fd75";
      resultado.style.height = "40px";
      resultado.innerHTML = `<p>Seu IMC: ${imc} - Peso normal</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.style.backgroundColor = "#ffd57b";
      resultado.style.height = "40px";
      resultado.innerHTML = `<p>Seu IMC: ${imc} - Sobrepeso</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.style.backgroundColor = "#ffb969";
      resultado.style.height = "40px";
      resultado.innerHTML = `<p>Seu IMC: ${imc} - Obesidade grau 1</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      resultado.style.backgroundColor = "#ff9822";
      resultado.style.height = "40px";
      resultado.innerHTML = `<p>Seu IMC: ${imc} - Obesidade grau 2</p>`;
    } else if (imc >= 40) {
      resultado.style.backgroundColor = "#fa5e5e";
      resultado.style.height = "40px";
      resultado.innerHTML = `<p>Seu IMC: ${imc} - Obesidade grau 3</p>`;
    }
  }
  form.addEventListener("submit", recebeEventForm);
}

formImc();
