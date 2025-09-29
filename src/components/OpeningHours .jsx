import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronUp, X } from "lucide-react";

const OpeningHours = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hoursData = [
    { day: "Monday", hours: "10:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
    { day: "Friday", hours: "10:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const getCurrentDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = new Date().getDay();
    return days[dayIndex];
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const day = getCurrentDay();
    const dayData = hoursData.find((d) => d.day === day);

    if (!dayData || dayData.hours === "Closed") return "Closed";

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;

    // Parse opening hours
    const times = dayData.hours.split(" - ");
    const openingTimeStr = times[0];
    const closingTimeStr = times[1];

    const openingHour = parseInt(openingTimeStr.split(":")[0]);
    const openingMinute = parseInt(openingTimeStr.split(":")[1].split(" ")[0]);
    const openingPeriod = openingTimeStr.split(" ")[1];

    const closingHour = parseInt(closingTimeStr.split(":")[0]);
    const closingMinute = parseInt(closingTimeStr.split(":")[1].split(" ")[0]);
    const closingPeriod = closingTimeStr.split(" ")[1];

    let openingTime = (openingHour % 12) * 60 + openingMinute;
    if (openingPeriod === "PM" && openingHour !== 12) openingTime += 12 * 60;

    let closingTime = (closingHour % 12) * 60 + closingMinute;
    if (closingPeriod === "PM" && closingHour !== 12) closingTime += 12 * 60;

    return currentTime >= openingTime && currentTime < closingTime
      ? "Open Now"
      : "Closed";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            className="bg-gray-900 rounded-lg shadow-lg mb-2 overflow-hidden border border-red-800"
          >
            <div className="bg-gradient-to-r from-red-900 to-red-700 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center">
                <Clock size={18} className="mr-2" />
                Opening Hours
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              {hoursData.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between py-2 ${
                    item.day === getCurrentDay()
                      ? "text-red-500 font-bold"
                      : "text-gray-300"
                  } ${
                    index !== hoursData.length - 1
                      ? "border-b border-gray-800"
                      : ""
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

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center rounded-lg shadow-lg px-4 py-3 text-white ${
          isOpen
            ? "bg-gradient-to-r from-red-900 to-red-700"
            : "bg-gradient-to-r from-red-800 to-red-600"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Clock size={20} className="mr-2" />
        <div className="flex flex-col text-left">
          <span className="text-sm font-bold">{getCurrentStatus()}</span>
          <span className="text-xs opacity-90">
            {isOpen ? "Hide Hours" : "View Hours"}
          </span>
        </div>
        <ChevronUp
          size={16}
          className={`ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </motion.button>
    </div>
  );
};

export default OpeningHours;
