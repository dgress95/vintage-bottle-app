import React, { useState } from "react";
import axios from "../api/axios";
import "../styles/create-bottle.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
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
        <Typography variant="h5" className="heading">
          Add a Bottle to Your Collection
        </Typography>
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="text"
          label="Origin"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          type="text"
          label="Size"
          variant="outlined"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          color="secondary"
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
