import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import roomA from "../../images/Rooms/roomA.jpg";
import roomB from "../../images/Rooms/roomB.jpg";

interface Props {
  w: number | string;
  h: number | string;
}

const CarouselComponent: React.FC<Props> = ({ w, h }) => {
  const navigate = useNavigate();
  return (
    <Carousel style={{ width: w, height: h }}>
      <Carousel.Item>
        <img className="d-block carouselImg" src={roomA} alt="Chambre 1" />
        <Carousel.Caption>
          <div className="carousel-caption-content">
            <h3>Suite Déimos</h3>
            <p>Tout le confort de votre premiere nuit marsienne...</p>
            <Button
              onClick={() => {
                navigate("/rooms?Deimos");
              }}
              className="carousel-button"
            >
              Informations Supplementaires
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carouselImg" src={roomB} alt="Second slide" />

        <Carousel.Caption>
          <div className="carousel-caption-content">
            <h3>Suite Phobos</h3>
            <p>Luxe et Espace, votre plus belle nuit galactique...</p>
            <Button
              onClick={() => {
                navigate("/rooms?Phobos");
              }}
              className="carousel-button"
            >
              Informations Supplementaires
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselComponent;
