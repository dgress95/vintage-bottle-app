import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import AdminDashboard from "./Routes/AdminDashboard";
import Collection from "./Routes/Collection";
import Login from "./Routes/Login";
import MapView from "./Routes/MapView";
import CreateBottle from "./components/CreateBottle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/create-bottle" element={<CreateBottle />} />
      </Routes>
    </Router>
  );
}

export default App;
