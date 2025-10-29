import React from "react";
import { motion } from "framer-motion";

// Import images
import ceramicCoatingImg from "@/images/service_img/ceramic-coating.webp";
import carWawshImg from "@/images/service_img/carwash.webp";
import engineBayWash from "@/images/service_img/engine_bay_wash.webp";
import shampoo_carpet from "@/images/service_img/shampoo_carpet.webp";
import headlight_restoration from "@/images/service_img/headlight_restoration.webp";
import car_dent_removal from "@/images/service_img/car_dent_removal.webp";
import paint_correction from "@/images/service_img/paint_correction.webp"



const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Exterior Detailing",
      description:
        "Our exterior detailing service brings your vehicle’s shine back to life. We remove dirt, grime, and contaminants with a thorough wash, followed by hand waxing or machine polishing to protect your paint and enhance gloss. It’s more than a wash—it’s a full rejuvenation of your car’s outer appearance.",
      imageUrl:
        carWawshImg,
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Interior Detailing",
      description:
        "We deep clean every corner of your vehicle’s interior, from seats and carpets to dashboards and vents. Whether it's leather, fabric, or plastic, we restore, sanitise, and refresh surfaces to a like-new condition. Enjoy that fresh car feel every time you step inside.",
      imageUrl:
        "https://www.thedetailingexperts.com.au/wp-content/uploads/2022/04/Mass-blog-header-template-01-2.png",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Paint Correction",
      description:
        "Restore your car’s finish with our professional paint correction. We carefully remove swirl marks, scratches, and oxidation to bring out a flawless, high-gloss shine. Perfect for vehicles needing that extra level of care.",
      imageUrl:
      paint_correction,
        //"https://cdn.shopify.com/s/files/1/0797/2968/8869/files/a5.jpg?v=1692785397&width=1620&height=1080",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Ceramic Coating",
      description:
        "Give your paint long-lasting protection and deep gloss with our professional ceramic coating. This advanced layer bonds to your car’s surface, repelling water, dirt, and UV rays while enhancing shine and making maintenance effortless. Keep your vehicle looking new for years with premium ceramic protection.",
      imageUrl:
        ceramicCoatingImg,
      imagePosition: "right",
    },
    {
      id: 5,
      title: "Odour Removal",
      description:
        "Say goodbye to stubborn smells with our professional odour removal service. Whether it’s smoke, pet, food, or mildew, we target and neutralize the source—not just mask it. Your vehicle will be left smelling clean, fresh, and truly revitalized.",
      imageUrl:
        shampoo_carpet,
      imagePosition: "left",
    },
    {
      id: 6,
      title: "Headlight restoration",
      description:
        "Cloudy, yellow headlights can reduce both visibility and the look of your vehicle. Our headlight restoration service clears up foggy lenses and protects them, improving nighttime driving safety and the overall look of your car.",
      imageUrl:
        headlight_restoration,
      imagePosition: "right",
    },
    {
      id: 7,
      title: "Engine bay wash ",
      description:
        "A clean engine bay not only looks impressive but also helps with maintenance and spotting issues early. We carefully degrease and rinse your engine compartment, taking care not to damage sensitive components.",
      imageUrl:
        engineBayWash,
      imagePosition: "left",
    },
    {
      id: 8,
      title: "Minor Dent removal ",
      description:
        "Got a dent or ding? Our minor dent removal service targets those small imperfections without needing a full panel respray. Using precision techniques, we restore your vehicle’s smooth finish quickly and affordably.",
      imageUrl:
        car_dent_removal,
      imagePosition: "right",
    },
    
    
    
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0  bg-cover bg-center"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              Premium Detailing Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Experience automotive perfection with our professional detailing
              services.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Our <span className="text-blue-600">Expert</span> Services
        </motion.h2>

        <div className="space-y-24">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${
                service.imagePosition === "right"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <div className="w-20 h-1 bg-blue-600"></div>
                <p className="text-gray-600 leading-relaxed text-xl">
                  {service.description}
                </p>

                <a href="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
                  >
                    Learn More
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0f0c29] to-[#24243e] via-[#302b63] text-white py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-blue-100 mb-8 text-xl">
              Book your appointment today and experience our premium detailing
              services.
            </p>

            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold  cursor-pointer text-lg"
              >
                Book an Appointment
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
