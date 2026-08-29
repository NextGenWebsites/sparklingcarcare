import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { BUSINESS_INFO } from "../data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#0A0C10] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#F7F8FA] font-['Space_Grotesk'] mb-2">
                Sparkling<br />Car Care
              </h2>
              <p className="text-[#8B93A1] text-sm leading-relaxed max-w-xs">
                Premium automotive detailing services delivering exceptional results for discerning car owners across Sydney.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A0C10] border border-white/10 flex items-center justify-center text-[#F7F8FA] hover:border-[#2F6FED] hover:text-[#2F6FED] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A0C10] border border-white/10 flex items-center justify-center text-[#F7F8FA] hover:border-[#2F6FED] hover:text-[#2F6FED] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={BUSINESS_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A0C10] border border-white/10 flex items-center justify-center text-[#F7F8FA] hover:border-[#2F6FED] hover:text-[#2F6FED] transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Sitemap Column */}
          <div>
            <h3 className="font-bold text-[#F7F8FA] mb-6 uppercase tracking-wider text-xs font-['Space_Grotesk']">
              Sitemap
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "Packages & Pricing", href: "/packages" },
                { label: "Book an Appointment", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#8B93A1] hover:text-[#2F6FED] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-[#F7F8FA] mb-6 uppercase tracking-wider text-xs font-['Space_Grotesk']">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Exterior Detailing",
                "Interior Detailing",
                "Paint Correction",
                "Ceramic Coating",
                "Headlight Restoration",
                "Engine Bay Wash",
                "Odour Removal",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-[#8B93A1] hover:text-[#2F6FED] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-[#F7F8FA] mb-6 uppercase tracking-wider text-xs font-['Space_Grotesk']">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#2F6FED] shrink-0 mt-0.5" size={16} />
                <span className="text-[#8B93A1] text-sm leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#2F6FED] shrink-0 mt-0.5" size={16} />
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="text-[#8B93A1] hover:text-[#2F6FED] transition-colors text-sm"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#2F6FED] shrink-0 mt-0.5" size={16} />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-[#8B93A1] hover:text-[#2F6FED] transition-colors text-sm"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-[#2F6FED] shrink-0 mt-0.5" size={16} />
                <span className="text-[#8B93A1] text-sm leading-relaxed">
                  Mon–Fri: 10AM–6PM<br />Sat: 10AM–3PM<br />Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B93A1] text-xs text-center md:text-left">
            &copy; {currentYear} Sparkling Car Care. All rights reserved.
            <span className="hidden md:inline"> | </span>
            <span className="block md:inline">Car Detailing Artarmon, Sydney NSW</span>
          </p>
          <p className="text-[#8B93A1] text-xs">
            Website by{" "}
            <a
              href="https://www.nextgenwebsites.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F6FED] hover:text-white transition-colors font-medium"
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
