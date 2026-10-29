import { useState } from "react";
import { toast } from "react-toastify";
import { useFormModal } from "../Context/FormContext";
import { useAuthContext } from "../Context/AuthContext";
import { MessageSquare, Star, MapPin, CheckCircle2, X } from "lucide-react";

function CardDoctor(props) {
  const { user } = useAuthContext();
  const { setFormAktif } = useFormModal();
  const [chatModalOpen, setChatModalOpen] = useState(false);

  // Perkiraan tarif konsultasi realistis berdasarkan keahlian
  const getBiaya = (posisi) => {
    if (!posisi) return "Rp 45.000";
    const p = posisi.toLowerCase();
    if (p.includes("umum")) return "Rp 35.000";
    if (p.includes("jiwa") || p.includes("psikiater")) return "Rp 75.000";
    if (p.includes("anak")) return "Rp 60.000";
    if (p.includes("kandungan") || p.includes("obgyn")) return "Rp 85.000";
    if (p.includes("paru") || p.includes("jantung")) return "Rp 80.000";
    return "Rp 50.000";
  };

  const biaya = getBiaya(props.posisi);

  const handleStartChat = () => {
    if (!user) {
      toast.info("Silakan masuk atau daftar terlebih dahulu untuk berkonsultasi.");
      setFormAktif("masuk");
      return;
    }
    setChatModalOpen(true);
  };

  return (
    <>
      <div
        className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
        data-aos="fade-up"
        data-aos-delay={props.delay || 0}
      >
        <div className="flex flex-col sm:flex-row p-5 gap-5 items-center sm:items-start flex-1">
          {/* Avatar Profile */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <img
                src={props.image}
                alt={props.nama}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/dokter1.webp";
                }}
              />
            </div>
            {/* Status Online Indicator */}
            <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
            </span>
          </div>

          {/* Info Details */}
          <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {props.posisi}
                </span>
                <span className="inline-flex items-center text-xs font-medium text-slate-500">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-1" />
                  4.9
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {props.nama}
              </h3>

              {props.deskripsi && (
                <p className="mt-1 text-xs sm:text-sm text-slate-500 line-clamp-2 flex items-center justify-center sm:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{props.deskripsi}</span>
                </p>
              )}
            </div>

            {/* Pricing Tag */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Biaya Konsultasi</span>
                <span className="text-base font-extrabold text-slate-900">{biaya}</span>
              </div>
              <button
                onClick={handleStartChat}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Chat Dokter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Consultation Dialog */}
      {chatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100 text-left">
            <button
              onClick={() => setChatModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
              <img
                src={props.image}
                alt={props.nama}
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
                onError={(e) => { e.target.src = "/dokter1.webp"; }}
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base">{props.nama}</h4>
                <p className="text-xs text-emerald-700 font-medium">{props.posisi}</p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">Biaya: {biaya}</p>
              </div>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-xs text-slate-500">Pilih keluhan atau keperluan konsultasi Anda:</p>
              <div className="space-y-2">
                {["Pemeriksaan Gejala / Sakit Ringan", "Konsultasi Lanjutan & Resep Obat", "Diskusi Hasil Lab / Rontgen", "Penyuluhan & Pola Hidup Sehat"].map((opt, i) => (
                  <label key={i} className="flex items-center p-3 rounded-xl border border-slate-200 hover:border-emerald-500 cursor-pointer text-xs font-medium text-slate-700 hover:bg-emerald-50/50 transition-all">
                    <input type="radio" name="topik" defaultChecked={i === 0} className="text-emerald-600 mr-2.5" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setChatModalOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  toast.success(`Sesi konsultasi dengan ${props.nama} berhasil dijadwalkan! Dokter akan merespons dalam beberapa saat.`);
                  setChatModalOpen(false);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                Mulai Sesi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardDoctor;
