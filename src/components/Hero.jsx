import { ArrowDown, Sparkles, Terminal, Shapes, Zap, Cpu, Bot } from 'lucide-react';

export default function Hero() {
  const etapas = [
    { label: '1. Lógica', sub: 'JS / React', icon: Terminal, color: 'text-orange-400', href: '#codigo' },
    { label: '2. Gráficos', sub: 'SVG', icon: Shapes, color: 'text-cyan-400', href: '#svg' },
    { label: '3. Energía', sub: 'Electrónica', icon: Zap, color: 'text-amber-400', href: '#electronica' },
    { label: '4. Cerebro', sub: 'Chips', icon: Cpu, color: 'text-emerald-400', href: '#chips' },
    { label: '5. Movimiento', sub: 'Robótica', icon: Bot, color: 'text-fuchsia-400', href: '#robotica' },
  ];

  return (
    <div className="relative space-y-14">
      {/* Resplandores ambientales */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-16 -right-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda: Mensaje principal */}
        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Del mundo invisible al mundo físico</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            De líneas de código a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400">
              máquinas que cobran vida.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            ¿Alguna vez te preguntaste cómo unas instrucciones escritas en JavaScript pueden convertirse en interfaces dinámicas, luces y robots reales? Explora este recorrido interactivo pensado para mentes curiosas, sin necesidad de experiencia previa.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#codigo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold transition shadow-lg shadow-purple-600/25"
            >
              Comenzar el recorrido
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#qr"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-medium transition"
            >
              Compartir por QR
            </a>
          </div>
        </div>

        {/* Columna derecha: Diagrama vectorial animado */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-lg p-6 rounded-3xl bg-[#0e0e18] border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500">puente_digital_fisico.svg</span>
            </div>

            <svg viewBox="0 0 440 300" className="w-full h-auto">
              <defs>
                <linearGradient id="rutaGradiente" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Ruta de conexión animada */}
              <path
                d="M 95 65 L 220 65 L 220 150 L 110 150 L 110 235 L 330 235"
                fill="none"
                stroke="url(#rutaGradiente)"
                strokeWidth="3"
                strokeDasharray="8 6"
                className="animate-pulse"
              />

              {/* Nodo 1: JS / React */}
              <g>
                <rect x="25" y="35" width="130" height="58" rx="14" fill="#1c1412" stroke="#f97316" strokeWidth="2" />
                <text x="90" y="60" textAnchor="middle" fill="#fb923c" fontSize="13" fontFamily="monospace" fontWeight="bold">
                  {'{ JS / REACT }'}
                </text>
                <text x="90" y="78" textAnchor="middle" fill="#a1a1aa" fontSize="10">
                  Lógica y Componentes
                </text>
              </g>

              {/* Nodo 2: SVG */}
              <g>
                <rect x="275" y="35" width="135" height="58" rx="14" fill="#0d1b24" stroke="#06b6d4" strokeWidth="2" />
                <text x="342" y="60" textAnchor="middle" fill="#22d3ee" fontSize="13" fontFamily="monospace" fontWeight="bold">
                  {'SVG VECTOR'}
                </text>
                <text x="342" y="78" textAnchor="middle" fill="#a1a1aa" fontSize="10">
                  Gráficos Matemáticos
                </text>
              </g>

              {/* Nodo 3: Electrónica y Chip */}
              <g>
                <rect x="145" y="120" width="150" height="60" rx="14" fill="#0b1f1a" stroke="#10b981" strokeWidth="2" />
                <text x="220" y="146" textAnchor="middle" fill="#34d399" fontSize="13" fontFamily="monospace" fontWeight="bold">
                  MICROCONTROLADOR
                </text>
                <text x="220" y="164" textAnchor="middle" fill="#a1a1aa" fontSize="10">
                  Pulsos 1 y 0 • Cerebro
                </text>
              </g>

              {/* Nodo 4: Robótica */}
              <g className="animate-float-slow">
                <rect x="260" y="205" width="150" height="60" rx="14" fill="#23102e" stroke="#d946ef" strokeWidth="2" />
                <text x="335" y="231" textAnchor="middle" fill="#e879f9" fontSize="13" fontFamily="monospace" fontWeight="bold">
                  ROBOT EN ACCIÓN
                </text>
                <text x="335" y="249" textAnchor="middle" fill="#a1a1aa" fontSize="10">
                  Sensores y Motores
                </text>
              </g>

              {/* Pulso central */}
              <circle cx="220" cy="65" r="5" fill="#f97316" />
              <circle cx="110" cy="150" r="5" fill="#10b981" />
              <circle cx="110" cy="235" r="5" fill="#d946ef" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mapa rápido del recorrido */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {etapas.map((etapa) => {
          const Icono = etapa.icon;
          return (
            <a
              key={etapa.sub}
              href={etapa.href}
              className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition flex items-center gap-3"
            >
              <div className={`p-2.5 rounded-xl bg-white/5 ${etapa.color}`}>
                <Icono className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">{etapa.label}</p>
                <p className="text-sm font-bold text-white group-hover:translate-x-0.5 transition-transform">
                  {etapa.sub}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
