function validaCPF(cpf) {
  let soma = 0;
  let resto;

  const cpfClean = String(cpf).replace(/\D+/g, "");

  if (cpfClean.length !== 11) return `CPF invalido`;

  if (
    [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ].indexOf(cpfClean) !== -1
  )
    return `CPF invalido`;

  for (i = 1; i <= 9; i++) 
    soma = soma + parseInt(cpfClean.substring(i - 1, i)) * (11 - i);

  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;

  if (resto != parseInt(cpfClean.substring(9, 10))) return `CPF Invalido`;

  soma = 0;

  for (i = 1; i <= 10; i++) 
    soma = soma + parseInt(cpfClean.substring(i - 1, i)) * (12 - i);

  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;

  if (resto != parseInt(cpfClean.substring(10, 11))) return `CPF Invalido`;

  return `CPF Valido`;
}

console.log(validaCPF('111.111.111-11'));
console.log(validaCPF('281.583.549.04'));
