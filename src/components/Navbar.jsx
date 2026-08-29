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
            ? "bg-deep/95 backdrop-blur-lg shadow-xl shadow-black/40 border-b border-white/5"
            : "bg-transparent"
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
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/30 group-hover:ring-gold/70 transition-all duration-300"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gold rounded-full border-2 border-deep" />
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
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    isActive(link.path) ? "text-gold" : "text-snow/70 hover:text-snow"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2 text-mist hover:text-snow text-sm transition-colors"
              >
                <Phone size={14} className="text-gold" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="btn-gold text-xs py-2.5 px-5">
                Book Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-snow hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40 rounded"
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
            className="md:hidden fixed inset-0 z-40 bg-deep flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close row */}
            <div className="flex justify-end p-5 pt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-mist hover:text-gold transition-colors"
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
                    className={`block py-5 border-b border-white/5 font-display font-bold text-4xl transition-colors ${
                      isActive(link.path) ? "text-gold" : "text-snow/80 hover:text-snow"
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
                className="btn-outline w-full text-base py-4"
              >
                <Phone size={18} />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-gold w-full text-base py-4">
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
