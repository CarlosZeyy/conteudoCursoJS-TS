function randomTime(max = 1, min = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Error / Bad Value");
        return;
      }

      resolve(msg);
      return;
    }, timer);
  });
}

// Função assíncrona que permite o uso da palavra-chave 'await'.
async function executaAi() {
  // O bloco try...catch é usado para capturar erros em promises.
  try {
    // 'fase1' recebe a promise pendente, pois não usamos 'await'. O código continua executando.
    const fase1 = esperaAi("Fase 1", randomTime());
    console.log(fase1); // Exibe 'Promise { <pending> }'

    // Este setTimeout demonstra que 'fase1' ainda está pendente.
    setTimeout(() => {
      console.log("Essa promise estava pendente", fase1);
    }, 3100);

    // 'await' pausa a execução da função até que a promise 'esperaAi' seja resolvida.
    const fase2 = await esperaAi("Fase 2", randomTime());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", randomTime());
    console.log(fase3);

    // Esta chamada vai gerar um erro, pois o primeiro argumento não é uma string.
    const fase4 = await esperaAi(4, randomTime());
    console.log(fase4); // Esta linha não será executada.

    console.log("Terminando execução"); // Esta linha também não será executada.
  } catch (error) {
    // O erro da promise rejeitada é capturado aqui.
    console.log("Error:", error);
  }
}

// executaAi(); //* Tire o comentario para executar a function "executaAi"

// Exemplo 2

// Função similar a 'esperaAi', retorna uma promise para simular uma conexão de banco de dados.
function connectDB(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Função assíncrona para simular operações com banco de dados.
async function dataBase() {
  try {
    // 'await' pausa a execução até a conexão com o DB ser estabelecida (promise resolvida).
    const conectandoDB = await connectDB(
      "Conectando ao banco de dados...",
      randomTime()
    );
    console.log(conectandoDB);

    // 'mostrarDados' recebe a promise pendente, o código não espera aqui.
    const mostrarDados = connectDB("Exibindo dados...", randomTime());
    console.log(mostrarDados); // Exibe 'Promise { <pending> }'

    // 'await' pausa a execução até a análise dos dados ser concluída.
    const analisandoDados = await connectDB(
      "Analisando dados...",
      randomTime()
    );
    console.log(analisandoDados);

    // Este setTimeout mostra o resultado da promise 'mostrarDados' após um tempo.
    setTimeout(() => {
      console.log("Dados obtidos!", mostrarDados);
    }, 3500);
  } catch (error) {
    // Captura qualquer erro que possa ocorrer nas promises.
    console.log("Erro ao buscar dado:", error);
  }
}

dataBase();
