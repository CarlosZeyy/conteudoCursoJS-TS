// Função para gerar um tempo aleatório em milissegundos dentro de um intervalo.
function randomTime(max, min) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Função que retorna uma Promise. Ela espera um tempo e depois resolve ou rejeita.
function esperaAi(msg, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Se a mensagem não for uma string, a promise é rejeitada.
      if (typeof msg !== "string") {
        reject("Error");
        return;
      }
      // Caso contrário, a promise é resolvida com a mensagem.
      resolve(msg);
      return;
    }, timer);
  });
}

// * Promise.all / Promise.race / Promise.resolve / Promise.reject

// Array de promises para serem executadas.
// const promises = [
//   esperaAi(1000, randomTime(1, 5)), //* Simulando erro, passando um número em vez de string.
//   esperaAi("Promise 1", randomTime(1, 5)),
//   esperaAi("Promise 2", randomTime(1, 5)),
//   esperaAi("Promise 3", randomTime(1, 5)),
// ];

// Promise.all(promises) //* Tenta resolver todas as promises do array.
//   .then((value) => { //* Se todas forem resolvidas, o 'then' é executado com um array dos resultados.
//     console.log(value);
//   })
//   .catch((err) => { //* Se qualquer uma das promises for rejeitada, o 'catch' é executado imediatamente.
//     console.log(err);
//   });

// Promise.race(promises) //* Retorna o resultado da primeira promise que for resolvida ou rejeitada.
//   .then((value) => { //* O 'then' é executado com o valor da primeira promise a ser resolvida.
//     console.log(value);
//   })
//   .catch((err) => { //* O 'catch' é executado com o erro da primeira promise a ser rejeitada.
//     console.log(err);
//   });

//* Promise.resolve: Útil quando você precisa retornar uma promise já resolvida.
// function downloadPage() {
//   const inCache = false; //* Simula se a página está ou não em cache.

//   if (inCache) {
    // Se estiver em cache, retorna imediatamente uma promise resolvida.
//     return Promise.resolve("Pagina em cache!");
//   } else {
    // Se não, simula o download da página com a função 'esperaAi'.
//     return esperaAi("Baixei a pagina", randomTime(1, 5));
//   }
// }

// downloadPage()
//   .then((dataPage) => {
//     console.log(dataPage);
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

//* Promise.reject: Útil para retornar uma promise já rejeitada, forçando o erro.
function downloadPage2() {
  const inCache = true; //* Simula que a página está em cache.

  if (inCache) {
    // Como está em cache, mas queremos simular um erro, retornamos uma promise rejeitada.
    return Promise.reject("Pagina não existe no cache");
  } else {
    // Este bloco não será executado porque 'inCache' é true.
    return esperaAi("Baixei a pagina", randomTime(1, 5));
  }
}

downloadPage2()
  .then((dataPage) => {
    // Este 'then' não será executado porque a promise foi rejeitada.
    console.log(dataPage);
  })
  .catch((e) => {
    // O 'catch' será executado, exibindo a mensagem de erro da promise rejeitada.
    console.log("Error:", e);
  });
