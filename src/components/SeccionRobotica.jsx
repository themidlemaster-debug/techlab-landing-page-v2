import { useState } from 'react';
import { Bot, Eye, Cpu, Cog, Play, Rocket } from 'lucide-react';

export default function SeccionRobotica() {
  const [pasoCiclo, setPasoCiclo] = useState(0);

  const pasos = [
    {
      num: '1. SENTIR',
      titulo: 'Detectar obstáculo',
      detalle: 'Los sensores ultrasónicos envían ondas invisibles y detectan una pared a 15 cm.',
      estadoRobot: 'Pared detectada adelante',
    },
    {
      num: '2. PENSAR',
      titulo: 'Calcular nueva ruta',
      detalle: 'El microcontrolador procesa la señal y decide girar 90° hacia la derecha.',
      estadoRobot: 'Calculando giro seguro...',
    },
    {
      num: '3. ACTUAR',
      titulo: 'Mover las ruedas',
      detalle: 'Envía corriente a los motores (actuadores) para esquivar el muro y seguir avanzando.',
      estadoRobot: '¡Girando y avanzando!',
    },
  ];

  const avanzarCiclo = () => {
    setPasoCiclo((prev) => (prev + 1) % pasos.length);
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d16] border border-fuchsia-500/20 shadow-2xl space-y-8">
      {/* Encabezado */}
      <div className="space-y-2 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider">
          <Bot className="w-3.5 h-3.5" />
          <span>Estación 05 • Máquinas en movimiento</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Robótica Básica: Dando vida y movimiento a las ideas
        </h2>
        <p className="text-zinc-400 max-w-3xl">
          Un robot no es más que una máquina diseñada siguiendo la misma estructura básica que el cuerpo humano.
        </p>
      </div>

      {/* Anatomía Comparada: Humano vs Robot */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-fuchsia-400 font-bold text-sm">
            <Eye className="w-5 h-5" />
            <span>Ojos y Oídos = SENSORES</span>
          </div>
          <p className="text-sm text-zinc-400">
            Cámaras, micrófonos y medidores láser permiten al robot saber qué ocurre a su alrededor.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
            <Cpu className="w-5 h-5" />
            <span>Cerebro = MICROCONTROLADOR</span>
          </div>
          <p className="text-sm text-zinc-400">
            Interpreta la información de los sensores y ejecuta las instrucciones programadas.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Cog className="w-5 h-5" />
            <span>Músculos = ACTUADORES</span>
          </div>
          <p className="text-sm text-zinc-400">
            Motores, ruedas y brazos articulados que transforman electricidad en movimiento físico.
          </p>
        </div>
      </div>

      {/* El Ciclo Mágico Interactivo: Sentir -> Pensar -> Actuar */}
      <div className="p-6 rounded-2xl bg-[#07070c] border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              El Ciclo Mágico: Sentir → Pensar → Actuar
            </h3>
            <p className="text-xs text-zinc-400">
              Pulsa el botón para ver cómo un robot esquiva una pared paso a paso.
            </p>
          </div>

          <button
            type="button"
            onClick={avanzarCiclo}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold text-sm transition shadow-lg shadow-fuchsia-600/25 cursor-pointer"
          >
            <Play className="w-4 h-4" />
            Siguiente fase del ciclo
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Tarjetas de las 3 fases */}
          <div className="space-y-3">
            {pasos.map((p, index) => {
              const activo = pasoCiclo === index;
              return (
                <button
                  key={p.num}
                  type="button"
                  onClick={() => setPasoCiclo(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition cursor-pointer ${
                    activo
                      ? 'bg-fuchsia-500/15 border-fuchsia-400 shadow-lg shadow-fuchsia-950/30'
                      : 'bg-white/[0.02] border-white/10 opacity-65 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-fuchsia-300">{p.num}</span>
                    {activo && (
                      <span className="px-2 py-0.5 rounded-full bg-fuchsia-500 text-zinc-950 text-[10px] font-bold">
                        ACTIVO
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-white mt-1">{p.titulo}</h4>
                  <p className="text-xs text-zinc-300 mt-1">{p.detalle}</p>
                </button>
              );
            })}
          </div>

          {/* Arena visual del robot */}
          <div className="p-4 rounded-2xl bg-[#0c0c18] border border-white/10 flex flex-col items-center">
            <svg viewBox="0 0 360 220" className="w-full h-auto">
              {/* Pared obstáculo */}
              <rect x="290" y="30" width="24" height="160" rx="6" fill="#3f3f46" stroke="#a1a1aa" strokeWidth="2" />
              <text x="302" y="20" textAnchor="middle" fill="#a1a1aa" fontSize="10">
                PARED
              </text>

              {/* Ondas de sensor (Fase 0: Sentir) */}
              {pasoCiclo === 0 && (
                <g className="animate-pulse">
                  <path d="M 175 95 Q 195 110 175 125" fill="none" stroke="#22d3ee" strokeWidth="3" />
                  <path d="M 205 85 Q 230 110 205 135" fill="none" stroke="#22d3ee" strokeWidth="3" />
                  <path d="M 235 75 Q 265 110 235 145" fill="none" stroke="#22d3ee" strokeWidth="3" />
                </g>
              )}

              {/* Robot */}
              <g
                transform={
                  pasoCiclo === 2
                    ? 'translate(125, 135) rotate(65)'
                    : 'translate(115, 110) rotate(0)'
                }
                className="transition-transform duration-500"
              >
                {/* Ruedas */}
                <rect x="-32" y="-34" width="24" height="10" rx="3" fill="#a855f7" />
                <rect x="8" y="-34" width="24" height="10" rx="3" fill="#a855f7" />
                <rect x="-32" y="24" width="24" height="10" rx="3" fill="#a855f7" />
                <rect x="8" y="24" width="24" height="10" rx="3" fill="#a855f7" />

                {/* Cuerpo */}
                <rect x="-40" y="-25" width="80" height="50" rx="12" fill="#1e1b4b" stroke="#e879f9" strokeWidth="2.5" />

                {/* Chip central iluminado en Fase 1: Pensar */}
                <rect
                  x="-14"
                  y="-12"
                  width="28"
                  height="24"
                  rx="4"
                  fill={pasoCiclo === 1 ? '#fbbf24' : '#312e81'}
                />

                {/* Ojos sensores frontales */}
                <circle cx="38" cy="-10" r="5" fill="#22d3ee" />
                <circle cx="38" cy="10" r="5" fill="#22d3ee" />
              </g>
            </svg>

            <div className="mt-2 px-4 py-1.5 rounded-full bg-fuchsia-500/15 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-200">
              Estado: {pasos[pasoCiclo].estadoRobot}
            </div>
          </div>
        </div>
      </div>

      {/* Factor Wow: Del robot casero a Marte */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-fuchsia-500/15 via-purple-500/10 to-transparent border border-fuchsia-500/30 flex items-start gap-3">
        <Rocket className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300">
          <strong className="text-fuchsia-300">Del robot casero a Marte (El factor Wow):</strong> Este ciclo exacto (<em>Sentir → Pensar → Actuar</em>) repetido miles de veces por minuto es la misma lógica que utilizan los rovers de la NASA para explorar la superficie de Marte de forma autónoma.
        </p>
      </div>
    </div>
  );
}
