let listaNumerosSorteados = [];
let numeroSecreto;
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > 100) {
        asignarTextoElemento('p', 'Por favor ingresa un número válido entre 1 y 100.');
        vaciarCaja();
        return;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número!, lo hiciste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }

    intentos++;
    vaciarCaja();
}

function vaciarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 100) + 1;

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al 100');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    vaciarCaja();
    listaNumerosSorteados = [];
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

// Inicializa el juego al cargar
condicionesIniciales();