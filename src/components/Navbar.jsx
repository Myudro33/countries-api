import React from "react";
import "../App.css";
import {Typography, Toolbar } from "@mui/material";
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Navbar = ({ theme, settheme }) => {
  return (
    <div className={`${theme ? "navbar" : "navbar-night"}`} position="static">
      <Toolbar
        sx={{
          height: "3rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={800}
          sx={{ color: `${theme ? "white" : "black"}` }}
        >
          Where in the world?
        </Typography>
        {theme ? (
          <span
            onClick={() => settheme(false)}
            style={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              fontWeight: "800",
              color: "white",
            }}
          >
            <LightModeOutlinedIcon sx={{ color: "#fff" }} />
            Light Mode
          </span>
        ) : (
          <span
            onClick={() => settheme(true)}
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "800",
              cursor: "pointer",
              color: "hsl(209, 23%, 22%)",
            }}
          >
            <NightlightOutlinedIcon sx={{ color: "hsl(209, 23%, 22%)" }} />
            Night Mode
          </span>
        )}
      </Toolbar>
    </div>
  );
};

export default Navbar;
