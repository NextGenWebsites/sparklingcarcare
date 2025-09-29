import React from "react";

import Img1 from "../images/gallery/IMG_0110.webp"
import Img2 from "../images/gallery/IMG_0320.webp"
import Img3 from "../images/gallery/IMG_1212.webp"
import Img4 from "../images/gallery/IMG_1221.webp"
import Img5 from "../images/gallery/IMG_1296.webp"
import Img6 from "../images/gallery/IMG_1298.webp"
import Img7 from "../images/gallery/IMG_1301.webp"
import Img8 from "../images/gallery/IMG_1302.webp"
import Img9 from "../images/gallery/IMG_1349.webp"
import Img10 from "../images/gallery/IMG_1407.webp"
import Img11 from "../images/gallery/IMG_1410.webp"
import Img12 from "../images/gallery/IMG_1422.webp"
import Img13 from "../images/gallery/IMG_1561.webp"
import Img14 from "../images/gallery/IMG_4716.webp"
import Img15 from "../images/gallery/IMG_4721.webp"
import Img16 from "../images/gallery/IMG_4812.webp"
import Img17 from "../images/gallery/IMG_4814.webp"
import Img18 from "../images/gallery/IMG_5082.webp"
import Img19 from "../images/gallery/IMG_5129.webp"
import Img20 from "../images/gallery/IMG_5130.webp"
import Img21 from "../images/gallery/IMG_5180.webp"
import Img22 from "../images/gallery/IMG_6575.webp"
import Img23 from "../images/gallery/IMG_7065.webp"
import Img24 from "../images/gallery/IMG_7103.webp"
import Img25 from "../images/gallery/IMG_7149.webp"
import Img26 from "../images/gallery/IMG_7254.webp"
import Img27 from "../images/gallery/IMG_7542.webp"
import Img28 from "../images/gallery/IMG_7694.webp"
import Img29 from "../images/gallery/IMG_7818.webp"
import Img30 from "../images/gallery/IMG_7950.webp"
import Img31 from "../images/gallery/IMG_8060.webp"
import Img32 from "../images/gallery/IMG_9149.webp"

import Logo from "../images/gallery/SPARKLING_CAR_CARE.png"

const SlidingGallery = () => {
  // Sample gallery images with random heights
  const rowOneImages = [
    { id: 1, url: Img7, alt: "Architecture project" },
    { id: 2, url: Img14, alt: "Interior design" },
    { id: 3, url: Img21, alt: "Landscape design" },
    { id: 4, url: Img3, alt: "Architecture project" },
    { id: 4, url: Logo, alt: "Logo Image" },
    { id: 5, url: Img10, alt: "Interior design" },
    { id: 6, url: Img23, alt: "Landscape design" },
    { id: 7, url: Img5, alt: "Architecture project" },
    { id: 8, url: Img18, alt: "Interior design" },
    { id: 9, url: Img30, alt: "Landscape design" },
    { id: 10, url: Img1, alt: "Architecture project" },
    { id: 11, url: Img26, alt: "Interior design" },
  ];
  
  const rowTwoImages = [
    { id: 12, url: Img11, alt: "Architecture project" },
    { id: 13, url: Img24, alt: "Interior design" },
    { id: 14, url: Img2, alt: "Landscape design" },
    { id: 15, url: Img15, alt: "Architecture project" },
    { id: 16, url: Img8, alt: "Interior design" },
    { id: 17, url: Img25, alt: "Landscape design" },
    { id: 18, url: Img22, alt: "Architecture project" },
    { id: 19, url: Img6, alt: "Interior design" },
    { id: 20, url: Img19, alt: "Landscape design" },
    { id: 21, url: Img12, alt: "Architecture project" },
    { id: 22, url: Img28, alt: "Interior design" },
  ];
  
  const rowThreeImages = [
    { id: 23, url: Img16, alt: "Architecture project" },
    { id: 24, url: Img17, alt: "Interior design" },
    { id: 25, url: Img13, alt: "Landscape design" },
    { id: 26, url: Img9, alt: "Architecture project" },
    { id: 27, url: Img20, alt: "Interior design" },
    { id: 28, url: Img4, alt: "Landscape design" },
    { id: 29, url: Img27, alt: "Architecture project" },
    { id: 30, url: Img29, alt: "Interior design" },
    { id: 31, url: Img31, alt: "Landscape design" },
    { id: 32, url: Img32, alt: "Architecture project" },
    { id: 33, url: Img31, alt: "Interior design" }, // used twice to balance
  ];

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="max-w-full">
        <h2 className="text-3xl text-center mb-4 text-gray-700">A CLOSER LOOK AT WHAT WE DO</h2>
        <div className="w-50 h-1 bg-gray-600 mx-auto mb-8"></div>


        {/* First row sliding left to right */}
        <div className="relative overflow-hidden ">
          <div className="flex animate-slide-left">
            {/* Double the images to create seamless loop */}
            {[...rowOneImages, ...rowOneImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0 ">
                <div className="p-1 bg-white shadow-sm rounded">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-64 h-48 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row sliding right to left */}
        <div className="relative overflow-hidden ">
          <div className="flex animate-slide-right">
            {/* Double the images to create seamless loop */}
            {[...rowTwoImages, ...rowTwoImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0 ">
                <div className="p-1 bg-white shadow-sm rounded">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-64 h-48 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third row sliding left to right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {/* Double the images to create seamless loop */}
            {[...rowThreeImages, ...rowThreeImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0 ">
                <div className="p-1 bg-white shadow-sm rounded">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-64 h-48 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation: slide-left 40s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SlidingGallery;