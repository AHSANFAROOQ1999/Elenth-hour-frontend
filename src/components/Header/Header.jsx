// Library Imports

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

// Media & StyleSheets

import "./Header.scss";
import Logo from "../../assets/logos/black/SVG File.svg";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <Box className="main-header">
      <Box
        sx={{ flexGrow: 1 }}
        className={`sticky-header ${scroll > headerTop ? "affix" : ""}`}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            justifyContent="center"
            display="flex"
          >
            <img src={Logo} alt="x2all Logo" height="auto" width="115px" />
          </Grid>

          <Grid
            item
            lg={4}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs="auto" sm={4} md={2}>
                <Typography nowrap="true">Home</Typography>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Typography nowrap="true">About</Typography>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Typography nowrap="true">Services</Typography>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Typography nowrap="true">Pricing</Typography>
              </Grid>
              <Grid item xs="auto" sm={4} md={3}>
                <Typography nowrap="true">Contact Us</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={4}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              //   alignItems={matches ? "flex-start" : "center"}
            >
              <Grid item xs={4} sm={4} md={3} lg={3}>
                <Link to="/login">
                  <Button variant="text">Sign In</Button>
                </Link>
              </Grid>
              <Grid item xs={7} sm={4} md={3} lg={4}>
                <Link to="/signup">
                  <Button variant="contained">Get Started</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
