import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("http://api.forismatic.com/api/1.0/", {
      params: {
        method: "getQuote",
        format: "json",
        lang: "en"
      }
    });

    const quote = result.data.quoteText;
    const character = result.data.quoteAuthor || "Autor desconocido";

    res.render("index", { quote, character });

  } catch (error) {
    console.log("Error:", error.message);

    res.render("index", {
      quote: "No se pudo obtener la cita 😢",
      character: "Intenta más tarde"
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});