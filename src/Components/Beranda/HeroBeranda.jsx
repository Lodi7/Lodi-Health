import doctorImg from "../../assets/doctor.png";
import bgHome from "../../assets/bg-home.jpg";
import { useFormModal } from "../Context/FormContext";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck, Clock, Star, ArrowRight, Calendar } from "lucide-react";
import "./HeroBeranda.css";

function HeroBeranda(props) {
  const { setFormAktif } = useFormModal();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleStartConsultation = () => {
    if (user) {
      navigate("/konsultasi-online");
    } else {
      setFormAktif("masuk");
    }
  };

  return (
    <section 
      className="hero-background overflow-hidden relative" 
      style={{ backgroundImage: `linear-gradient(rgba(240, 253, 244, 0.88), rgba(240, 253, 244, 0.94)), url(${bgHome})` }}
      id={props.id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
              data-aos="fade-down"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Layanan Kesehatan Digital Terpercaya #1</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
              data-aos="fade-right"
            >
              Akses Kesehatan Cepat & Terpercaya dari <span className="text-emerald-700">Rumah Anda</span>
            </h1>

            <p 
              className="text-slate-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Konsultasi langsung dengan dokter spesialis berpengalaman tanpa antre dan tanpa ribet. 
              Dapatkan diagnosis akurat, resep obat resmi, dan jadwal klinik dalam hitungan menit.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-wrap items-center gap-4 pt-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button
                onClick={handleStartConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Mulai Konsultasi
                <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
              </button>

              <Link
                to="/reservasi-klinik"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-800 bg-white/90 hover:bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                Jadwal Reservasi
              </Link>
            </div>

            {/* Trust Proof Badges */}
            <div 
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-200/80"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Dokter SIP Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Layanan Siaga 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Rating 4.9/5 Pasien</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image & Floating Cards */}
          <div 
            className="lg:col-span-5 relative flex justify-center items-center"
            data-aos="fade-left"
          >
            {/* Soft Ambient Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-300/30 blur-3xl -z-0"></div>

            <div className="relative z-10 w-full max-w-[480px]">
              {/* Doctor Visual */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-100/60 to-emerald-200/60 border border-emerald-200/60 shadow-2xl p-4 pb-0">
                <img
                  src={doctorImg}
                  alt="Dokter Spesialis Lodi Health"
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-md"
                />
              </div>

              {/* Floating Pill: Online Response */}
              <div className="absolute -bottom-4 -left-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-900">Dokter Siap Melayani</p>
                  <p className="text-[11px] text-slate-500">Respon dalam &lt; 5 menit</p>
                </div>
              </div>

              {/* Floating Pill: Satisfaction */}
              <div className="hidden sm:flex absolute top-10 -right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-100 shadow-xl items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-slate-800">50.000+ Pasien Terbantu</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroBeranda;
