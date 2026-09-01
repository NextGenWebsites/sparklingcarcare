import expressWashImg from "../images/packages/express-wash.jpeg";
import basicWashImg from "../images/packages/basic-wash.jpeg";
import standardWashImg from "../images/packages/standard-wash.jpeg";
import deluxeWashImg from "../images/packages/deluxe-wash.jpeg";
import miniDetailImg from "../images/packages/mini-detail.jpeg";
import fullDetailImg from "../images/packages/full-detail.jpeg";

// ─── Business Info ────────────────────────────────────────────────────────────
export const BUSINESS_INFO = {
  name: "Sparkling Car Care",
  tagline: "Ceramic Coating, Scratch & Dent Repair and Car Detailing in Sydney",
  address: "77/81 Reserve Rd, Artarmon NSW 2064",
  phone: "(02) 9438 4988",
  phoneTel: "+61294384988",
  email: "info@sparklingcarcare.com.au",
  hours: "Mon–Fri: 10AM–6PM | Sat: 10AM–3PM",
  hoursShort: "Mon-Fri 10-6 · Sat 10-3",
  instagram: "https://www.instagram.com/sparklingcarcare_/",
  facebook: "https://www.facebook.com/profile.php?id=61574501624415",
  tiktok: "https://www.tiktok.com/@sparklingcarcare_",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4130.627978734494!2d151.1870256!3d-33.8158916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aed8a0f7fcb9%3A0x75b682048520f614!2sSparkling%20Car%20Care!5e0!3m2!1sen!2slk!4v1743506974028!5m2!1sen!2slk",
  googleReviewsUrl: "https://maps.app.goo.gl/MY6iDmVkR5A6VAxP7",
  siteUrl: "https://www.sparklingcarcare.com.au",
};

// ─── Service Pricing ─────────────────────────────────────────────────────────
// ✏️  EASY TO UPDATE - Client to replace demo prices with final prices.
// No component redesign needed - just update the values below.
export const SERVICE_PRICING = {
  ceramicCoating: {
    label: "Ceramic Coating",
    note: "Includes a full wash, clay bar decontamination, and 1-step polish prep. All applications use professional-grade ceramic products.",
    disclaimer: "* Prices are indicative. Final quote provided after vehicle inspection.",
    tiers: [
      { label: "Hatchback / Sedan", price: "$550", note: "e.g. Yaris, Golf, Camry, Mazda 3" },
      { label: "SUV / 4x4",         price: "$750", note: "e.g. RAV4, Hilux, X-Trail" },
    ],
  },
  scratchDentRepair: {
    label: "Scratch & Dent Repair",
    note: "All repairs use professional paintless dent removal (PDR) techniques or paint-matched touch-up as required. Finished to a seamless OEM standard.",
    disclaimer: "* Pricing is per panel per defect. Complex damage assessed on inspection.",
    tiers: [
      { label: "Minor Surface Scratch",          price: "From $80",  note: "Clear coat only, no paint through" },
      { label: "Deep Scratch (paint through)",   price: "From $150", note: "Requires paint-matched touch-up" },
      { label: "Small Dent (no paint damage)",   price: "From $120", note: "PDR - no paint required" },
      { label: "Small Dent (with paint damage)", price: "From $220", note: "PDR + touch-up" },
      { label: "Large Dent / Panel Damage",      price: "From $350", note: "Full panel assessment on inspection" },
    ],
  },
};

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const REVIEWS = [
  {
    id: 1,
    name: "Ben Hoskins",
    rating: 5,
    text: "I highly recommend these guys! Just picked up my car and it genuinely looks brand new. Service, attention to detail and value for money all outstanding. Thanks team!",
    date: "3 months ago",
  },
  {
    id: 2,
    name: "Nicole B.",
    rating: 5,
    text: "Completely satisfied and impressed with the thorough internal and external cleaning done on my car today. Thank you.",
    date: "5 months ago",
  },
  {
    id: 3,
    name: "Andrew Met.",
    rating: 5,
    text: "Wow. Eddie really is amazing at what he does! My 21 year old Landcruiser looked like a brand new 4WD when I picked it up. Thank you.",
    date: "4 months ago",
  },
  {
    id: 4,
    name: "Michael Li",
    rating: 5,
    text: "Beautiful service. Got the full detail and car came back looking brand new! 10/10 definitely would recommend.",
    date: "2 months ago",
  },
  {
    id: 5,
    name: "Vanessa Ho",
    rating: 5,
    text: "Very lovely service. Worth the money. Went in for a full detail and was very pleased. Definitely coming back!",
    date: "1 month ago",
  },
  {
    id: 6,
    name: "Jatay",
    rating: 5,
    text: "These guys do a fantastic job. Inside and out the car looked brand new. Didn't take long and were so easy to deal with. I'll be back again!",
    date: "6 months ago",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES_LIST = [
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "Our professional ceramic coating bonds a durable, hydrophobic layer directly to your paint that repels water, dirt, UV rays and chemical contaminants. The result is a deep, mirror-like gloss that stays cleaner for longer and is far easier to maintain than an uncoated car.",
    featured: true,
    badge: "New Service",
  },
  {
    id: "scratch-dent-repair",
    title: "Scratch, Dent & Paint Repair",
    description:
      "From minor scuffs to deeper scratches and panel dents, our technicians offer comprehensive bodywork restoration. We provide professional paintwork and full panel resprays to return your car's exterior to a seamless, factory-quality finish.",
    featured: true,
    badge: "New Service",
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description:
      "A thorough hand wash, clay bar decontamination, machine polish and protective wax restore your paint's depth and shine. We remove embedded fallout, tar spots and light scratches to leave your car looking straight off the showroom floor.",
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description:
      "We deep clean every surface inside your vehicle - leather or fabric seats, carpets, headliner, dashboard, vents and door cards. Sanitised, conditioned and refreshed so the inside of your car feels brand new.",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description:
      "Multi-stage machine polishing removes swirl marks, buffer trails, water etching and light scratches from your clear coat, revealing the true depth of your paint. An essential foundation before ceramic coating.",
  },
  {
    id: "odour-removal",
    title: "Odour Removal",
    description:
      "We target and neutralise stubborn odours at their source - smoke, pet, mildew or food. Using ozone treatment and enzyme-based products, we leave your cabin genuinely fresh and odour-free.",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description:
      "Oxidised and yellowed headlights are sanded, machine-polished and UV-sealed to restore crystal clarity, dramatically improving night visibility and giving your vehicle a much cleaner, newer appearance.",
  },
  {
    id: "engine-bay-wash",
    title: "Engine Bay Wash",
    description:
      "A professionally degreased and detailed engine bay not only looks impressive but makes it far easier to spot leaks, worn components and maintenance issues. We protect sensitive electronics throughout the process.",
  },
];

// ─── Packages ─────────────────────────────────────────────────────────────────
// ✏️  Wash/detail package pricing - easy to update.
export const PACKAGES_LIST = [
  {
    id: "express-wash",
    title: "Express Wash",
    price: "$30 Sedan / $40 SUV",
    description:
      "A quick exterior hand wash, chamois dry and tyre shine - perfect for regular maintenance between details.",
    features: ["Hand Wash & Chamois Dry", "Tyre Shine"],
    image: expressWashImg,
    tier: "entry",
  },
  {
    id: "basic-wash",
    title: "Basic Wash",
    price: "$40 Sedan / $50 SUV",
    description:
      "Express Wash plus a full interior vacuum to keep your cabin neat and your exterior gleaming.",
    features: ["Hand Wash & Chamois Dry", "Interior Vacuum", "Tyre Shine"],
    image: basicWashImg,
    tier: "entry",
  },
  {
    id: "standard-wash",
    title: "Standard Wash",
    price: "$60 Sedan / $70 SUV",
    description:
      "A thorough exterior and interior clean including window polishing and trim wipe-down.",
    features: [
      "Hand Wash & Chamois Dry",
      "Interior Vacuum",
      "Windows Cleaned",
      "Trim Wipe-Down",
      "Tyre Shine",
    ],
    image: standardWashImg,
    tier: "mid",
  },
  {
    id: "deluxe-wash",
    title: "Deluxe Wash",
    price: "$132 Sedan / $165 SUV",
    description:
      "Everything in Standard Wash plus a hand machine polish to restore your paint's lustre.",
    features: [
      "Hand Wash & Chamois Dry",
      "Interior Vacuum",
      "Windows Cleaned",
      "Trim Wipe-Down",
      "Tyre Shine",
      "Hand Machine Polish",
    ],
    image: deluxeWashImg,
    tier: "mid",
    popular: true,
  },
  {
    id: "mini-detail",
    title: "Mini Detail",
    price: "$198 Sedan / $250 SUV",
    description:
      "Standard Wash with a full machine polish and engine bay wash for a head-to-toe refresh.",
    features: ["Standard Wash", "Machine Polish", "Engine Bay Wash"],
    image: miniDetailImg,
    tier: "premium",
  },
  {
    id: "full-detail",
    title: "Full Detail",
    price: "$298 Sedan / $350 SUV",
    description:
      "The ultimate detailing package - Standard Wash, engine bay, interior shampoo and a two-step paint correction for a flawless showroom finish.",
    features: [
      "Standard Wash",
      "Engine Bay Wash",
      "Interior Shampoo",
      "Two-Step Paint Correction",
    ],
    image: fullDetailImg,
    tier: "premium",
  },
];
