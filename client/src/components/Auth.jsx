import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import axios from "axios";

function Auth() {
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLogin, setLogin] = useState(false);
  const handaleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handaleRequst = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:4000/api/user/${type}`, {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .catch((err) => console.log(err));
    const data = res.data;
    console.log(data);
    return data;
  };
  const handaleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (isLogin) {
      handaleRequst("signup")
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    } else {
      handaleRequst()
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    }
  };

  return (
    <>
      <form onSubmit={handaleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {!isLogin ? "Login" : "Sign Up"}
          </Typography>

          {isLogin && (
            <TextField
              onChange={handaleChange}
              value={input.name}
              name="name"
              placeholder="Name"
              margin="normal"
            />
          )}
          <TextField
            onChange={handaleChange}
            value={input.email}
            name="email"
            placeholder="email"
            type={"email"}
            margin="normal"
          />
          <TextField
            onChange={handaleChange}
            value={input.password}
            name="password"
            placeholder="password"
            type={"password"}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => setLogin(!isLogin)}
          >
            Change To {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Auth;
