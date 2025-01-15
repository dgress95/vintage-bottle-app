const express = require("express");
const axios = require("axios");
const router = express.Router();
const https = require("https");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

router.get("/places", async (req, res) => {
  const { input } = req.query;

  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // Ignore SSL certificate errors for development purposes
    });

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      {
        params: {
          input,
          key: GOOGLE_MAPS_API_KEY,
          types: "(regions)",
        },
        httpsAgent: agent,
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching places:", error.message);
    console.error(error.response?.data);
    res.status(500).json({ error: "Failed to fetch places" });
  }
});

module.exports = router;
