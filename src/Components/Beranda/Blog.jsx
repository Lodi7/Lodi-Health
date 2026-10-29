import CardBlog from "../UI/CardBlog";
import { getHealthArticles } from "../../Api/newsApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHealthArticles()
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data.slice(0, 3));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat artikel:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-200/60 overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3"
              data-aos="fade-down"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Edukasi &amp; Berita Medis</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
              data-aos="fade-right"
            >
              Wawasan &amp; <span className="text-emerald-600">Tips Sehat Terkini</span>
            </h2>
            <p className="mt-2 text-slate-600 text-base sm:text-lg">
              Informasi kesehatan ilmiah yang dikurasi oleh para pakar untuk panduan gaya hidup sehat Anda setiap hari.
            </p>
          </div>

          <div data-aos="fade-left">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-emerald-700 bg-white hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 rounded-xl transition-all duration-200 shadow-sm"
            >
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-6 border border-slate-200 animate-pulse h-80"></div>
            ))}
          </div>
        ) : (
          <CardBlog posts={posts} />
        )}
      </div>
    </section>
  );
}

export default Blog;
