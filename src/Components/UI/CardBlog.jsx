import { Calendar, ArrowUpRight } from "lucide-react";

function CardBlog(props) {
  const categoryBadges = {
    "Mental Health": "bg-purple-50 text-purple-700 border-purple-200",
    "Nutrition & Diet": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Exercise & Fitness": "bg-rose-50 text-rose-700 border-rose-200",
    "Chronic Conditions": "bg-amber-50 text-amber-800 border-amber-200",
    Prevention: "bg-teal-50 text-teal-700 border-teal-200",
    Treatment: "bg-blue-50 text-blue-700 border-blue-200",
    "General Health": "bg-sky-50 text-sky-700 border-sky-200",
    default: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {props.posts.map((post, index) => {
        const badgeStyle = categoryBadges[post.category] || categoryBadges.default;
        return (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <article
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.image || "/blog1.webp"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "/blog1.webp"; }}
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${badgeStyle} backdrop-blur-md shadow-xs`}
                    >
                      {post.category || "Kesehatan"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-slate-400 mb-2 gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date || "Artikel Terbaru"}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt || "Baca ulasan medis selengkapnya untuk memahami pencegahan dan penanganan gejala secara tepat..."}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                <span>Baca Artikel Penuh</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          </a>
        );
      })}
    </div>
  );
}

export default CardBlog;
