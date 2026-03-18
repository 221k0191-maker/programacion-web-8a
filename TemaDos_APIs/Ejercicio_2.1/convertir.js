const objetoJavaScript = {
    nombre: "Taco de Pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa Verde"
    }
};

// Convertir a JSON
const json = JSON.stringify(objetoJavaScript);

// Mostrar resultado
console.log(json);
