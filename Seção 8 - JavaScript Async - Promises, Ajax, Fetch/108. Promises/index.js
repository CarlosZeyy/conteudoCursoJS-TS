function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function connectDB(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

connectDB("Conectando ao DB", rand(1, 5))
  .then((response) => {
    console.log(response);
    return connectDB("Buscando dados no DB", rand(1, 5));
  })
  .then((response) => {
    console.log(response);
    return connectDB("Analisando dados do DB", rand(1, 5));
    // return connectDB(22222, rand(1, 5)); //* Criando o erro
  })
  .then((response) => {
    console.log(response);
    console.log("Exibindo dados na tela.");
  })
  .catch((e) => {
    console.log("Error:", e);
  });
