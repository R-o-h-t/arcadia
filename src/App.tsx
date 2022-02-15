import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar/NavBar";

import Home from "./Pages/Home/Home";

import Rooms from "./Pages/Rooms/Rooms";
import AboutUs from "./Pages/AboutUs/AboutUs";

const App = () => {
  return (
    <Router>
      <NavBar />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
