// =====================================================
// Ejercicios 1.2.1 - Sintaxis básica de Node.js
// Alumno: [Alejandra]
// =====================================================



// =====================================================
// b) Tipos de datos
// =====================================================

console.log("=========== TIPOS DE DATOS ===========");

let numero = 10;
let texto = "Hola Mundo";
let booleano = true;
let nulo = null;
let indefinido;
let simbolo = Symbol("id");
let bigInt = 1234567890123456789n;

console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Nulo:", nulo);
console.log("Indefinido:", indefinido);
console.log("Símbolo:", simbolo);
console.log("BigInt:", bigInt);

console.log("\n");



// =====================================================
// c) Array
// =====================================================

console.log("=========== ARRAY ===========");

let arreglo = [42, "NodeJS", false, null, { nombre: "Ale" }];
console.log(arreglo);

console.log("\n");



// =====================================================
// d) Función polinómica
// =====================================================

console.log("=========== POLINOMIO ===========");

function polinomioSegundoGrado(a, b) {
    let x = 2;
    let c = 5;
    let resultado = a * (x ** 2) + b * x + c;
    console.log("Resultado:", resultado);
}

polinomioSegundoGrado(3, 4);

console.log("\n");



// =====================================================
// e) Función flecha
// =====================================================

console.log("=========== FUNCIÓN FLECHA ===========");

const manipularTexto = (cadena) => {
    console.log(cadena.toUpperCase());
};

manipularTexto("hola node");

console.log("\n");



// =====================================================
// f) Bucle descendente
// =====================================================

console.log("=========== BUCLE DESCENDENTE ===========");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("\n");



// =====================================================
// g & h) Objeto y método
// =====================================================

console.log("=========== OBJETO INSTITUCIÓN ===========");

let institucion = {
    nombre: "Instituto Tecnológico",
    ubicacion: "México",
    estudiantes: 5000,
    carrera: "Ingeniería en Sistemas",
    descripcion: function () {
        return `La institución ${this.nombre} ubicada en ${this.ubicacion} ofrece la carrera de ${this.carrera}.`;
    }
};

console.log(institucion.descripcion());

console.log("\n");



// =====================================================
// i) Operaciones matemáticas
// =====================================================

console.log("=========== OPERACIONES ===========");

const operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b === 0 ? "No se puede dividir entre 0" : a / b
};

console.log("Suma:", operaciones.sumar(5, 3));
console.log("Resta:", operaciones.restar(10, 4));
console.log("Multiplicación:", operaciones.multiplicar(6, 2));
console.log("División:", operaciones.dividir(8, 2));

console.log("\n");



// =====================================================
// j) Función asincrónica con callback
// =====================================================
console.log("\n--- Función asincrónica con ---");

function operacionAsincrona(callback) {
    console.log("Iniciando operación asincrónica...");

    setTimeout(() => {
        const exito = true; // Cambia a false para simular error

        if (exito) {
            callback(null, "Operación completada correctamente.");
        } else {
            callback("Ocurrió un error en la operación.", null);
        }
    }, 2000); // 2 segundos de espera
}

// Llamada a la función
operacionAsincrona((error, resultado) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Resultado:", resultado);
    }
});




// =====================================================
// k) Conversión de string a número con manejo de errores
// =====================================================

console.log("\n--- Conversión de cadena a número ---");

function convertirCadenaANumero(cadena) {
    try {
        let numero = Number(cadena);

        if (isNaN(numero)) {
            throw new Error("La cadena no es un número válido.");
        }

        console.log("Conversión exitosa:", numero);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Pruebas
convertirCadenaANumero("123");    // Correcto
convertirCadenaANumero("abc");    // Error

