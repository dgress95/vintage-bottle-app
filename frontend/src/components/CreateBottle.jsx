import React, { useState } from "react";
import axios from "../api/axios";

const CreateBottle = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("size", size);
    formData.append("photo", photo);

    try {
      const response = await axios.post("/bottles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Bottle created: ", response.data);
    } catch (error) {
      console.error("Error creating bottle:", error.response.data.message);
    }
  };

  // continue building out the form
  return <form onSubmit={handleSubmit}></form>;
};
