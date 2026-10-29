import { HeartHandshake } from "lucide-react";

function HeroTentangKami() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 text-center">
        <div 
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3"
          data-aos="fade-down"
        >
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Mengenal Lebih Dekat</span>
        </div>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4"
          data-aos="zoom-in"
        >
          Tentang <span className="text-emerald-300">Lodi Health</span>
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Berkomitmen menghadirkan transformasi akses kesehatan digital yang adil, cepat, dan berkualitas prima bagi setiap lapisan masyarakat.
        </p>
      </div>
    </section>
  );
}

export default HeroTentangKami;
