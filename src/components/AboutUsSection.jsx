import React from "react";
import { Car, Droplets, Award, MapPin, Clock, CreditCard } from "lucide-react";

const AboutUsSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12 font-sans relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-2">
            Sparkling Car Care
          </h2>
          <h1 className="text-3xl font-normal text-gray-800 mb-4">
          ABOUT OUR DETAILING SERVICES
          </h1>
          <div className="w-50 h-1 bg-gray-600 mx-auto mb-8"></div>
        </div>

        {/* Content - Centered */}
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 text-center">
            <p className="text-base text-gray-700 leading-relaxed">
              At <span className="font-medium">Sparkling Car Care</span> we're
              passionate about bringing out the best in every vehicle. We're a
              locally run car detailing business dedicated to restoring and
              protecting your car—inside and out—with meticulous care and
              attention to detail. Whether it's a deep interior clean, flawless
              exterior finish, or specialised services like paint correction and
              odour removal, we treat every vehicle as if it were our own. Our
              goal is simple: to make your car look, feel, and smell its
              absolute best, every time.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a href="/services">
                <button className="border border-gray-700 text-gray-500 hover:text-black cursor-pointer hover:bg-gray-100 py-3 px-6 rounded transition duration-300">
                  OUR SERVICES
                </button>
              </a>
              <a href="/contact">
                <button className="border border-gray-700 text-gray-500 hover:text-black cursor-pointer hover:bg-gray-100 py-3 px-6 rounded transition duration-300">
                  CONTACT US
                </button>
              </a>
              <a href="/packages">
                <button className="border border-gray-700 text-gray-500 hover:text-black cursor-pointer hover:bg-gray-100 py-3 px-6 rounded transition duration-300">
                  PACKAGES
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
