# AI-SMART-TRAVEL-PLANNER

An intelligent travel planning application with real-time pricing for trains, buses, and flights in Pakistan.

## Features

- 🚂 **Train Booking**: Real-time prices for Pakistan Railways trains including:
  - Karakoram Express
  - Shalimar Express
  - Allama Iqbal Express
  - Multiple classes: Economy, Business, AC Lower, AC Standard

- 🚌 **Daewoo Bus Booking**: Multiple Daewoo Express routes with different service types:
  - Luxury
  - Standard
  - Economy

- ✈️ **Flight Booking**: Real-time prices for major Pakistani airlines:
  - PIA (Pakistan International Airlines)
  - Serene Air
  - Airblue
  - Economy and Business class options

- 📊 **Smart Budget Planning**: AI-powered itinerary generation with budget breakdown
- 🗺️ **Tourist Attractions**: Curated list of places to visit
- 💾 **Save Plans**: Save and manage multiple travel plans

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- A modern web browser

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start a local HTTP server (choose one method):

   **Option 1: Using Node.js http-server**
   ```bash
   npx http-server -p 8000 -o
   ```

   **Option 2: Using Python**
   ```bash
   python -m http.server 8000
   ```

   **Option 3: Using PHP**
   ```bash
   php -S localhost:8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## API Endpoints

The backend provides the following API endpoints:

### Get All Travel Options
```
GET /api/travel-options?from=karachi&to=lahore
```

### Get Trains Only
```
GET /api/trains?from=karachi&to=lahore
```

### Get Buses Only
```
GET /api/buses?from=karachi&to=lahore
```

### Get Flights Only
```
GET /api/flights?from=karachi&to=lahore
```

## Supported Cities

- Karachi
- Lahore
- Islamabad
- Multan

## Usage

1. Enter your departure and destination cities
2. Select your travel mode (Bus, Train, or Airplane)
3. Choose your plan type (Medium, Economy, or Premium)
4. View available options with real-time prices
5. Set your budget and preferences
6. Generate your AI-powered travel plan
7. Save your plan for future reference

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **APIs**: RESTful API architecture

## Notes

- Make sure both backend and frontend servers are running simultaneously
- The backend server must be running on port 3000
- The frontend server can run on any port (default: 8000)
- Prices are updated in real-time from the API
