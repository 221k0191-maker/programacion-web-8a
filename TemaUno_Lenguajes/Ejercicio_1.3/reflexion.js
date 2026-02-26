/* REFLEXIÓN - EJERCICIO 1.3

1. Un módulo nativo (como 'fs') forma parte de Node.js y no requiere 
instalación. En cambio, un módulo de NPM (como 'sillyname') es creado 
por terceros y debe instalarse mediante npm install.

2. 'Require' (CommonJS) carga los módulos en tiempo de ejecución de forma 
dinámica. 'Import' (ES Modules) realiza una carga estática, ya que los 
módulos se analizan antes de ejecutar el código. Además, 'import' es la 
sintaxis moderna estándar de JavaScript.

3.
a) El archivo 'package.json' debe compartirse porque contiene las 
dependencias y configuración del proyecto. La carpeta 'node_modules' 
no se sube porque puede regenerarse y ocupa mucho espacio.

b) Al ejecutar 'npm install' en una carpeta que solo tiene el 
package.json, NPM instala automáticamente las dependencias listadas 
y crea la carpeta 'node_modules'.
*/