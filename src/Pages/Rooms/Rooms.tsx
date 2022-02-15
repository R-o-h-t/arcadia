import * as React from "react";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import roomA from "../../images/Rooms/roomA.jpg";
import roomB from "../../images/Rooms/roomB.jpg";
import priceGrid from "../../images/Rooms/prices.png";

import "./Rooms.css";

export default function Rooms() {
  const containerRef = React.useRef(null);

  const [selectedRoom, setSelectedRoom] = React.useState<string>("Phobos");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newRoom: string
  ) => {
    setSelectedRoom(newRoom);
  };

  return (
    <Box className="Rooms">
      <FormControlLabel
        control={
          <ToggleButtonGroup
            color="primary"
            value={selectedRoom}
            exclusive
            onChange={handleChange}
            fullWidth
            className="rooms-buttonGroup"
          >
            <ToggleButton
              fullWidth
              value="Deimos"
              className={`rooms-togglebutton ${
                selectedRoom === "Deimos" ? "rooms-togglebutton-selected" : ""
              }`}
            >
              Chambres Deimos
            </ToggleButton>
            <ToggleButton
              fullWidth
              value="Phobos"
              className={`rooms-togglebutton ${
                selectedRoom === "Phobos" ? "rooms-togglebutton-selected" : ""
              }`}
            >
              Suites Phobos
            </ToggleButton>
          </ToggleButtonGroup>
        }
        label=""
      />
      <Slide
        direction="right"
        in={selectedRoom === "Deimos"}
        container={containerRef.current}
        className={`rooms-slide ${
          selectedRoom === "Deimos" ? "" : "rooms-slide-hidden"
        }`}
      >
        <div>
          <div className="room-slide-content">
            <div className="rooms-slide-image-container">
              <img className="rooms-slide-image" src={roomA} alt="Deimos" />
            </div>
            <div className="rooms-text-container">
              <Typography className="rooms-text-title">
                Chambres Deimos
              </Typography>
              <Typography>
                Notre hôtel vous proposera un room service avec les plats de
                notre restaurant.
              </Typography>
              <Typography>
                Vous aurez un accès illimité aux soins balnéos de notre hôtel
                ainsi qu’aux activités martiennes.
              </Typography>
              <Typography>
                Dans ces chambres tout confort de 40m2, vous découvrirez un
                confort ultime pour votre premier voyage interplanétaire. Cette
                chambre avec vue porté sur la ville marcienne vous étonnera au
                premier regard. Munie d’une salle de bain et d’un lit flotant.
                vous pourrez profiter de votre séjour dans la plus grande
                sérénité.
              </Typography>
              <Typography>
                Ce séjour vous portera hors du temps dans un univers dépaysant.
                Profitez de vos rêves éveillés.
              </Typography>
              <Button className="rooms-text-button">
                Reserver cette chambre
              </Button>
            </div>
          </div>
          <div className="room-price">
            <img className="rooms-price-image" src={priceGrid} alt="Deimos" />
          </div>
        </div>
      </Slide>
      <Slide
        direction="left"
        in={selectedRoom === "Phobos"}
        container={containerRef.current}
        className={`rooms-slide ${
          selectedRoom === "Phobos" ? "" : "rooms-slide-hidden"
        }`}
      >
        <div>
          <div className="room-slide-content">
            <div className="rooms-slide-image-container">
              <img className="rooms-slide-image" src={roomB} alt="Phobos" />
            </div>
            <div className="rooms-text-container">
              <Typography className="rooms-text-title">
                Suites Phobos
              </Typography>
              <Typography>
                Notre hôtel vous proposera un room service avec les plats de
                notre restaurant.
              </Typography>
              <Typography>
                Vous aurez un accès illimité aux soins balnéos de notre hôtel
                ainsi qu’aux activités martiennes.
              </Typography>
              <Typography>
                Dans ces suites luxueuse de 100m2, vous découvrirez un confort
                ultime et sans égal. Cette chambre avec vue directe sur le
                cratère MUSK vous étonnera au premier regard. Munie d’un
                jacuzzi, d’une salle de bain et d’un espace détente vous pourrez
                profiter de votre séjour dans la plus grande sérénité.
              </Typography>
              <Typography>
                Ce séjour vous portera hors du temps dans un univers dépaysant.
                Profitez de vos rêves éveillés.
              </Typography>
              <Button className="rooms-text-button">
                Reserver cette suite
              </Button>
            </div>
          </div>
          <div className="room-price">
            <img className="rooms-price-image" src={priceGrid} alt="Deimos" />
          </div>
        </div>
      </Slide>
      <div className="bottom-container"></div>
    </Box>
  );
}
