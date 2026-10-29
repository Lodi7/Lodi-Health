import { Link } from "react-router-dom";
import { ArrowLeft, CalendarCheck } from "lucide-react";

function HeroReservasi() {
  return (
    <div className="text-white py-14 lg:py-18 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 relative overflow-hidden">
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Layanan Reservasi Resmi</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          Sistem Booking Klinik &amp; Rumah Sakit
        </h1>
        <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">
          Pilih lokasi, dokter spesialis, serta jadwal kunjungan yang fleksibel tanpa perlu antre di loket pendaftaran.
        </p>
      </div>
    </div>
  );
}

export default HeroReservasi;
