# 🚗 Safe Rent Car - Modern Car Rental & Showcase Platform

A full-stack, responsive car booking and catalog web application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for smooth exploration, dynamic pricing calculation, vehicle comparison, and end-to-end simulated booking flows.

![Safe Rent Car Preview](public/hero.png)

---

## ✨ Key Features

- **🛡️ Secure Backend Route Handler (`/api/cars`)**: Keeps third-party API credentials private, preventing API key exposure and providing server-side caching (`revalidate: 3600`).
- **🔄 Resilient Data Fallback Engine**: Seamlessly falls back to an internal mock catalogue if the external RapidAPI quota is reached or offline, ensuring **100% uptime for portfolio reviewers**.
- **⚡ Skeleton Loading & Optimistic UI**: Replaced raw loaders with smooth Tailwind CSS pulse skeletons for card catalog items.
- **❤️ Favorites & Saved Vehicles**: Save and remove vehicles directly using `localStorage` persistence, with a dedicated tab to compare saved cars.
- **📅 Interactive Booking & Checkout Modal**: Select pickup & return dates, calculate rental duration, choose optional protection/GPS add-ons, and generate a confirmed booking receipt in real-time.
- **🔍 Advanced Search & Filter System**: Live search by manufacturer (Combobox autocomplete), model family, production year, and fuel type (Gas, Diesel, Electricity).
- **📱 Fully Responsive**: Optimized for desktop, tablets, and mobile devices with fluid transitions using Headless UI.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Route Handlers)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [@headlessui/react](https://headlessui.com/)
- **State Management**: React Context API (`useReducer`) + URL Search Params
- **External Data Source**: RapidAPI (Cars by API Ninjas) + Imagin Studio

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/safe-rent-car.git
cd safe-rent-car
```

### 2. Install dependencies
```bash
pnpm install
# or npm install / yarn install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory (you can copy `.env.example`):
```env
RAPIDAPI_KEY=your_rapidapi_key_here
NEXT_PUBLIC_IMAGIN_API_KEY=your_imagin_studio_key_here
```
> *Note: If no API key is provided, the application will automatically activate its curated internal fallback dataset without crashing.*

### 4. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Architecture

```
├── app/
│   ├── api/
│   │   └── cars/route.ts      # Server-side proxy with fallback logic
│   ├── globals.css            # Custom CSS & Tailwind utilities
│   ├── layout.tsx             # Root layout with FilterProvider
│   └── page.tsx               # Main landing page
├── components/
│   ├── AuthModal/             # Interactive demo sign-in dialog
│   ├── BookingModal/          # Rental checkout & date calculation
│   ├── CarCard/               # Vehicle card with favorites toggle
│   ├── CarCardSkeleton/       # Animated skeleton loading state
│   ├── CarDetails/            # Multi-angle vehicle modal & specs
│   ├── CustomButton/          # Reusable styled button
│   ├── CustomFilter/          # Listbox dropdown filter
│   ├── Header/ & Footer/      # Layout headers and footers
│   ├── Hero/                  # Landing hero banner
│   ├── PrincipalSection/      # Catalog, tabs and search results
│   ├── SearchBar/             # Make & Model input form
│   └── ShowMore/              # Pagination limit controller
├── constants/
│   ├── index.ts               # Filter options & manufacturers list
│   └── mockCars.ts            # Curated fallback vehicle dataset
├── context/
│   └── filterContex.tsx       # Global search filter reducer
├── hooks/
│   ├── useFavorites.ts        # Persistent favorites hook
│   ├── useFetchDataCar.tsx    # Cars data fetcher & state management
│   └── useFiltersSearch.tsx   # Filter context consumer
└── utils/
    ├── api_ninja_car.ts       # Client API requester
    ├── calculate_car_rents.ts # Dynamic pricing formula
    └── generate_car_img_url.ts# Imagin Studio angle generator
```

---

## 👨‍💻 Developed by

**Jordi**  
Website: [jordisdev.com](https://www.jordisdev.com/)
