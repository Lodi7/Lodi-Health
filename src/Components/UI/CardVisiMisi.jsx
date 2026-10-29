import { ShieldCheck, Target } from "lucide-react";

function CardVisiMisi() {
  const data = [
    {
      title: "Misi Kami",
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
      description:
        "Menyediakan akses layanan kesehatan digital yang terjangkau, mudah dipahami, dan dapat diandalkan oleh seluruh keluarga Indonesia tanpa terkecuali, dengan mengedepankan keamanan data medis serta standar etika kedokteran tertinggi.",
    },
    {
      title: "Visi Kami",
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      description:
        "Menjadi ekosistem kesehatan digital nomor satu di Indonesia yang menghubungkan jutaan pasien dengan dokter berlisensi, klinik berfasilitas lengkap, dan apotek terverifikasi dalam satu pengalaman tanpa hambatan.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div>
            <div className="bg-emerald-100/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardVisiMisi;
