const { suma, crearUsuario, valorNulo, valorUndefined, valorDefinido, doble, saludar, obtenerFrutas, obtenerMensaje } = require('./funciones');

test('10 + 10 debe ser igual a 20', () => {
    expect(suma(10, 10)).toBe(20);
});

test('dos objetos con mismo nombre y edad deben ser iguales', () => {
    const usuario1 = crearUsuario("Ana", 25);
    const usuario2 = crearUsuario("Ana", 25);
    expect(usuario1).toEqual(usuario2);
});

test('valorNulo debe ser null', () => {
    expect(valorNulo()).toBeNull();
});

test('valorUndefined debe ser undefined', () => {
    expect(valorUndefined()).toBeUndefined();
});

test('valorDefinido debe estar definido', () => {
    expect(valorDefinido()).toBeDefined();
});

test('el doble de 15 es mayor que 20', () => {
    expect(doble(15)).toBeGreaterThan(20);
});

test('el doble de 15 es menor que 35', () => {
    expect(doble(15)).toBeLessThan(35);
});

test('el doble de 15 es mayor o igual a 30', () => {
    expect(doble(15)).toBeGreaterThanOrEqual(30);
});
test('el saludo debe contener "Alejandra"', () => {
    expect(saludar()).toMatch(/Alejandra/);
});
test('el array de frutas debe contener "pera"', () => {
    expect(obtenerFrutas()).toContain("pera");
});

test('el array de frutas NO debe contener "sandía"', () => {
    expect(obtenerFrutas()).not.toContain("sandía");
});
test('2 + 3 NO debe ser igual a 6', () => {
    expect(suma(2, 3)).not.toBe(6);
});
test('obtenerMensaje debe resolverse con "Éxito"', async () => {
    await expect(obtenerMensaje()).resolves.toBe("Éxito");
});
