import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

const LocationSection = () => {
  return (
    <section className="py-20 bg-[#0A0C10] border-t border-white/5" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">
            Find Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8FA] font-['Space_Grotesk']">
            Visit Our Workshop
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#14161B] border border-white/8 rounded-xl p-8 flex flex-col gap-8 justify-center"
          >
            <div>
              <h3 className="text-xl font-bold text-[#F7F8FA] mb-6 font-['Space_Grotesk']">
                Sparkling Car Care
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#2F6FED] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#8B93A1] uppercase tracking-wider mb-1">Address</p>
                    <p className="text-[#F7F8FA] text-sm leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[#2F6FED] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#8B93A1] uppercase tracking-wider mb-1">Phone</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneTel}`}
                      className="text-[#F7F8FA] hover:text-[#2F6FED] transition-colors text-sm font-medium"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-[#2F6FED] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#8B93A1] uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-[#F7F8FA] hover:text-[#2F6FED] transition-colors text-sm font-medium"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-xs text-[#8B93A1] uppercase tracking-wider mb-3">Opening Hours</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#8B93A1]">Monday – Friday</span>
                  <span className="text-[#F7F8FA]">10:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B93A1]">Saturday</span>
                  <span className="text-[#F7F8FA]">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B93A1]">Sunday</span>
                  <span className="text-[#8B93A1]">Closed</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2F6FED] hover:text-[#F7F8FA] text-sm font-medium transition-colors"
            >
              Get Directions
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-white/8 shadow-2xl min-h-80"
          >
            <iframe
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sparkling Car Care location – 77/81 Reserve Rd, Artarmon NSW 2064"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
