import FormKontak from "../Form/FormKontak";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

function Kontak(props) {
  return (
    <section
      className="bg-slate-50/60 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id={props.id}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Pusat Bantuan &amp; Konsultasi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Hubungi Tim <span className="text-emerald-600">Lodi Health</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Punya pertanyaan seputar reservasi, resep obat, atau kemitraan klinik? Tim customer care kami siap melayani Anda dengan sigap dan ramah 24 jam setiap hari.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-200/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Alamat Kantor Pusat</h4>
                <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                  Jl. Sehat Sentosa No. 88, Gubeng <br />
                  Surabaya, Jawa Timur 60281
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Hotline Telepon &amp; WhatsApp</h4>
                <p className="text-slate-600 text-sm mt-0.5">
                  +62 812-3456-7890 / (031) 8899-7766
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Surel Dukungan Resmi</h4>
                <p className="text-slate-600 text-sm mt-0.5">
                  bantuan@lodihealth.id / info@lodihealth.id
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Jam Operasional Layanan</h4>
                <p className="text-slate-600 text-sm mt-0.5">
                  Layanan Darurat Medis &amp; Konsultasi: 24 Jam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7" data-aos="fade-left">
          <FormKontak />
        </div>
      </div>
    </section>
  );
}

export default Kontak;
