function suma(a, b) {
    return a + b;
}

function crearUsuario(nombre, edad) {
    return { nombre: nombre, edad: edad };
}

function valorNulo() {
    return null;
}

function valorUndefined() {
    return undefined;
}

function valorDefinido() {
    return 42;
}

function doble(numero) {
    return numero * 2;
}

function saludar() {
    return "Hola, soy Alejandra";
}

function obtenerFrutas() {
    return ["manzana", "pera", "uva"];
}
function obtenerMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Éxito");
        }, 1000);
    });
}

module.exports = { suma, crearUsuario, valorNulo, valorUndefined, valorDefinido, doble, saludar, obtenerFrutas, obtenerMensaje };