import { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Play,
  RotateCcw,
  Terminal,
  Shapes,
  Cpu,
  Zap,
  Bot,
  ArrowUp,
  QrCode,
  Copy,
  Check,
  Download,
  Smartphone,
} from 'lucide-react';

export default function Cierre() {
  const [pasoActivo, setPasoActivo] = useState(-1);
  const [ejecutando, setEjecutando] = useState(false);
  const [urlQr, setUrlQr] = useState('https://themidlemaster-debug.github.io/techlab-landing-page-v2/');
  const [copiado, setCopiado] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location?.href) {
      const limpia = window.location.href.split('#')[0];
      setUrlQr(limpia);
    }
  }, []);

  const cadena = [
    {
      titulo: '1. JS / React',
      desc: 'Presionas el botón reactivo "Mover brazo".',
      icon: Terminal,
      borde: 'border-orange-400',
      fondo: 'bg-orange-500/15',
      texto: 'text-orange-400',
    },
    {
      titulo: '2. SVG',
      desc: 'El ícono vectorial cambia a color activo.',
      icon: Shapes,
      borde: 'border-cyan-400',
      fondo: 'bg-cyan-500/15',
      texto: 'text-cyan-400',
    },
    {
      titulo: '3. Chip',
      desc: 'El microcontrolador recibe la orden por Wi-Fi.',
      icon: Cpu,
      borde: 'border-emerald-400',
      fondo: 'bg-emerald-500/15',
      texto: 'text-emerald-400',
    },
    {
      titulo: '4. Electrónica',
      desc: 'Deja pasar corriente eléctrica hacia el motor.',
      icon: Zap,
      borde: 'border-amber-400',
      fondo: 'bg-amber-500/15',
      texto: 'text-amber-400',
    },
    {
      titulo: '5. Robótica',
      desc: '¡El servomotor gira y saluda el brazo robótico!',
      icon: Bot,
      borde: 'border-fuchsia-400',
      fondo: 'bg-fuchsia-500/15',
      texto: 'text-fuchsia-400',
    },
  ];

  const ejecutarSecuencia = () => {
    if (ejecutando) return;
    setEjecutando(true);
    setPasoActivo(0);

    cadena.forEach((_, idx) => {
      if (idx === 0) return;
      setTimeout(() => {
        setPasoActivo(idx);
        if (idx === cadena.length - 1) {
          setEjecutando(false);
        }
      }, idx * 750);
    });
  };

  const copiarEnlace = async () => {
    try {
      await navigator.clipboard.writeText(urlQr);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  const descargarQrSvg = () => {
    const svgEl = qrRef.current?.querySelector('svg');
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'codigo-qr-techlab.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      {/* Bloque 1: Simulación de las 5 tecnologías conectadas */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#111122] to-[#0a0a12] border border-purple-500/30 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            El Gran Cierre
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            ¿Cómo se conecta todo en un solo segundo?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Pulsa el botón para lanzar una señal desde tu pantalla y observar cómo viaja por las 5 tecnologías hasta mover un robot real.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={ejecutarSecuencia}
              disabled={ejecutando}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 disabled:opacity-60 text-white font-bold text-sm transition shadow-lg shadow-purple-600/30 cursor-pointer"
            >
              <Play className="w-4 h-4" />
              {ejecutando ? 'Enviando pulso...' : 'Ejecutar secuencia completa'}
            </button>

            {pasoActivo >= 0 && !ejecutando && (
              <button
                type="button"
                onClick={() => setPasoActivo(-1)}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-sm transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar
              </button>
            )}
          </div>
        </div>

        {/* Línea de tiempo de 5 pasos */}
        <div className="grid sm:grid-cols-5 gap-4">
          {cadena.map((item, idx) => {
            const Icono = item.icon;
            const iluminado = pasoActivo >= idx;
            const esActual = pasoActivo === idx;

            return (
              <div
                key={item.titulo}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  iluminado
                    ? `${item.fondo} ${item.borde} scale-[1.02] shadow-lg`
                    : 'bg-white/[0.02] border-white/10 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-black/40 ${item.texto}`}>
                    <Icono className="w-5 h-5" />
                  </div>
                  {esActual && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  )}
                </div>
                <h3 className="font-bold text-white text-sm">{item.titulo}</h3>
                <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Animación final del brazo robótico */}
        <div className="flex flex-col items-center justify-center pt-2">
          <div className="px-6 py-4 rounded-2xl bg-[#07070c] border border-white/10 flex items-center gap-5">
            <svg viewBox="0 0 100 80" className="w-20 h-16">
              <rect x="20" y="62" width="60" height="12" rx="4" fill="#3f3f46" />
              <g
                transform={
                  pasoActivo === 4
                    ? 'translate(50, 62) rotate(-32)'
                    : 'translate(50, 62) rotate(12)'
                }
                className="transition-transform duration-500"
              >
                <rect x="-6" y="-42" width="12" height="42" rx="6" fill="#d946ef" />
                <circle cx="0" cy="0" r="8" fill="#f4f4f5" />
                <path
                  d="M -10 -52 L -4 -40 L 4 -40 L 10 -52"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Resultado físico</p>
              <p className="text-base font-bold text-white">
                {pasoActivo === 4
                  ? '¡Misión cumplida! El brazo robótico respondió a tu clic.'
                  : 'Esperando orden desde la interfaz interactiva...'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque 2: Código QR integrado para compartir la Landing Page */}
      <div
        id="qr"
        className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[#0d0d18] border border-cyan-500/25 shadow-2xl"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Información y controles del QR */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <QrCode className="w-3.5 h-3.5" />
              <span>Acceso instantáneo desde cualquier celular</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Escanea y lleva esta guía contigo
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Apunta la cámara de cualquier teléfono móvil hacia este código QR para abrir la página web al instante y probar los simuladores interactivos.
            </p>

            {/* Campo editable para personalizar o verificar la URL */}
            <div className="pt-2 space-y-2 max-w-xl">
              <label className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                Enlace codificado en el QR (se actualiza automáticamente al publicarla):
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={urlQr}
                  onChange={(e) => setUrlQr(e.target.value)}
                  placeholder="https://themidlemaster-debug.github.io/techlab-landing-page-v2/"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#07070c] border border-white/15 text-xs sm:text-sm font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={copiarEnlace}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-zinc-200 transition cursor-pointer"
                >
                  {copiado ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copiado ? 'Copiado' : 'Copiar link'}
                </button>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={descargarQrSvg}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Descargar QR en formato vectorial (.SVG)
              </button>
            </div>
          </div>

          {/* Tarjeta visual con el QR escaneable */}
          <div className="flex flex-col items-center justify-center">
            <div
              ref={qrRef}
              className="p-5 rounded-3xl bg-white shadow-2xl shadow-cyan-500/15 border-4 border-cyan-400/40"
            >
              <QRCodeSVG
                value={urlQr || 'https://github.com'}
                size={184}
                bgColor="#ffffff"
                fgColor="#09090b"
                level="M"
              />
            </div>
            <span className="text-xs font-medium text-zinc-400 mt-3 text-center">
              Escanea con la cámara de tu teléfono
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-zinc-500">
        <p>
          TechLab • Proyecto educativo interactivo en React sobre código, electrónica y robótica.
        </p>
        <a
          href="#inicio"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 transition"
        >
          Volver arriba
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </footer>
    </div>
  );
}
