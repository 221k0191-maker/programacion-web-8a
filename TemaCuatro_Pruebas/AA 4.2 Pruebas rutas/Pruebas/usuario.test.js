import { jest } from '@jest/globals';
import request from 'supertest';

const mockUsuario = {
  find: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn()
};

jest.unstable_mockModule(
  '../models/usuario.model.js',
  () => ({
    default: mockUsuario
  })
);

const { default: app } = await import('../index.js');
const { default: Usuario } = await import('../models/usuario.model.js');

describe('API Usuarios', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  // GET /
  describe('GET /', () => {
    test('debe responder con mensaje de bienvenida', async () => {
      const res = await request(app).get('/');

      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Bienvenido a mi API CRUD');
    });
  });

  // POST /usuarios
  describe('POST /usuarios', () => {
    test('debe crear un usuario', async () => {
      const nuevoUsuario = {
        _id: '123',
        nombre: 'Juan',
        email: 'juan@test.com'
      };

      Usuario.create.mockResolvedValue(nuevoUsuario);

      const res = await request(app)
        .post('/usuarios')
        .send(nuevoUsuario);

      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(nuevoUsuario);
      expect(Usuario.create).toHaveBeenCalled();
    });

    test('debe retornar error 500 si falla la creación', async () => {
      Usuario.create.mockRejectedValue(new Error('Error BD'));

      const res = await request(app)
        .post('/usuarios')
        .send({ nombre: 'Juan' });

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({
        error: 'Error al crear el usuario'
      });
    });
  });

  // GET /usuarios
  describe('GET /usuarios', () => {
    test('debe obtener todos los usuarios', async () => {
      const usuarios = [
        { _id: '1', nombre: 'Juan' },
        { _id: '2', nombre: 'Maria' }
      ];

      Usuario.find.mockResolvedValue(usuarios);

      const res = await request(app).get('/usuarios');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(usuarios);
    });

    test('debe retornar error 500', async () => {
      Usuario.find.mockRejectedValue(new Error());

      const res = await request(app).get('/usuarios');

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({
        error: 'Error al obtener los usuarios'
      });
    });
  });

  // GET /usuario/:id
  describe('GET /usuario/:id', () => {
    test('debe obtener un usuario por id', async () => {
      const usuario = {
        _id: '123',
        nombre: 'Juan'
      };

      Usuario.findById.mockResolvedValue(usuario);

      const res = await request(app).get('/usuario/123');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(usuario);
    });

    test('debe retornar 404 si no existe', async () => {
      Usuario.findById.mockResolvedValue(null);

      const res = await request(app).get('/usuario/123');

      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({
        error: 'Usuario no encontrado'
      });
    });

    test('debe retornar 500 si ocurre un error', async () => {
      Usuario.findById.mockRejectedValue(new Error());

      const res = await request(app).get('/usuario/123');

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({
        error: 'Error al buscar usuario'
      });
    });
  });

  // PUT /usuario/:id
  describe('PUT /usuario/:id', () => {
    test('debe actualizar un usuario', async () => {
      const usuarioActualizado = {
        _id: '123',
        nombre: 'Pedro'
      };

      Usuario.findByIdAndUpdate.mockResolvedValue({});
      Usuario.findById.mockResolvedValue(usuarioActualizado);

      const res = await request(app)
        .put('/usuario/123')
        .send({ nombre: 'Pedro' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(usuarioActualizado);
    });

    test('debe retornar 404 si el usuario no existe', async () => {
      Usuario.findByIdAndUpdate.mockResolvedValue(null);

      const res = await request(app)
        .put('/usuario/123')
        .send({ nombre: 'Pedro' });

      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({
        error: 'Usuario no encontrado'
      });
    });

    test('debe retornar 500 si ocurre un error', async () => {
      Usuario.findByIdAndUpdate.mockRejectedValue(new Error());

      const res = await request(app)
        .put('/usuario/123')
        .send({ nombre: 'Pedro' });

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({
        error: 'Error al actualizar usuario'
      });
    });
  });

  // DELETE /usuario/:id
  describe('DELETE /usuario/:id', () => {
    test('debe eliminar un usuario', async () => {
      const usuario = {
        _id: '123',
        nombre: 'Juan'
      };

      Usuario.findByIdAndDelete.mockResolvedValue(usuario);

      const res = await request(app).delete('/usuario/123');

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        mensaje: 'Usuario eliminado correctamente',
        usuario
      });
    });

    test('debe retornar 404 si no existe', async () => {
      Usuario.findByIdAndDelete.mockResolvedValue(null);

      const res = await request(app).delete('/usuario/123');

      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({
        error: 'Usuario no encontrado'
      });
    });

    test('debe retornar 500 si ocurre un error', async () => {
      Usuario.findByIdAndDelete.mockRejectedValue(new Error());

      const res = await request(app).delete('/usuario/123');

      expect(res.statusCode).toBe(500);
      expect(res.body).toEqual({
        error: 'Error al eliminar usuario'
      });
    });
  });

});