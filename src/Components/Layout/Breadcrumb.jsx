import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const lastState = location.state;

  if (location.pathname === "/") return null;

  return (
    <ol className="flex items-center space-x-2 text-sm font-medium">
      <li>
        <Link
          to="/"
          className="text-white/80 hover:text-white hover:underline transition-colors"
          state={{ scrollY: window.scrollY }}
        >
          Beranda
        </Link>
      </li>

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        const label =
          isLast && lastState?.namaProduk
            ? lastState.namaProduk
            : value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <li key={to} className="flex items-center">
            <span className="mx-2 text-white/50 select-none">›</span>
            {isLast ? (
              <span className="text-white font-semibold drop-shadow-sm">{label}</span>
            ) : (
              <Link
                to={to}
                className="text-white/80 hover:text-white hover:underline transition-colors"
                state={{ scrollY: window.scrollY }}
              >
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default Breadcrumb;
