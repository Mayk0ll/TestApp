# Server

Este proyecto es un servidor Node.js basado en Express que utiliza JWT para autenticación y MongoDB como base de datos. Incluye configuraciones básicas y dependencias como bcryptjs, cors, express, jsonwebtoken, mongoose y morgan para el registro de solicitudes HTTP.

## Requisitos

Para utilizar este proyecto, se recomienda tener instalada una versión de Node.js 14 o superior, MongoDB, y opcionalmente nodemon para el desarrollo local.

## Instalación

Para comenzar, clona este repositorio y entra en el directorio del proyecto. Luego, instala las dependencias utilizando el comando `npm install`. Si prefieres, puedes instalar nodemon globalmente con el comando `npm install -g nodemon`, lo cual te permitirá ejecutar el servidor en modo de desarrollo automáticamente. 

Configura un archivo `.env` en la raíz del proyecto donde incluyas las variables necesarias, como la cadena de conexión de MongoDB y la clave secreta para JWT.

## Scripts

Para ejecutar el servidor en modo desarrollo, utiliza el script `npm run dev`, que iniciará la aplicación usando nodemon.

## Dependencias

Este proyecto incluye las siguientes dependencias:
- bcryptjs: Para el hash y verificación de contraseñas.
- cors: Para habilitar CORS y permitir solicitudes desde dominios específicos.
- express: Framework de servidor para manejar rutas y peticiones HTTP.
- jsonwebtoken: Para la generación y verificación de tokens JWT.
- mongoose: ODM para la interacción con MongoDB.
- morgan: Middleware de registro de solicitudes HTTP.