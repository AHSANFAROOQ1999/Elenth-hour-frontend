// Library Imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/service" element={<ServicePage />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
