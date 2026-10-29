import { useState, useEffect } from "react";
import CardProduk from "../UI/CardProduk";
import { getProducts } from "../../Api/produkApi";
import { Link } from "react-router-dom";
import { Pill, ArrowRight } from "lucide-react";

function Produk(props) {
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (Array.isArray(data)) {
        const acak = [...data].sort(() => Math.random() - 0.5);
        setProdukList(acak.slice(0, 4));
      }
    }).catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 mb-3"
              data-aos="fade-down"
            >
              <Pill className="w-3.5 h-3.5" />
              <span>Apotek &amp; Suplemen Resmi</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
              data-aos="fade-right"
            >
              Beli Obat &amp; <span className="text-emerald-600">Vitamin Kesehatan</span>
            </h2>
            <p className="mt-2 text-slate-600 text-base sm:text-lg">
              Jaminan 100% produk original berizin edar BPOM langsung dari distributor farmasi terpercaya.
            </p>
          </div>

          <div data-aos="fade-left">
            <Link
              to="/toko-kesehatan"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 rounded-xl transition-all duration-200"
            >
              Kunjungi Toko Lengkap
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <CardProduk produkList={produkList} />
      </div>
    </section>
  );
}

export default Produk;
