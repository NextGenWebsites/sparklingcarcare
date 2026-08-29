import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Home, Wrench, Package, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import LogoImg from "../../public/logo.png";
import { BUSINESS_INFO } from "../data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Services", path: "/services", icon: <Wrench size={18} /> },
    { name: "Packages", path: "/packages", icon: <Package size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0C10]/95 backdrop-blur-md shadow-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Sparkling Car Care – Home"
            >
              <img
                src={LogoImg}
                alt="Sparkling Car Care Logo"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#2F6FED]/50 transition-all duration-300"
              />
              <span className="text-xl font-bold text-[#F7F8FA] font-['Space_Grotesk'] hidden sm:block">
                Sparkling Car Care
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#2F6FED] ${
                    isActive(link.path)
                      ? "text-[#2F6FED]"
                      : "text-[#F7F8FA]"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Call Now CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="sheen-sweep flex items-center gap-2 bg-[#0B3D91] hover:bg-[#2F6FED] text-[#F7F8FA] px-5 py-2.5 rounded font-semibold text-sm transition-colors duration-200 font-['Space_Grotesk']"
              >
                <Phone size={15} />
                {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#F7F8FA] hover:text-[#2F6FED] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F6FED] focus:ring-inset rounded"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[72px] bg-[#0A0C10] z-40 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-4 pb-12 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-lg text-base font-medium border-b border-white/5 transition-colors ${
                    isActive(link.path)
                      ? "text-[#2F6FED] bg-[#2F6FED]/10"
                      : "text-[#F7F8FA] hover:text-[#2F6FED] hover:bg-white/5"
                  }`}
                >
                  <span className="text-[#2F6FED]">{link.icon}</span>
                  {link.name}
                </a>
              ))}
              <div className="pt-6 px-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full text-center font-bold bg-[#0B3D91] hover:bg-[#2F6FED] text-[#F7F8FA] px-5 py-4 rounded transition-colors font-['Space_Grotesk']"
                >
                  <Phone size={20} />
                  Call Now: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
