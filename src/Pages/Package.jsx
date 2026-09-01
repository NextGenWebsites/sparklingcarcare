import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, Sparkles, Shield, Car, ArrowRight, Clock, Wrench, Layers, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceBack from "@/images/background/pricing_bg.png";
import processBg   from "@/images/background/pricing_process_bg.png";
import { PACKAGES_LIST, BUSINESS_INFO, SERVICE_PRICING } from "../data/content";

import dentImg1 from "@/images/gallery/IMG_0110.webp";
import dentImg2 from "@/images/gallery/IMG_0320.webp";
import dentImg3 from "@/images/gallery/IMG_1212.webp";
import dentImg4 from "@/images/gallery/IMG_1221.webp";

/* Tier configuration */
const tierConfig = {
  entry:   { label: "Essential",  ring: "border-white/10",             badge: "text-mist bg-raised" },
  mid:     { label: "Popular",    ring: "border-white/15",             badge: "text-snow bg-raised" },
  premium: { label: "Premium",    ring: "border-brand/50 shadow-brand-glow", badge: "text-deep bg-brand" },
};

const TierIcon = ({ tier }) => {
  if (tier === "premium") return <Sparkles size={20} className="text-brand" />;
  if (tier === "mid")     return <Shield   size={20} className="text-snow" />;
  return                         <Car      size={20} className="text-mist" />;
};

const GallerySlider = ({ images }) => {
  const [idx, setIdx] = React.useState(0);
  
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] text-ghost uppercase tracking-widest font-bold">Recent Restorations</p>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-mist font-mono">{String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
          <div className="flex gap-1">
            <button onClick={prev} className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-mist hover:bg-white/5 transition-colors text-xs">{"<"}</button>
            <button onClick={next} className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-mist hover:bg-white/5 transition-colors text-xs">{">"}</button>
          </div>
        </div>
      </div>
      
      <div className="aspect-[16/9] rounded-lg border border-dashed border-white/20 p-2 relative overflow-hidden bg-deep/50">
        <img src={images[idx]} alt="Restoration" className="w-full h-full object-cover rounded-md" />
      </div>
      
      <div className="flex gap-2 justify-center mt-5">
        {images.map((_, i) => (
          <div key={i} className={`h-0.5 rounded-full transition-all duration-300 ${i === idx ? 'w-12 bg-brand' : 'w-10 bg-white/10'}`} />
        ))}
      </div>
    </div>
  );
};

const processSteps = [
  { n: "01", icon: <Car size={28} />,    title: "Inspection",     desc: "We assess your vehicle's condition and identify areas needing attention." },
  { n: "02", icon: <Wrench size={28} />, title: "Preparation",    desc: "Pre-cleaning, product selection and setup of professional equipment." },
  { n: "03", icon: <Droplets size={28}/>,title: "Detailing",      desc: "Meticulous treatment of every surface, inside and out." },
  { n: "04", icon: <Check size={28} />,  title: "Quality Check",  desc: "Final inspection to ensure everything meets our premium standard." },
];

const Package = () => (
  <>
    <Helmet>
      <title>Car Detailing Packages & Pricing | Sparkling Car Care Artarmon</title>
      <meta name="description" content="Transparent car detailing packages in Artarmon, Sydney. Express Wash from $30, Full Detail from $298. Sedan and SUV pricing available. Book today." />
      <link rel="canonical" href="https://www.sparklingcarcare.com.au/packages" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.sparklingcarcare.com.au/" },
          { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://www.sparklingcarcare.com.au/packages" }
        ]
      })}</script>
    </Helmet>

    <div className="bg-deep text-snow">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <img src={ServiceBack} alt="Car detailing packages pricing Artarmon" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/65 to-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/85 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Pricing</span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-snow mt-2">
              Packages & Pricing
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── Pricing notice ───────────────────────────────────────────── */}
      <div className="bg-surface py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center gap-3">
          <Clock size={14} className="text-brand shrink-0" />
          <p className="text-mist text-sm">
            All prices are indicative and may vary based on vehicle size and condition.
            <span className="text-brand ml-1 font-medium">We'll confirm your exact quote before starting.</span>
          </p>
        </div>
      </div>

      {/* ── Package grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label block mb-4">Specialist Services</span>
          <div className="flex items-center justify-center gap-4">
            <span className="brand-bar" style={{ height: 32 }} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
              Protection & Repair
            </h2>
            <span className="brand-bar" style={{ height: 32 }} />
          </div>
        </motion.div>

        {/* Specialist Services Custom Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          
          {/* 01: Ceramic Coating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-white/6 rounded-xl p-8 md:p-10 shadow-2xl relative flex flex-col"
          >
            {/* Top-left corner accent */}
            <div className="absolute top-0 left-0 w-32 h-1 bg-brand rounded-tl-xl" />
            <div className="absolute top-0 left-0 w-1 h-32 bg-brand rounded-tl-xl" />
            
            {/* Watermark */}
            <div className="absolute top-8 right-8 text-6xl font-black text-white/5 select-none pointer-events-none">01</div>
            
            <div className="relative z-10">
              <p className="text-[10px] text-mist font-bold uppercase tracking-widest mb-3">Fixed Pricing</p>
              <h3 className="font-display font-bold text-snow text-3xl mb-6">{SERVICE_PRICING.ceramicCoating.label}</h3>
              <p className="text-mist text-sm leading-relaxed max-w-sm mb-12">{SERVICE_PRICING.ceramicCoating.note}</p>
            </div>

            <div className="mt-auto relative z-10">
              <div className="space-y-4">
                {SERVICE_PRICING.ceramicCoating.tiers.map((tier) => (
                  <div key={tier.label} className="flex justify-between items-center py-4 border-t border-white/5 group">
                    <div>
                      <p className="text-snow text-base font-bold group-hover:text-brand transition-colors">{tier.label}</p>
                      <p className="text-ghost text-xs mt-1">{tier.note}</p>
                    </div>
                    <span className="font-mono text-brand font-bold text-xl shrink-0 ml-4">{tier.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <p className="text-[10px] text-mist/60 italic max-w-[150px] leading-tight">{SERVICE_PRICING.ceramicCoating.disclaimer}</p>
                <Link to="/contact" className="btn-outline text-xs px-6 py-2.5">
                  ENQUIRE NOW
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 02: Scratch & Dent Repair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border border-white/6 rounded-xl p-8 md:p-10 shadow-2xl relative flex flex-col"
          >
            {/* Top-left corner accent */}
            <div className="absolute top-0 left-0 w-32 h-1 bg-brand rounded-tl-xl" />
            <div className="absolute top-0 left-0 w-1 h-32 bg-brand rounded-tl-xl" />
            
            {/* Watermark */}
            <div className="absolute top-8 right-8 text-6xl font-black text-white/5 select-none pointer-events-none">02</div>
             
            <div className="relative z-10 mb-8">
              <p className="text-[10px] text-mist font-bold uppercase tracking-widest mb-3">Custom Quote</p>
              <h3 className="font-display font-bold text-snow text-3xl mb-6">{SERVICE_PRICING.scratchDentRepair.label}</h3>
              <p className="text-mist text-sm leading-relaxed mb-6">
                {SERVICE_PRICING.scratchDentRepair.note}
              </p>
              <p className="text-mist text-sm leading-relaxed mb-10">
                Due to the unique nature of every scratch, dent, and paint defect, we provide custom quotes based on the actual damage.
              </p>

              <div className="flex flex-col gap-4 max-w-sm">
                <a 
                  href={`mailto:${BUSINESS_INFO.email}?subject=Scratch & Dent Repair Quote`}
                  className="bg-brand hover:bg-brand-light text-deep font-bold text-[10px] px-6 py-3.5 rounded text-center transition-colors uppercase tracking-wider"
                >
                  Get a Free Quote (Email Photos)
                </a>
                <a 
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="border border-white/20 hover:border-brand text-snow hover:text-brand font-bold text-[10px] px-6 py-3.5 rounded text-center transition-colors uppercase tracking-wider"
                >
                  Call Us: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <GallerySlider images={[dentImg1, dentImg2, dentImg3, dentImg4]} />
            </div>
          </motion.div>
        </div>

        {/* ── Detailing Packages ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label block mb-4">Wash & Detail Packages</span>
          <div className="flex items-center justify-center gap-4">
            <span className="brand-bar" style={{ height: 32 }} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
              Our Detailing Packages
            </h2>
            <span className="brand-bar" style={{ height: 32 }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PACKAGES_LIST.map((pkg, i) => {
            const tc = tierConfig[pkg.tier];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative bg-surface border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${tc.ring} ${pkg.popular ? "shadow-lg shadow-brand/10" : ""}`}
              >
                {/* Popular banner */}
                {pkg.popular && (
                  <div className="bg-brand text-deep text-[10px] font-display font-black uppercase tracking-[0.2em] text-center py-1.5">
                    ★ Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="h-40 overflow-hidden shrink-0">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} car detailing Artarmon`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-raised border border-white/8 flex items-center justify-center">
                        <TierIcon tier={pkg.tier} />
                      </div>
                      <div>
                        <p className="font-display font-bold text-snow text-base">{pkg.title}</p>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-display uppercase tracking-wider ${tc.badge}`}>
                          {tc.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-white/6">
                    <p className="font-mono text-brand font-bold text-lg">{pkg.price}</p>
                  </div>

                  <p className="text-mist text-sm leading-relaxed mb-5">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-7 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-snow/80">
                        <Check size={13} className="text-brand shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={pkg.tier === "premium" ? "btn-brand w-full justify-center text-xs" : "btn-outline w-full justify-center text-xs"}
                  >
                    Book This Package
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Process section ──────────────────────────────────────────── */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={processBg} alt="Our detailing process" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-deep/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label block mb-3">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
              The Detailing Process
            </h2>
          </div>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Number circle */}
                  <div className="w-16 h-16 rounded-full bg-raised border-2 border-brand/30 flex items-center justify-center text-brand mb-5 relative z-10 hover:border-brand hover:shadow-lg hover:shadow-brand/15 transition-all duration-300">
                    {step.icon}
                  </div>
                  <p className="font-mono text-brand-dim text-xs mb-2 tracking-widest">{step.n}</p>
                  <h3 className="font-display font-bold text-snow mb-2">{step.title}</h3>
                  <p className="text-mist text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-snow mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-mist mb-10 text-lg max-w-lg mx-auto">
            Book your preferred package today. We'll confirm your appointment and prep everything before you arrive.
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

export default Package;
