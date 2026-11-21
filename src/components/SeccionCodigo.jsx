import { useState } from 'react';
import { Terminal, Activity, Sparkles, Sliders, Power } from 'lucide-react';

export default function SeccionCodigo() {
  const [modoDebug, setModoDebug] = useState(false);
  const [nombreSistema, setNombreSistema] = useState('Módulo Explorador');
  const [textoBoton, setTextoBoton] = useState('Enviar pulso');
  const [pulsos, setPulsos] = useState(0);
  const [energiaActiva, setEnergiaActiva] = useState(true);

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d16] border border-orange-500/20 shadow-2xl space-y-8">
      {/* Encabezado de estación */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Estación 01 • El cerebro del software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            JavaScript y React: Lógica que reacciona al instante
          </h2>
        </div>

        {/* Analogía rápida */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 max-w-sm">
          <Sliders className="w-8 h-8 text-orange-400 shrink-0" />
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-orange-300">Analogía del director:</strong> Si una aplicación fuera una orquesta, JavaScript y React serían el director que coordina qué instrumento suena cada vez que haces clic.
          </p>
        </div>
      </div>

      {/* 3 Conceptos fundamentales de React / JS */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="font-mono text-orange-400 text-sm font-bold mb-1">useState(valor)</p>
          <p className="text-sm text-zinc-400">
            Es la <strong className="text-zinc-200">memoria viva</strong> del componente: guarda datos como contadores, textos o interruptores y actualiza la pantalla al instante.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="font-mono text-orange-400 text-sm font-bold mb-1">onClick={'{() => ...}'}</p>
          <p className="text-sm text-zinc-400">
            Son los <strong className="text-zinc-200">eventos</strong>: escuchan cada acción de la persona (clics, teclado, deslizadores) para disparar funciones.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="font-mono text-orange-400 text-sm font-bold mb-1">Componentes JSX</p>
          <p className="text-sm text-zinc-400">
            Piezas reutilizables escritas en JavaScript que combinan lógica, datos y diseño visual en un solo bloque modular.
          </p>
        </div>
      </div>

      {/* Laboratorio Interactivo: Inspector de Estado React */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-400" />
            Laboratorio interactivo: Inspecciona el estado en vivo
          </h3>

          <button
            type="button"
            onClick={() => setModoDebug(!modoDebug)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition cursor-pointer ${
              modoDebug
                ? 'bg-orange-500 text-zinc-950 shadow-lg shadow-orange-500/30'
                : 'bg-orange-500/15 text-orange-300 border border-orange-500/40 hover:bg-orange-500/25'
            }`}
          >
            <Activity className="w-4 h-4" />
            {modoDebug ? 'Ocultar variables de memoria' : 'Ver variables de memoria (State)'}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Columna izquierda: Código JavaScript / React en vivo */}
          <div className="p-5 rounded-2xl bg-[#07070c] border border-white/10 font-mono text-xs sm:text-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2 leading-relaxed">
              <div className="text-xs text-zinc-500 mb-2">// Componente React (PanelControl.jsx):</div>
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-zinc-200">[nombre, setNombre] = </span>
                <span className="text-orange-400">useState</span>(
                <span className="text-amber-200">"{nombreSistema}"</span>);
              </p>
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-zinc-200">[pulsos, setPulsos] = </span>
                <span className="text-orange-400">useState</span>(
                <span className="text-emerald-300">{pulsos}</span>);
              </p>
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-zinc-200">[activo, setActivo] = </span>
                <span className="text-orange-400">useState</span>(
                <span className="text-cyan-300">{String(energiaActiva)}</span>);
              </p>
              <p className="pt-2 text-zinc-400">
                <span className="text-purple-400">function</span>{' '}
                <span className="text-sky-300">enviarOrden</span>() {'{'}
              </p>
              <p className="pl-4 text-zinc-300">
                setPulsos(pulsos + 1);
              </p>
              <p className="text-zinc-400">{'}'}</p>
            </div>

            {/* Controles para modificar props/state */}
            <div className="pt-4 border-t border-white/10 grid sm:grid-cols-2 gap-3 font-sans">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Cambiar variable nombre:</label>
                <input
                  type="text"
                  value={nombreSistema}
                  onChange={(e) => setNombreSistema(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Cambiar etiqueta del botón:</label>
                <input
                  type="text"
                  value={textoBoton}
                  onChange={(e) => setTextoBoton(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-orange-400"
                />
              </div>
            </div>
          </div>

          {/* Columna derecha: Componente renderizado */}
          <div
            className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-5 ${
              modoDebug
                ? 'bg-orange-950/20 border-2 border-dashed border-orange-400'
                : 'bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
                  Componente Renderizado
                </span>
                <button
                  type="button"
                  onClick={() => setEnergiaActiva(!energiaActiva)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                    energiaActiva
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-zinc-800 text-zinc-400 border border-white/10'
                  }`}
                >
                  <Power className="w-3.5 h-3.5" />
                  {energiaActiva ? 'Sistema ON' : 'Sistema OFF'}
                </button>
              </div>

              <h4 className="text-2xl font-bold text-white">
                {nombreSistema || 'Módulo sin nombre'}
              </h4>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Cada vez que presionas el botón, React recalcula el estado en milisegundos sin recargar la página.
              </p>
            </div>

            {modoDebug && (
              <div className="p-3 rounded-xl bg-black/50 border border-orange-400/40 font-mono text-xs text-orange-200 space-y-1">
                <p>Memoria en tiempo real:</p>
                <p>• state.pulsos = {pulsos}</p>
                <p>• state.activo = {energiaActiva ? 'true' : 'false'}</p>
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={!energiaActiva}
                onClick={() => setPulsos(pulsos + 1)}
                className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 disabled:opacity-40 text-zinc-950 font-bold text-sm transition cursor-pointer"
              >
                {textoBoton || 'Ejecutar'} ({pulsos})
              </button>

              {pulsos > 0 && (
                <button
                  type="button"
                  onClick={() => setPulsos(0)}
                  className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-zinc-300 transition cursor-pointer"
                >
                  Reiniciar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Factor Wow */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/30 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300">
          <strong className="text-orange-300">El factor Wow:</strong> Aplicaciones complejas como paneles de telemetría espacial, simuladores médicos y tableros de control robótico funcionan exactamente con esta misma arquitectura de estados y eventos reactivos.
        </p>
      </div>
    </div>
  );
}
