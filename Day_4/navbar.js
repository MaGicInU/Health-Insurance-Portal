import * as React from "react";
import { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from "@mui/material/";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const Navbar = () => {
  const [val, setVal] = useState();
  const handleSignIn = () => {
    window.location.href = "/login";
    console.log("login in clicked");
  };
  const handleSignUp = () => {
    window.location.href = "/signup";
    console.log("Signup in clicked");
  };
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{ backgroundColor: "#333333" }}>
          <SelfImprovementIcon></SelfImprovementIcon>
          <Typography sx={{ paddingLeft: 1 }}>Assure</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={val}
            onChange={(e, val) => setVal(val)}
          >
            <Tab label="Home" />
            <Tab label="Policies" />
            <Tab label="Contact" />
            <Tab label="About" />
          </Tabs>
          <Button
            sx={{
              marginLeft: "auto",
              background: "#ffffff",
              color: "#000",
              "&:hover": {
                backgroundColor: "#b608c9",
                opacity: [0.9, 0.8, 0.7],
                color: "#f7f5f7",
              },
            }}
            variant="contained"
            onClick={handleSignIn}
          >
            Login
          </Button>
          <Button
            sx={{
              marginLeft: "20px",
              background: "#ffffff",
              color: "#000",
              "&:hover": {
                backgroundColor: "#b608c9",
                opacity: [0.9, 0.8, 0.7],
                color: "#f7f5f7",
              },
            }}
            variant="contained"
            onClick={handleSignUp}
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
