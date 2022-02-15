import React from "react";
import AlternateTimeline from "../../Components/Timeline/Timeline";

import logoFontOnly from "../../images/logo font.svg";

import "./AboutUs.css";

import restaurant from "../../images/About-us/restaurant.png";
import { Typography } from "@mui/material";

function AboutUs() {
  return (
    <div className="AboutUs">
      <img src={logoFontOnly} className="about-us-logo" alt="arcadia" />

      <AlternateTimeline />
      <div className="about-us-restaurant">
        <div className="about-us-restaurant-img-container">
          <img
            className="about-us-restaurant-img"
            src={restaurant}
            alt="Deimos"
          />
        </div>
        <div className="about-us-restaurant-text-container">
          <Typography className="about-us-restaurant-text-title">
            Restaurant Arkadia
          </Typography>
          <Typography>
            Notre restaurant vous fera découvrir les plats les plus raffinés de
            Mars.
          </Typography>
          <Typography>
            Nous disposons des dernières gammes de chaises flottante pour vous
            assuré un confort optimal.
          </Typography>
          <Typography>
            Notre personnel vous accueillera et prendra soin de répondre à
            toutes vos demandes.
          </Typography>
          <Typography>
            Dans le cadre d'un repas en familles ou pour un tête à tête notre
            restaurant vous promettra une expérience culinaire inoubliable.
          </Typography>
        </div>
      </div>
      <div className="bottom-container"></div>
    </div>
  );
}

export default AboutUs;
