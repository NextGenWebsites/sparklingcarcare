import React from "react";
import { Star, ChevronRight } from "lucide-react";
import { REVIEWS, BUSINESS_INFO } from "../data/content";

const tripled = [...REVIEWS, ...REVIEWS, ...REVIEWS];

const getInitial = (n) => n?.charAt(0).toUpperCase() ?? "?";

const PALETTE = ["#1d4ed8","#7c3aed","#059669","#b45309","#dc2626","#0891b2"];
const avatarColor = (name) =>
  PALETTE[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-80 mx-3 bg-raised border border-white/6 rounded-xl p-6 relative group hover:border-brand/25 transition-all duration-300">
    {/* Large quote mark */}
    <span className="absolute top-4 right-5 text-6xl font-display font-black text-brand/10 leading-none select-none">
      "
    </span>

    {/* Stars */}
    <div className="flex gap-0.5 mb-4">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} size={13} className="fill-gold text-brand" />
      ))}
    </div>

    {/* Text */}
    <p className="text-mist text-sm leading-relaxed mb-5 line-clamp-4 relative z-10">
      {review.text}
    </p>

    {/* Author row */}
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-display shrink-0"
          style={{ backgroundColor: avatarColor(review.name) }}
        >
          {getInitial(review.name)}
        </div>
        <div>
          <p className="text-snow text-sm font-medium leading-none">{review.name}</p>
          <p className="text-ghost text-xs mt-0.5">{review.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-ghost text-xs">
        <GoogleIcon />
        <span>Google</span>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => (
  <section className="py-20 bg-deep overflow-hidden">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <span className="section-label">Testimonials</span>
          <div className="flex items-start gap-4 mt-3">
            <span className="brand-bar" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-snow">
              What Our Clients Say
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-gold text-brand -ml-0.5" />
            ))}
          </div>
          <span className="text-snow font-display font-bold">4.3</span>
          <span className="text-mist text-sm">· Google Reviews</span>
        </div>
      </div>
    </div>

    {/* Scroll track */}
    <div className="reviews-track overflow-hidden">
      <div className="animate-scroll-reviews flex" style={{ width: "max-content" }}>
        {tripled.map((r, i) => (
          <ReviewCard key={`${r.id}-${i}`} review={r} />
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <a
        href={BUSINESS_INFO.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-sm"
      >
        Read All Google Reviews <ChevronRight size={16} />
      </a>
    </div>
  </section>
);

export default ReviewsSection;