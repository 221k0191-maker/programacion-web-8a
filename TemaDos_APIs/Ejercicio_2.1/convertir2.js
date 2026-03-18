const json = `{
    "nombre": "Taco de Pollo",
    "ingredientes": {
        "proteina": "Pollo",
        "salsa": "Salsa Verde"
    }
}`;

// Convertir  JS
const objeto = JSON.parse(json);

// Resultado
console.log(objeto);
console.log(objeto.nombre);