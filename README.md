# Vintage Bottle App

## Project Description
The **Vintage Bottle App** is a full-stack web application built to help my mother manage her milk bottle collection—shh, she doesn't know about it yet! It allows users to **view the collection and its origins on a map**, while authenticated users (my mother) can **add, edit, and remove bottles** from the collection. The app integrates **Google Places API** for location autocomplete and geocoding and supports **image uploads** for each bottle.

## Features

### Guest Users (Public)
- View the **milk bottle collection** in a table format
- Interact with a **map** showing the bottles' origins

### Admin (Authenticated Users)
- Log in with **JWT authentication** to access the admin dashboard
- Add new bottles with **name, location, size, and an image upload**
- Edit or remove bottles from the collection
- Use **Google Places API** for location autocomplete and automatic geocoding
- See **real-time image previews** when uploading photos
- Receive **visual feedback** with success messages upon submission

## Tech Stack

### Frontend
- **React (Vite)** – Fast client-side rendering
- **Material UI (MUI)** – Styled UI components
- **Axios** – API request handling
- **Google Places API** – Autocomplete for location input

### Backend
- **Node.js & Express.js** – RESTful API development
- **MongoDB (Mongoose)** – NoSQL database
- **JWT Authentication** – Secure login and access control
- **Multer** – Image upload handling
- **Google Geocoding API** – Converting addresses into latitude/longitude for mapping

## Project Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local or Atlas cluster)
- **Google Maps API Key** (for Places & Geocoding APIs)
- **Git**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vintage-bottle-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd vintage-bottle-app
   ```

3. Set up environment variables:  
   Create a `.env` file in the backend folder and add:
   ```
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

4. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

5. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

## Running the App

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Future Enhancements
- Search & filtering for bottles by name, location, or size
- Enhanced map interactivity (e.g., clustering, tooltips, street view)
- User role management (e.g., allow multiple admin users)
- Dashboard analytics (e.g., bottle trends, most collected locations)
- Automated testing for frontend and backend
