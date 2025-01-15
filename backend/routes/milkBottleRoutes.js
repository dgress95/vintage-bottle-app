const express = require("express");
const router = express.Router();
const multer = require("multer");
const MilkBottle = require("../models/MilkBottle");
const authenticateToken = require("../middleware/auth");
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const axios = require("axios");
const https = require("https");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

// Using multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Add New Milk Bottle
router.post(
  "/",
  authenticateToken,
  upload.single("photo"),
  async (req, res) => {
    try {
      const geocodeResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: req.body.location,
            key: GOOGLE_MAPS_API_KEY,
          },
          httpsAgent,
        }
      );

      console.log("Google Maps API Key:", process.env.GOOGLE_MAPS_API_KEY);

      const { lat, lng } = geocodeResponse.data.results[0].geometry.location;

      const newBottle = new MilkBottle({
        name: req.body.name,
        location: req.body.location,
        latitude: lat,
        longitude: lng,
        size: req.body.size,
        photo: req.file ? req.file.path : null,
      });
      const savedBottle = await newBottle.save();
      res.status(201).json(savedBottle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Get All Milk Bottles
router.get("/", async (req, res) => {
  try {
    const bottles = await MilkBottle.find();
    res.json(bottles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Milk Bottle by Id
router.get("/:id", async (req, res) => {
  try {
    const milkBottle = await MilkBottle.findById(req.params.id);
    res.json(milkBottle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Existing Milk Bottle
router.put(
  "/:id",
  authenticateToken,
  upload.single("photo"),
  async (req, res) => {
    try {
      const updateData = {
        name: req.body.name,
        location: req.body.location,
        size: req.body.size,
      };

      if (req.file) {
        updateData.photo = req.file.path;
      }

      const updatedBottle = await MilkBottle.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      if (!updatedBottle) {
        return res.status(404).json({ message: "Milk bottle not found" });
      }

      res.json(updatedBottle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Delete Milk Bottle
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedBottle = await MilkBottle.findByIdAndDelete(req.params.id);

    if (!deletedBottle) {
      return res.status(404).json({ message: "Milk bottle not found" });
    }

    res.json({ message: "Milk bottle deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
