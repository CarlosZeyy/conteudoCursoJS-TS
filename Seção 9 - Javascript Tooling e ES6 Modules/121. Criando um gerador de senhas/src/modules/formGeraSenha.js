import geraSenha from "./geradores";

const password = document.querySelector('.password');
const qtdPassword = document.querySelector('.qtd-password');
const checkMaisculos = document.querySelector('.check-maisculos');
const checkMinusculos = document.querySelector('.check-minusculos');
const checkNumeros = document.querySelector('.check-numeros');
const checkSimbolos = document.querySelector('.check-simbolos');
const btnPassword = document.querySelector('.btn-password');

export default () => {
    btnPassword.addEventListener('click', () => {
        password.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
        qtdPassword.value,
        checkMaisculos.checked,
        checkMinusculos.checked,
        checkNumeros.checked,
        checkSimbolos.checked,
    )
    return senha || 'Nenhuma opcao selecionada.'
}

qtdPassword.addEventListener('keypress', e => e.preventDefault());