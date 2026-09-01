import React from "react";
import { motion } from "framer-motion";
import { Clock, Wrench, Shield, Eye, Leaf, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const AboutUsSection = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Top split: text + stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Who We Are</span>
            <div className="flex items-start gap-5 mt-4 mb-6">
              <span className="brand-bar mt-1" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
                Passionate About<br />Every Vehicle
              </h2>
            </div>
            <p className="text-mist leading-relaxed mb-6 max-w-md">
              At Sparkling Car Care, we're a locally run detailing studio in Artarmon dedicated to
              restoring and protecting your car inside and out. Whether it's a deep interior clean,
              flawless exterior finish, or specialised paint correction - we treat every vehicle as
              if it were our own.
            </p>
            <p className="text-mist leading-relaxed mb-10 max-w-md">
              With hundreds of 5-star Google reviews and a loyal base of returning clients, our
              reputation speaks for itself. Come in and experience the difference.
            </p>
            <div className="flex gap-3">
              <Link to="/services" className="btn-brand text-xs">Our Services <ArrowRight size={14} /></Link>
              <Link to="/contact" className="btn-outline text-xs">Book Now</Link>
            </div>
          </motion.div>

          {/* Right: large stat numbers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "30+", label: "Years Experience" },
              { num: "4.2★", label: "Google Rating" },
              { num: "8+", label: "Expert Services" },
              { num: "100%", label: "Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-raised border border-white/6 rounded-xl p-6 hover:border-brand/30 transition-colors duration-300"
              >
                <p className="text-gradient-brand font-display font-black text-4xl md:text-5xl mb-1">
                  {stat.num}
                </p>
                <p className="text-mist text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default AboutUsSection;
