import React from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import logoNoFont from "../../images/logo nofont.svg";
import logoFontOnly from "../../images/logo font.svg";

function NavBar() {
  const items = [
    { text: "Accueil", to: "/" },
    { text: "Reservation", to: "rooms" },
    { text: "L'Hotel", to: "about-us" },
  ];
  const navigate = useNavigate();

  return (
    <div className="NavBar">
      <img src={logoNoFont} className="nav-logo-nofont" alt="arcadia" />

      <div className="nav-item-container">
        {items.map(({ text, to }) => (
          <Typography
            onClick={() => {
              navigate(to);
            }}
            className="nav-item"
          >
            {text}
          </Typography>
        ))}
      </div>
      <img src={logoFontOnly} className="nav-logo" alt="arcadia" />
    </div>
  );
}

export default NavBar;
