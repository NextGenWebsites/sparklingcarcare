import React from "react";

import Img1 from "../images/gallery/IMG_0110.webp";
import Img2 from "../images/gallery/IMG_0320.webp";
import Img3 from "../images/gallery/IMG_1212.webp";
import Img4 from "../images/gallery/IMG_1221.webp";
import Img5 from "../images/gallery/IMG_1296.webp";
import Img6 from "../images/gallery/IMG_1298.webp";
import Img7 from "../images/gallery/IMG_1301.webp";
import Img8 from "../images/gallery/IMG_1302.webp";
import Img9 from "../images/gallery/IMG_1349.webp";
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
import Logo from "../images/gallery/SPARKLING_CAR_CARE.png";

const rowOne = [
  { id: 1, url: Img7, alt: "Car detailing before and after" },
  { id: 2, url: Img14, alt: "Interior cleaning service" },
  { id: 3, url: Img21, alt: "Paint correction results" },
  { id: 4, url: Img3, alt: "Professional car wash" },
  { id: 5, url: Logo, alt: "Sparkling Car Care" },
  { id: 6, url: Img10, alt: "Engine bay wash" },
  { id: 7, url: Img23, alt: "Ceramic coating application" },
  { id: 8, url: Img5, alt: "Exterior detailing Artarmon" },
  { id: 9, url: Img18, alt: "Car detailing Sydney" },
  { id: 10, url: Img30, alt: "Full detail service" },
  { id: 11, url: Img1, alt: "Car wash and polish" },
  { id: 12, url: Img26, alt: "Headlight restoration" },
];

const rowTwo = [
  { id: 13, url: Img11, alt: "Interior deep clean" },
  { id: 14, url: Img24, alt: "Odour removal service" },
  { id: 15, url: Img2, alt: "Car detailing Artarmon" },
  { id: 16, url: Img15, alt: "Vehicle restoration" },
  { id: 17, url: Img8, alt: "Professional detailing" },
  { id: 18, url: Img25, alt: "Paint protection" },
  { id: 19, url: Img22, alt: "Car cleaning service" },
  { id: 20, url: Img6, alt: "Minor dent removal" },
  { id: 21, url: Img19, alt: "Exterior polish" },
  { id: 22, url: Img12, alt: "Tyre shine service" },
  { id: 23, url: Img28, alt: "Showroom quality detail" },
];

const rowThree = [
  { id: 24, url: Img16, alt: "Window cleaning" },
  { id: 25, url: Img17, alt: "Luxury car detail" },
  { id: 26, url: Img13, alt: "SUV detailing" },
  { id: 27, url: Img9, alt: "Sedan detailing Sydney" },
  { id: 28, url: Img20, alt: "Carpet shampooing" },
  { id: 29, url: Img4, alt: "Leather seat cleaning" },
  { id: 30, url: Img27, alt: "Hand wax and polish" },
  { id: 31, url: Img29, alt: "Detailing service NSW" },
  { id: 32, url: Img31, alt: "Car care Artarmon" },
  { id: 33, url: Img32, alt: "Full car detail" },
  { id: 34, url: Img31, alt: "Premium car detailing" },
];

const GalleryRow = ({ images, direction = "left" }) => {
  const doubled = [...images, ...images];
  return (
    <div className="relative overflow-hidden gallery-row">
      <div className={direction === "left" ? "flex animate-slide-left" : "flex animate-slide-right"}>
        {doubled.map((img, i) => (
          <div key={`${img.id}-${i}`} className="flex-shrink-0 p-1">
            <div className="overflow-hidden rounded">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-60 h-44 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SlidingGallery = () => {
  return (
    <section className="py-16 bg-[#14161B] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8FA] font-['Space_Grotesk']">
          A Closer Look at What We Do
        </h2>
        <div className="w-12 h-0.5 bg-[#2F6FED] mx-auto mt-4" />
      </div>

      <div className="space-y-2">
        <GalleryRow images={rowOne} direction="left" />
        <GalleryRow images={rowTwo} direction="right" />
        <GalleryRow images={rowThree} direction="left" />
      </div>
    </section>
  );
};

export default SlidingGallery;