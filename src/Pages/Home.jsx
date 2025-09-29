import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Star,
  MapPin,
  ChevronRight,
  Car,
  Droplets,
  CheckCircle,
  ArrowRight,
  SprayCan,
} from "lucide-react";

import BackIMg from "../images/background/homepage-image-2.webp";

import ReviewBack from "../images/background/review_back.jpg";

import ReviewsSection from "../components/ReviewsSection";
import SlidingGallery from "../components/SlidingGallery";
import LocationSection from "../components/LocationSection ";
import AboutUsSection from "../components/AboutUsSection";

const Home = () => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Ben Hoskins",
      rating: 5,
      text: "I highly recommend these guys! Just picked up my car and it genuinely looks brand new. And when I left it with them it was in a sorry state.Service, attention to detail and value for money all outstanding. Thanks team!",
    },
    {
      id: 2,
      name: "Nicole B.",
      rating: 5,
      text: "Completely satisfied and impressed with the thorough internal and external cleaning done on my car today.   Thank you.  Nicole Bannister -- BDU 73H - Impreza RX - 19/03/2024",
    },
    {
      id: 3,
      name: "Andrew Met.",
      rating: 5,
      text: "Wow. Eddie really is amazing at what he does! I took my 21 year old Landcruiser to Eddie for a polish after a large weekend offroad. When I picked up the 4WD at 5pm it was sparkling like a brand new 4WD. Thank you. Andrew",
    },
    {
      id: 4,
      name: "Michael Li",
      rating: 5,
      text: "Beautiful service. Got the full detail and car came back looking brand new! 10/10 definitely would recommend.",
    },
    {
      id: 5,
      name: "Vanessa Ho",
      rating: 5,
      text: "Very lovely service. Worth the money. Went in for a full detail and was very pleased. Definitely coming back!",
    },
    {
      id: 6,
      name: "Jatay",
      rating: 5,
      text: "These guys do a fantastic job. Inside and out the car looked brand new. Didn't take long and were so easy to deal with. I'll be back again, and will remember to leave the car keys next time!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen bg-black font-sans">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-black/50 z-10">
          <img
            src={BackIMg}
            alt="Luxury car being detailed"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl xl:text-8xl lg:text-7xl md:text-7xl font-bold mb-4 ">
            Professional Car Detailing
            </h1>
            <p className="text-3xl font-sans  mb-8 max-w-2xl  py-2  bg-gradient-to-b from-transparent to-[#272231] rounded-bl-[80px] rounded-br-[80px]  px-5">
              Professional detailing services that bring your vehicle back to
              showroom condition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <motion.a
                href="tel:+61294384988"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-lg text-xl"
              >
                <Phone size={20} />
                CALL NOW
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white font-bold py-3 px-8 rounded-lg text-xl"
              >
                <Calendar size={20} />
                BOOK NOW
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight size={30} className="text-white transform rotate-90" />
        </motion.div>
      </section>

      {/* Services Section */}

      <AboutUsSection />

      {/* Reviews Section */}

      <ReviewsSection reviews={reviews} ReviewBack={ReviewBack} />

      {/* Gallery Section */}
      <SlidingGallery />

      {/* Location Section */}
      <LocationSection />
    </div>
  );
};

export default Home;
