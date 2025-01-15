import React, { useState } from "react";
import axios from "../api/axios";
import globalAxios from "axios";
import "../styles/create-bottle.css";
import {
  TextField,
  Button,
  Typography,
  styled,
  Autocomplete,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";

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
  const [preview, setPreview] = useState(null);
  const [options, setOptions] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const fetchLocations = async (query) => {
    if (!query) return;

    try {
      const response = await globalAxios.get(
        "http://localhost:8000/api/places",
        {
          params: { input: query },
        }
      );
      const results = response.data.predictions.map(
        (prediction) => prediction.description
      );
      setOptions(results);
    } catch (error) {
      console.error("Error fetching locations:", error.message);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("size", size);
    formData.append("photo", photo);

    try {
      const response = await axios.post("/bottles", formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Only include necessary headers
      });
      console.log("Bottle created: ", response.data);

      setName("");
      setLocation("");
      setSize("");
      setPhoto(null);
      setPreview(null);

      setResetKey((prevKey) => prevKey + 1);

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(
        "Error creating bottle:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <>
      <form id="create-bottle" onSubmit={handleSubmit} key={resetKey}>
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
        <Autocomplete
          freeSolo
          options={options}
          onInputChange={(e, value) => fetchLocations(value)}
          onChange={(e, value) => setLocation(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Origin"
              variant="outlined"
              fullWidth
            />
          )}
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
          {photo ? "Change Bottle Image" : "Upload Bottle Image"}
          <VisuallyHiddenInput
            type="file"
            onChange={handlePhotoChange}
            multiple
          />
        </Button>
        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Image Preview" className="preview-image" />
            <Button
              className="remove-button"
              variant="outlined"
              color="error"
              onClick={handleRemovePhoto}
            >
              Remove Image
            </Button>
          </div>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Bottle to Collection
        </Button>
      </form>

      {/* Success Alert */}
      {showSuccess && (
        <Alert
          severity="success"
          style={{ marginTop: "15px", maxWidth: "50%" }}
        >
          Bottle added successfully!
        </Alert>
      )}
    </>
  );
};

export default CreateBottle;
