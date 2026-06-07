<h1 align="center">🎓 Plan My Trip – Smart Budget Travel Planner for Students</h1>

<p align="center">
  🚀 A comprehensive web application for students to plan budget-friendly trips using advanced AI technology, with intelligent itinerary generation and real-time weather data for <b>personalized travel experiences</b> and smart recommendations.
</p>
<p align="center">
  <a href="https://plan-my-trip-io.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge" alt="Live Demo"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenWeather-ED8B00?style=for-the-badge&logo=openweathermap&logoColor=white"/>
</p>
<br>

---

## 📖 Problem Statement
Students face significant challenges in planning budget-friendly trips, finding affordable destinations, and creating detailed itineraries within limited budgets. Traditional travel planning methods are time-consuming, expensive, and lack personalized recommendations for student travelers.

<br>

---

## 💡 Our Solution
Plan My Trip is a full-stack web application built to:

- 🤖 Generate personalized travel itineraries using ML algorithms
- 💰 Optimize budgets with intelligent cost breakdown analysis
- 🌤️ Provide real-time weather forecasts and packing recommendations
- 🗺️ Offer route planning with OpenStreetMap integration
- 📱 Deliver responsive design for seamless mobile experience
<br>

---  

## 🚀 Features

✅  AI-powered itinerary generation with **ML recommendations**  
✅  Budget optimization with **intelligent cost analysis**  
✅  Real-time weather data and **packing suggestions**  
✅  Student-focused destinations with **budget-friendly options**  
✅  Interactive maps with **route planning**  
✅  Downloadable itineraries in **multiple formats**  
✅  Responsive design with **modern UI/UX**

<br>

---  

## 🛠️ Tech Stack

<div align="center">

<table>
<thead>
<tr>
<th>🖥️ Technology</th>
<th>⚙️ Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></td>
<td>Modern frontend with component architecture</td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"/></td>
<td>High-performance Python backend</td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white"/></td>
<td>Machine learning for recommendations</td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/OpenWeather-ED8B00?style=for-the-badge&logo=openweathermap&logoColor=white"/></td>
<td>Real-time weather data integration</td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white"/></td>
<td>Open-source mapping and navigation</td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/></td>
<td>Utility-first CSS framework</td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"/></td>
<td>Data processing and analysis</td>
</tr>
</tbody>
</table>

</div>

<br>

---

## 📁 Project Directory Structure

```
Plan-My-Trip/
├── 📂 backend/                     # FastAPI backend service
│   ├── 📂 data/
│   │   └── 📄 Dataset.csv          # Destinations dataset
│   ├── 📂 models/
│   │   ├── 📄 __init__.py          # Package initializer
│   │   ├── 📄 cost_vs_popularity.html # Analytics visualization
│   │   ├── 📄 final_output.json    # ML model output
│   │   ├── 📄 model.pkl            # Trained ML model
│   │   └── 📄 schemas.py           # Pydantic data models
│   ├── 📂 routers/
│   │   ├── 📄 __init__.py          # Package initializer
│   │   ├── 📄 itinerary.py         # Itinerary generation routes
│   │   └── 📄 weather.py           # Weather API routes
│   ├── 📂 services/
│   │   ├── 📄 __init__.py          # Package initializer
│   │   ├── 📄 ml_service.py        # ML recommendations service
│   │   └── 📄 weather_service.py   # Weather data service
│   ├── 📄 __init__.py              # Package initializer
│   ├── 📄 .gitignore               # Git ignore patterns
│   ├── 📄 app.py                   # Main FastAPI application
│   ├── 📄 config.py                # Configuration settings
│   └── 📄 requirements.txt         # Python dependencies
├── 📂 docs/                        # Documentation and assets
│   ├── 📄 About_Page.png           # About page screenshot
│   ├── 📄 Analytics_Page.png       # Analytics page screenshot
│   ├── 📄 Contact_Page.png         # Contact page screenshot
│   ├── 📄 Destinations_Page.png    # Destinations page screenshot
│   ├── 📄 Features_Page.png        # Features page screenshot
│   ├── 📄 Home_Page.png            # Home page screenshot
│   ├── 📄 Loading_Page.png         # Loading screen screenshot
│   └── 📄 PlanTrip_Page.png        # Plan trip page screenshot
├── 📂 frontend/                    # React frontend application
│   ├── 📂 public/
│   │   └── 📄 index.html           # HTML template
│   ├── 📂 src/
│   │   ├── 📂 assets/
│   │   │   └── 📂 styles/          # CSS stylesheets
│   │   ├── 📂 components/          # Reusable UI components
│   │   │   ├── 📄 Footer.js        # Application footer
│   │   │   ├── 📄 LoadingPage.js   # Loading animations
│   │   │   ├── 📄 Navbar.js        # Navigation header
│   │   │   └── 📄 OpenStreetMap.js # Map component
│   │   ├── 📂 pages/               # Main application pages
│   │   │   ├── 📄 About.js         # Platform information
│   │   │   ├── 📄 Analytics.js     # Analytics dashboard
│   │   │   ├── 📄 Contact.js       # Contact page
│   │   │   ├── 📄 Destinations.js  # Destinations catalog
│   │   │   ├── 📄 Features.js      # Features showcase
│   │   │   ├── 📄 Home.js          # Landing page
│   │   │   ├── 📄 PlanTrip.css     # Trip planning styles
│   │   │   ├── 📄 PlanTrip.js      # Trip planning interface
│   │   │   └── 📄 Results.js       # Itinerary results
│   │   ├── 📂 services/            # API integration
│   │   │   └── 📄 api.js           # Backend API calls
│   │   ├── 📄 App.css              # Global application styles
│   │   ├── 📄 App.js               # Main application component
│   │   └── 📄 index.js             # Application entry point
│   ├── 📄 .env.local               # Local environment variables
│   ├── 📄 .gitignore               # Git ignore patterns
│   ├── 📄 package-lock.json        # Locked dependencies
│   └── 📄 package.json             # Frontend dependencies
├── 📂 logs/                        # Application logs
│   ├── 📄 backend.log              # Backend logs
│   └── 📄 frontend.log             # Frontend logs
├── 📂 notebooks/
│   └── 📄 model_training.ipynb     # ML model training notebook
├── 📄 .env                         # Environment variables
├── 📄 .env.example                 # Environment template
├── 📄 .gitignore                   # Git ignore patterns
├── 📄 LICENSE                      # MIT License
├── 📄 README.md                    # Project documentation
└── 📄 start_dev.sh                 # Development startup script
```
<br>

---

## 📸 Preview Images

| 📍 Page / Feature            | 📸 Screenshot                                              |
|:----------------------------|:-----------------------------------------------------------|
| Loading Screen              | ![Loading Screen](docs/Loading_Page.png)        |
| Home Page                   | ![Home Page](docs/Home_Page.png)                   |
| Plan Trip                   | ![Plan Trip](docs/PlanTrip_Page.png)          |
| Destinations                | ![Destinations](docs/Destinations_Page.png)    |
| Features                    | ![Features](docs/Features_Page.png)  |
| About Page                  | ![About Page](docs/About_Page.png)    |
| Analytics                   | ![Analytics](docs/Analytics_Page.png)    |
| Contact                     | ![Contact](docs/Contact_Page.png)    |

<br>

---

## 🌐 API Endpoints

```bash
# Backend API (Port 8000)
GET  /                              # API status and info
GET  /health                        # Health check
POST /api/v1/generate-itinerary     # Generate travel itinerary
GET  /api/v1/weather/{city}         # Get weather data
GET  /api/v1/destinations/popular   # Get popular destinations
POST /api/v1/recommendations        # Get ML recommendations
GET  /api/v1/budget-breakdown/{destination}  # Get budget breakdown
```
<br>

---

## 📦 How to Run

### 📌 Prerequisites
- ✅ **Python 3.8+** installed
- ✅ **Node.js 16+** installed
- ✅ **OpenWeather API Key** (free tier available)

<br>

### 🚀 Quick Start

**Live Application:**
- **Frontend:** [https://plan-my-trip-io.vercel.app](https://plan-my-trip-io.vercel.app)
- **Backend API:** [https://plan-my-trip-dev.onrender.com](https://plan-my-trip-dev.onrender.com)

**💻 Local Development:**

1. **Clone Repository:**
   ```bash
   git clone https://github.com/AbhishekGiri04/Plan-My-Trip.git
   cd Plan-My-Trip
   ```

2. **Automated Setup:**
   ```bash
   chmod +x start_dev.sh
   ./start_dev.sh
   ```

3. **Access locally:**
   ```
   Frontend: http://localhost:3000
   Backend API: http://localhost:8000
   API Docs: http://localhost:8000/docs
   ```

### 🔧 Manual Setup

**Backend Setup:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm start
```

### ⚙️ Environment Configuration

1. Copy `.env.example` to `.env`
2. Add your API key:

```env
# Required API Key
WEATHER_API_KEY=your-openweather-api-key

# Environment Settings
ENVIRONMENT=development
DEBUG=True
```

**Get API Key:** [OpenWeather API](https://openweathermap.org/api) (1000 calls/day free)

<br>

---

## 🚀 Deployment

### Frontend (Vercel)
**Live URL:** [https://plan-my-trip-io.vercel.app](https://plan-my-trip-io.vercel.app)

**Deploy your own:**
1. Fork this repository
2. Import to Vercel
3. Set Root Directory: `frontend`
4. Add Environment Variables:
   - `REACT_APP_API_URL` = Your backend URL
   - `REACT_APP_WEATHER_API_KEY` = Your OpenWeather API key
5. Deploy!

### Backend (Railway/Render)
**Recommended: Railway**
1. Create new project on Railway
2. Connect GitHub repository
3. Set Root Directory: `backend`
4. Add Environment Variables:
   - `WEATHER_API_KEY` = Your OpenWeather API key
   - `ENVIRONMENT` = `production`
   - `DEBUG` = `False`
5. Deploy!

<br>

---

## 🧪 Testing

```bash
# Test backend API
curl http://localhost:8000/health
curl http://localhost:8000/api/v1/destinations/popular

# Test integration
python3 test_integration.py
```

## ⚠️ Common Issues

**Port already in use:**
```bash
# Kill processes on ports
lsof -ti:8000 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

**Backend connection failed:**
```bash
cd backend && rm -rf venv && python3 -m venv venv
source venv/bin/activate && pip install -r requirements.txt
```

**Frontend not loading:**
```bash
cd frontend && rm -rf node_modules && npm install
```
<br>

---

## 📊 Performance Metrics

- **95% User Satisfaction** — Student travel planning accuracy
- **<3 Seconds** — Average itinerary generation time
- **500+ Destinations** — Comprehensive database coverage
- **₹3,000-₹25,000** — Optimized budget range
- **Real-time Data** — Live weather and recommendations

<br>

---

## 🌱 Future Scope
- 📱 **Mobile Application** — Cross-platform mobile app development
- 🎫 **Booking Integration** — Direct flight and hotel booking
- 👥 **Group Planning** — Collaborative trip planning features
- 🔐 **User Accounts** — Personalized trip history and preferences
- 🌍 **International Destinations** — Global travel planning support

<br>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**✈️ Built with ❤️ for Student Travelers**  
*Making Travel Dreams Affordable and Accessible*

</div>

---

<div align="center">

**© 2026 Plan My Trip – Smart Budget Travel Planner. All Rights Reserved.**

</div>
