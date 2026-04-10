import axios from "axios";

const obtenerUsuario = async () => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=metric`, {
      headers: {
        'x-api-key': '110491bb217d19795382addfccf752c9'
      }
    });

    console.log('Clima:', response.data);
  } catch (error) {
    console.error('Error al obtener el clima:', error.response.data);
  }
};

obtenerUsuario();