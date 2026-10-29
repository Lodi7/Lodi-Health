import CardVisiMisi from "../UI/CardVisiMisi";
import { Compass } from "lucide-react";

function VisiMisi() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100"
            data-aos="fade-down"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Prinsip &amp; Landasan</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
            data-aos="fade-up"
          >
            Visi &amp; <span className="text-emerald-600">Misi Kami</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg" data-aos="fade-up" data-aos-delay="100">
            Fondasi nilai yang menjadi pedoman tim Lodi Health dalam memberikan standar pelayanan kesehatan terbaik.
          </p>
        </div>
        <CardVisiMisi />
      </div>
    </section>
  );
}

export default VisiMisi;
