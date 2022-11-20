import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

function BlogsDetlass() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const faceUser = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.error(err));
    const data = res.data;
    return data;
  };

  useEffect(() => {
    faceUser().then((data) => {
      setBlog(data.Id);
      setInputs({
        title: data.Id.title,
        description: data.Id.description,
        imageURL: data.Id.image,
      });
    });
  }, [id]);
  console.log(blog);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:4000/api/blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log(blog);
  const handaleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs/"));
  };

  return (
    <div>
      {" "}
      {inputs && (
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
              Update Your Blog
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
      )}
    </div>
  );
}

export default BlogsDetlass;
