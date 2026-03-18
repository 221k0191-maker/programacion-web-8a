import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const recetasTacos = JSON.parse(
  fs.readFileSync("./recetaTacos.json", "utf-8")
);

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(
    r =>
      r.ingredientes.proteina.nombre.toLowerCase() ===
      req.params.type.toLowerCase()
  );

  res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});