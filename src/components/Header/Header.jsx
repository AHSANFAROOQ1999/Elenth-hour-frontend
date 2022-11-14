// Library Imports

// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

// Media & StyleSheets

import "./Header.scss";
import Logo from "../../assets/umerbhisite/img/logo.png";
import { Link } from "react-router-dom";

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
    <Box
      className="main-header"
      // padding="120px 0px"
      // color="white"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      margin="auto"
      sx={{
        width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
      }}
    >
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
            md={3}
            justifyContent="center"
            display="flex"
          ><Link to="/">
            <img src={Logo} alt="x2all Logo" height="auto" width="115px" />
          </Link></Grid>

          <Grid
            item
            lg={9}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs="auto" sm={4} md={2}>
                <Link to="/home">
                  <Typography nowrap="true">Home</Typography>
                </Link>
              </Grid>

              <Grid item xs="auto" sm={4} md={2}>
                <Link to="/service">
                  <Typography nowrap="true">Services</Typography>
                </Link>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Link to="/offer">
                  <Typography nowrap="true">Our Offer</Typography>
                </Link>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Link to="/blog">
                  <Typography nowrap="true">Clener's Blog</Typography>
                </Link>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Link to="/book">
                  <Typography nowrap="true">Book Now</Typography>
                </Link>
              </Grid>
              <Grid item xs="auto" sm={4} md={2}>
                <Link to="/contect-us">
                  <Typography nowrap="true">Contact Us</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={8} sm={8} md={8} lg={4}>
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
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
