# Practice Upload Multimedia

### Rutas del Servidor

El servidor cuenta con una ruta principal para la subida de productos:

POST /products: Recibe los datos del producto (name, description, price) junto con la imagen y almacena la imagen en el servidor, además de los datos del producto en una estructura de datos local.
Cómo Ejecutar el Proyecto

## Cómo Ejecutar el Proyecto

### 1. Instalación del Proyecto

Clona el repositorio:

```bash
git clone https://github.com/usuario/proyecto-upload-multimedia.git
```

### 3. Instalación de Dependencias

En el servidor:

Dirígete a la carpeta del servidor:

```bash
cd server
```

Instala las dependencias del servidor:

```bash
npm install
```

Inicia el servidor:

```bash
npm run dev
Esto ejecutará el servidor en el puerto 4000.
```

En el cliente
Abre una nueva terminal o pestaña, y dirígete a la carpeta del cliente:

```bash

cd client
```

Instala las dependencias del cliente:

```bash
npm install
```

Inicia el cliente:

```bash
npm run dev
Esto levantará el frontend, que podrás abrir en tu navegador.
```

### 4. Añadir un Producto

Abre tu navegador y accede a la URL proporcionada por el cliente (por ejemplo, http://localhost:3000).
Llena los campos del formulario:
Nombre del producto: Ingresar un nombre.
Descripción: Ingresar una descripción del producto.
Precio: Ingresar un valor numérico.
Imagen: Selecciona una imagen desde tu computadora.
Haz clic en "Aceptar". Esto enviará el formulario al servidor.
