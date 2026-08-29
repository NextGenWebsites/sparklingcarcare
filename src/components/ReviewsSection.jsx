import React from "react";
import { Star, ChevronRight } from "lucide-react";
import { REVIEWS, BUSINESS_INFO } from "../data/content";

// Duplicate reviews for seamless CSS infinite scroll
const allReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

const AVATAR_COLORS = [
  "bg-blue-600",
  "bg-violet-600",
  "bg-emerald-600",
  "bg-sky-600",
  "bg-indigo-600",
  "bg-cyan-600",
];

const getAvatarColor = (name) => {
  const hash = name
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

const GoogleLogo = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review }) => (
  <div
    className="flex-shrink-0 w-72 bg-[#14161B]/80 backdrop-blur border border-white/8 rounded-xl p-6 shadow-xl mx-3"
    style={{ display: "inline-block", verticalAlign: "top" }}
  >
    {/* Top: Google logo + stars */}
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-1.5">
        <GoogleLogo />
        <span className="text-xs text-[#8B93A1]">Google Review</span>
      </div>
      <div className="flex gap-0.5">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>

    {/* Review text */}
    <p className="text-[#8B93A1] text-sm leading-relaxed mb-4 line-clamp-4">
      "{review.text}"
    </p>

    {/* Author */}
    <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center text-white text-xs font-bold`}
        >
          {getInitial(review.name)}
        </div>
        <span className="text-[#F7F8FA] text-sm font-medium">{review.name}</span>
      </div>
      <span className="text-xs text-[#8B93A1]">{review.date}</span>
    </div>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-[#0A0C10] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-[#2F6FED] text-xs uppercase tracking-widest font-semibold mb-3 font-['Space_Grotesk']">
          What Our Clients Say
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#F7F8FA] font-['Space_Grotesk']">
          Customer Reviews
        </h2>
        <div className="flex justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-[#8B93A1] text-sm ml-2 self-center">5.0 on Google</span>
        </div>
      </div>

      {/* CSS-animated scroll track */}
      <div className="reviews-track overflow-hidden">
        <div
          className="animate-scroll-reviews flex"
          style={{ width: "max-content" }}
        >
          {allReviews.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href={BUSINESS_INFO.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#2F6FED]/50 text-[#F7F8FA] hover:text-[#2F6FED] px-6 py-3 rounded font-semibold text-sm transition-colors font-['Space_Grotesk']"
        >
          See All Reviews on Google
          <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;