import { useState } from 'react';
import { Cpu, Menu, X, QrCode } from 'lucide-react';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { nombre: 'INICIO', href: '#inicio' },
    { nombre: 'JS / REACT', href: '#codigo' },
    { nombre: 'SVG', href: '#svg' },
    { nombre: 'ELECTRÓNICA', href: '#electronica' },
    { nombre: 'CHIPS', href: '#chips' },
    { nombre: 'ROBÓTICA', href: '#robotica' },
    { nombre: 'CONEXIÓN', href: '#cierre' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="max-w-6xl mx-auto px-5 py-3 rounded-2xl bg-[#10101c]/85 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40">
        <div className="flex items-center justify-between">
          {/* Logotipo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-purple-400 hover:text-purple-300 transition"
          >
            <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-bold tracking-wider text-sm text-white">
              TECH<span className="text-purple-400">LAB</span>
            </span>
          </a>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5 text-xs font-semibold tracking-widest text-zinc-400">
              {enlaces.map((item) => (
                <li key={item.nombre}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 py-1"
                  >
                    {item.nombre}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#qr"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/40 text-purple-300 text-xs font-bold tracking-wider transition"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>QR</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:bg-white/10 transition"
            aria-label="Abrir menú"
          >
            {menuAbierto ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {menuAbierto && (
          <ul className="md:hidden mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-semibold tracking-wider text-zinc-300">
            {enlaces.map((item) => (
              <li key={item.nombre}>
                <a
                  href={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition"
                >
                  {item.nombre}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#qr"
                onClick={() => setMenuAbierto(false)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-purple-300 hover:bg-purple-500/10 transition"
              >
                <QrCode className="w-3.5 h-3.5" />
                CÓDIGO QR
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
