import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Sparkles,
  Eye,
  Leaf,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <MapPin size={24} className="text-[#2F6FED]" />,
    title: "Locally Run",
    description:
      "Based in Artarmon, NSW - we're part of the community and proud to serve Sydney car owners.",
  },
  {
    icon: <Users size={24} className="text-[#2F6FED]" />,
    title: "Expert Team",
    description:
      "Experienced detailers passionate about delivering showroom-quality results on every vehicle.",
  },
  {
    icon: <Sparkles size={24} className="text-[#2F6FED]" />,
    title: "Premium Products",
    description:
      "We use only professional-grade chemicals and tools for lasting protection and a brilliant finish.",
  },
  {
    icon: <Eye size={24} className="text-[#2F6FED]" />,
    title: "Attention to Detail",
    description:
      "Every inch of your vehicle is treated with meticulous care - inside, outside, and everything between.",
  },
  {
    icon: <Leaf size={24} className="text-[#2F6FED]" />,
    title: "Eco-Conscious",
    description:
      "We use water-efficient techniques and biodegradable products wherever possible.",
  },
  {
    icon: <ThumbsUp size={24} className="text-[#2F6FED]" />,
    title: "Satisfaction Guaranteed",
    description:
      "Hundreds of 5-star Google reviews back our commitment to outstanding service, every time.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutUsSection = () => {
  return (
    <section className="py-24 bg-[#0A0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">
            About Sparkling Car Care
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F7F8FA] mb-6 font-['Space_Grotesk']">
            Passionate About Every Vehicle
          </h2>
          <p className="text-[#8B93A1] text-lg leading-relaxed">
            At{" "}
            <span className="text-[#F7F8FA] font-medium">
              Sparkling Car Care
            </span>
            , we're a locally run car detailing business dedicated to restoring
            and protecting your car - inside and out - with meticulous care and
            attention to detail. Whether it's a deep interior clean, flawless
            exterior finish, or specialised services like paint correction and
            odour removal, we treat every vehicle as if it were our own.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0B3D91] hover:bg-[#2F6FED] text-[#F7F8FA] px-6 py-3 rounded font-semibold text-sm transition-colors font-['Space_Grotesk']"
            >
              Our Services
              <ArrowRight size={16} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#2F6FED]/50 text-[#F7F8FA] px-6 py-3 rounded font-semibold text-sm transition-colors font-['Space_Grotesk']"
            >
              Book Now
            </a>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="group bg-[#14161B] border border-white/5 rounded-xl p-6 hover:border-[#2F6FED]/40 hover:shadow-lg hover:shadow-[#2F6FED]/5 transition-all duration-300"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-[#F7F8FA] font-bold text-lg mb-2 font-['Space_Grotesk']">
                {f.title}
              </h3>
              <p className="text-[#8B93A1] text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
