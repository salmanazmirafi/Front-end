import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h3">Blog</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab LinkComponent={Link} to="/my-blog" label="My Blogs" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 2 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 2 }}
                color="warning"
              >
                Sign Up
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 2 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
