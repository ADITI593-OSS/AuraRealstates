// Sample Property Dataset for Real Estate Property Portal
// Created by Aditi Gupta

const propertiesData = [
  {
    id: 1,
    title: "The Grand Azure Waterfront Villa",
    tagline: "Panoramic oceanfront luxury with private infinity pool and smart home automation",
    propertyType: "Villa",
    status: "For Sale",
    price: 7850000,
    priceFormatted: "AED 7,850,000",
    pricePeriod: "",
    location: "Palm Jumeirah, Dubai",
    city: "Dubai",
    address: "Frond N, Palm Jumeirah, Dubai, UAE",
    bedrooms: 5,
    bathrooms: 6,
    areaSqft: 6800,
    featured: true,
    yearBuilt: 2023,
    garage: 3,
    description: "Welcome to The Grand Azure, an architectural masterpiece perched directly along the calm azure waters of Palm Jumeirah. Crafted with bespoke Italian marble flooring, floor-to-ceiling panoramic glass walls, and an expansive private terrace featuring an infinity edge pool. This residence offers ultra-luxurious living with seamless indoor-outdoor transition, a state-of-the-art chef's kitchen, private spa room, and dedicated staff quarters.",
    features: [
      "Private Infinity Pool",
      "Private Beach Access",
      "Smart Home Automation",
      "Chef's Modular Kitchen",
      "Marble Bathrooms",
      "24/7 Gated Security",
      "Covered 3-Car Garage",
      "Private Elevator",
      "Home Cinema",
      "Landscaped Garden"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Sophia Martinez",
      title: "Luxury Portfolio Director",
      phone: "+1 (555) 234-5678",
      email: "sophia.martinez@estatehub.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 2,
    title: "Skyline Panorama Triplex Penthouse",
    tagline: "Spectacular 360-degree skyline views over Manhattan from your private rooftop terrace",
    propertyType: "Penthouse",
    status: "For Sale",
    price: 1950000,
    priceFormatted: "Rs.1,950,000",
    pricePeriod: "",
    location: "Hinjewadi Phase 2, Maharashtra",
    city: "Pune",
    address: "185 Franklin Street, pune, Maharashtra, 411038",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 5200,
    featured: true,
    yearBuilt: 2022,
    garage: 2,
    description: "Perched high above Tribeca, this triplex penthouse exemplifies modern metropolitan elegance. Featuring soaring 14-foot ceilings, custom chevron white oak floors, and a private glass enclosed elevator connecting all three levels. The crown jewel is a 1,400 sq ft private rooftop deck equipped with an outdoor fireplace, hot tub, and outdoor summer kitchen overlooking the iconic Manhattan skyline.",
    features: [
      "Private Rooftop Deck",
      "Manhattan Skyline Views",
      "Private Glass Elevator",
      "Heated Flooring",
      "Sub-Zero & Wolf Appliances",
      "Concierge & Doorman",
      "Wine Cellar",
      "Fitness Center Access",
      "Central HVAC with HEPA",
      "Custom Walk-In Closets"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Chanchal Bissa",
      title: "Senior Vice President of Sales",
      phone: "+91 9171414469",
      email: "chanchal.bissa12@estatehub.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 3,
    title: "Serenade Modern Minimalist Villa",
    tagline: "Eco-conscious contemporary architecture framed by lush tropical greenery",
    propertyType: "Villa",
    status: "For Sale",
    price: 2650000,
    priceFormatted: "Rs.2,650,000",
    pricePeriod: "",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    address: "Plot 42, Palm Meadows Enclave, Whitefield, Bangalore 560066",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 4500,
    featured: true,
    yearBuilt: 2024,
    garage: 2,
    description: "Designed for discerning homeowners seeking serenity and sustainability, Serenade Villa incorporates solar energy integration, rainwater harvesting, and double-height bioclimatic glass courtyards. Enjoy calm indoor water bodies, teakwood accents, open-plan dining, and an organic rooftop greenhouse.",
    features: [
      "Solar Power System",
      "Private Plunge Pool",
      "Double Height Living",
      "Rainwater Harvesting",
      "Clubhouse Access",
      "Landscaped Courtyard",
      "EV Charging Station",
      "High-Tech Security System",
      "Balcony Sit-out",
      "Modular Kitchen"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Ananya Deshmukh",
      title: "Principal Property Consultant",
      phone: "+91 98200 12345",
      email: "ananya.d@estatehub.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 4,
    title: "The Kensington Heritage Townhouse",
    tagline: "Timeless Victorian charm seamlessly restored with contemporary designer interiors",
    propertyType: "Townhouse",
    status: "For Sale",
    price: 3450000,
    priceFormatted: "Rs.3,450,000",
    pricePeriod: "",
    location: "Munnar, Kerala",
    city: "Munnar",
    address: "24 Queen's Gate Gardens, Munnar, India 400021",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 3800,
    featured: true,
    yearBuilt: 2021,
    garage: 1,
    description: "An exceptional grade-listed Kensington townhouse offering period architectural integrity paired with ultra-contemporary British interior styling. Features classical sash windows, original cornicing, high ornate ceilings, bespoke handcrafted kitchen cabinetry, a private landscaped rear garden, and a subterranean climate-controlled wine tasting cellar.",
    features: [
      "Historic Facade Restored",
      "Private Garden Patio",
      "Wine Cellar & Tasting Room",
      "Underfloor Heating",
      "Period Fireplaces",
      "Resident Permit Parking",
      "Bespoke Italian Wardrobes",
      "Proximity to Hyde Park",
      "Security Alarm",
      "Double Glazed Acoustic Glass"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Aditya Shrama",
      title: "Prime Location Specialist",
      phone: "+91 98765 43210",
      email: "aditya.s200@estatehub.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 5,
    title: "Azure Bay Luxury Oceanfront Condo",
    tagline: "Ultra-chic waterfront residence with floor-to-ceiling glass and private balcony",
    propertyType: "Apartment",
    status: "For Rent",
    price: 45500,
    priceFormatted: "Rs.45,500",
    pricePeriod: "/month",
    location: "South Beach, Goa",
    city: "Goa",
    address: "100 Ocean Drive, Suite 1802, South Beach, Goa 403001",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1850,
    featured: true,
    yearBuilt: 2023,
    garage: 1,
    description: "Experience vibrant coastal living in this designer furnished oceanfront apartment. Overlooking the Atlantic Ocean, the home boasts expansive wraparound glass balconies, European kitchen with quartz waterfall island, motorized blackout shades, valet parking, and direct beach attendant service.",
    features: [
      "Direct Ocean Views",
      "Wraparound Glass Balcony",
      "Infinity Edge Building Pool",
      "Valet Parking",
      "Beach Club Access",
      "State-of-the-Art Gym",
      "High-speed Fiber Optic",
      "Pet Friendly",
      "24/7 Front Desk Concierge",
      "In-unit Washer/Dryer"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Sophia Martin",
      title: "Luxury Portfolio Director",
      phone: "+91 98765 43210",
      email: "sophia.martinez@estatehub.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 6,
    title: "The Sea Breeze Promenade Residence",
    tagline: "Prestigious seafront luxury apartment overlooking the Arabian Sea",
    propertyType: "Apartment",
    status: "For Sale",
    price: 2400000,
    priceFormatted: "Rs.2,400,000",
    pricePeriod: "",
    location: "Bandra West, Mumbai",
    city: "Mumbai",
    address: "Carter Road Promenade, Bandra West, Mumbai 400050",
    bedrooms: 3,
    bathrooms: 4,
    areaSqft: 2600,
    featured: true,
    yearBuilt: 2023,
    garage: 2,
    description: "Located on prestigious Carter Road, this expansive sea-facing home features uninterrupted sunset views, imported Italian marble, acoustic insulated double-glazed windows, a sprawling master suite with dressing closet, and top-tier amenities including an elevated infinity deck.",
    features: [
      "Arabian Sea View",
      "Imported Italian Marble",
      "Private Elevators",
      "Covered Stilt Parking",
      "Fitness Center & Yoga Deck",
      "Automated Curtains & Lights",
      "High Ceilings",
      "24/7 Security & CCTV",
      "Intercom System",
      "Fire Suppression System"
    ],
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Ananya Deshmukh",
      title: "Principal Property Consultant",
      phone: "+91 98200 12345",
      email: "ananya.d@estatehub.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 7,
    title: "Apex Corporate Center Plaza",
    tagline: "Grade-A LEED Platinum certified commercial office space in prime commercial hub",
    propertyType: "Commercial",
    status: "For Rent",
    price: 14000,
    priceFormatted: "Rs.14,000",
    pricePeriod: "/month",
    location: "Bandra Kurla Complex (BKC), Mumbai",
    city: "Mumbai",
    address: "Tower B, Level 11, G Block, BKC, Mumbai 400051",
    bedrooms: 0,
    bathrooms: 4,
    areaSqft: 6500,
    featured: false,
    yearBuilt: 2022,
    garage: 6,
    description: "Fully fitted premium office headquarters in the heart of BKC financial district. Comes equipped with executive boardrooms, video conference suites, 80 modular workstations, private executive cabins, cafeteria lounge, and 100% DG power backup.",
    features: [
      "LEED Platinum Certified",
      "100% Power Backup",
      "Central HVAC Multi-Zone",
      "High-speed Elevators",
      "Executive Boardroom",
      "Access Control Turnstiles",
      "Dedicated Server Room",
      "Multi-level Parking",
      "Cafeteria & Pantry Area",
      "Fiber Internet Ready"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Marcus Vance",
      title: "Senior Vice President of Sales",
      phone: "+1 (555) 456-7890",
      email: "marcus.vance@estatehub.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 8,
    title: "The Magnolia Colonial Estate",
    tagline: "Grand country estate nestled on 2 acres of manicured gardens and tall pines",
    propertyType: "Villa",
    status: "For Sale",
    price: 2750000,
    priceFormatted: "Rs.2,750,000",
    pricePeriod: "",
    location: "Greenwich, Connecticut",
    city: "New York",
    address: "58 Magnolia Ridge Way, Greenwich, CT 06830",
    bedrooms: 6,
    bathrooms: 6,
    areaSqft: 7200,
    featured: false,
    yearBuilt: 2020,
    garage: 3,
    description: "An extraordinary suburban sanctuary combining stately New England architecture with luxury appointments. Highlights include a vaulted grand foyer, heated swimming pool, tennis/pickleball court, guest cottage, and expansive alfresco entertaining pavilion.",
    features: [
      "2-Acre Private Grounds",
      "Tennis / Pickleball Court",
      "Heated Swimming Pool",
      "Guest Carriage House",
      "Four Fireplaces",
      "Gourmet Pantry & Butler Kitchen",
      "Library / Study",
      "Security Gate & Guardhouse",
      "Smart Sprinkler System",
      "Finished Basement Lounge"
    ],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Marcus Vance",
      title: "Senior Vice President of Sales",
      phone: "+1 (555) 456-7890",
      email: "marcus.vance@estatehub.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 9,
    title: "Mayfair Contemporary Garden Duplex",
    tagline: "Stunning light-filled garden apartment in London's most celebrated quarter",
    propertyType: "Apartment",
    status: "For Rent",
    price: 9800,
    priceFormatted: "Rs.9,800",
    pricePeriod: "/month",
    location: "Mayfair, London",
    city: "London",
    address: "12 Grosvenor Square, Mayfair, London W1K 2HP",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2400,
    featured: false,
    yearBuilt: 2022,
    garage: 1,
    description: "An exceptionally private duplex residence situated in prestigious Mayfair. Boasting a private landscaped courtyard garden, bespoke Poliform kitchen, marble en-suite bathrooms, 24-hour porterage, and direct secure underground car parking.",
    features: [
      "Private Landscaped Garden",
      "24-Hour Uniformed Porter",
      "Underground Parking Bay",
      "Poliform Custom Joinery",
      "Comfort Cooling System",
      "Direct Private Entrance",
      "Miele Premium Appliances",
      "Walk to Hyde Park",
      "Security Safe Room",
      "High Ceilings Throughout"
    ],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Arthur Pendelton",
      title: "Prime London Specialist",
      phone: "+44 20 7946 0912",
      email: "arthur.p@estatehub.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 10,
    title: "Lakeside Modernist Townhome",
    tagline: "Sleek multi-level urban sanctuary with floor-to-ceiling glass and private elevator",
    propertyType: "Townhouse",
    status: "For Sale",
    price: 1890000,
    priceFormatted: "Rs.1,890,000",
    pricePeriod: "",
    location: "Indiranagar, Bangalore",
    city: "Bangalore",
    address: "100 Feet Road, HAL 2nd Stage, Indiranagar, Bangalore 560038",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3900,
    featured: false,
    yearBuilt: 2023,
    garage: 2,
    description: "Nestled in the most sought-after lifestyle neighbourhood of Bangalore, this 4-level modern townhouse features private hydraulic lift, terrace jacuzzi, double-height living room, smart lighting presets, and soundproof acoustic glass windows.",
    features: [
      "Private Hydraulic Lift",
      "Rooftop Jacuzzi Lounge",
      "Smart Lighting Automation",
      "Designer Italian Kitchen",
      "Covered 2-Car Parking",
      "CCTV Surveillance",
      "Solar Water Heating",
      "Private Balconies",
      "Walk-in Dressing Room",
      "EV Fast Charging"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Ananya Deshmukh",
      title: "Principal Property Consultant",
      phone: "+91 98200 12345",
      email: "ananya.d@estatehub.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 11,
    title: "Downtown Tech Hub Loft Office",
    tagline: "High-energy open-concept creative loft in Manhattan's historic Silicon Alley",
    propertyType: "Commercial",
    status: "For Rent",
    price: 11500,
    priceFormatted: "Rs.11,500",
    pricePeriod: "/month",
    location: "Flatiron District, New York",
    city: "New York",
    address: "28 W 23rd Street, 5th Floor, New York, NY 10010",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 3500,
    featured: false,
    yearBuilt: 2021,
    garage: 0,
    description: "Exposed brick, polished concrete floors, and original timber columns define this premium creative loft. Ready for tech teams and innovative agencies, with fiber-optic connectivity, acoustic breakout phone booths, conference room, and designer lounge pantry.",
    features: [
      "Exposed Brick & Beams",
      "Polished Concrete Floors",
      "Fiber Optic Gigabit Internet",
      "Acoustic Phone Booths",
      "Designer Kitchen & Bar",
      "Direct Keyed Elevator Access",
      "Abundant Natural Light",
      "Bicycle Storage",
      "24/7 Keycard Entry",
      "Central Air Conditioning"
    ],
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Marcus Vance",
      title: "Senior Vice President of Sales",
      phone: "+1 (555) 456-7890",
      email: "marcus.vance@estatehub.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: 12,
    title: "Burj Vista Cloud Penthouse",
    tagline: "Spectacular high-floor residence with direct unobstructed Burj Khalifa views",
    propertyType: "Penthouse",
    status: "For Sale",
    price: 7200000,
    priceFormatted: "AED 7,200,000",
    pricePeriod: "",
    location: "Downtown Dubai, Dubai",
    city: "Dubai",
    address: "Burj Vista Tower 1, Sheikh Mohammed bin Rashid Blvd, Dubai",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 4800,
    featured: true,
    yearBuilt: 2023,
    garage: 3,
    description: "Soar above Downtown Dubai with dramatic front-row vistas of Burj Khalifa and the Dubai Fountain. Featuring double volume ceiling heights, an illuminated walk-in glass dressing suite, Gaggenau kitchen appliances, private jacuzzi on terrace, and 24-hour elite concierge service.",
    features: [
      "Burj Khalifa Views",
      "Fountain View Terrace",
      "Private Terrace Jacuzzi",
      "Gaggenau Kitchen Suite",
      "Chauffeur Valet Service",
      "Infinity Pool Access",
      "Tennis & Basketball Court",
      "Resident Luxury Lounge",
      "High Floor Privacy",
      "Direct Mall Link"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    agent: {
      name: "Sophia Martinez",
      title: "Luxury Portfolio Director",
      phone: "+1 (555) 234-5678",
      email: "sophia.martinez@estatehub.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  }
];

// Popular Locations metadata for homepage showcase
const popularLocations = [
  {
    city: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 24,
    popularFor: "Waterfront Villas & Penthouses"
  },
  {
    city: "Pune",
    country: "India",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 38,
    popularFor: "Skyline Lofts & Historic Townhouses"
  },
  {
    city: "Chandigarh",
    country: "India",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 19,
    popularFor: "Victorian Mansions & Mayfair Suites"
  },
  {
    city: "Mumbai",
    country: "India",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 42,
    popularFor: "Seafront Residences & Commercial BKC"
  },
  {
    city: "Bangalore",
    country: "India",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 29,
    popularFor: "Eco Villas & Modern Tech Enclaves"
  },
  {
    city: "Delhi",
    country: "India",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 16,
    popularFor: "Oceanfront Condos & Resort Living"
  }
];
