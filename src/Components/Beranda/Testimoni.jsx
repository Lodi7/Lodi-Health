import { Star, Quote } from "lucide-react";

function Testimoni() {
  const reviews = [
    {
      name: "Rina Oktavia",
      role: "Ibu Rumah Tangga, Jakarta",
      quote:
        "Saat anak saya demam tinggi tengah malam, respon dokter di Lodi Health sangat cepat dan menenangkan. Resep obat langsung diantar ke rumah tanpa harus keluar malam.",
      rating: 5,
      avatar: "/testimonial-user-1.webp",
    },
    {
      name: "Hendra Gunawan",
      role: "Profesional, Surabaya",
      quote:
        "Fitur reservasi kliniknya juara! Biasanya saya antre 2-3 jam di rumah sakit, sekarang datang 15 menit sebelum jam jadwal langsung dipanggil dokter spesialis.",
      rating: 5,
      avatar: "/author1.webp",
    },
    {
      name: "drg. Clarissa Maharani",
      role: "Tenaga Kesehatan, Bandung",
      quote:
        "Sebagai sesama tenaga medis, saya mengapresiasi kurasi dokter ber-SIP dan transparansi obat di Lodi Health. Standar pelayanannya sangat higienis dan terpercaya.",
      rating: 5,
      avatar: "/author2.webp",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3.5 py-1 rounded-full">
            Testimoni Nyata
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Kepercayaan Lebih dari <span className="text-emerald-400">50.000 Pasien</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Simak pengalaman mereka yang telah merasakan kemudahan dan kecepatan layanan medis terintegrasi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-700/60">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
                  onError={(e) => { e.target.src = "/testimonial-user-1.webp"; }}
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
