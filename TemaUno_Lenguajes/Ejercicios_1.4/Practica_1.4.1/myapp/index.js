import express from "express";

const app = express();
const port = 3000;

// Ruta principal (Home)
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi página web</h1>");
  });

// Ruta Acerca de (About)
app.get("/about", (req, res) => {
    res.send("<h1>Acerca de</h1>");
  }
);

// Manejo de errores 404 (Cualquier otra ruta)
app.use("/", (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
  }
);

// Puesta en marcha del servidor
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  }
);