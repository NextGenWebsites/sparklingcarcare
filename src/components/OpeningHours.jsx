import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronUp, X } from "lucide-react";

const hoursData = [
  { day: "Monday", hours: "10:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
  { day: "Friday", hours: "10:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const getCurrentDay = () => DAYS[new Date().getDay()];

const getCurrentStatus = () => {
  const now = new Date();
  const day = getCurrentDay();
  const entry = hoursData.find((d) => d.day === day);
  if (!entry || entry.hours === "Closed") return "Closed";

  const [open, close] = entry.hours.split(" – ");
  const toMin = (str) => {
    const [time, period] = str.trim().split(" ");
    let [h, m] = time.split(":").map(Number);
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };

  const cur = now.getHours() * 60 + now.getMinutes();
  return cur >= toMin(open) && cur < toMin(close) ? "Open Now" : "Closed";
};

const OpeningHours = () => {
  const [isOpen, setIsOpen] = useState(false);
  const status = getCurrentStatus();
  const today = getCurrentDay();

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Inter']">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ minWidth: 240 }}
          >
            {/* Header */}
            <div className="bg-[#0B3D91] text-white px-4 py-3 flex justify-between items-center">
              <h3 className="text-sm font-bold flex items-center gap-2 font-['Space_Grotesk'] tracking-wide uppercase">
                <Clock size={15} />
                Opening Hours
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close hours"
              >
                <X size={16} />
              </button>
            </div>

            {/* Hours Grid */}
            <div className="bg-[#14161B] px-4 py-3">
              {hoursData.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex justify-between py-2 text-sm ${
                    i < hoursData.length - 1 ? "border-b border-white/5" : ""
                  } ${
                    item.day === today
                      ? "text-[#2F6FED] font-semibold"
                      : "text-[#8B93A1]"
                  }`}
                >
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-lg shadow-xl px-4 py-3 text-white text-sm font-medium transition-colors ${
          status === "Open Now"
            ? "bg-[#0B3D91] hover:bg-[#2F6FED]"
            : "bg-[#14161B] border border-white/10 hover:border-[#2F6FED]/50"
        }`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-expanded={isOpen}
        aria-label="View opening hours"
      >
        <Clock size={16} className="text-[#2F6FED]" />
        <div className="text-left">
          <div className="text-xs font-bold font-['Space_Grotesk']">{status}</div>
          <div className="text-xs text-white/60">{isOpen ? "Hide Hours" : "View Hours"}</div>
        </div>
        <ChevronUp
          size={14}
          className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </motion.button>
    </div>
  );
};

export default OpeningHours;
