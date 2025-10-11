const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolo = '!@#$%^&*()-+=_{}[]?.,;:';
const geraSimbolo = () => simbolo[rand(0, simbolo.length)]

export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
    const passwordArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiuscula && passwordArray.push(geraMaiuscula());
        minuscula && passwordArray.push(geraMinuscula());
        numero && passwordArray.push(geraNumero());
        simbolo && passwordArray.push(geraSimbolo());
    }
    return passwordArray.slice(0, qtd).join('');
}