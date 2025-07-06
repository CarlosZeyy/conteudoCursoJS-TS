// try {
//     //* Executado quando não tem erros
// } catch (error) {
//     //* Executado quando tem erros
// } finally {
//     //* sempre sendo executado, pode ser que não seja necessario dependendo de como está o codigo do try-catch.
// }

// try {
//     console.log(a);
//     console.log("Abrindo arquivo");
//     console.log("Manipulando arquivo (deu erro)");
//     console.log("Fechando arquivo");
// } catch (error) {
//     console.log("Tratando erro!");
// } finally {
//     console.log("Finally: sempre sou executado! fechando o arquivo")
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de 'Date'");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
    const data = new Date("11-01-2001 13:04:24");
    const hora = retornaHora(11);
    console.log(hora);
} catch (error) {
    console.log('Formato de hora invalida! insira uma data valida!');
} finally {
    console.log('Até a proxima!')
}

