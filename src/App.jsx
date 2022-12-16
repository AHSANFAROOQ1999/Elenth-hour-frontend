// Library Imports
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import ServicePage from './pages/ServicePage/ServicePage'
import PricingPage from './pages/PricingPage/PricingPage'
// Media & StyleSheets
import "./App.scss";

// Pages, Components
import NotFound from "./pages/NotFound/NotFound";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OfferPage from "./pages/OfferPage/OfferPage";
import Blog from "./pages/Blog/Blog";
import Contectus from "./pages/ContectUs.jsx/Contectus";
// import { Home } from "@mui/icons-material";
import Home from "./pages/Home/Home"
import React, { useEffect } from "react";

// ⬇ Redux Reducers

// Library Constants

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {window.location.pathname !== "/login" ? <Header /> : null}
        <Container maxWidth="100vw" disableGutters={true}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            <Route path="/service" element={<ServicePage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/contect-us" element={<Contectus />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
