// ─── Business Info ────────────────────────────────────────────────────────────
export const BUSINESS_INFO = {
  name: "Sparkling Car Care",
  tagline: "Professional Car Detailing in Sydney",
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

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const REVIEWS = [
  {
    id: 1,
    name: "Ben Hoskins",
    rating: 5,
    text: "I highly recommend these guys! Just picked up my car and it genuinely looks brand new. And when I left it with them it was in a sorry state. Service, attention to detail and value for money all outstanding. Thanks team!",
    date: "3 months ago",
  },
  {
    id: 2,
    name: "Nicole B.",
    rating: 5,
    text: "Completely satisfied and impressed with the thorough internal and external cleaning done on my car today. Thank you. Nicole Bannister - BDU 73H - Impreza RX.",
    date: "5 months ago",
  },
  {
    id: 3,
    name: "Andrew Met.",
    rating: 5,
    text: "Wow. Eddie really is amazing at what he does! I took my 21 year old Landcruiser to Eddie for a polish after a large weekend offroad. When I picked up the 4WD at 5pm it was sparkling like a brand new 4WD. Thank you.",
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
    text: "These guys do a fantastic job. Inside and out the car looked brand new. Didn't take long and were so easy to deal with. I'll be back again, and will remember to leave the car keys next time!",
    date: "6 months ago",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES_LIST = [
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description:
      "Our exterior detailing service brings your vehicle's shine back to life. We remove dirt, grime, and contaminants with a thorough wash, followed by hand waxing or machine polishing to protect your paint and enhance gloss.",
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description:
      "We deep clean every corner of your vehicle's interior, from seats and carpets to dashboards and vents. Whether it's leather, fabric, or plastic, we restore, sanitise, and refresh surfaces to a like-new condition.",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description:
      "Restore your car's finish with our professional paint correction. We carefully remove swirl marks, scratches, and oxidation to bring out a flawless, high-gloss shine.",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "Give your paint long-lasting protection and deep gloss with our professional ceramic coating. This advanced layer bonds to your car's surface, repelling water, dirt, and UV rays while enhancing shine for years.",
  },
  {
    id: "odour-removal",
    title: "Odour Removal",
    description:
      "Say goodbye to stubborn smells with our professional odour removal service. Whether it's smoke, pet, food, or mildew, we target and neutralise the source - not just mask it.",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description:
      "Cloudy, yellow headlights can reduce both visibility and the look of your vehicle. Our headlight restoration service clears up foggy lenses and protects them, improving nighttime driving safety.",
  },
  {
    id: "engine-bay-wash",
    title: "Engine Bay Wash",
    description:
      "A clean engine bay not only looks impressive but also helps with maintenance and spotting issues early. We carefully degrease and rinse your engine compartment, taking care not to damage sensitive components.",
  },
  {
    id: "minor-dent-removal",
    title: "Minor Dent Removal",
    description:
      "Got a dent or ding? Our minor dent removal service targets those small imperfections without needing a full panel respray. Using precision techniques, we restore your vehicle's smooth finish quickly and affordably.",
  },
];

// ─── Packages ─────────────────────────────────────────────────────────────────
export const PACKAGES_LIST = [
  {
    id: "express-wash",
    title: "Express Wash",
    price: "$30 Sedan / $40 SUV",
    description:
      "A quick and efficient exterior clean, including a hand wash, chamois dry, and tyre shine to give your car a refreshed look.",
    features: ["Wash Exterior and Chamois", "Tyre Shine"],
    image:
      "https://i0.wp.com/peaceentqatar.com/wp-content/uploads/2019/07/17545524_140141669847553_5202430352564902303_o-1.jpg?ssl=1",
    tier: "entry",
  },
  {
    id: "basic-wash",
    title: "Basic Wash",
    price: "$40 Sedan / $50 SUV",
    description:
      "Includes everything in the Express Wash plus an interior vacuum to remove dust and debris, keeping both the inside and outside of your car looking neat.",
    features: ["Wash Exterior and Chamois", "Interior Vacuum", "Tyre Shine"],
    image:
      "https://media.istockphoto.com/id/826875544/photo/high-pressure-washing-car-outdoors.jpg?s=612x612&w=0&k=20&c=VWs9auj2wJpOEXSe4ZC5XVHFCOpOHIbkFHLnZY2-Q1M=",
    tier: "entry",
  },
  {
    id: "standard-wash",
    title: "Standard Wash",
    price: "$60 Sedan / $70 SUV",
    description:
      "A thorough clean that covers the exterior, interior vacuuming, window cleaning, and trim wipe-down, ensuring a polished and well-maintained look inside and out.",
    features: [
      "Wash Exterior and Chamois",
      "Interior Vacuum",
      "Windows Cleaned",
      "Wipe Down Trims",
      "Tyre Shine",
    ],
    image:
      "https://shop.rikecool.com.sg/wp-content/uploads/2023/09/car-wash-detailing-station_1303-22319.jpg",
    tier: "mid",
  },
  {
    id: "deluxe-wash",
    title: "Deluxe Wash",
    price: "$132 Sedan / $165 SUV",
    description:
      "A premium wash package that includes everything in the Standard Wash, plus a professional hand polish to restore shine and enhance your vehicle's appearance.",
    features: [
      "Wash Exterior and Chamois",
      "Interior Vacuum",
      "Windows Cleaned",
      "Wipe Down Trims",
      "Tyre Shine",
      "Hand Polish",
    ],
    image:
      "https://www.jalopnik.com/jalopnik/images/b5b2550c72d99e5dcb0bbd70c28a1495.jpg",
    tier: "mid",
    popular: true,
  },
  {
    id: "mini-detail",
    title: "Mini Detail",
    price: "$198 Sedan / $250 SUV",
    description:
      "A deep cleaning package that combines the Standard Wash with a high-quality hand polish and an engine bay wash, ensuring a spotless and glossy finish.",
    features: ["Standard Wash +", "Hand Polish", "Engine Bay Wash"],
    image:
      "https://www.momscardetailing.com/wp-content/uploads/2025/03/104202763_1708027612681300_7224795719929665443_n-1-rotated.jpg",
    tier: "premium",
  },
  {
    id: "full-detail",
    title: "Full Detail",
    price: "$298 Sedan / $350 SUV",
    description:
      "The ultimate detailing service, featuring a Standard Wash, engine bay wash, deep interior shampooing, and a two-step paint correction to remove imperfections and restore your car's paint to a flawless shine.",
    features: [
      "Standard Wash +",
      "Engine Bay Wash",
      "Shampoo Interior",
      "Two Step Paint Correction",
    ],
    image:
      "https://www.cartoys.com/cdn/shop/files/Car_detailing_ServiceSection_512x300_2dd1ef7e-4b4d-45aa-90f5-650d299dd56e.jpg?v=1694798075&width=512",
    tier: "premium",
  },
];
