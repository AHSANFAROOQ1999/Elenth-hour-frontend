// Library Imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

// Media & StyleSheets
import "./App.scss";

// Pages, Components
import NotFound from "./pages/NotFound/NotFound";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// ⬇ Redux Reducers

// Library Constants

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header style={{ height: "15vh" }} />
        <Container
          maxWidth="xl"
          disableGutters={true}
          style={{ height: "70vh" }}
        >
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Container>
        <Footer style={{ height: "15vh" }} />
      </BrowserRouter>
    </div>
  );
}

export default App;
