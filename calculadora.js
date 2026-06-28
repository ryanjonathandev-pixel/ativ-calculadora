const button = document.getElementById('soma');

button.addEventListener('click', Soma)

function Soma() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const soma = num1 + num2;

    const paragrafo = document.getElementById('resultado');
    paragrafo.textContent = "O resultado da soma é: " + soma;
}

const button2 = document.getElementById('sub');

button2.addEventListener('click', Subtrair)

function Subtrair() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const subtracao = num1 - num2;

    const paragrafo = document.getElementById('resultado');
    paragrafo.textContent = "O resultado da subtração é: " + subtracao;
}

const button3 = document.getElementById('mult');

button3.addEventListener('click', Multiplicar)

function Multiplicar() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const multiplicacao = num1 * num2;

    const paragrafo = document.getElementById('resultado');
    paragrafo.textContent = "O resultado da multiplicação é: " + multiplicacao;
}

const button4 = document.getElementById('div');

button4.addEventListener('click', Dividir)

function Dividir() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const divisao = num1 / num2;

    const paragrafo = document.getElementById('resultado');
    paragrafo.textContent = "O resultado da divisão é: " + divisao;
}

const button5 = document.getElementById('C');

button5.addEventListener('click', Limpar);

function Limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').textContent = '';
}