# Análise do Código de Validação de CPF (index.js)

Este documento descreve o funcionamento do script `index.js`, que contém uma lógica para validar números de CPF (Cadastro de Pessoas Físicas) do Brasil.

## Código Completo

```javascript
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((acc, value) => {
    acc += regressivo * Number(value);
    regressivo--;
    return acc;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF("437.813.520-56");
console.log(cpf.valida());
```
---

## Explicação Detalhada
```JS
function ValidaCPF(cpfEnviado)
function ValidaCPF(cpfEnviado) {: Esta é uma função construtora. Ela é usada para criar novos objetos que terão a capacidade de validar um CPF. O parâmetro cpfEnviado é a string do CPF que será validada (pode conter pontos, traços, etc.).

Object.defineProperty(this, "cpfLimpo", { ... });: Este método cria uma propriedade especial no objeto chamada cpfLimpo.

enumerable: true,: Torna a propriedade cpfLimpo visível quando o objeto é inspecionado.

get: function () { ... }: Define um "getter". Isso significa que, em vez de armazenar um valor fixo, a propriedade cpfLimpo executará uma função sempre que for acessada.

return cpfEnviado.replace(/\D+/g, "");: Esta é a função do getter. Ela usa uma expressão regular (/\D+/g) para remover todos os caracteres que não são dígitos da string cpfEnviado. O resultado é um CPF contendo apenas números (ex: "12345678900").

ValidaCPF.prototype.valida
Este método é o coração da validação e retorna true (válido) ou false (inválido).

ValidaCPF.prototype.valida = function () {: Adiciona o método valida ao "protótipo" de ValidaCPF. Isso significa que todo objeto criado com new ValidaCPF() terá acesso a este método.

if (typeof this.cpfLimpo === "undefined") return false;: Uma verificação de segurança para garantir que cpfLimpo exista.

if (this.cpfLimpo.length !== 11) return false;: Um CPF válido, após a limpeza, deve conter exatamente 11 dígitos. Se não tiver, é inválido.

if (this.isSequencia()) return false;: Chama outro método para verificar se o CPF é uma sequência de dígitos repetidos (ex: '111.111.111-11'), que são considerados inválidos pela Receita Federal, mesmo que passem no cálculo dos dígitos verificadores.

const cpfParcial = this.cpfLimpo.slice(0, -2);: Extrai os primeiros 9 dígitos do CPF. Estes são a base para calcular os dois dígitos verificadores.

const digito1 = this.criaDigito(cpfParcial);: Chama o método criaDigito para calcular o primeiro dígito verificador com base nos 9 dígitos iniciais.

const digito2 = this.criaDigito(cpfParcial + digito1);: Calcula o segundo dígito verificador. Desta vez, usa os 9 dígitos originais mais o primeiro dígito que acabamos de calcular.

const novoCpf = cpfParcial + digito1 + digito2;: Concatena os 9 dígitos originais com os 2 dígitos calculados para formar o que deveria ser o CPF completo e válido.

return novoCpf === this.cpfLimpo;: Compara o CPF recém-calculado com o CPF limpo original. Se forem idênticos, significa que o CPF enviado é válido.

ValidaCPF.prototype.criaDigito
Este método implementa o algoritmo matemático para calcular um dígito verificador do CPF.

ValidaCPF.prototype.criaDigito = function (cpfParcial) {: Recebe uma parte do CPF (com 9 ou 10 dígitos) como parâmetro.

const cpfArray = Array.from(cpfParcial);: Converte a string do CPF parcial em um array de caracteres (dígitos).

let regressivo = cpfArray.length + 1;: Inicia um contador regressivo. Para o primeiro dígito (que usa 9 dígitos), o contador começa em 10. Para o segundo (que usa 10 dígitos), começa em 11.

const total = cpfArray.reduce((acc, value) => { ... }, 0);: Usa o método reduce para iterar sobre cada dígito do cpfArray e calcular um somatório.

acc += regressivo * Number(value);: Multiplica cada dígito pelo valor do contador regressivo e soma ao acumulador (acc).

regressivo--;: Decrementa o contador a cada iteração.

const digito = 11 - (total % 11);: Esta é a fórmula padrão do "Módulo 11". Pega o resto da divisão do somatório por 11 e subtrai de 11.

return digito > 9 ? "0" : String(digito);: Se o resultado da fórmula for 10 ou 11, o dígito verificador é "0". Caso contrário, é o próprio número, convertido para string.

ValidaCPF.prototype.isSequencia
Este método simples serve para invalidar CPFs formados por dígitos repetidos.

ValidaCPF.prototype.isSequencia = function () {: Define o método.

const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);: Pega o primeiro dígito do CPF limpo (ex: "5") e o repete 11 vezes para criar uma sequência (ex: "55555555555").

return sequencia === this.cpfLimpo;: Compara a sequência gerada com o CPF limpo. Se forem iguais, retorna true (é uma sequência), o que levará o método valida a invalidar o CPF.

Execução do Código
const cpf = new ValidaCPF("437.813.520-56");: Cria uma nova instância do validador, passando a string de CPF a ser testada.

console.log(cpf.valida());: Executa o método de validação no objeto cpf e imprime o resultado (true ou false) no console.
```