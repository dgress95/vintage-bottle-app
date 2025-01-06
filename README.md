# Vintage Bottle App

## Project Description
The **Vintage Bottle App** is a simple web application designed for my mother to manage her milk bottle collection. Shh, she doesn't know about it yet. It allows users to view the collection and its origins on a map. Authenticated users (my mother) can add, remove, and modify entries in the collection.

## Features
- **Guest Users:**
  - View the milk bottle collection in a table format.
  - Interact with a map displaying the origins of the bottles.

- **Admin (Authenticated Users):**
  - Log in to access an admin dashboard.
  - Add new bottles to the collection.
  - Edit or remove existing bottles.

## Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Mapping:** Leaflet.js or Google Maps API

## Project Setup
### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vintage-bottle-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd vintage-bottle-app
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

### Running the App
1. Start the backend server:
   ```bash
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
- Add search and filter functionality for the collection.
- Improve map interactivity with clustering and tooltips.
- Implement automated testing for frontend and backend.

