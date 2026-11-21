import { useState } from 'react';
import { Zap, Droplets, Gauge, ShieldAlert, Power, Sparkles } from 'lucide-react';

export default function SeccionElectro() {
  const [encendido, setEncendido] = useState(true);
  const [resistencia, setResistencia] = useState('media');

  const brilloLed = {
    baja: { opacidad: 1, radioGlow: 42, etiqueta: 'Brillo máximo (mucha corriente)' },
    media: { opacidad: 0.85, radioGlow: 28, etiqueta: 'Brillo ideal y seguro' },
    alta: { opacidad: 0.4, radioGlow: 12, etiqueta: 'Brillo tenue (poca corriente)' },
  }[resistencia];

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d16] border border-amber-500/20 shadow-2xl space-y-8">
      {/* Encabezado */}
      <div className="space-y-2 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>Estación 03 • Domando la energía</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Electrónica Básica: La analogía del agua
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          No necesitas fórmulas complicadas para entender la electricidad: imagina que los cables son tuberías por donde viaja agua.
        </p>
      </div>

      {/* 3 Conceptos clave con la analogía del agua */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
            <Gauge className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Voltaje (V)</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Es la <strong className="text-amber-300">fuerza o presión</strong> con la que una batería empuja los electrones por el cable, igual que una bomba de agua.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
            <Droplets className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Corriente (A)</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Es la <strong className="text-cyan-300">cantidad de electricidad</strong> que fluye cada segundo por el cable, como el caudal de agua en un tubo.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Resistencia (Ω)</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Es un <strong className="text-rose-300">estrechamiento en el tubo</strong> que frena el paso para evitar que demasiada energía queme un LED.
          </p>
        </div>
      </div>

      {/* Circuito Interactivo */}
      <div className="p-6 rounded-2xl bg-[#07070c] border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Simulador de Circuito Vivo</h3>
            <p className="text-xs text-zinc-400">
              Cierra el interruptor para dejar pasar la energía y ajusta la resistencia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Selector de resistencia */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
              {['baja', 'media', 'alta'].map((nivel) => (
                <button
                  key={nivel}
                  type="button"
                  onClick={() => setResistencia(nivel)}
                  className={`px-3 py-1.5 rounded-lg capitalize font-medium transition cursor-pointer ${
                    resistencia === nivel
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Res. {nivel}
                </button>
              ))}
            </div>

            {/* Interruptor principal */}
            <button
              type="button"
              onClick={() => setEncendido(!encendido)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition cursor-pointer ${
                encendido
                  ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/25'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              <Power className="w-4 h-4" />
              {encendido ? 'Circuito Cerrado (ON)' : 'Circuito Abierto (OFF)'}
            </button>
          </div>
        </div>

        {/* Diagrama SVG del circuito */}
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <svg viewBox="0 0 500 210" className="w-full h-auto bg-[#0b0b14] rounded-2xl border border-white/5 p-2">
              {/* Cable base */}
              <rect
                x="70"
                y="45"
                width="360"
                height="120"
                rx="16"
                fill="none"
                stroke={encendido ? '#f59e0b' : '#3f3f46'}
                strokeWidth="4"
              />

              {/* Flujo de electrones animado cuando está encendido */}
              {encendido && (
                <rect
                  x="70"
                  y="45"
                  width="360"
                  height="120"
                  rx="16"
                  fill="none"
                  stroke="#fef08a"
                  strokeWidth="4"
                  strokeDasharray="10 18"
                  className="animate-pulse"
                />
              )}

              {/* Batería izquierda */}
              <rect x="42" y="75" width="56" height="60" rx="10" fill="#18181b" stroke="#f59e0b" strokeWidth="2" />
              <text x="70" y="102" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold">
                9V
              </text>
              <text x="70" y="120" textAnchor="middle" fill="#a1a1aa" fontSize="9">
                BATERÍA
              </text>

              {/* Interruptor arriba */}
              <rect x="175" y="25" width="90" height="40" rx="8" fill="#0b0b14" />
              <circle cx="185" cy="45" r="5" fill="#fbbf24" />
              <circle cx="255" cy="45" r="5" fill="#fbbf24" />
              <line
                x1="185"
                y1="45"
                x2="255"
                y2={encendido ? '45' : '22'}
                stroke={encendido ? '#34d399' : '#f43f5e'}
                strokeWidth="4"
                strokeLinecap="round"
              />
              <text x="220" y="72" textAnchor="middle" fill="#a1a1aa" fontSize="10">
                INTERRUPTOR
              </text>

              {/* Resistencia abajo */}
              <rect x="190" y="148" width="120" height="34" rx="8" fill="#1e1b18" stroke="#fb7185" strokeWidth="2" />
              <text x="250" y="169" textAnchor="middle" fill="#fda4af" fontSize="11" fontFamily="monospace">
                RESISTENCIA
              </text>

              {/* LED derecha */}
              <g>
                {encendido && (
                  <circle
                    cx="430"
                    cy="105"
                    r={brilloLed.radioGlow}
                    fill="#fbbf24"
                    opacity={brilloLed.opacidad * 0.35}
                  />
                )}
                <circle
                  cx="430"
                  cy="105"
                  r="22"
                  fill={encendido ? '#fbbf24' : '#27272a'}
                  opacity={encendido ? brilloLed.opacidad : 1}
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x="430"
                  y="109"
                  textAnchor="middle"
                  fill={encendido ? '#18181b' : '#a1a1aa'}
                  fontSize="11"
                  fontWeight="bold"
                >
                  LED
                </text>
              </g>
            </svg>
          </div>

          {/* Indicador binario 1 y 0 */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-zinc-400">
              Lenguaje de las máquinas
            </span>
            <div
              className={`text-6xl font-mono font-black transition-colors ${
                encendido ? 'text-amber-400' : 'text-zinc-600'
              }`}
            >
              {encendido ? '1' : '0'}
            </div>
            <p className="text-sm font-semibold text-white">
              {encendido ? 'HAY CORRIENTE (Encendido)' : 'SIN CORRIENTE (Apagado)'}
            </p>
            <p className="text-xs text-zinc-400">
              {encendido ? brilloLed.etiqueta : 'Abre el paso para encender el LED.'}
            </p>
          </div>
        </div>
      </div>

      {/* Factor Wow */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300">
          <strong className="text-amber-300">El factor Wow:</strong> Toda la computación moderna—tus videojuegos, fotos, música e inteligencia artificial—se reduce a encender y apagar electricidad millones de veces por segundo: los famosos <strong className="text-white">1 y 0</strong>.
        </p>
      </div>
    </div>
  );
}
