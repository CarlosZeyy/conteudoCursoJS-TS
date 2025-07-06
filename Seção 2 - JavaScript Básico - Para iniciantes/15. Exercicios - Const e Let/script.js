const nome = "Carlos Moises";
const sobrenome = "Mariano Lopes Ferreira";
const idade = 24;
const peso = 81.85;
const altura = 1.76;
let imc = peso / altura ** 2;
let anoNascimento;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, e seu imc é de ${imc.toFixed(
    2
  )}! ${nome} nasceu em ${(anoNascimento = 2025 - idade)}`
);
