import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReviewBack from "../images/background/review_back.jpg";
import { BUSINESS_INFO } from "../data/content";

const services = [
  "Scratch & Dent Repair", "Exterior Detailing", "Interior Detailing", "Paint Correction",
  "Ceramic Coating", "Headlight Restoration", "Engine Bay Wash",
  "Odour Removal",
];

const socialLinks = [
  { href: BUSINESS_INFO.facebook,  icon: <Facebook size={15} />, label: "Facebook" },
  { href: BUSINESS_INFO.instagram, icon: <Instagram size={15} />, label: "Instagram" },
  { href: BUSINESS_INFO.tiktok,    icon: <FaTiktok size={13} />, label: "TikTok" },
];

const ContactPage = () => {
  const form = useRef();
  const [data, setData] = useState({
    name: "", email: "", phone: "", vehicleType: "",
    service: "", message: "", preferredDate: "", preferredTime: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onChange = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .sendForm("service_h5nm6us", "template_rwj8y3o", form.current, "nZf_MUQp8PdIr3djs")
      .then(() => {
        setStatus("success");
        setTimeout(() => {
          setData({ name:"",email:"",phone:"",vehicleType:"",service:"",message:"",preferredDate:"",preferredTime:"" });
          setStatus("idle");
        }, 4000);
      })
      .catch(() => setStatus("error"));
  };

  const labelCls = "block text-[10px] font-display font-bold text-mist uppercase tracking-widest mb-1.5";

  return (
    <>
      <Helmet>
        <title>Book Car Detailing Artarmon Sydney | Sparkling Car Care Contact</title>
        <meta name="description" content="Book your car detailing appointment with Sparkling Car Care in Artarmon, Sydney. Call (02) 9438 4988 or use our online form. Mon–Fri 10AM–6PM, Sat 10AM–3PM." />
        <link rel="canonical" href="https://www.sparklingcarcare.com.au/contact" />
      </Helmet>

      <div className="bg-deep text-snow min-h-screen pt-20">

        {/* ── Page header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-20"
        >
          <span className="section-label">Get In Touch</span>
          <div className="flex items-start gap-5 mt-3">
            <span className="brand-bar mt-1" />
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-snow">
                Book Your Appointment
              </h1>
              <p className="text-mist mt-4 max-w-xl text-base leading-relaxed">
                Fill in the form and we'll be in touch to confirm your booking. Alternatively, call us
                directly for same-day inquiries.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Main content ─────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
          <div className="grid lg:grid-cols-5 gap-6">

            {/* ── Left panel ─── 2/5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 bg-surface rounded-xl border border-white/6 overflow-hidden"
            >
              {/* Image + dark overlay */}
              <div className="relative h-52 overflow-hidden">
                <img src={ReviewBack} alt="Sparkling Car Care Artarmon" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-deep/20 to-surface" />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="brand-rule mb-6" />
                  <h2 className="font-display font-bold text-snow text-xl mb-1">Sparkling Car Care</h2>
                  <p className="text-mist text-sm">Premium Detailing · Artarmon, Sydney</p>
                </div>

                {/* Contact details */}
                <div className="space-y-4">
                  {[
                    { icon: <MapPin size={15} />, label: "Address", value: BUSINESS_INFO.address, href: null },
                    { icon: <Phone size={15} />,  label: "Phone",   value: BUSINESS_INFO.phone,   href: `tel:${BUSINESS_INFO.phoneTel}` },
                    { icon: <Mail size={15} />,   label: "Email",   value: BUSINESS_INFO.email,   href: `mailto:${BUSINESS_INFO.email}` },
                    { icon: <Clock size={15} />,  label: "Hours",   value: "Mon–Fri 10AM–6PM · Sat 10AM–3PM", href: null },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 text-brand">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-ghost uppercase tracking-wider mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-snow text-sm hover:text-brand transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-snow text-sm">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-ghost uppercase tracking-widest mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-raised border border-white/8 flex items-center justify-center text-mist hover:text-brand hover:border-brand/40 transition-all"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Form ─── 3/5 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 bg-surface rounded-xl border border-white/6 p-8 md:p-10"
            >
              <h2 className="font-display font-bold text-snow text-2xl mb-8">Schedule Your Detail</h2>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-64 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand/15 border-2 border-brand/40 flex items-center justify-center text-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-snow text-xl">Request Sent!</h3>
                  <p className="text-mist text-sm max-w-xs">We'll contact you shortly to confirm your appointment. Thank you!</p>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={onSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelCls}>Full Name *</label>
                      <input id="name" name="name" type="text" required value={data.name} onChange={onChange} placeholder="Your name" className="field" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>Email Address *</label>
                      <input id="email" name="email" type="email" required value={data.email} onChange={onChange} placeholder="you@example.com" className="field" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelCls}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="(02) XXXX XXXX" className="field" />
                    </div>
                    <div>
                      <label htmlFor="vehicleType" className={labelCls}>Vehicle Make / Model</label>
                      <input id="vehicleType" name="vehicleType" type="text" value={data.vehicleType} onChange={onChange} placeholder="e.g. Toyota Camry" className="field" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelCls}>Service Required</label>
                    <select id="service" name="service" value={data.service} onChange={onChange} className="field">
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {data.service === "Scratch & Dent Repair" && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                        <div className="bg-brand/10 border border-brand/20 p-4 rounded-lg">
                          <p className="text-sm text-snow leading-relaxed text-center">
                            For an accurate quote, please email us directly with photos of the damage to <a href={`mailto:${BUSINESS_INFO.email}?subject=Scratch & Dent Repair Quote`} className="text-brand font-medium hover:underline">{BUSINESS_INFO.email}</a>, or continue with the form below and we will contact you.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="preferredDate" className={labelCls}>Preferred Date</label>
                      <input id="preferredDate" name="preferredDate" type="date" value={data.preferredDate} onChange={onChange} className="field" />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className={labelCls}>Preferred Time</label>
                      <select id="preferredTime" name="preferredTime" value={data.preferredTime} onChange={onChange} className="field">
                        <option value="">Select a time…</option>
                        <option value="Morning (10AM-12PM)">Morning (10AM–12PM)</option>
                        <option value="Midday (12PM-2PM)">Midday (12PM–2PM)</option>
                        <option value="Afternoon (2PM-4PM)">Afternoon (2PM–4PM)</option>
                        <option value="Evening (4PM-6PM)">Evening (4PM–6PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>Additional Notes</label>
                    <textarea id="message" name="message" rows={4} value={data.message} onChange={onChange} placeholder="Anything else we should know about your vehicle…" className="field resize-none" />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm bg-red-900/20 border border-red-500/30 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-brand w-full justify-center text-sm py-4 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <>Send Booking Request <Send size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* ── Map ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 rounded-xl overflow-hidden border border-white/6 shadow-2xl h-72 md:h-80"
          >
            <iframe
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sparkling Car Care - 77/81 Reserve Rd, Artarmon NSW 2064"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
