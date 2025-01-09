import React, { useState } from "react";
import Nav from "./Nav";
import axios from "../api/axios";
import "../styles/create-bottle.css";

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

  return (
    <>
      <Nav />
      <form id="create-bottle" onSubmit={handleSubmit}>
        <h2 className="heading">Add a Bottle to Your Collection</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Bottle Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          placeholder="Bottle Origin"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          placeholder="Bottle Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label htmlFor="file">Add a photo of the bottle:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        <button type="submit">Add Bottle to Collection</button>
      </form>
    </>
  );
};

export default CreateBottle;
