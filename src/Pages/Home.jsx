import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Calendar, ChevronDown, ArrowRight, Wrench, Droplets, Sparkles, Layers } from "lucide-react";
import { Link } from "react-router-dom";

import ReviewsSection from "../components/ReviewsSection";
import SlidingGallery from "../components/SlidingGallery";
import LocationSection from "../components/LocationSection";
import AboutUsSection from "../components/AboutUsSection";
import { BUSINESS_INFO } from "../data/content";

import featuredBg from "@/images/service_img/featured_services_bg.png";
import heroBg from "@/images/background/hero_bg.png";

/* ── Service preview data ───────────────────────────────────────────────── */
const serviceCards = [
  {
    num: "01",
    icon: <Layers size={24} />,
    title: "Ceramic Coating",
    desc: "Years of extreme gloss and paint protection. Hydrophobic, UV resistant, and easier to clean.",
    href: "/services#ceramic-coating",
  },
  {
    num: "02",
    icon: <Wrench size={24} />,
    title: "Scratch & Dent Repair",
    desc: "Seamlessly repair minor scratches, scuffs, and panel dents without a full respray.",
    href: "/services#scratch-dent-repair",
  },
  {
    num: "03",
    icon: <Droplets size={24} />,
    title: "Premium Detailing",
    desc: "From paint correction to deep interior cleaning, we restore your vehicle to showroom condition.",
    href: "/services#exterior-detailing",
  },
];

/* ── Trust stats ────────────────────────────────────────────────────────── */
const stats = [
  { num: "500+", label: "Satisfied Customers" },
  { num: "5★",   label: "Google Rating" },
  { num: "8+",   label: "Expert Services" },
  { num: "100%", label: "Satisfaction Guaranteed" },
];

const Home = () => (
  <>
    <Helmet>
      <title>Ceramic Coating & Paint Repair Sydney | Sparkling Car Care</title>
      <meta
        name="description"
        content="Sydney's specialists in Ceramic Coating, Scratch & Dent Repair, and Premium Car Detailing. Expert paint correction and detailing in Artarmon. Book today - (02) 9438 4988."
      />
      <link rel="canonical" href="https://www.sparklingcarcare.com.au/" />
    </Helmet>

    <main className="bg-deep text-snow">

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[640px] flex flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Ceramic coating and scratch repair in Artarmon Sydney"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
          {/* Layered overlays: bottom-heavy, slight warm tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/30 to-transparent" />
        </div>

        {/* Content - anchored bottom-left */}
        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pb-20 md:pb-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/8 backdrop-blur border border-white/15 rounded-full text-xs text-snow/80 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Artarmon, Sydney NSW
              </div>

              {/* Heading */}
              <h1 className="font-display font-black text-snow mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.04 }}>
                Protect & <br />
                <span className="text-gradient-brand">Restore</span>
              </h1>
              <p className="text-snow/60 text-lg leading-relaxed mb-10 max-w-lg">
                Sydney's specialists in professional Ceramic Coating, seamless Scratch & Dent Repair, and Premium Detailing. Flawless finishes, guaranteed.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-brand">
                  <Calendar size={16} />
                  Book Appointment
                </Link>
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="btn-outline">
                  <Phone size={16} />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-snow/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[9px] uppercase tracking-widest">Scroll</span>
          <div className="animate-float">
            <ChevronDown size={20} />
          </div>
        </motion.div>

        {/* Vertical brand text (right edge, desktop) */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 text-snow/15"
          aria-hidden="true"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <p className="rotate-90 text-[9px] tracking-[0.35em] uppercase whitespace-nowrap font-display">
            Car Care · Artarmon · Since 2020
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface border-y border-white/6 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="px-6 py-4 first:pl-0 last:pr-0 text-center sm:text-left"
              >
                <p className="text-gradient-brand font-display font-black text-3xl md:text-4xl mb-1">{s.num}</p>
                <p className="text-mist text-xs uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ABOUT + FEATURES
      ══════════════════════════════════════════════════════════════════ */}
      <AboutUsSection />

      {/* ══════════════════════════════════════════════════════════════════
          SERVICES PREVIEW
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-deep relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={featuredBg}
            alt="Premium Detailing Background"
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
            loading="lazy"
            decoding="async"
          />
          {/* Fades to blend with surrounding sections */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-deep/40" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep to-transparent opacity-80" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <span className="section-label">What We Offer</span>
              <div className="flex items-start gap-4 mt-3">
                <span className="brand-bar" />
                <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
                  Featured Services
                </h2>
              </div>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-light text-sm font-medium transition-colors shrink-0"
            >
              View all services <ArrowRight size={15} />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {serviceCards.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 relative overflow-hidden group"
              >
                {/* Watermark number */}
                <span
                  className="absolute -top-2 -right-3 font-display font-black text-8xl select-none pointer-events-none"
                  style={{ color: "transparent", WebkitTextStroke: "1px rgba(200,145,26,0.1)" }}
                >
                  {s.num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  {s.icon}
                </div>

                <h3 className="font-display font-bold text-xl text-snow mb-3">{s.title}</h3>
                <p className="text-mist text-sm leading-relaxed mb-6">{s.desc}</p>

                <Link
                  to={s.href}
                  className="inline-flex items-center gap-1.5 text-brand hover:text-brand-light text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* All services CTA */}
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline text-sm">
              View All 8 Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FULL-WIDTH BANNER CTA
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative py-20 overflow-hidden bg-surface border-y border-white/6">
        {/* Diagonal gold glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, #2F6FED, transparent)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <span className="section-label mb-4 block">Ready to Book?</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-snow mb-6">
            Your Car Deserves the Best
          </h2>
          <p className="text-mist text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Join hundreds of satisfied Sydney car owners. Book your detailing appointment today
            and experience the Sparkling difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-brand text-base px-10 py-4">
              <Calendar size={18} />
              Book Now
            </Link>
            <Link to="/packages" className="btn-outline text-base px-10 py-4">
              View Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════════════════════════════════ */}
      <ReviewsSection />

      {/* ══════════════════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════════════════ */}
      <SlidingGallery />

      {/* ══════════════════════════════════════════════════════════════════
          LOCATION
      ══════════════════════════════════════════════════════════════════ */}
      <LocationSection />
    </main>
  </>
);

export default Home;
