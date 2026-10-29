import {
  HeroBeranda,
  AboutUs,
  Service,
  OurDoctor,
  Testimoni,
  Produk,
  Blog,
  Kontak,
} from "../Components/Beranda";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function Beranda() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const scrollTo =
        sessionStorage.getItem("scrollTo") || location.state?.scrollTo;
      if (scrollTo) {
        setTimeout(() => {
          scroller.scrollTo(scrollTo, {
            duration: 500,
            smooth: true,
            offset: -70,
          });
          sessionStorage.removeItem("scrollTo");
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="overflow-hidden">
      <HeroBeranda id="beranda" />
      <AboutUs id="tentang-Kami" />
      <Service id="layanan" />
      <OurDoctor id="dokter-kami" />
      <Testimoni />
      <Produk id="produk" />
      <Blog id="blog" />
      <Kontak id="kontak" />
    </main>
  );
}

export default Beranda;
