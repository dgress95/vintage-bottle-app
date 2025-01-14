import React, { useState } from "react";
import axios from "../api/axios";
import "../styles/create-bottle.css";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload Bottle Image
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            multiple
          />
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Bottle to Collection
        </Button>
      </form>
    </>
  );
};

export default CreateBottle;
