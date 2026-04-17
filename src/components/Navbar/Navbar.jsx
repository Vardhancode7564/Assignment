import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { services } from "../../data/servicesData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav id="main-navbar" className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.notScrolled}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link
            to="/"
            className={styles.logo}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <img
              src="/logo.png"
              alt="TaxSafar Logo"
              style={{ width: "36px", height: "36px", objectFit: "cover", borderRadius: "8px", mixBlendMode: "screen" }}
            />
            <span>
              Tax<span className="text-[#00ff88]">Safar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors duration-200 relative pb-1 group
                  ${isActive(path) ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#00ff88] rounded-full transition-all duration-300
                  ${isActive(path) ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200
                ${isActive("/services") ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>
              {dropdownOpen && (
                <div className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-72 bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-2 shadow-2xl z-50">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.id}
                        to="/services"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-150 text-sm"
                      >
                        <span
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05]"
                          style={{ color: s.color }}
                        >
                          <Icon size={15} />
                        </span>
                        {s.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Auth buttons */}
          <div className={styles.authButtons}>
            <Link
              to="/login"
              className="text-sm font-medium text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              Login
            </Link>
            <span className="w-px h-4 bg-white/20 self-center" />
            <Link
              to="/partner-login"
              className="text-sm font-medium text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              Partner
            </Link>
            <Link to="/signup" className="btn-primary !py-2 !px-5 !text-sm">
              Register
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — starts below navbar */}
      {mobileOpen && (
        <div
          className="fixed top-[64px] left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer — starts below navbar */}
      <div
        id="mobile-drawer"
        className={`fixed top-[64px] right-0 h-[calc(100%-64px)] w-[280px] bg-[#0a0a0a] border-l border-white/[0.07] z-[95] lg:hidden
          transition-transform duration-300 ease-in-out flex flex-col
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-4 pt-10 pb-5 flex flex-col gap-2">
          {/* Section label */}
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest px-2 mb-4">
            Menu
          </p>

          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact" },
            { path: "/services", label: "Services" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive(path)
                  ? "text-[#00ff88] bg-[#00ff88]/[0.08] border border-[#00ff88]/20"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="shrink-0 px-4 pt-4 pb-6 border-t border-white/[0.07] flex flex-col gap-2">
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest px-1 mb-1">
            Account
          </p>
          <Link
            to="/login"
            className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-medium
              text-white border border-white/[0.12] hover:border-white/30 hover:bg-white/[0.05]
              transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/partner-login"
            className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-medium
              text-white border border-white/[0.12] hover:border-white/30 hover:bg-white/[0.05]
              transition-all duration-200"
          >
            Partner Login
          </Link>
          <Link
            to="/signup"
            className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-bold
              bg-[#00ff88] text-black hover:bg-[#00e07a] transition-all duration-200 mt-1"
            style={{ boxShadow: "0 4px 20px rgba(0,255,136,0.25)" }}
          >
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
}
