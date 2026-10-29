import CardDoctor from "../UI/CardDoctor";
import { Link, useLocation } from "react-router-dom";
import { Stethoscope, ArrowRight } from "lucide-react";

function OurDoctor() {
  const location = useLocation();
  return (
    <section className="bg-white py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="dokter-kami">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div 
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100"
          data-aos="fade-down"
        >
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Tenaga Medis Berlisensi</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          data-aos="fade-up"
        >
          Konsultasi dengan <span className="text-emerald-600">Dokter Spesialis</span>
        </h2>
        <p
          className="text-slate-600 text-base sm:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Percayakan kesehatan Anda kepada tim dokter terverifikasi dengan pengalaman klinis bertahun-tahun di rumah sakit terkemuka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <CardDoctor
          nama="dr. Budi Prasetyo"
          posisi="Dokter Umum"
          deskripsi="Berpengalaman dalam menangani pasien dengan keluhan umum dan memberikan edukasi kesehatan preventif terpadu."
          image="/dokter1.webp"
          delay={0}
        />
        <CardDoctor
          nama="dr. Ayu Kartika, Sp.KJ"
          posisi="Spesialis Kedokteran Jiwa (Psikiater)"
          deskripsi="Mendampingi pasien dengan masalah kesehatan mental dan emosional secara profesional, empatik, dan rahasia."
          image="/dokter2.webp"
          delay={100}
        />
        <CardDoctor
          nama="dr. Riko Hartanto, Sp.P"
          posisi="Spesialis Paru & Pernapasan"
          deskripsi="Ahli dalam diagnosis dan penanganan gangguan saluran napas akut maupun kronis seperti asma, TBC, dan alergi."
          image="/dokter3.webp"
          delay={200}
        />
        <CardDoctor
          nama="dr. Sinta Wijaya, Sp.KFR"
          posisi="Spesialis Kedokteran Fisik & Rehabilitasi"
          deskripsi="Menangani terapi pemulihan mobilitas fisik pasca cedera atau tindakan medis dengan pendekatan komprehensif."
          image="/dokter4.webp"
          delay={300}
        />
      </div>

      {location.pathname === "/" && (
        <div className="flex justify-center pt-4" data-aos="fade-up">
          <Link
            to="/konsultasi-online"
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
          >
            Lihat Semua Dokter Tersedia
            <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
          </Link>
        </div>
      )}
    </section>
  );
}

export default OurDoctor;
