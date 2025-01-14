import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AdminDashboard from "./routes/AdminDashboard";
import Collection from "./routes/Collection";
import Login from "./routes/Login";
import MapView from "./routes/MapView";
import CreateBottle from "./components/CreateBottle";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/create-bottle" element={<CreateBottle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
