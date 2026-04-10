import axios from "axios";

const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post('https://reqres.in/api/register',
            {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            },
            {
                headers: { 'x-api-key': 'reqres_c2efe7623bb34391962aa455e372743d' }
    });

    console.log('Registro exitoso:', respuesta.data);
} catch (error) {
    console.error('Error en el registro:', error.response.data);
}
};

registrarUsuario();