import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let client;
let db;
let collection;

app.post('/usuarios', async (req, res) => {
    try {
        const resultado = await collection.insertOne(req.body);
        const nuevoUsuario = await collection.findOne({ _id: resultado.insertedId });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await collection.find({}).toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.get('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await collection.findOne({ _id: new ObjectId(id) });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});

app.put('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    
    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    const usuarioActualizado = await collection.findOne({ _id: new ObjectId(id) });
    res.status(200).json(usuarioActualizado);
    console.log(usuarioActualizado);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

app.delete('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioEliminado = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    
    if (!usuarioEliminado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente', usuario: usuarioEliminado });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});

const uri = process.env.uri;

async function connectDB() {
  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log("Conexión exitosa a la base de datos");
    
    db = client.db(); 
    collection = db.collection('usuarios'); 
    app.listen(puerto, () => {
      console.log(`Servidor escuchando en http://localhost:${puerto}`);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

connectDB();