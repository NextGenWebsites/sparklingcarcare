import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { BUSINESS_INFO } from "../data/content";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-overlay border-t border-white/5">
      {/* Gold rule */}
      <div className="gold-rule" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand - 4 cols */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Sparkling Car Care" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/30" />
              <div>
                <p className="font-display font-bold text-snow text-lg leading-snug">Sparkling Car Care</p>
                <p className="text-mist text-xs uppercase tracking-widest">Artarmon, NSW 2064</p>
              </div>
            </Link>
            <p className="text-mist text-sm leading-relaxed max-w-xs">
              Premium automotive detailing for discerning car owners across Sydney. Showroom results, guaranteed.
            </p>
            <div className="flex gap-2">
              {[
                { href: BUSINESS_INFO.instagram, icon: <Instagram size={16} />, label: "Instagram" },
                { href: BUSINESS_INFO.facebook, icon: <Facebook size={16} />, label: "Facebook" },
                { href: BUSINESS_INFO.tiktok, icon: <FaTiktok size={14} />, label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-raised border border-white/8 flex items-center justify-center text-mist hover:text-gold hover:border-gold/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-snow text-sm uppercase tracking-widest mb-5">Navigate</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Packages", to: "/packages" },
                { label: "Book Now", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-mist hover:text-gold text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 3 cols */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-snow text-sm uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                "Exterior Detailing",
                "Interior Detailing",
                "Paint Correction",
                "Ceramic Coating",
                "Headlight Restoration",
                "Engine Bay Wash",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-mist hover:text-gold text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 3 cols */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-snow text-sm uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span className="text-mist text-sm leading-snug">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-mist hover:text-gold text-sm transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-mist hover:text-gold text-sm transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-gold shrink-0 mt-0.5" />
                <span className="text-mist text-sm leading-snug">
                  Mon–Fri 10AM–6PM<br />Sat 10AM–3PM · Sun Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-ghost text-xs text-center sm:text-left">
            &copy; {year} Sparkling Car Care · Car Detailing Artarmon, Sydney NSW
          </p>
          <p className="text-ghost text-xs">
            Website by{" "}
            <a
              href="https://www.nextgenwebsites.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              NextGen Websites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
