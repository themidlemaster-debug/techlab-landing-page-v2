import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function virtualEntryPlugin() {
  const virtualEntryPath = path.resolve(process.cwd(), 'index.html')
  const entryMarkup = [
    '<!doctype html>',
    '<html lang="es">',
    '  <head>',
    '    <meta charset="UTF-8" />',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '    <title>TechLab | Del Código a la Robótica</title>',
    '  </head>',
    '  <body class="bg-[#07070d] text-zinc-100 antialiased">',
    '    <div id="root"></div>',
    '    <script type="module" src="/src/main.jsx"></script>',
    '  </body>',
    '</html>'
  ].join('\n')

  return {
    name: 'virtual-react-entry',
    enforce: 'pre',
    resolveId(source) {
      if (source === 'index.html' || path.resolve(source) === virtualEntryPath) {
        return virtualEntryPath
      }
    },
    load(id) {
      if (id === virtualEntryPath) {
        return entryMarkup
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const cleanUrl = req.url?.split('?')[0]
        if (cleanUrl === '/' || cleanUrl === '/index.html') {
          try {
            const output = await server.transformIndexHtml('/index.html', entryMarkup)
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(output)
            return
          } catch (error) {
            return next(error)
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [virtualEntryPlugin(), react(), tailwindcss()],
})
