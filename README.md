# Car Yard - Luxury Vehicle Marketplace

A modern React-based car dealership application showcasing premium and luxury vehicles. Built with a focus on user experience and responsive design.

##  Features

- **Premium Car Listings**: Browse luxury and supercars with detailed specifications
- **Advanced Search**: Filter by make, model, price range, and year
- **Interactive Car Details**: Modal popups with comprehensive vehicle information
- **Inquiry System**: Submit inquiries for specific vehicles
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Dynamic content updates without page refresh

## 🛠 Technologies Used

- **Frontend**: React 19.1.0, React Router DOM
- **Backend**: JSON Server (RESTful API)
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Vite
- **Package Manager**: npm

##  Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-yard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npm run server
   ```
   Server runs on `http://localhost:3000`

4. **Start the React Development Server**
   ```bash
   npm run dev
   ```
   Application runs on `http://localhost:5173`

## 📁 Project Structure

```
car-yard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/              # UI Components (Person 1)
│   │   │   ├── Navbar.jsx
│   │   │   ├── CarCard.jsx
│   │   │   └── CarDetail.jsx
│   ├── pages/               # Page Components (Person 2)
│   │   ├── Home.jsx
│   │   ├── Cars.jsx
│   │   └── Contact.jsx
│   ├── services/            # API & Data Management (Person 3)
│   │   ├── api.js
│   │   └── CarContext.jsx
│   ├── features/            # Features & Utilities (Person 4)
│   │   ├── SearchBar.jsx
│   │   └── InquiryForm.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   ├── ui/
│   │   ├── pages/
│   │   └── features/
│   ├── App.jsx
│   └── main.jsx
├── db.json                  # JSON Server Database
├── package.json
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cars` | Retrieve all cars |
| GET | `/cars/:id` | Get specific car by ID |
| POST | `/inquiries` | Submit new inquiry |
| GET | `/users` | Get user information |

### Sample API Response
```json
{
  "id": 1,
  "make": "Lamborghini",
  "model": "Aventador",
  "year": 2021,
  "price": 45000000,
  "mileage": 3000,
  "color": "Orange",
  "fuelType": "Gasoline",
  "transmission": "Automatic",
  "description": "Stunning Lamborghini Aventador...",
  "image": "https://example.com/image.jpg"
}
```

##  Currency

All prices are displayed in **Kenyan Shillings (KSh)**

## Key Components

### Core Components
- **Navbar**: Navigation with responsive design
- **CarCard**: Individual car listing cards
- **CarDetail**: Modal with detailed car information
- **SearchBar**: Advanced filtering system
- **InquiryForm**: Contact form for vehicle inquiries

### Pages
- **Home**: Landing page with featured vehicles
- **Cars**: Main inventory listing with search/filter
- **Contact**: Contact information and inquiry form

##  Development Team Structure

This project was developed by a team of 4 developers:

1. **UI Components Developer**: Navbar, CarCard, Modal components
2. **Pages & Routing Developer**: Page components and React Router setup
3. **Data & API Developer**: API services and state management
4. **Features & Utilities Developer**: Search functionality and utility functions

##  Responsive Design

- **Desktop**: Full-featured layout with grid display
- **Tablet**: Adapted layout with touch-friendly interface
- **Mobile**: Single-column layout with optimized navigation

##  Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run server       # Start JSON Server
npm run lint         # Run ESLint
```

## 🌟 Features Implemented

- ✅ Single Page Application (SPA)
- ✅ 5+ React Components
- ✅ 3+ Client-side Routes
- ✅ JSON Server Backend
- ✅ GET and POST Requests
- ✅ Controlled Forms
- ✅ State Updates after POST
- ✅ Responsive CSS Design

##  Future Enhancements

- User authentication system
- Advanced filtering options
- Car comparison feature
- Wishlist functionality
- Payment integration
- Admin dashboard
- Image gallery for each car
- Customer reviews and ratings

##  Known Issues

- Images may take time to load on slower connections
- Search functionality requires exact matches for some filters

## License

This project is licensed under the MIT License.

## 👥 Contributors

- Alex Chen - UI Components
- Sarah Johnson - Pages & Routing  
- Michael Rodriguez - Data & API
- David Kim - Features & Utilities

##  Support

For support or questions, please contact us through the application's contact form or create an issue in the repository.

---

**Car Yard** - *Find Your Perfect Vehicle* 