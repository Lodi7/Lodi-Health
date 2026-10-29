import { Link, useLocation } from "react-router-dom";
import { Plus, Minus, ShoppingBag } from "lucide-react";

function CardProduk(props) {
  const location = useLocation();

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-6 min-w-[600px] sm:min-w-0">
        {props.produkList.map((produk, index) => {
          const jumlah = props.keranjang?.[produk.id] || 0;
          return (
            <div
              key={produk.id}
              className="min-w-[240px] max-w-[240px] sm:min-w-0 sm:max-w-full bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <Link to={`/toko-kesehatan/${produk.id}`} className="block bg-slate-50 p-4 overflow-hidden">
                  <img
                    src={produk.image}
                    alt={produk.name}
                    className="h-48 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = "/produk1.webp"; }}
                  />
                </Link>
                <div className="p-5 pb-2">
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                    {produk.category || "Produk Medis"}
                  </p>
                  <Link to={`/toko-kesehatan/${produk.id}`}>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1">
                      {produk.name}
                    </h4>
                  </Link>
                  <p className="text-xs text-slate-500 mb-3">{produk.unit}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="mb-4">
                  <span className="text-xs text-slate-400 block">Harga</span>
                  <span className="text-lg font-extrabold text-slate-900">
                    Rp {typeof produk.price === "number" ? produk.price.toLocaleString("id-ID") : "N/A"}
                  </span>
                </div>

                {location.pathname === "/toko-kesehatan" ? (
                  jumlah === 0 ? (
                    <button
                      onClick={() => props.tambah(produk)}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 rounded-xl py-2.5 text-sm font-semibold transition-all duration-150 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Tambah
                    </button>
                  ) : (
                    <div className="flex justify-between items-center bg-emerald-50 border border-emerald-200 rounded-xl py-1.5 px-3">
                      <button
                        onClick={() => props.kurang(produk)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white shadow-xs font-bold transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-slate-800 text-sm">{jumlah}</span>
                      <button
                        onClick={() => props.tambah(produk)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs font-bold transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )
                ) : (
                  <Link to={`/toko-kesehatan/${produk.id}`}>
                    <button className="w-full inline-flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 rounded-xl py-2.5 text-sm font-semibold transition-all duration-150 cursor-pointer">
                      <ShoppingBag className="w-4 h-4" />
                      Lihat Produk
                    </button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardProduk;
