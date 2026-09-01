import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ceramicCoatingImg    from "@/images/service_img/ceramic-coating.webp";
import carWashImg           from "@/images/service_img/carwash.webp";
import engineBayWash        from "@/images/service_img/engine_bay_wash.webp";
import shampoo_carpet       from "@/images/service_img/shampoo_carpet.webp";
import headlight_restoration from "@/images/service_img/headlight_restoration.webp";
import car_dent_removal     from "@/images/service_img/car_dent_removal.webp";
import paint_correction     from "@/images/service_img/paint_correction.webp";
import ServiceBack          from "@/images/background/service-page-bg.png";
import ctaBg                from "@/images/background/service-cta-bg.png";
import { BUSINESS_INFO }    from "../data/content";

const services = [
  { id: "ceramic-coating",     num: "01", title: "Ceramic Coating",       img: ceramicCoatingImg,     desc: "Bond a durable hydrophobic layer to your paintwork that repels water, dirt and UV rays. Fewer washes, better gloss, and lasting protection for years to come.", flip: false },
  { id: "scratch-dent-repair", num: "02", title: "Scratch, Dent & Paint Repair", img: car_dent_removal,      desc: "Comprehensive bodywork restoration, including professional paintwork and full panel resprays. We seamlessly repair scratches, scuffs, and collision damage to return your vehicle to a factory finish.", flip: true },
  { id: "exterior-detailing",  num: "03", title: "Exterior Detailing",    img: carWashImg,            desc: "We bring your vehicle's shine back to life with a thorough wash, clay bar treatment, hand polish and protective wax. More than a wash - a full rejuvenation of your car's outer appearance.", flip: false },
  { id: "interior-detailing",  num: "04", title: "Interior Detailing",    img: "https://www.thedetailingexperts.com.au/wp-content/uploads/2022/04/Mass-blog-header-template-01-2.png", desc: "Deep clean every surface - seats, carpets, dashboards and vents. We restore, sanitise and refresh leather, fabric and plastic surfaces to a like-new condition.", flip: true },
  { id: "paint-correction",    num: "05", title: "Paint Correction",      img: paint_correction,      desc: "Carefully remove swirl marks, scratches and oxidation using machine polishing techniques. The result is a flawless, mirror-like finish that transforms any car.", flip: false },
  { id: "odour-removal",       num: "06", title: "Odour Removal",         img: shampoo_carpet,        desc: "Neutralise stubborn smells at the source - smoke, pet, food or mildew. We don't mask odours, we eliminate them, leaving your cabin smelling genuinely fresh.", flip: true },
  { id: "headlight-restoration",num:"07", title: "Headlight Restoration", img: headlight_restoration, desc: "Restore cloudy or yellowed lenses to crystal clarity, improving nighttime visibility and giving your car that clean, looked-after appearance.", flip: false },
  { id: "engine-bay-wash",     num: "08", title: "Engine Bay Wash",       img: engineBayWash,         desc: "A clean engine bay makes maintenance easier and helps spot issues early. We carefully degrease and rinse the compartment without harming sensitive components.", flip: true },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Car Detailing",
  "provider": { "@type": "AutoBodyShop", "name": "Sparkling Car Care" },
  "areaServed": { "@type": "City", "name": "Sydney" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Detailing Services",
    "itemListElement": services.map((s, i) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc },
      "position": i + 1,
    })),
  },
};

const ServicePage = () => (
  <>
    <Helmet>
      <title>Car Detailing Services Artarmon Sydney | Sparkling Car Care</title>
      <meta name="description" content="Expert car detailing services in Artarmon, Sydney. Exterior & interior detailing, paint correction, ceramic coating, headlight restoration, engine bay wash & more." />
      <link rel="canonical" href="https://www.sparklingcarcare.com.au/services" />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>

    <div className="bg-deep text-snow">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={ServiceBack} alt="Car detailing services Artarmon" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/65 to-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-snow mt-3">
              Our Services
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── Intro strip ──────────────────────────────────────────────── */}
      <div className="bg-surface py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <p className="text-mist leading-relaxed max-w-2xl text-sm md:text-base">
            From a quick refresh to a full transformation - we offer eight professional detailing services
            tailored to any vehicle, any condition, any budget.
          </p>
          <div className="shrink-0">
            <Link to="/packages" className="btn-brand text-xs whitespace-nowrap">
              View Pricing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Services list ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 space-y-24">
        {services.map((s) => (
          <motion.div
            key={s.id}
            id={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-24 ${s.flip ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl border border-white/6 shadow-2xl group">
              <img
                src={s.img}
                alt={`${s.title} – Sparkling Car Care Artarmon`}
                loading="lazy"
                decoding="async"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* service number badge */}
              <div className="absolute top-4 left-4 w-11 h-11 rounded-lg bg-deep/80 backdrop-blur border border-brand/30 flex items-center justify-center">
                <span className="font-mono text-brand text-xs font-bold">{s.num}</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="brand-rule flex-1" />
                <span className="font-mono text-brand-dim text-xs tracking-widest">{s.num}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-snow mb-5">
                {s.title}
              </h2>
              <p className="text-mist leading-relaxed mb-8 text-base">{s.desc}</p>
              <Link to="/packages" className="btn-brand text-xs">
                View Pricing <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Book CTA strip ───────────────────────────────────────────── */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaBg} alt="Ready to transform your vehicle" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-deep/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/90 to-deep/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/60 to-deep/20" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <span className="section-label block mb-4">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-snow mb-5">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-white mb-10 text-lg max-w-lg mx-auto leading-relaxed">
            Book your appointment today and experience our premium detailing services in Artarmon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-brand text-sm px-10 py-4">
              Book an Appointment <ArrowRight size={16} />
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="btn-outline text-sm px-10 py-4">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ServicePage;
