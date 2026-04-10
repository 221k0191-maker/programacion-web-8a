import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const obtenerDatos = async () => {
  try {

    const token = process.env.TOKEN;

    console.log("Token:", token);

    const datos = await axios.get(
      "https://api.github.com/user",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("Datos:", datos.data);

  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

obtenerDatos();