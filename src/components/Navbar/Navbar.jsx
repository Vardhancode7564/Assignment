import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { services } from "../../data/servicesData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
              className="w-9 h-9 rounded-lg object-cover mix-blend-screen"
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

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-white/[0.07] z-[95] lg:hidden
          transition-transform duration-400 pt-20 px-6 pb-6 overflow-y-auto
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block py-3 text-base font-medium border-b border-white/[0.06] transition-colors
                ${isActive(path) ? "text-[#00ff88]" : "text-gray-400 hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
          <div className="border-b border-white/[0.06]">
            <button
              className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-400"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 pb-2 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    to="/services"
                    className="text-sm text-gray-500 hover:text-[#00ff88] py-1.5 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <Link to="/login" className="btn-secondary !justify-center">
            Login
          </Link>
          <Link to="/partner-login" className="btn-secondary !justify-center">
            Partner Login
          </Link>
          <Link to="/signup" className="btn-primary !justify-center">
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
}
