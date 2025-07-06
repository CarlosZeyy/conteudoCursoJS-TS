const nome = prompt("Digite seu nome completo: ");
console.log(nome);

const letras = nome.length;
console.log(letras);

const segundaLetra = nome[1];
console.log(segundaLetra);

const primeiroIndex = nome.indexOf("e");
console.log(primeiroIndex);

const ultimoIndex = nome.lastIndexOf("e");
console.log(ultimoIndex);

// const ultimas3letras = nome.substring(nome.length - 3); //* Tambem funciona
const ultimas3letras = nome.slice(-3, nome.length);
console.log(ultimas3letras);

const palavras = nome.split(" ");
console.log(palavras);

const maiuscula = nome.toUpperCase();
console.log(maiuscula);
const minuscula = nome.toLowerCase();
console.log(minuscula);

document.body.innerHTML += `Seu nome eh: ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem: ${letras} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br/>`;
document.body.innerHTML += `Qual o primero indice da letra 'e' no seu nome: ${primeiroIndex} <br/>`;
document.body.innerHTML += `Qual o ultimo indice da letra 'e' no seu nome: ${ultimoIndex} <br/>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${ultimas3letras} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${palavras} <br/>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${maiuscula} <br/>`;
document.body.innerHTML += `Seu nome com letras minusculas: ${minuscula} <br/>`;

//* Exercicio com o nome sem espaços

// const nome = prompt("Digite seu nome completo: ");
// console.log(nome);

// const nomeSemEspacos = nome.replaceAll(" ", "");
// console.log(nomeSemEspacos);

// const letras = nomeSemEspacos.length;
// console.log(letras);

// const segundaLetra = nome[1];
// console.log(segundaLetra);

// const primeiroIndex = nomeSemEspacos.indexOf("e", 1);
// console.log(primeiroIndex);

// const ultimoIndex = nomeSemEspacos.lastIndexOf("e");
// console.log(ultimoIndex);

// const ultimas3letras = nome.substring(nome.length - 3);
// console.log(ultimas3letras);

// const palavras = nome.split(" ");
// console.log(palavras);

// const maiuscula = nome.toUpperCase();
// console.log(maiuscula);
// const minuscula = nome.toLowerCase();
// console.log(minuscula);

// document.body.innerHTML += `Seu nome eh: ${nome} <br/>`;
// document.body.innerHTML += `Seu nome tem: ${letras} letras <br/>`;
// document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br/>`;
// document.body.innerHTML += `Qual o primero indice da letra 'e' no seu nome: ${primeiroIndex} <br/>`;
// document.body.innerHTML += `Qual o ultimo indice da letra 'e' no seu nome: ${ultimoIndex} <br/>`;
// document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${ultimas3letras} <br/>`;
// document.body.innerHTML += `As palavras do seu nome são: ${palavras} <br/>`;
// document.body.innerHTML += `Seu nome com letras maiusculas: ${maiuscula} <br/>`;
// document.body.innerHTML += `Seu nome com letras minusculas: ${minuscula} <br/>`;
