import { Link, useNavigate } from "react-router-dom";
import { useUnderDev } from "../Context/UnderDevContext";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

function Footer(props) {
  const navigate = useNavigate();
  const { showUnderDev } = useUnderDev();

  return (
    <footer
      className={`bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 ${props.className || ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img className="h-10 w-auto object-contain" src="/Logo.png" alt="Lodi Health Logo" />
              <span className="text-xl font-extrabold text-white tracking-tight">Lodi Health</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Platform layanan kesehatan digital terintegrasi pertama yang menghubungkan Anda dengan dokter ber-SIP resmi, apotek terverifikasi BPOM, dan reservasi klinik se-Indonesia.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Privasi Rekam Medis Terenkripsi 256-bit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <button
                  onClick={() => navigate("/", { state: { scrollTo: "layanan" } })}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Layanan Unggulan
                </button>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Artikel &amp; Berita
                </Link>
              </li>
              <li>
                <button
                  onClick={() => navigate("/", { state: { scrollTo: "kontak" } })}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Layanan Medis</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/konsultasi-online" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Konsultasi Dokter Online
                </Link>
              </li>
              <li>
                <Link to="/reservasi-klinik" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Reservasi Jadwal Klinik
                </Link>
              </li>
              <li>
                <Link to="/toko-kesehatan" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Toko Obat &amp; Alkes Resmi
                </Link>
              </li>
              <li>
                <button
                  onClick={showUnderDev}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Homecare Medis
                </button>
              </li>
              <li>
                <button
                  onClick={showUnderDev}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Cek Gejala Mandiri
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Sehat Sentosa No. 88, Gubeng, Surabaya, Jawa Timur 60281</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>bantuan@lodihealth.id</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lodi Health. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#kebijakan" className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#syarat" className="hover:text-slate-300 transition-colors">
              Syarat &amp; Ketentuan
            </a>
            <a href="#keamanan" className="hover:text-slate-300 transition-colors">
              Standar Keamanan Pasien
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
