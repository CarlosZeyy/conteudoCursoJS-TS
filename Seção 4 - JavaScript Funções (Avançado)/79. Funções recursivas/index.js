function recursive(max) {
    console.log(max);
    if (max >= 10350) return; //*Call Stack size execedido. (limite de call stack).
    // if (max >= 1000) return;
    max++;
    recursive(max);
}

recursive(0);

//* Essa função lembra muito um loop, porem se ela cair em "execução infinita" em algum momento ela vai retorna um Call Stack Size exceeded, ou seja ela não vai mais conseguir rodar a função.