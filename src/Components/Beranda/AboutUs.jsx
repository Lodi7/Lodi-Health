import Stats from "../UI/stats";
import MainDoctorImg from "../../assets/doctor-about.jpg";
import SideImg1 from "../../assets/side1-doctor.jpg";
import SideImg2 from "../../assets/side2-doctor.jpg";
import SideImg3 from "../../assets/side3-doctor.jpg";
import { Link, useLocation } from "react-router-dom";

function AboutUs(props) {
  const location = useLocation();

  return (
    <section className="bg-slate-50 py-20 lg:py-28 overflow-hidden relative" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Presentation */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              {/* Decorative Accent Ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-100/70 scale-95 -z-0"></div>
              
              {/* Floating Doctor Badges */}
              <div 
                className="hidden sm:block absolute z-20 left-0 top-6 w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img className="w-full h-full object-cover" src={SideImg1} alt="Dokter Lodi Health" />
              </div>

              <div 
                className="hidden sm:block absolute z-20 -left-6 bottom-16 w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img className="w-full h-full object-cover" src={SideImg2} alt="Spesialis Berpengalaman" />
              </div>

              <div 
                className="hidden sm:block absolute z-20 right-2 bottom-8 w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <img className="w-full h-full object-cover" src={SideImg3} alt="Pelayanan 24 Jam" />
              </div>

              {/* Main Circular Profile */}
              <div 
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-emerald-500/10"
                data-aos="fade-up"
              >
                <img
                  className="w-full h-full object-cover"
                  src={MainDoctorImg}
                  alt="Tim Medis Profesional Lodi Health"
                />
              </div>
            </div>
          </div>

          {/* Copy & Metrics */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div data-aos="fade-up">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Mengapa Memilih Kami
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Standar Pelayanan Medis Modern & Terpercaya
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Kami memahami bahwa kebutuhan layanan kesehatan yang responsif dan terverifikasi adalah hak setiap keluarga. 
              Lodi Health mengintegrasikan konsultasi dokter berpengalaman, kemudahan janji temu klinik, hingga penyediaan obat 
              terkurasi langsung dalam satu platform yang aman dan transparan.
            </p>

            <div className="pt-2 border-t border-slate-200" data-aos="fade-up" data-aos-delay="200">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                <Stats label="Pasien Terlayani" value="50000+" />
                <Stats label="Dokter Spesialis" value="200+" />
                <Stats label="Layanan Siaga" value="24" />
                <Stats label="Kepuasan Pasien" value="95%" />
              </dl>
            </div>

            {location.pathname === "/" && (
              <div className="pt-2" data-aos="fade-up" data-aos-delay="300">
                <Link
                  to="/tentang-kami"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all duration-200"
                >
                  Pelajari Profil Lengkap
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
