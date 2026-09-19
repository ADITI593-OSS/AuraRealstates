# AuraEstates - Real Estate Property Portal

A modern, responsive, and feature-rich frontend-only Real Estate Property Portal built with **HTML5**, **CSS3**, **Bootstrap 5**, and **vanilla JavaScript**.

The platform provides an elegant interface for exploring luxury residential and commercial properties, filtering listings by multi-criteria attributes, inspecting detailed architectural specs, saving favorites with persistent browser storage, calculating monthly mortgage commitments, and submitting inquiries.

---

## 🌟 Key Features

### 1. Home Page (`index.html`)
- **Luxury Hero Showcase**: High-impact background, engaging typography, and status tabs (*All*, *For Sale*, *For Rent*).
- **Interactive Quick Search**: Instant search by location keyword, property type, and maximum price with automatic query forwarding to the properties catalog.
- **Metrics Strip**: Key statistics showing curated properties, satisfaction rate, global prime markets, and awards.
- **Featured Listings**: Dynamic cards displaying prices, location badges, key specs (beds, baths, sq ft), and quick actions.
- **Property Categories**: Direct category navigation for *Villas*, *Penthouses*, *Apartments*, *Townhouses*, and *Commercial Spaces*.
- **Popular Prime Locations**: Destination highlights for *Dubai*, *New York*, *London*, *Mumbai*, *Bangalore*, and *Miami*.
- **Why Choose Us**: Value proposition cards highlighting verified titles, transparent pricing, dedicated advisors, and 24/7 concierge support.
- **Client Testimonials**: Verified homeowner reviews with star ratings and photos.

### 2. Property Directory & Search Filter (`properties.html`)
- **Multi-Criteria Search & Filter Sidebar**:
  - Keyword search across property titles, addresses, cities, and descriptions.
  - Property Type dropdown (*Villa, Penthouse, Apartment, Townhouse, Commercial*).
  - Status filter (*For Sale, For Rent*).
  - Dynamic **Price Range Slider** with live price indicator ($5k – $5M+).
  - Minimum Bedrooms filter (*1+, 2+, 3+, 4+*).
  - Checkbox filters for popular amenities (*Swimming Pool, Private Garden, Parking, Elevator, Security*).
  - **One-Click Reset**: Resets all active filters.
- **View Switcher**: Toggle smoothly between **Grid View** and **List View**.
- **Sorting Options**: Sort by *Featured First*, *Price (Low to High)*, *Price (High to Low)*, *Area (Largest)*, and *Newest Year Built*.
- **Live Results Counter & Empty State**: Clear feedback with recommendations when no listings match the criteria.

### 3. Detailed Property Showcase (`property-details.html`)
- **Dynamic URL Parameters**: Loads listing data seamlessly using `?id=<propertyId>`.
- **High-Resolution Media Gallery**: Main showcase image with interactive thumbnail switcher.
- **Key Specifications Grid**: Visual metric boxes for Bedrooms, Bathrooms, Living Area, Year Built, Garage Capacity, and Category.
- **Comprehensive Amenities**: Grid of verified features and luxury appointments.
- **Architectural Floor Plan Preview**: Master schematic blueprint overview with option to request CAD blueprints.
- **Interactive Mortgage Calculator**:
  - Input home purchase price, down payment amount, annual interest rate, and loan duration (10, 15, 20, 30 years).
  - Real-time monthly payment calculation using standard amortization formulas:
    $$\text{Monthly Payment} = P \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
- **Listing Specialist Card**: Direct telephone and email links to the assigned portfolio director.
- **Schedule a Tour / Inquire Form**: Client-side validated form to schedule private physical or virtual showings.
- **Similar Properties Slider**: Automatic recommendations of properties within the same city or category.

### 4. Saved Favorites (`favorites.html`)
- **Local Storage Persistence**: Save and remove favorite properties with state retained across browser sessions.
- **Synchronized Badge Counter**: Active favorite count displayed across the navigation bar on every page.
- **Dynamic Management**: 1-click removal with instant DOM refresh, "Clear All" modal confirmation, and empty state with browse CTA.

### 5. About Us (`about.html`)
- **Brand Story & Vision**: Company philosophy focusing on architectural distinction and client discretion.
- **Foundational Principles**: Core values covering architectural merit, fiduciary trust, tech-forward platform, and eco-responsibility.
- **Executive Leadership**: Specialist director cards across Dubai, New York, Mumbai, and London.
- **Milestone Statistics**: Highlights of portfolio transactions and global advisory desks.

### 6. Contact & Inquiry (`contact.html`)
- **Contact Info Strip**: Global headquarters, direct advisory lines, emails, and concierge hours.
- **Interactive Contact Form**: Client-side validation (`needs-validation`) for inquiries, budget selection, and contact preference.
- **International Desks**: Addresses and contact details for regional offices in Dubai, London, Mumbai, and Miami.
- **FAQ Accordion**: Answers to common queries about title verification, international purchases, private tours, and mortgages.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility attributes, and metadata |
| **CSS3** | Custom luxury real estate design system, gradients, transitions, and hover effects |
| **Bootstrap 5.3.3** | Responsive grid layout, flexbox utilities, modal dialogs, and form styling |
| **Bootstrap Icons 1.11.3** | Vector iconography for specs, amenities, and UI actions |
| **JavaScript (ES6+)** | Dynamic rendering, search & filtering, favorites management via `localStorage`, mortgage calculator, and toast notifications |

---

## 📁 Project Structure

```
Real-Estate-Property-Portal/
│
├── index.html               # Home page with hero, search, featured listings, categories, locations
├── properties.html          # Properties directory with multi-filter sidebar & grid/list views
├── property-details.html    # Detailed property view, image gallery, specs, mortgage calculator
├── favorites.html           # Saved favorite properties with localStorage persistence
├── about.html               # About company, story, mission, core values, leadership team
├── contact.html             # Contact info, validated inquiry form, global desk directory, FAQ
│
├── css/
│   └── style.css            # Modern luxury design system (Slate, Navy & Teal accents)
│
├── js/
│   ├── data.js              # Comprehensive dataset of 12 realistic luxury property listings
│   └── script.js            # Core interactive logic (search, filter, favorites, calculator, toast)
│
└── README.md                # Project documentation and guide
```

---

## 🚀 How to Run the Project

### Option 1: Direct Browser
1. Download or clone this repository to your local machine.
2. Navigate to the project directory.
3. Double-click `index.html` to open it in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions Marketplace if not already installed.
3. Right-click on `index.html` in the file explorer.
4. Select **"Open with Live Server"**.
5. The website will automatically launch at `http://127.0.0.1:5500/index.html` with auto-reload enabled.

---

## 🔮 Future Scope & Backend Roadmap

The current version is a frontend prototype. It is architected to easily integrate with a full-stack backend:

- **Backend Framework**: Java Spring Boot (RESTful API architecture)
- **Database**: MySQL / PostgreSQL with Hibernate ORM
- **Authentication**: Spring Security with JWT (JSON Web Tokens) for client & agent login
- **User Roles**: Registered Buyer, Property Owner/Seller, Licensed Broker, System Admin
- **Features**:
  - User profile and saved search alerts
  - Property owner dashboard for submitting and managing listings
  - Cloud-based multi-image uploading (AWS S3 or Cloudinary)
  - Real-time chat with assigned property brokers
  - Automated email notifications for showings and inquiries

---

## 👤 Author

**Aditi Gupta**  
*Computer Science Student & Frontend / Full Stack Development Learner*
