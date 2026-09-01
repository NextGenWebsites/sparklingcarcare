import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronUp, X } from "lucide-react";

const HOURS = [
  { day: "Monday",    h: "10:00 AM – 6:00 PM" },
  { day: "Tuesday",   h: "10:00 AM – 6:00 PM" },
  { day: "Wednesday", h: "10:00 AM – 6:00 PM" },
  { day: "Thursday",  h: "10:00 AM – 6:00 PM" },
  { day: "Friday",    h: "10:00 AM – 6:00 PM" },
  { day: "Saturday",  h: "10:00 AM – 3:00 PM" },
  { day: "Sunday",    h: "Closed" },
];

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const getStatus = () => {
  const now  = new Date();
  const day  = DAYS[now.getDay()];
  const item = HOURS.find((h) => h.day === day);
  if (!item || item.h === "Closed") return { label: "Closed", open: false };

  const toMins = (str) => {
    const [t, p] = str.trim().split(" ");
    let [h, m] = t.split(":").map(Number);
    if (p === "PM" && h !== 12) h += 12;
    if (p === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };
  const [open, close] = item.h.split(" – ");
  const cur = now.getHours() * 60 + now.getMinutes();
  const isOpen = cur >= toMins(open) && cur < toMins(close);
  return { label: isOpen ? "Open Now" : "Closed", open: isOpen };
};

const OpeningHours = () => {
  const [show, setShow] = useState(false);
  const today  = DAYS[new Date().getDay()];
  const status = getStatus();

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-2.5 w-56 rounded-xl overflow-hidden border border-white/8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-brand px-4 py-2.5">
              <div className="flex items-center gap-2 text-black">
                <Clock size={13} />
                <span className="font-display font-bold text-xs uppercase tracking-widest">Hours</span>
              </div>
              <button onClick={() => setShow(false)} className="text-black/70 hover:text-black transition-colors">
                <X size={14} />
              </button>
            </div>

            {/* List */}
            <div className="bg-surface divide-y divide-white/5">
              {HOURS.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-4 py-2 text-xs ${
                    item.day === today
                      ? "text-brand font-semibold"
                      : "text-mist"
                  }`}
                >
                  <span>{item.day}</span>
                  <span className={item.h === "Closed" ? "text-black" : ""}>{item.h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle pill */}
      <motion.button
        onClick={() => setShow(!show)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center gap-2.5 rounded-xl px-4 py-3 shadow-xl border transition-colors duration-200 ${
          status.open
            ? "bg-brand border-brand text-black"
            : "bg-surface border-white/10 text-snow hover:border-brand/40"
        }`}
        aria-expanded={show}
        aria-label="Toggle opening hours"
      >
        <Clock size={15} className={status.open ? "text-black/80" : "text-brand"} />
        <div className="text-left">
          <p className="font-display font-bold text-xs leading-none">{status.label}</p> 
          <p className={`text-[10px] mt-0.5 ${status.open ? "text-black/60" : "text-ghost"}`}>
            {show ? "Hide hours" : "See hours"}
          </p>
        </div>
        <ChevronUp
          size={13}
          className={`ml-0.5 transition-transform duration-200 ${show ? "rotate-0" : "rotate-180"}`}
        />
      </motion.button>
    </div>
  );
};

export default OpeningHours;
