import React from "react";
import { motion } from "framer-motion";
import { Car, Shield, Sparkles, Clock, Award, Star } from "lucide-react";

import ServiceBack from "../images/others/serviceBack.webp";
const packagePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Service packages data with added images
  const servicePackages = [
    {
      id: 1,
      title: "Express Wash:",
      price: "$30 Sedan / $40 SUV",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      description:
        "A quick and efficient exterior clean, including a hand wash, chamois dry, and tyre shine to give your car a refreshed look.",
      features: ["Wash Exterior and Chamois", "Tyre Shine"],
      image:
        "https://i0.wp.com/peaceentqatar.com/wp-content/uploads/2019/07/17545524_140141669847553_5202430352564902303_o-1.jpg?ssl=1", // Added image path
    },
    {
      id: 2,
      title: "Basic Wash:",
      price: "$40 Sedan / $50 SUV",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      description:
        "Includes everything in the Express Wash plus an interior vacuum to remove dust and debris, keeping both the inside and outside of your car looking neat.",
      features: ["Wash Exterior and Chamois", "Interior Vacuum", "Tyre Shine"],
      image:
        "https://media.istockphoto.com/id/826875544/photo/high-pressure-washing-car-outdoors.jpg?s=612x612&w=0&k=20&c=VWs9auj2wJpOEXSe4ZC5XVHFCOpOHIbkFHLnZY2-Q1M=", // Added image path
    },
    {
      id: 3,
      title: "Standard Wash:",
      price: "$60 Sedan / $70 SUV",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      description:
        "A thorough clean that covers the exterior, interior vacuuming, window cleaning, and trim wipe-down, ensuring a polished and well-maintained look inside and out.",
      features: [
        "Wash Exterior and Chamois",
        "Interior Vacuum",
        "Windows Cleaned",
        "Wipe Down Trims",
        "Tyre Shine",
      ],
      image:
        "https://shop.rikecool.com.sg/wp-content/uploads/2023/09/car-wash-detailing-station_1303-22319.jpg", // Added image path
    },
    {
      id: 4,
      title: "Deluxe Wash:",
      price: "$132 Sedan / $165 SUV",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      description:
        "A premium wash package that includes everything in the Standard Wash, plus a professional hand polish to restore shine and enhance your vehicle’s appearance.",
      features: [
        "Wash Exterior and Chamois",
        "Interior Vacuum",
        "Windows Cleaned",
        "Wipe Down Trims",
        "Tyre Shine",
        "Hand Polish",
      ],
      image:
        "https://www.jalopnik.com/jalopnik/images/b5b2550c72d99e5dcb0bbd70c28a1495.jpg", // Added image path
    },
    {
      id: 5,
      title: "Mini Detail:",
      price: "$198 Sedan / $250 SUV",
      icon: <Car className="w-8 h-8 text-blue-500" />,
      description:
        "A deep cleaning package that combines the Standard Wash with a high-quality hand polish and an engine bay wash, ensuring a spotless and glossy finish.",
      features: ["Standard Wash +", "Hand Polish", "Engine Bay Wash"],
      image:
        "https://www.momscardetailing.com/wp-content/uploads/2025/03/104202763_1708027612681300_7224795719929665443_n-1-rotated.jpg", // Added image path
    },
    {
      id: 6,
      title: "Full Detail:",
      price: "$298 Sedan / $350 SUV",
      icon: <Car className="w-8 h-8 text-blue-500" />,
      description:
        "The ultimate detailing service, featuring a Standard Wash, engine bay wash, deep interior shampooing, and a two-step paint correction to remove imperfections and restore your car’s paint to a flawless shine.",
      features: [
        "Standard Wash +",
        "Engine Bay Wash",
        "Shampoo Interior",
        "Two Step Paint Correction ",
      ],
      image:
        "https://www.cartoys.com/cdn/shop/files/Car_detailing_ServiceSection_512x300_2dd1ef7e-4b4d-45aa-90f5-650d299dd56e.jpg?v=1694798075&width=512", // Added image path
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={ServiceBack}
          alt="Car Detailing Hero"
          className="absolute w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-white p-8"
          >
            <h1 className="text-7xl font-bold  mb-4 mt-30 ">
              Professional Car Detailing
            </h1>
            <p className="text-2xl mb-8">
              Restore your vehicle to showroom condition
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium cursor-pointer"
              >
                Book Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="container mx-auto px-4 py-16 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Detailing Services</h2>
          <p className="text-gray-600 text-xl">
            We offer a comprehensive range of car detailing services tailored to
            meet your needs. From basic cleaning to premium restoration, our
            skilled technicians deliver exceptional results.
          </p>
        </motion.div>

        {/* Service Packages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicePackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Added image section */}
              <div className="h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} Service`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">{pkg.icon}</div>
                  <span className="text-2xl font-bold text-blue-600">
                    {pkg.price}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-6 text-xl">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 text-xl"
                    >
                      <Star className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Process Section */}
      <div
        className="bg-gray-900  py-16"
        style={{
          backgroundImage: `url(https://www.raynofilm.com/wp-content/uploads/Car-Detailing-Cost-1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className=" font-bold mb-4 text-6xl bg-gradient-to-l from-transparent to-[#f5af19] p-6 rounded-bl-[80px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[80px] ">
              Our Detailing Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="w-12 h-12" />,
                title: "Inspection",
                description: "Complete evaluation of your vehicle's condition",
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Preparation",
                description: "Pre-cleaning and setup of specialized tools",
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Detailing",
                description: "Thorough cleaning and treatment of all surfaces",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Quality Check",
                description: "Final inspection to ensure perfection",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-transparent to-[#005AA7] p-6 rounded-xl text-center"
              >
                <div className="bg-blue-100/80 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xl">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
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

export default packagePage;
