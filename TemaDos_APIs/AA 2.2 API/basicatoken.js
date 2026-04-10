import axios from "axios";

const obtenerDatos = async () => {
  try {

    const token = "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";

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