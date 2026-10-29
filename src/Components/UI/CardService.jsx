function CardService(props) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 p-7 text-left flex flex-col justify-between h-full group"
      data-aos={props.animasi}
      data-aos-delay={props.delay}
    >
      <div>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md shadow-emerald-500/20 flex items-center justify-center p-3 mb-5 group-hover:from-emerald-600 group-hover:to-emerald-700 group-hover:scale-105 transition-all duration-200">
          <img
            src={props.src}
            alt={props.alt + " icon"}
            className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
          />
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
          {props.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {props.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
        <span>Buka Layanan</span>
        <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default CardService;
