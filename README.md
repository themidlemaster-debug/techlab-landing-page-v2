# TechLab — Del Código a la Robótica (100% React + Vite + Tailwind CSS)

Aplicación web educativa e interactiva construida íntegramente con **React (JSX), Vite y Tailwind CSS** (sin archivos `.html` en el código fuente) para enseñar lógica de programación interactiva, gráficos vectoriales SVG, electrónica básica, microcontroladores y robótica, incluyendo un **generador de código QR integrado**.

## Cómo ejecutar el proyecto en Visual Studio Code

1. Abre esta carpeta (`techlab-landing-page`) en **Visual Studio Code**.
2. Abre la terminal integrada (`Ctrl + ñ` o `` Ctrl + ` ``).
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Haz `Ctrl + Clic` en el enlace `http://localhost:5173` que aparece en la terminal.

## Estructura del proyecto

- `vite.config.js`: Configuración de Vite con punto de entrada virtual para React (cero archivos `.html`).
- `src/main.jsx`: Punto de arranque de React.
- `src/App.jsx`: Estructura principal de la aplicación.
- `src/components/Navbar.jsx`: Barra de navegación fija.
- `src/components/Hero.jsx`: Portada interactiva.
- `src/components/SeccionCodigo.jsx`: Estación 1 — JavaScript & React (Estados y eventos en vivo).
- `src/components/SeccionSvg.jsx`: Estación 2 — Gráficos vectoriales SVG con zoom 800%.
- `src/components/SeccionElectro.jsx`: Estación 3 — Electrónica básica con circuito LED interactivo.
- `src/components/SeccionChips.jsx`: Estación 4 — Microcontroladores con simulador Entrada → Salida.
- `src/components/SeccionRobotica.jsx`: Estación 5 — Robótica básica con ciclo Sentir → Pensar → Actuar.
- `src/components/Cierre.jsx`: Gran cierre interactivo y generador de Código QR.
