import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

import "./ReviewSection.scss";
import Facebook from "../../../../assets/socialMediaLogos/fb-logo-w.svg";
import Google from "../../../../assets/socialMediaLogos/google-logo-w.svg";
import LinkedIn from "../../../../assets/socialMediaLogos/linkedin-logo-w.svg";

export default function ReviewSection() {
  return (
    <Box className="ReviewSection">
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}
      >
        Rated 5 out of 5 stars by our customers
      </Typography>

      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid item xs={4} style={{ maxWidth: "400px", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <img width="130" src={Facebook} alt="Facebook" />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>
                4.9 out of 5 stars maintainable disseminate parallel team
                effective standards communities.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>Read Reviews</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4} style={{ maxWidth: "400px", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <img width="130" src={Google} alt="Google" />
            </Grid>
            <Grid item xs={6} md={12}>
              <Typography>
                2k+ five star reviews excellent convergence without professional
                methods of empowerment.
              </Typography>
            </Grid>
            <Grid item xs={6} md={12}>
              <Typography>Read Reviews</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4} style={{ maxWidth: "400px", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <img width="130" src={LinkedIn} alt="LinkedIn" />
            </Grid>
            <Grid item xs={6} md={12}>
              <Typography>
                4.9 out of 5 stars maintainable disseminate parallel team
                effective standards communities.
              </Typography>
            </Grid>
            <Grid item xs={6} md={12}>
              <Typography>Read Reviews</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
