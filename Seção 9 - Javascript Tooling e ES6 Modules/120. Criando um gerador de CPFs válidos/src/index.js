import GeradorCPF from './modules/GeradorCPF';

import './assets/css/style.css';

(function() {
    const cpfGerado = new GeradorCPF();
    const geraCpf = document.querySelector('.gerador-cpf');
    geraCpf.innerHTML = cpfGerado.geradorCpf();
})()