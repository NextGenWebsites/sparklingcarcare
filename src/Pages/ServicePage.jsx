import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ceramicCoatingImg from "@/images/service_img/ceramic-coating.webp";
import carWashImg from "@/images/service_img/carwash.webp";
import engineBayWash from "@/images/service_img/engine_bay_wash.webp";
import shampoo_carpet from "@/images/service_img/shampoo_carpet.webp";
import headlight_restoration from "@/images/service_img/headlight_restoration.webp";
import car_dent_removal from "@/images/service_img/car_dent_removal.webp";
import paint_correction from "@/images/service_img/paint_correction.webp";
import ServiceBack from "@/images/others/serviceBack.webp";
import { BUSINESS_INFO } from "../data/content";

const services = [
  { id: "exterior-detailing", title: "Exterior Detailing", description: "Our exterior detailing service brings your vehicle's shine back to life. We remove dirt, grime, and contaminants with a thorough wash, followed by hand waxing or machine polishing to protect your paint and enhance gloss. It's more than a wash - it's a full rejuvenation of your car's outer appearance.", imageUrl: carWashImg, imagePosition: "left" },
  { id: "interior-detailing", title: "Interior Detailing", description: "We deep clean every corner of your vehicle's interior, from seats and carpets to dashboards and vents. Whether it's leather, fabric, or plastic, we restore, sanitise, and refresh surfaces to a like-new condition. Enjoy that fresh car feel every time you step inside.", imageUrl: "https://www.thedetailingexperts.com.au/wp-content/uploads/2022/04/Mass-blog-header-template-01-2.png", imagePosition: "right" },
  { id: "paint-correction", title: "Paint Correction", description: "Restore your car's finish with our professional paint correction. We carefully remove swirl marks, scratches, and oxidation to bring out a flawless, high-gloss shine. Perfect for vehicles needing that extra level of care.", imageUrl: paint_correction, imagePosition: "left" },
  { id: "ceramic-coating", title: "Ceramic Coating", description: "Give your paint long-lasting protection and deep gloss with our professional ceramic coating. This advanced layer bonds to your car's surface, repelling water, dirt, and UV rays while enhancing shine and making maintenance effortless. Keep your vehicle looking new for years with premium ceramic protection.", imageUrl: ceramicCoatingImg, imagePosition: "right" },
  { id: "odour-removal", title: "Odour Removal", description: "Say goodbye to stubborn smells with our professional odour removal service. Whether it's smoke, pet, food, or mildew, we target and neutralise the source - not just mask it. Your vehicle will be left smelling clean, fresh, and truly revitalised.", imageUrl: shampoo_carpet, imagePosition: "left" },
  { id: "headlight-restoration", title: "Headlight Restoration", description: "Cloudy, yellow headlights can reduce both visibility and the look of your vehicle. Our headlight restoration service clears up foggy lenses and protects them, improving nighttime driving safety and the overall look of your car.", imageUrl: headlight_restoration, imagePosition: "right" },
  { id: "engine-bay-wash", title: "Engine Bay Wash", description: "A clean engine bay not only looks impressive but also helps with maintenance and spotting issues early. We carefully degrease and rinse your engine compartment, taking care not to damage sensitive components.", imageUrl: engineBayWash, imagePosition: "left" },
  { id: "minor-dent-removal", title: "Minor Dent Removal", description: "Got a dent or ding? Our minor dent removal service targets those small imperfections without needing a full panel respray. Using precision techniques, we restore your vehicle's smooth finish quickly and affordably.", imageUrl: car_dent_removal, imagePosition: "right" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Car Detailing",
  "provider": {
    "@type": "AutoBodyShop",
    "name": "Sparkling Car Care",
    "address": { "@type": "PostalAddress", "streetAddress": "77/81 Reserve Rd", "addressLocality": "Artarmon", "addressRegion": "NSW", "postalCode": "2064", "addressCountry": "AU" }
  },
  "areaServed": { "@type": "City", "name": "Sydney" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Car Detailing Services",
    "itemListElement": services.map((s, i) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.description },
      "position": i + 1
    }))
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Car Detailing Services Artarmon Sydney | Sparkling Car Care</title>
        <meta
          name="description"
          content="Expert car detailing services in Artarmon, Sydney. Exterior & interior detailing, paint correction, ceramic coating, headlight restoration, engine bay wash & more."
        />
        <link rel="canonical" href="https://www.sparklingcarcare.com.au/services" />
        <meta property="og:title" content="Car Detailing Services Artarmon Sydney | Sparkling Car Care" />
        <meta property="og:url" content="https://www.sparklingcarcare.com.au/services" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparklingcarcare.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sparklingcarcare.com.au/services" }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0C10]">
        {/* Hero */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={ServiceBack}
            alt="Professional car detailing services in Artarmon Sydney"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
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
                What We Offer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F8FA] mb-4 font-['Space_Grotesk']">
                Premium Detailing Services
              </h1>
              <p className="text-[#8B93A1] text-lg max-w-xl">
                Experience automotive perfection with our professional detailing services in Artarmon, Sydney.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-20 text-[#F7F8FA] font-['Space_Grotesk']"
          >
            Our <span className="text-[#2F6FED]">Expert</span> Services
          </motion.h2>

          <div className="space-y-24">
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col ${
                  service.imagePosition === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-10 items-center scroll-mt-24`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-1 w-full"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-white/8">
                    <img
                      src={service.imageUrl}
                      alt={`${service.title} – Sparkling Car Care Artarmon`}
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <div className="flex-1 space-y-5">
                  <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#F7F8FA] font-['Space_Grotesk']">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#2F6FED]" />
                  <p className="text-[#8B93A1] leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                  <a href="/packages">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#0B3D91] hover:bg-[#2F6FED] cursor-pointer text-[#F7F8FA] rounded font-semibold text-sm transition-colors font-['Space_Grotesk']"
                    >
                      View Packages
                      <ArrowRight size={16} />
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#14161B] border-t border-white/5 py-20">
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

export default ServicePage;
