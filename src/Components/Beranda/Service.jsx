import CardService from "../UI/CardService";
import Homecare from "../../assets/homecare.svg";
import Toko from "../../assets/toko.svg";
import Chat from "../../assets/chat.svg";
import Reservasi from "../../assets/reservasi.svg";
import Self from "../../assets/cek-sendiri.svg";
import Khusus from "../../assets/khusus.svg";
import { Link } from "react-router-dom";
import { useUnderDev } from "../Context/UnderDevContext";
import { Activity } from "lucide-react";

function Service(props) {
  const { showUnderDev } = useUnderDev();
  return (
    <section
      id={props.id}
      className="bg-slate-50 py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col text-center space-y-4 max-w-2xl mx-auto mb-14">
        <div 
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 mx-auto"
          data-aos="fade-down"
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Solusi Lengkap &amp; Terintegrasi</span>
        </div>
        <h2
          className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          data-aos="fade-up"
        >
          Layanan Unggulan <span className="text-emerald-600">Lodi Health</span>
        </h2>
        <p
          className="text-slate-600 text-base sm:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Pilih berbagai kemudahan akses medis profesional yang dirancang khusus untuk kenyamanan Anda dan keluarga langsung dari rumah.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
        <Link to="/konsultasi-online" className="h-full">
          <CardService
            src={Chat}
            alt="konsultasi online"
            title="Konsultasi Dokter Online"
            description="Tanya dokter umum dan spesialis berlisensi secara real-time kapan saja melalui chat responsif."
            animasi="fade-up"
            delay="0"
          />
        </Link>
        <Link to="/reservasi-klinik" className="h-full">
          <CardService
            src={Reservasi}
            alt="reservasi klinik"
            title="Reservasi Janji Klinik"
            description="Booking nomor antrean klinik dan rumah sakit mitra tanpa harus menunggu lama di lokasi."
            animasi="fade-up"
            delay="100"
          />
        </Link>
        <Link to="/toko-kesehatan" className="h-full">
          <CardService
            src={Toko}
            alt="toko kesehatan"
            title="Toko Obat &amp; Alkes"
            description="Beli obat resep, suplemen vitamin, serta alat kesehatan 100% original berstandar BPOM."
            animasi="fade-up"
            delay="200"
          />
        </Link>
        <button onClick={showUnderDev} className="h-full text-left cursor-pointer">
          <CardService
            src={Homecare}
            alt="homecare"
            title="Homecare Dokter &amp; Perawat"
            description="Layanan kunjungan dokter dan tenaga perawat profesional langsung ke tempat tinggal Anda."
            animasi="fade-up"
            delay="300"
          />
        </button>
        <button onClick={showUnderDev} className="h-full text-left cursor-pointer">
          <CardService
            src={Self}
            alt="cek kesehatan mandiri"
            title="Cek Gejala Mandiri"
            description="Deteksi awal kondisi fisik dan kalkulator risiko kesehatan dengan panduan algoritma medis."
            animasi="fade-up"
            delay="400"
          />
        </button>
        <button onClick={showUnderDev} className="h-full text-left cursor-pointer">
          <CardService
            src={Khusus}
            alt="perawatan"
            title="Perawatan Khusus &amp; Lansia"
            description="Program pendampingan jangka panjang bagi pasien pasca rawat inap, fisioterapi, dan lansia."
            animasi="fade-up"
            delay="500"
          />
        </button>
      </div>
    </section>
  );
}

export default Service;
