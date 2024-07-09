

function sumar() {
    let num1 = parseInt(document.getElementById('numUno').value);
    let num2 = parseInt(document.getElementById('numDos').value);

    document.getElementById('resul').value = num1 + num2;

}

function limpiar() {
    document.getElementById('numUno').value = '';
    document.getElementById('numDos').value = '';
    document.getElementById('resul').value = '';
}

//restar multiplicar y dividir

function restar() {
    let num1 = parseInt(document.getElementById('numUno').value);
    let num2 = parseInt(document.getElementById('numDos').value);

    document.getElementById('resul').value = num1 - num2;

}

function multiplicar() {
    let num1 = parseInt(document.getElementById('numUno').value);
    let num2 = parseInt(document.getElementById('numDos').value);

    document.getElementById('resul').value = num1 * num2;

}

function dividir() {
    let num1 = parseInt(document.getElementById('numUno').value);
    let num2 = parseInt(document.getElementById('numDos').value);

    document.getElementById('resul').value = num1 / num2;
}