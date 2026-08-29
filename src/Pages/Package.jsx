import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Car, Shield, Sparkles, Clock, Award, Star, Check, ArrowRight,
} from "lucide-react";

import ServiceBack from "@/images/others/serviceBack.webp";
import { PACKAGES_LIST, BUSINESS_INFO } from "../data/content";

const tierBadge = {
  entry: null,
  mid: null,
  premium: { label: "Premium", color: "text-[#2F6FED] border-[#2F6FED]/30 bg-[#2F6FED]/10" },
};

const packageIcon = (tier) => {
  if (tier === "premium") return <Car className="w-7 h-7 text-[#2F6FED]" />;
  if (tier === "mid") return <Shield className="w-7 h-7 text-[#2F6FED]" />;
  return <Sparkles className="w-7 h-7 text-[#2F6FED]" />;
};

const processSteps = [
  { icon: <Car size={32} />, title: "Inspection", description: "Complete evaluation of your vehicle's condition" },
  { icon: <Clock size={32} />, title: "Preparation", description: "Pre-cleaning and setup of specialised tools" },
  { icon: <Sparkles size={32} />, title: "Detailing", description: "Thorough cleaning and treatment of all surfaces" },
  { icon: <Award size={32} />, title: "Quality Check", description: "Final inspection to ensure perfection" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const packagePage = () => {
  return (
    <>
      <Helmet>
        <title>Car Detailing Packages & Pricing | Sparkling Car Care Artarmon</title>
        <meta
          name="description"
          content="Transparent car detailing packages and pricing in Artarmon, Sydney. Express Wash from $30, Full Detail from $298. Sedan and SUV pricing available."
        />
        <link rel="canonical" href="https://www.sparklingcarcare.com.au/packages" />
        <meta property="og:title" content="Car Detailing Packages & Pricing | Sparkling Car Care" />
        <meta property="og:url" content="https://www.sparklingcarcare.com.au/packages" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparklingcarcare.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://www.sparklingcarcare.com.au/packages" }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0C10]">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={ServiceBack}
            alt="Car detailing packages and pricing Artarmon Sydney"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0C10]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/90 via-[#0A0C10]/60 to-transparent" />
          <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">
                Pricing
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F8FA] mb-4 font-['Space_Grotesk']">
                Packages & Pricing
              </h1>
              <p className="text-[#8B93A1] text-lg max-w-xl">
                Transparent pricing for every budget — restore your vehicle to showroom condition.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8FA] mb-4 font-['Space_Grotesk']">
              Our Detailing Packages
            </h2>
            <p className="text-[#8B93A1] text-lg">
              From a quick refresh to a full transformation — choose the package that suits your needs.
            </p>
            <p className="text-[#2F6FED] text-sm mt-3 font-medium">
              * All prices may vary depending on vehicle condition.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PACKAGES_LIST.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className={`group relative bg-[#14161B] border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#2F6FED]/10 ${
                  pkg.popular
                    ? "border-[#2F6FED]/50 shadow-lg shadow-[#2F6FED]/10"
                    : "border-white/8 hover:border-[#2F6FED]/40"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-[#0B3D91] text-[#F7F8FA] text-xs font-bold uppercase tracking-widest text-center py-1.5 font-['Space_Grotesk']">
                    Most Popular
                  </div>
                )}

                {/* Card image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} car detailing service`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#0A0C10] p-2.5 rounded-lg">
                      {packageIcon(pkg.tier)}
                    </div>
                    <div className="text-right">
                      <span className="text-[#2F6FED] font-bold font-['JetBrains_Mono',_monospace] text-sm leading-tight block">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F7F8FA] mb-2 font-['Space_Grotesk']">{pkg.title}</h3>
                  <p className="text-[#8B93A1] text-sm mb-5 leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[#8B93A1] text-sm">
                        <Check size={14} className="text-[#2F6FED] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="block w-full text-center py-3 px-4 bg-[#0B3D91] hover:bg-[#2F6FED] text-[#F7F8FA] rounded font-semibold text-sm transition-colors font-['Space_Grotesk']"
                  >
                    Book This Package
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="bg-[#14161B] border-y border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8FA] font-['Space_Grotesk']">Our Detailing Process</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-[#0A0C10] border border-white/8 p-6 rounded-xl text-center hover:border-[#2F6FED]/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0B3D91]/30 border border-[#2F6FED]/30 flex items-center justify-center mx-auto mb-5 text-[#2F6FED]">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-[#2F6FED] uppercase tracking-widest mb-2 font-['Space_Grotesk']">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#F7F8FA] mb-2 font-['Space_Grotesk']">{step.title}</h3>
                  <p className="text-[#8B93A1] text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0A0C10] py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8FA] mb-4 font-['Space_Grotesk']">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-[#8B93A1] mb-10 text-lg">
              Book your appointment today and experience our premium detailing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0B3D91] hover:bg-[#2F6FED] text-[#F7F8FA] px-10 py-4 rounded font-bold text-lg transition-colors font-['Space_Grotesk']"
              >
                Book an Appointment
                <ArrowRight size={18} />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#2F6FED]/50 text-[#F7F8FA] px-10 py-4 rounded font-bold text-lg transition-colors font-['Space_Grotesk']"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default packagePage;
