import { useState } from 'react';
import { Cpu, Sun, Droplet, Radar, Sparkles, Sprout, Home, Satellite } from 'lucide-react';

export default function SeccionChips() {
  const [escenario, setEscenario] = useState('planta');

  const escenarios = {
    planta: {
      titulo: 'Riego Automático',
      icon: Droplet,
      sensor: 'Sensor de Humedad detecta: Tierra seca (20%)',
      decision: 'SI humedad < 30% → Activar pin #4 por 5 segundos',
      actuador: 'Bomba de agua encendida: ¡Planta regada!',
    },
    luz: {
      titulo: 'Farola Inteligente',
      icon: Sun,
      sensor: 'Sensor de Luz (LDR) detecta: Oscuridad nocturna',
      decision: 'SI luz == noche → Enviar voltaje al relé',
      actuador: 'Reflector LED encendido automáticamente',
    },
    alarma: {
      titulo: 'Detector de Proximidad',
      icon: Radar,
      sensor: 'Sensor Ultrasónico detecta: Objeto a 12 cm',
      decision: 'SI distancia < 15 cm → Emitir alerta sonora',
      actuador: 'Zumbador activado: "¡Cuidado, obstáculo!"',
    },
  };

  const actual = escenarios[escenario];

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d16] border border-emerald-500/20 shadow-2xl space-y-8">
      {/* Encabezado */}
      <div className="space-y-2 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>Estación 04 • Cerebros diminutos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Microcontroladores: Cerebros del tamaño de una moneda
        </h2>
        <p className="text-zinc-400 max-w-3xl">
          Placas como <strong className="text-emerald-300">Arduino</strong> o <strong className="text-emerald-300">ESP32</strong> son mini computadoras diseñadas no para navegar por redes sociales, sino para leer sensores y controlar objetos del mundo real.
        </p>
      </div>

      {/* Simulador Entradas -> Cerebro -> Salidas */}
      <div className="p-6 rounded-2xl bg-[#07070c] border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-white">
            ¿Cómo piensa un microcontrolador? Elige un caso:
          </h3>

          <div className="flex flex-wrap gap-2">
            {Object.entries(escenarios).map(([key, item]) => {
              const Icono = item.icon;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setEscenario(key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    escenario === key
                      ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/25'
                      : 'bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icono className="w-4 h-4" />
                  {item.titulo}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flujo visual en 3 columnas */}
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase text-cyan-400">1. Entrada (Input)</span>
            <h4 className="font-bold text-white">Lee el entorno</h4>
            <p className="text-sm text-zinc-300">{actual.sensor}</p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/40 space-y-2">
            <span className="text-xs font-mono uppercase text-emerald-400">2. Procesamiento (Chip)</span>
            <h4 className="font-bold text-white">Toma una decisión</h4>
            <p className="text-sm font-mono text-emerald-200 bg-black/40 p-2 rounded-lg">
              {actual.decision}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase text-fuchsia-400">3. Salida (Output)</span>
            <h4 className="font-bold text-white">Ejecuta una acción</h4>
            <p className="text-sm text-zinc-300">{actual.actuador}</p>
          </div>
        </div>
      </div>

      {/* Ejemplos cotidianos */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <Sprout className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white text-sm">Agricultura inteligente</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Invernaderos que riegan y regulan su temperatura solos sin desperdiciar agua.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <Home className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white text-sm">Casas conectadas</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Persianas, cerraduras y luces controladas desde el teléfono mediante Wi-Fi.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <Satellite className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white text-sm">Nanosatélites CubeSat</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Pequeños satélites educativos que orbitan la Tierra tomando fotos y datos climáticos.
            </p>
          </div>
        </div>
      </div>

      {/* Factor Wow */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300">
          <strong className="text-emerald-300">El factor Wow:</strong> Un chip que cuesta menos que una entrada de cine puede tomar miles de decisiones por segundo y conectar cualquier invento casero a Internet.
        </p>
      </div>
    </div>
  );
}
