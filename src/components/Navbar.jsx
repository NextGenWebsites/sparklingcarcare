import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { BUSINESS_INFO } from "../data/content";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-deep/95 backdrop-blur-lg shadow-xl shadow-black/40"
            : "bg-deep/45"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="Sparkling Car Care – Home">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Sparkling Car Care"
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-brand/30 group-hover:ring-brand/70 group-hover:shadow-brand-glow transition-all duration-300"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-brand rounded-full border-2 border-deep" />
              </div>
              <div className="hidden sm:block">
                <p className="text-snow font-display font-bold text-base leading-tight tracking-wide">
                  Sparkling Car Care
                </p>
                <p className="text-mist text-[10px] uppercase tracking-[0.2em]">
                  Artarmon, Sydney
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[13px] uppercase tracking-[0.15em] font-display font-bold transition-all duration-200 ${
                    isActive(link.path) 
                      ? "text-white underline decoration-brand decoration-2 underline-offset-[6px]" 
                      : "text-snow/60 hover:text-white hover:underline hover:decoration-brand/40 hover:decoration-2 hover:underline-offset-[6px]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6 ml-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2.5 text-snow/90 hover:text-white text-[13px] font-medium tracking-wide transition-colors group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-300">
                  <Phone size={14} className="text-brand" />
                </div>
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="relative flex items-center justify-center bg-brand text-white font-display font-bold uppercase tracking-[0.15em] text-[12px] py-3 px-8 rounded overflow-hidden shadow-[0_0_20px_rgba(47,111,237,0.2)] hover:shadow-[0_0_30px_rgba(47,111,237,0.4)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-snow hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 rounded"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-deep/98 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close row */}
            <div className="flex justify-end p-5 pt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-mist hover:text-brand transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-5 border-b border-white/5 font-display font-bold uppercase tracking-[0.1em] text-3xl transition-colors ${
                      isActive(link.path) ? "text-brand" : "text-snow/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="px-10 pb-12 space-y-3"
            >
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 text-white font-display font-bold uppercase tracking-widest text-[13px] py-4 rounded hover:bg-white/10 transition-colors"
              >
                <Phone size={16} className="text-brand" />
                {BUSINESS_INFO.phone}
              </a>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center justify-center w-full bg-brand text-white font-display font-bold uppercase tracking-[0.15em] text-[13px] py-4 rounded shadow-[0_0_20px_rgba(47,111,237,0.3)] hover:bg-brand-light transition-all"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
