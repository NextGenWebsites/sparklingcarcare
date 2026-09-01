import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday",         time: "10:00 AM – 3:00 PM" },
  { day: "Sunday",           time: "Closed" },
];

const LocationSection = () => (
  <section className="py-20 bg-gradient-to-b from-surface to-deep" id="location">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="section-label">Find Us</span>
        <div className="flex items-start gap-4 mt-3">
          <span className="brand-bar" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
            Visit Our Workshop
          </h2>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6 items-stretch">
        {/* Info card - 2/5 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-surface border border-white/6 rounded-xl p-8 flex flex-col gap-8 justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-mist uppercase tracking-wider mb-1">Workshop Address</p>
                <p className="text-snow text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-mist uppercase tracking-wider mb-1">Phone</p>
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-snow text-sm hover:text-brand transition-colors font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-mist uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-snow text-sm hover:text-brand transition-colors font-medium">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="border-t border-white/5 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={14} className="text-brand" />
              <p className="text-xs text-mist uppercase tracking-wider">Opening Hours</p>
            </div>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-mist">{h.day}</span>
                  <span className={h.time === "Closed" ? "text-ghost" : "text-snow"}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-light text-sm font-medium transition-colors"
          >
            Get Directions <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Map - 3/5 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-xl overflow-hidden border border-white/6 shadow-2xl min-h-72"
        >
          <iframe
            src={BUSINESS_INFO.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: 320 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sparkling Car Care - 77/81 Reserve Rd, Artarmon NSW 2064"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
