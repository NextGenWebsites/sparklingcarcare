import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Calendar, ChevronDown, Shield, MapPin, Clock, Star, ArrowRight } from "lucide-react";

import ReviewsSection from "../components/ReviewsSection";
import SlidingGallery from "../components/SlidingGallery";
import LocationSection from "../components/LocationSection";
import AboutUsSection from "../components/AboutUsSection";
import { BUSINESS_INFO } from "../data/content";

const trustStats = [
  { icon: <Star size={24} className="text-[#2F6FED]" />, label: "5-Star Rated", sub: "Hundreds of Google reviews" },
  { icon: <MapPin size={24} className="text-[#2F6FED]" />, label: "Artarmon, Sydney", sub: "Serving all of NSW" },
  { icon: <Clock size={24} className="text-[#2F6FED]" />, label: "Mon–Sat Hours", sub: "10AM–6PM weekdays" },
  { icon: <Shield size={24} className="text-[#2F6FED]" />, label: "Satisfaction Guaranteed", sub: "We take pride in every detail" },
];

const servicePreview = [
  { title: "Exterior Detailing", desc: "Full hand wash, chamois dry, polish and tyre shine.", href: "/services#exterior-detailing" },
  { title: "Interior Detailing", desc: "Deep clean every surface — seats, carpets, dash and vents.", href: "/services#interior-detailing" },
  { title: "Paint Correction", desc: "Remove swirl marks, scratches and oxidation for a flawless finish.", href: "/services#paint-correction" },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Car Detailing Artarmon Sydney | Sparkling Car Care</title>
        <meta
          name="description"
          content="Premium car detailing in Artarmon, Sydney. Expert exterior & interior detailing, paint correction, ceramic coating & more. Book today — (02) 9438 4988."
        />
        <link rel="canonical" href="https://www.sparklingcarcare.com.au/" />
        <meta property="og:title" content="Car Detailing Artarmon Sydney | Sparkling Car Care" />
        <meta property="og:url" content="https://www.sparklingcarcare.com.au/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparklingcarcare.com.au/" }]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0C10]">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Hero image */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source type="image/webp" srcSet="/hero-1280.webp 1280w" sizes="100vw" />
              <img
                src="/hero-1280.webp"
                alt="Professional car detailing in Artarmon Sydney"
                width="1920"
                height="1080"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-[#0A0C10]/75 z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/95 via-[#0A0C10]/60 to-transparent z-0" />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[#F7F8FA] text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#2F6FED]" />
                  Artarmon, NSW · Est. Workshop · 5-Star Rated
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F7F8FA] mb-6 leading-[1.05] font-['Space_Grotesk']">
                  Professional<br />
                  <span className="text-[#2F6FED]">Car Detailing</span>
                </h1>

                <p className="text-lg text-[#8B93A1] mb-10 leading-relaxed max-w-xl">
                  Expert detailing services that restore your vehicle to showroom condition.
                  Serving Artarmon and all of Sydney with premium results you can see.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 bg-[#F7F8FA] text-[#0A0C10] px-8 py-4 rounded font-bold text-lg hover:bg-white transition-colors font-['Space_Grotesk']"
                  >
                    <Phone size={20} />
                    Call Now
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 bg-[#0B3D91] hover:bg-[#2F6FED] text-[#F7F8FA] px-8 py-4 rounded font-bold text-lg transition-colors font-['Space_Grotesk']"
                  >
                    <Calendar size={20} />
                    Book Now
                  </motion.a>
                </div>
              </motion.div>

              {/* Right side review cards — desktop only */}
              <div className="hidden lg:flex flex-col gap-6 w-full justify-center lg:pl-8">
                {[
                  { name: "Ben Hoskins", text: "Just picked up my car and it genuinely looks brand new. Service, attention to detail and value for money all outstanding!" },
                  { name: "Andrew Met.", text: "Wow. Eddie really is amazing at what he does! My 21 year old Landcruiser looked like a brand new 4WD when I picked it up." },
                ].map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    className={`bg-[#0A0C10]/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-2xl ${i % 2 === 0 ? "translate-x-4" : "-translate-x-4"}`}
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} className="fill-yellow-400 text-yellow-400" size={14} />)}
                    </div>
                    <p className="text-[#F7F8FA] mb-3 leading-relaxed italic text-sm">"{r.text}"</p>
                    <p className="text-[#2F6FED] font-semibold text-xs uppercase tracking-wider font-['Space_Grotesk']">— {r.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown size={28} className="text-[#F7F8FA]/50" />
          </motion.div>
        </section>

        {/* ── Trust Bar ────────────────────────────────────────────────── */}
        <section className="border-y border-white/5 bg-[#14161B] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {stat.icon}
                  <div>
                    <h3 className="font-bold text-sm text-[#F7F8FA] font-['Space_Grotesk']">{stat.label}</h3>
                    <p className="text-[#8B93A1] text-xs mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About + Features ─────────────────────────────────────────── */}
        <AboutUsSection />

        {/* ── Services Preview ─────────────────────────────────────────── */}
        <section className="py-24 bg-[#14161B] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:flex md:justify-between md:items-end">
              <div className="max-w-2xl">
                <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">What We Offer</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#F7F8FA] mb-4 font-['Space_Grotesk']">Our Services</h2>
                <p className="text-[#8B93A1] text-lg">
                  Comprehensive detailing solutions tailored to every vehicle's needs.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#2F6FED] font-medium hover:text-white transition-colors text-sm"
                >
                  View all services <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {servicePreview.map((s) => (
                <div
                  key={s.title}
                  className="group relative bg-[#0A0C10] border border-white/5 rounded-xl p-8 hover:border-[#2F6FED]/50 hover:shadow-lg hover:shadow-[#2F6FED]/5 transition-all duration-300"
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-[#2F6FED]" size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-[#F7F8FA] mb-3 font-['Space_Grotesk']">{s.title}</h3>
                  <p className="text-[#8B93A1] text-sm leading-relaxed">{s.desc}</p>
                  <a href={s.href} className="absolute inset-0 z-10">
                    <span className="sr-only">View {s.title} details</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ──────────────────────────────────────────────────── */}
        <ReviewsSection />

        {/* ── Gallery ──────────────────────────────────────────────────── */}
        <SlidingGallery />

        {/* ── Location ─────────────────────────────────────────────────── */}
        <LocationSection />
      </div>
    </>
  );
};

export default Home;
