import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReviewBack from "../images/background/review_back.jpg";
import { BUSINESS_INFO } from "../data/content";

const services = [
  "Exterior Detailing",
  "Interior Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Headlight Restoration",
  "Engine Bay Wash",
  "Odour Removal",
  "Minor Dent Removal",
];

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", vehicleType: "",
    service: "", message: "", preferredDate: "", preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs
      .sendForm("service_h5nm6us", "template_rwj8y3o", form.current, "nZf_MUQp8PdIr3djs")
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitted(true);
        setLoading(false);
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", vehicleType: "", service: "", message: "", preferredDate: "", preferredTime: "" });
          setSubmitted(false);
        }, 4000);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError("Failed to send your request. Please try again or contact us directly.");
        setLoading(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const inputClass = "w-full bg-[#0A0C10] border border-white/10 rounded-lg px-4 py-3 text-[#F7F8FA] text-sm placeholder-[#8B93A1] focus:outline-none focus:border-[#2F6FED] focus:ring-1 focus:ring-[#2F6FED]/30 transition-all";
  const labelClass = "block text-xs text-[#8B93A1] uppercase tracking-wider mb-2 font-['Space_Grotesk']";

  return (
    <>
      <Helmet>
        <title>Book Car Detailing Artarmon Sydney | Sparkling Car Care Contact</title>
        <meta
          name="description"
          content="Book your car detailing appointment with Sparkling Car Care in Artarmon, Sydney. Call (02) 9438 4988 or use our online booking form. Mon–Fri 10AM–6PM, Sat 10AM–3PM."
        />
        <link rel="canonical" href="https://www.sparklingcarcare.com.au/contact" />
        <meta property="og:title" content="Book Car Detailing Artarmon | Sparkling Car Care" />
        <meta property="og:url" content="https://www.sparklingcarcare.com.au/contact" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparklingcarcare.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.sparklingcarcare.com.au/contact" }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0C10] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F7F8FA] font-['Space_Grotesk']">
              Book Your <span className="text-[#2F6FED]">Detail</span>
            </h1>
            <p className="text-[#8B93A1] text-lg mt-4 max-w-2xl mx-auto">
              Ready to give your car the care it deserves? Fill in the form below or give us a call to schedule your appointment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-[#14161B] border border-white/8 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left — Contact Info + Image */}
              <motion.div variants={itemVariants} className="w-full md:w-5/12 relative min-h-80">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/30 via-[#0A0C10]/60 to-[#0A0C10]/95 z-10" />
                <img
                  src={ReviewBack}
                  alt="Luxury car detailing Artarmon"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-[#F7F8FA]">
                  <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Sparkling Car Care</h3>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-[#2F6FED] shrink-0 mt-0.5" />
                      <span className="text-[#F7F8FA]/80">{BUSINESS_INFO.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-[#2F6FED] shrink-0 mt-0.5" />
                      <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-[#F7F8FA]/80 hover:text-[#2F6FED] transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-[#2F6FED] shrink-0 mt-0.5" />
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#F7F8FA]/80 hover:text-[#2F6FED] transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-[#2F6FED] shrink-0 mt-0.5" />
                      <span className="text-[#F7F8FA]/80">Mon–Fri: 10AM–6PM<br />Sat: 10AM–3PM</span>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-3 mt-8">
                    {[
                      { href: BUSINESS_INFO.facebook, icon: <Facebook size={16} />, label: "Facebook" },
                      { href: BUSINESS_INFO.instagram, icon: <Instagram size={16} />, label: "Instagram" },
                      { href: BUSINESS_INFO.tiktok, icon: <FaTiktok size={14} />, label: "TikTok" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2F6FED] flex items-center justify-center text-white transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.div variants={itemVariants} className="w-full md:w-7/12 p-8 md:p-12 bg-[#14161B]">
                <h2 className="text-2xl font-bold text-[#F7F8FA] mb-8 font-['Space_Grotesk']">
                  Schedule Your Detail
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-900/30 border border-emerald-500/30 p-8 rounded-xl text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-300 mb-2 font-['Space_Grotesk']">Thank You!</h3>
                    <p className="text-emerald-400/80 text-sm">We've received your request and will contact you shortly to confirm your appointment.</p>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <motion.div variants={itemVariants}>
                        <label htmlFor="name" className={labelClass}>Full Name *</label>
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label htmlFor="email" className={labelClass}>Email Address *</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                      </motion.div>
                    </div>

                    {/* Phone + Vehicle */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <motion.div variants={itemVariants}>
                        <label htmlFor="phone" className={labelClass}>Phone Number</label>
                        <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(02) XXXX XXXX" className={inputClass} />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label htmlFor="vehicleType" className={labelClass}>Vehicle Make / Model</label>
                        <input id="vehicleType" type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} placeholder="e.g. Toyota Camry" className={inputClass} />
                      </motion.div>
                    </div>

                    {/* Service */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="service" className={labelClass}>Service Requested</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </motion.div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <motion.div variants={itemVariants}>
                        <label htmlFor="preferredDate" className={labelClass}>Preferred Date</label>
                        <input id="preferredDate" type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className={inputClass} />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label htmlFor="preferredTime" className={labelClass}>Preferred Time</label>
                        <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className={inputClass}>
                          <option value="">Select a time</option>
                          <option value="Morning (10AM-12PM)">Morning (10AM–12PM)</option>
                          <option value="Midday (12PM-2PM)">Midday (12PM–2PM)</option>
                          <option value="Afternoon (2PM-4PM)">Afternoon (2PM–4PM)</option>
                          <option value="Evening (4PM-6PM)">Evening (4PM–6PM)</option>
                        </select>
                      </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="message" className={labelClass}>Additional Information</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us anything else about your vehicle or the service you need..." className={`${inputClass} resize-none`} />
                    </motion.div>

                    {error && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm bg-red-900/20 border border-red-500/30 p-3 rounded-lg">
                        {error}
                      </motion.div>
                    )}

                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#0B3D91] hover:bg-[#2F6FED] disabled:bg-[#0B3D91]/50 text-[#F7F8FA] font-bold rounded-lg transition-colors flex items-center justify-center gap-2 font-['Space_Grotesk']"
                    >
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <>
                          Schedule Appointment
                          <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-[#F7F8FA] mb-6 font-['Space_Grotesk'] text-center">Find Us</h2>
            <div className="rounded-xl overflow-hidden border border-white/8 shadow-2xl h-80">
              <iframe
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sparkling Car Care location – 77/81 Reserve Rd, Artarmon NSW 2064"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
