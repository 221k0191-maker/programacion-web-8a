import express from 'express';

const app = express();
const port = 3000;

// RUTA GET
app.get('/', (req, res) => {
    // Usamos .status().send() para enviar ambas cosas correctamente
    res.status(200).send('<h1>Hola Mundo</h1>');
});

// RUTA POST
app.post('/registro', (req, res) => {
    res.sendStatus(201);
});

// RUTA PUT
app.put('/usuario/actualizar', (req, res) => {
    res.sendStatus(200);
});

// RUTA PATCH
app.patch('/usuario/modificar', (req, res) => {
    res.sendStatus(200);
});

// RUTA DELETE
app.delete('/usuario/eliminar', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en puerto ${port}`);
});