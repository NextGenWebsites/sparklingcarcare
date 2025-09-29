import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      {/* Top section with logo and quick links */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-3xl font-bold">
                <span className="text-red-600">Sparkling</span> Car Care
              </h1>
            </div>
            <p className="text-gray-400 mb-4 text-[20px]">
              Premium automotive detailing services that deliver exceptional
              results for the most discerning car enthusiasts.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/sparklingcarcare_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574501624415 "
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@sparklingcarcare_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-600 pb-2 inline-block">
              Our Services
            </h2>
            <ul className="space-y-2 text-[18px]">
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Exterior Detailing</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Interior Detailing</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Paint Protection</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Minor Dent removal </a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Headlight restoration</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Engine bay wash</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="/services">Odour Removal</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-600 pb-2 inline-block">
              Contact Us
            </h2>
            <div className="space-y-4 text-[18px]">
              <div className="flex items-center">
                <MapPin className="text-red-600 mr-2" size={18} />
                <span>77/81 Reserve Rd, Artarmon NSW 2064</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-red-600 mr-2" size={18} />
                <span> (02) 9438 4988</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-red-600 mr-2" size={18} />
                <span> sparklingcarcare1@gmail.com </span>
              </div>
              <div className="flex items-center">
                <Clock className="text-red-600 mr-2" size={18} />
                <span>Mon-Fri: 10AM - 6PM, Sat: 10AM - 3PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright */}
      <div className="bg-zinc-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Sparkling Car Care. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white cursor-not-allowed"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white cursor-not-allowed"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
