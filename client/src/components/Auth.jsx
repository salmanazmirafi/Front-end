import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function Auth() {
  return (
    <>
      <form>
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
          <Typography variant="h4" padding={3} textAlign="center">
            Sign Up
          </Typography>

          <TextField name="name" placeholder="Name" margin="normal" />
          <TextField
            name="email"
            placeholder="email"
            type={"email"}
            margin="normal"
          />
          <TextField
            name="password"
            placeholder="password"
            type={"password"}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3 }}
            color="warning"
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Auth;
