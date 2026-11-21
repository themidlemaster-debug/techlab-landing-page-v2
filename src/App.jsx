import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCodigo from './components/SeccionCodigo';
import SeccionSvg from './components/SeccionSvg';
import SeccionElectro from './components/SeccionElectro';
import SeccionChips from './components/SeccionChips';
import SeccionRobotica from './components/SeccionRobotica';
import Cierre from './components/Cierre';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070d] text-zinc-100 selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-28 pb-20">
        <section id="inicio" className="pt-28 sm:pt-32">
          <Hero />
        </section>

        <section id="codigo" className="scroll-mt-28">
          <SeccionCodigo />
        </section>

        <section id="svg" className="scroll-mt-28">
          <SeccionSvg />
        </section>

        <section id="electronica" className="scroll-mt-28">
          <SeccionElectro />
        </section>

        <section id="chips" className="scroll-mt-28">
          <SeccionChips />
        </section>

        <section id="robotica" className="scroll-mt-28">
          <SeccionRobotica />
        </section>

        <section id="cierre" className="scroll-mt-28">
          <Cierre />
        </section>
      </main>
    </div>
  );
}
