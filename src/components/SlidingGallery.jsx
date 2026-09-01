import React from "react";
import { motion } from "framer-motion";

import Img1  from "../images/gallery/IMG_0110.webp";
import Img2  from "../images/gallery/IMG_0320.webp";
import Img3  from "../images/gallery/IMG_1212.webp";
import Img4  from "../images/gallery/IMG_1221.webp";
import Img5  from "../images/gallery/IMG_1296.webp";
import Img6  from "../images/gallery/IMG_1298.webp";
import Img7  from "../images/gallery/IMG_1301.webp";
import Img8  from "../images/gallery/IMG_1302.webp";
import Img9  from "../images/gallery/IMG_1349.webp";
import Img10 from "../images/gallery/IMG_1407.webp";
import Img11 from "../images/gallery/IMG_1410.webp";
import Img12 from "../images/gallery/IMG_1422.webp";
import Img13 from "../images/gallery/IMG_1561.webp";
import Img14 from "../images/gallery/IMG_4716.webp";
import Img15 from "../images/gallery/IMG_4721.webp";
import Img16 from "../images/gallery/IMG_4812.webp";
import Img17 from "../images/gallery/IMG_4814.webp";
import Img18 from "../images/gallery/IMG_5082.webp";
import Img19 from "../images/gallery/IMG_5129.webp";
import Img20 from "../images/gallery/IMG_5130.webp";
import Img21 from "../images/gallery/IMG_5180.webp";
import Img22 from "../images/gallery/IMG_6575.webp";
import Img23 from "../images/gallery/IMG_7065.webp";
import Img24 from "../images/gallery/IMG_7103.webp";
import Img25 from "../images/gallery/IMG_7149.webp";
import Img26 from "../images/gallery/IMG_7254.webp";
import Img27 from "../images/gallery/IMG_7542.webp";
import Img28 from "../images/gallery/IMG_7694.webp";
import Img29 from "../images/gallery/IMG_7818.webp";
import Img30 from "../images/gallery/IMG_7950.webp";
import Img31 from "../images/gallery/IMG_8060.webp";
import Img32 from "../images/gallery/IMG_9149.webp";

const rowOne = [
  { id:1,  src: Img7,  alt: "Car detailing Artarmon - exterior polish" },
  { id:2,  src: Img14, alt: "Interior car cleaning Sydney" },
  { id:3,  src: Img21, alt: "Paint correction results" },
  { id:4,  src: Img3,  alt: "Professional hand wash Sydney" },
  { id:5,  src: Img10, alt: "Engine bay wash Artarmon" },
  { id:6,  src: Img23, alt: "Ceramic coating application" },
  { id:7,  src: Img5,  alt: "Exterior detail Artarmon NSW" },
  { id:8,  src: Img18, alt: "Car detailing Sydney" },
  { id:9,  src: Img30, alt: "Full detail service" },
  { id:10, src: Img1,  alt: "Car wash and polish Artarmon" },
  { id:11, src: Img26, alt: "Headlight restoration" },
];

const rowTwo = [
  { id:12, src: Img11, alt: "Interior deep clean" },
  { id:13, src: Img24, alt: "Odour removal service" },
  { id:14, src: Img2,  alt: "Car detailing Artarmon" },
  { id:15, src: Img15, alt: "Vehicle restoration Sydney" },
  { id:16, src: Img8,  alt: "Professional car detailing" },
  { id:17, src: Img25, alt: "Paint protection Sydney" },
  { id:18, src: Img22, alt: "Car cleaning service NSW" },
  { id:19, src: Img6,  alt: "Minor dent removal" },
  { id:20, src: Img19, alt: "Exterior polish Artarmon" },
  { id:21, src: Img12, alt: "Tyre shine service" },
  { id:22, src: Img28, alt: "Showroom quality detail" },
];

const rowThree = [
  { id:23, src: Img16, alt: "Window cleaning service" },
  { id:24, src: Img17, alt: "Luxury car detail Sydney" },
  { id:25, src: Img13, alt: "SUV detailing Artarmon" },
  { id:26, src: Img9,  alt: "Sedan detailing NSW" },
  { id:27, src: Img20, alt: "Carpet shampoo service" },
  { id:28, src: Img4,  alt: "Leather seat cleaning" },
  { id:29, src: Img27, alt: "Hand wax and polish" },
  { id:30, src: Img29, alt: "Detailing service NSW" },
  { id:31, src: Img31, alt: "Car care Artarmon" },
  { id:32, src: Img32, alt: "Full car detail results" },
  { id:33, src: Img31, alt: "Premium car detailing" },
];

const Row = ({ images, dir = "left" }) => {
  const doubled = [...images, ...images];
  return (
    <div className="relative overflow-hidden gallery-row group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      <div className={`flex ${dir === "left" ? "animate-slide-left" : "animate-slide-right"}`}>
        {doubled.map((img, i) => (
          <div key={`${img.id}-${i}`} className="flex-shrink-0 p-1.5">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-56 h-40 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SlidingGallery = () => (
  <section className=" bg-gradient-to-b from-surface to-deep overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-14">
      <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between">
        <div>
          <span className="section-label">Our Work</span>
          <div className="flex items-start gap-4 mt-3">
            <span className="brand-bar" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
              A Closer Look
            </h2>
          </div>
        </div>
        <p className="text-mist max-w-xs text-sm leading-relaxed sm:text-right">
          Real results from real vehicles. Every car treated with the same precision and care.
        </p>
      </div>
    </div>

    <div className="space-y-3">
      <Row images={rowOne} dir="left" />
      <Row images={rowTwo} dir="right" />
      <Row images={rowThree} dir="left" />
    </div>
  </section>
);

export default SlidingGallery;