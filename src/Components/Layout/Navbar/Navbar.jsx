import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../../Button";
import { useFormModal } from "../../Context/FormContext";
import Breadcrumb from "../Breadcrumb";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import { useAuthContext } from "../../Context/AuthContext";

function Navbar(props) {
  const { setFormAktif } = useFormModal();
  const [showNavbar, setShowNavbar] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuthContext();
  const avatarOptions = [
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${Math.floor(
      Math.random() * 1000
    )}`,
  ];
  function getRandomAvatar() {
    const stored = localStorage.getItem("avatarHealth");
    if (stored) return stored;

    const random =
      avatarOptions[Math.floor(Math.random() * avatarOptions.length)];
    localStorage.setItem("avatarHealth", random);
    return random;
  }
  const avatarSrc = getRandomAvatar();

  const menuBar = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      }

      setLastScrollY(currentScrollY);

      const scrollPosition = window.scrollY + 200;
      props.links.forEach((link, index) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, props.links, menuOpen]);

  const activeLinkClass = "text-white font-bold opacity-100 transition-all duration-150 drop-shadow-sm";
  const inactiveLinkClass = "text-white/80 hover:text-white hover:opacity-100 font-medium transition-all duration-150";

  return (
    <>
      <nav
        className={`navbar transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="navbar-container">
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="navbar-brand-container flex items-center space-x-2.5"
            >
              <img
                src="/Logo.png"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
                alt="Logo"
              />
              <span className="navbar-brand">{props.brand}</span>
            </Link>
          </div>

          <div className="navbar-button">
            {user ? (
              <div className="relative pr-1.5">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="relative w-10 h-10 rounded-full bg-white/20 border-2 border-white/80 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-white transition-all cursor-pointer"
                >
                  <img
                    src={avatarSrc}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-sm shadow-xl rounded-xl border border-slate-100 z-50 overflow-hidden py-1 text-slate-800">
                    <div className="px-4 py-2 border-b border-slate-100 text-xs text-slate-500">
                      Masuk sebagai <br />
                      <span className="font-semibold text-slate-800 text-sm truncate block">{user.email || user.nama}</span>
                    </div>
                    <Link
                      to="/setting"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50 font-medium"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Pengaturan Akun
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 font-medium"
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  type="button"
                  className="login"
                  teks="Masuk"
                  onClick={() => setFormAktif("masuk")}
                />
                <Button
                  type="button"
                  className="daftar"
                  teks="Daftar"
                  onClick={() => setFormAktif("daftar")}
                />
              </>
            )}
            {location.pathname === "/" && (
              <Button
                type="button"
                className={`menu-bar ${menuOpen ? "show" : ""}`}
                onClick={menuBar}
                teks={
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                }
              />
            )}
          </div>

          <div className={`navbar-link-container ${menuOpen ? "show" : ""}`}>
            {location.pathname === "/" && (
              <ul className="navbar-link">
                {props.links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith("#") ? (
                      location.pathname === "/" ? (
                        <ScrollLink
                          to={link.href.substring(1)}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          onClick={() => {
                            setActiveIndex(index);
                            setMenuOpen(false);
                          }}
                          className={`cursor-pointer ${
                            index === activeIndex ? activeLinkClass : inactiveLinkClass
                          }`}
                        >
                          {link.label}
                        </ScrollLink>
                      ) : (
                        <Link
                          to="/"
                          onClick={() => {
                            sessionStorage.setItem(
                              "scrollTo",
                              link.href.substring(1)
                            );
                            setActiveIndex(index);
                            setMenuOpen(false);
                          }}
                          className={`cursor-pointer ${
                            index === activeIndex ? activeLinkClass : inactiveLinkClass
                          }`}
                        >
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <Link
                        to={link.href}
                        state={{
                          scrollTo: props.links[index].href.substring(1),
                        }}
                        onClick={() => {
                          setActiveIndex(index);
                          sessionStorage.setItem(
                            "lastSection",
                            props.links[index].href.substring(1)
                          );
                        }}
                        className={index === activeIndex ? activeLinkClass : inactiveLinkClass}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {location.pathname !== "/" && (
          <nav
            className="bg-[#3e723e]/95 border-t border-white/20 text-white text-sm py-2.5 px-6 lg:px-12 backdrop-blur-md shadow-inner"
          >
            <Breadcrumb />
          </nav>
        )}
      </nav>
    </>
  );
}

export default Navbar;
