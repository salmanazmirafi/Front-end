import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

function AddBlog() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const serverRequest = async () => {
    const res = await axios
      .post("http://localhost:4000/api/blog/crate", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("user"),
      })
      .catch((err) => console.error(err));
    const data = res.data;
    return data;
  };
  const handaleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    serverRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"));
  };

  return (
    <div>
      <form onSubmit={handaleSubmit}>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField
            onChange={handleChange}
            value={inputs.title}
            name="title"
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField
            onChange={handleChange}
            value={inputs.description}
            name="description"
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField
            onChange={handleChange}
            value={inputs.imageURL}
            name="imageURL"
            margin="auto"
            variant="outlined"
          />
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default AddBlog;
