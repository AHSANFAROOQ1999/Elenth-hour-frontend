// Library Imports

import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
// import BackgroundImage from "../../../../assets/shapes/color-particles-2.svg";

// Media & StyleSheets
import "./MainContentSection.scss";
import DashboardImage from "../../../../assets/screenSizes/dashboard-img.png";
import MobileLarge from "../../../../assets/screenSizes/widget-4.png";
import MobileSmall from "../../../../assets/screenSizes/widget-3.png";

export default function MainContentSection() {
  return (
    <Box
      className="MainContentSection"
      style={{ padding: "120px 0px 0px 0px" }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          //   height: "max-content",
        }}
      >
        <Box
          style={{
            width: "100%",
            maxWidth: "800px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            style={{ fontSize: "3rem", fontWeight: 800 }}
          >
            Single Dashboard for All your Business Needs
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontSize: "1.25rem", fontWeight: 400 }}
          >
            Uniquely network business experiences for resource sucking
            solutions. Dynamically re-engineer cooperative networks via
            cross-media expertise.
          </Typography>

          <Grid item xs={8} sm={8} md={10} lg={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              marginTop="50px"
            >
              <Grid item xs={7} sm={4} md={3} lg={3}>
                <Link to="/signup">
                  <Button variant="contained">Start a Free Trail</Button>
                </Link>
              </Grid>
              <Grid item xs={5} sm={4} md={2} lg={2}>
                <Link to="/">
                  <Button variant="text">Talk to Sales</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          style={{
            width: "100%",
            marginTop: "3rem",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Container>
            <img
              src={DashboardImage}
              alt="Dashboard_View"
              width="96%"
              height="auto"
            />
          </Container>

          <Box
            style={{
              alignItems: "flex-start",
              justifyContent: "space-between",
              position: "absolute",
              zIndex: 1,
              top: "10%",
              width: "inherit",
            }}
            sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
          >
            <img src={MobileSmall} alt="Dashboard_View" />
            <img
              src={MobileLarge}
              alt="Dashboard_View"
              style={{ marginTop: "10%" }}
            />
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          width: "100%",
          height: 300,
          backgroundColor: "purple",
          top: "100%",
          left: 0,
          right: 0,
          bottom: "0",
          zIndex: -1,
          alignItems: "end",
          position: "absolute",
        }}
      ></Box>
    </Box>
  );
}
