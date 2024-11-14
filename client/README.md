# Client

Este proyecto es un cliente frontend construido con React y Vite. Utiliza TypeScript para tipado, ESLint para el linting del código y varias dependencias para la interfaz y navegación.

## Requisitos

- Node.js (versión recomendada 14 o superior)
- Vite como servidor de desarrollo y empaquetador de módulos

## Instalación

Para comenzar, clona el repositorio y accede al directorio del proyecto. Luego, instala las dependencias ejecutando el comando `npm install`.

## Scripts

El proyecto incluye los siguientes scripts:
- **Desarrollo**: Ejecuta el servidor de desarrollo de Vite con `npm run dev`.
- **Compilación**: Genera una versión optimizada para producción con `npm run build`.
- **Previsualización**: Permite visualizar la versión de producción con `npm run preview`.
- **Lint**: Ejecuta ESLint para verificar el estilo y errores en el código con `npm run lint`.

## Dependencias

Las principales dependencias del proyecto incluyen:
- **@fortawesome/fontawesome-svg-core** y **@fortawesome/react-fontawesome**: Para utilizar iconos de FontAwesome.
- **axios**: Para manejar las solicitudes HTTP.
- **bootstrap**: Framework de CSS para estilizar el frontend.
- **react** y **react-dom**: Librerías principales para la construcción de la interfaz.
- **react-router-dom**: Para el manejo de la navegación entre rutas.
- **sweetalert2**: Para mostrar alertas y notificaciones estilizadas.

## Dependencias de Desarrollo

Entre las dependencias de desarrollo se encuentran:
- **@eslint/js** y **eslint**: Para el linting del código.
- **@vitejs/plugin-react**: Para integrar React con Vite.
- **typescript**: Para tipado estático en JavaScript.
- **typescript-eslint**: Para añadir compatibilidad de ESLint con TypeScript.