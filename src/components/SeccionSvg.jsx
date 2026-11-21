import { useState } from 'react';
import { Shapes, ZoomIn, Sparkles } from 'lucide-react';

export default function SeccionSvg() {
  const [zoom, setZoom] = useState(3);
  const [radio, setRadio] = useState(42);
  const [colorCirculo, setColorCirculo] = useState('#22d3ee');

  const colores = [
    { nombre: 'Cian', valor: '#22d3ee' },
    { nombre: 'Magenta', valor: '#e879f9' },
    { nombre: 'Esmeralda', valor: '#34d399' },
    { nombre: 'Ámbar', valor: '#fbbf24' },
  ];

  // Matriz 8x8 para simular un ícono hecho con píxeles tradicionales
  const matrizPixel = [
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
  ];

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d16] border border-cyan-500/20 shadow-2xl space-y-8">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Shapes className="w-3.5 h-3.5" />
            <span>Estación 02 • Gráficos infinitos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            SVG: Dibujando con matemáticas y vectores
          </h2>
        </div>

        <p className="text-sm text-zinc-400 max-w-md">
          Una foto normal está formada por millones de cuadritos llamados <strong className="text-zinc-200">píxeles</strong>. Un gráfico <strong className="text-cyan-300">SVG</strong> son fórmulas geométricas que la computadora dibuja en tiempo real.
        </p>
      </div>

      {/* Comparador interactivo de Zoom */}
      <div className="p-6 rounded-2xl bg-[#07070c] border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">
              Prueba de Zoom: {zoom * 100}% de ampliación
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400">100%</span>
            <input
              type="range"
              min="1"
              max="8"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-40 accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-bold text-cyan-400">800%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lado Píxeles */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center justify-between min-h-[220px] overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Imagen tradicional (Píxeles)
            </span>

            <div
              className="my-4 transition-transform duration-200"
              style={{ transform: `scale(${0.7 + zoom * 0.28})` }}
            >
              <div className="grid grid-cols-8 gap-[1px] bg-zinc-800 p-0.5">
                {matrizPixel.flat().map((celda, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 ${celda ? 'bg-cyan-400' : 'bg-zinc-950'}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs text-zinc-400 text-center">
              Al acercarte, se notan los cuadritos escalonados y pierde definición.
            </p>
          </div>

          {/* Lado Vectorial SVG */}
          <div className="p-5 rounded-2xl bg-cyan-950/10 border border-cyan-500/30 flex flex-col items-center justify-between min-h-[220px] overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Gráfico SVG (Fórmula Vectorial)
            </span>

            <div
              className="my-4 transition-transform duration-200"
              style={{ transform: `scale(${0.7 + zoom * 0.28})` }}
            >
              <svg viewBox="0 0 100 100" className="w-24 h-24 overflow-visible">
                <polygon
                  points="50,5 63,36 96,36 69,56 79,88 50,69 21,88 31,56 4,36 37,36"
                  fill="#22d3ee"
                />
              </svg>
            </div>

            <p className="text-xs text-cyan-200/80 text-center">
              Bordes 100% nítidos incluso si lo proyectaras en un edificio gigante.
            </p>
          </div>
        </div>
      </div>

      {/* Mini editor de coordenadas SVG en vivo */}
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="p-5 rounded-2xl bg-[#07070c] border border-white/10 font-mono text-sm space-y-4">
          <p className="text-xs text-zinc-500">// Propiedades geométricas en React:</p>
          <div className="text-zinc-300 leading-relaxed">
            <p className="text-cyan-400">const circuloVectorial = {'{'}</p>
            <p className="pl-4">
              <span className="text-zinc-400">centroX: </span>
              <span className="text-amber-300">80</span>,{' '}
              <span className="text-zinc-400">centroY: </span>
              <span className="text-amber-300">80</span>,
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">radio: </span>
              <span className="text-emerald-300">{radio}</span>,
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">relleno: </span>
              <span className="text-fuchsia-300">"{colorCirculo}"</span>
            </p>
            <p className="text-cyan-400">{'}'}</p>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">Tamaño (radio):</span>
              <input
                type="range"
                min="18"
                max="65"
                value={radio}
                onChange={(e) => setRadio(Number(e.target.value))}
                className="w-28 accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">Color:</span>
              {colores.map((c) => (
                <button
                  key={c.valor}
                  type="button"
                  onClick={() => setColorCirculo(c.valor)}
                  className={`w-6 h-6 rounded-full border-2 transition cursor-pointer ${
                    colorCirculo === c.valor ? 'border-white scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c.valor }}
                  title={c.nombre}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lienzo resultado */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center">
          <svg width="160" height="160" viewBox="0 0 160 160" className="bg-[#07070c] rounded-2xl border border-white/10">
            <circle
              cx="80"
              cy="80"
              r={radio}
              fill={colorCirculo}
              className="transition-all duration-200"
            />
          </svg>
          <span className="text-xs text-zinc-400 mt-3">
            Vista previa generada en vivo desde el estado
          </span>
        </div>
      </div>

      {/* Factor Wow */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-cyan-500/5 to-transparent border border-cyan-500/30 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300">
          <strong className="text-cyan-300">El factor Wow:</strong> Como un SVG funciona con coordenadas matemáticas, pesa casi nada y puedes animar cada trazo o cambiar sus colores en tiempo real según los datos de un sensor.
        </p>
      </div>
    </div>
  );
}
