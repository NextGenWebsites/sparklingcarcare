import React, { useEffect, useRef } from "react";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Replace your existing Reviews Section with this component
const ReviewsSection = ({ reviews, ReviewBack }) => {
  // Create a larger set of reviews to enable smooth scrolling
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Set the initial scroll position to 0
    scrollContainer.scrollLeft = 0;
    
    const animateScroll = () => {
      // If we've scrolled to the end of the first set, reset to beginning
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 4)) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1; // Adjust speed by changing this value
      }
      
      requestAnimationFrame(animateScroll);
    };
    
    const animationId = requestAnimationFrame(animateScroll);
    
    // Clean up animation when component unmounts
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Function to get the first letter of a name
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };
  
  // Function to generate a background color based on the name
  const getProfileColor = (name) => {
    const colors = [
      "bg-blue-500", "bg-green-500", "bg-purple-500", 
      "bg-pink-500", "bg-indigo-500", "bg-red-500"
    ];
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  return (
    <section 
      className="py-20 px-4 bg-gray-100 overflow-hidden" 
      style={{ 
        backgroundImage: `url(${ReviewBack})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-5xl  text-center mb-2 text-amber-50 bg-gradient-to-r from-[#000428] to-transparent via-[#004e92] w-[500px] py-5 rounded-tl-4xl rounded-bl-4xl">
          CUSTOMER REVIEWS
          </h2>
        </div>
        <div className="flex justify-center mb-12">
        </div>

        {/* Scrolling container */}
        <div 
          ref={scrollRef}
          className="overflow-x-hidden"
          style={{ 
            position: "relative",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <div className="inline-flex gap-8 py-4">
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                initial={{ opacity: 1 }}
                className="bg-white p-6 rounded-lg shadow-md min-w-64 max-w-64"
                style={{ 
                  display: "inline-block",
                  verticalAlign: "top"
                }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    {/* Google logo */}
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <div className="text-xs text-gray-500">Google Review</div>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 whitespace-normal text-sm">"{review.text}"</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    {/* Profile icon with first letter */}
                    <div className={`w-8 h-8 rounded-full ${getProfileColor(review.name)} flex items-center justify-center text-white font-bold mr-2`}>
                      {getInitial(review.name)}
                    </div>
                    <p className="font-medium">{review.name}</p>
                  </div>
                  
                  {/* Date added */}
                  <span className="text-xs text-gray-500">
                    {review.date || "3 months ago"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

{/* Test comment */}
        <div className="text-center mt-8">
          <motion.a
            href="https://maps.app.goo.gl/MY6iDmVkR5A6VAxP7"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center underline text-yellow-400 font-bold  mt-5 text-[25px]"
          >
            See all reviews on Google <ChevronRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;