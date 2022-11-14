import React from "react";
import {
  Grid,
  Box,
  Rating,
  Typography,
  ListItem,
  List,
  TextField,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import StreetviewIcon from "@mui/icons-material/Streetview";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

export default function Footer() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        margin="auto"
        sx={{
          width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
        }}
      >
        <Grid container my={4} rowSpacing={2} columnSpacing={2}>
          {/* <Grid item md={6} sm={6} xs={12}>
            
            <Typography
              style={{
                fontSize: "16px",
                color: "#575757",
                fontWeight: "400",
                opacity: "0.8",
              }}
            >
              Our latest news, articles, and resources, we will sent to your
              inbox weekly.
            </Typography>
            <Box style={{ margin: "16px 0px" }}>
              <TextField
                id="outlined-name"
                label="Enter Email Address"
                value=""
                onChange=""
              />
              <Button
                variant="contained"
                style={{
                  marginLeft: "15px",
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "500",
                  // padding: "14px 28px",
                  backgroundColor: "175cff",
                }}
                sx={{
                  padding: {
                    lg: "14px 28px",
                    md: "14px 20px",
                    sm: "14px 10px",
                    xs: "14px 10px",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Typography
              style={{ fontSize: "17px", color: "#575757", fontWeight: "600" }}
            >
              10/10 Overall rating
            </Typography>

            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ marginTop: "15px" }}
            />
          </Grid> */}
          <Grid item md={6} sm={6} xs={12}>
            <List
              style={{
                fontSize: "15px",
                color: "#575757",
                fontWeight: "500",
                opacity: "0.8",
              }}
            >
              <Typography
                style={{
                  fontSize: "18px",
                  color: "#0b163f",
                  fontWeight: "600",
                  padding: "8px 14px",
                }}
              >
                Our Vision
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  // color: "#0b163f",
                  fontWeight: "600",
                  padding: "8px 14px",
                }}
              >
                Eleventh Hour Cleaning Services, making <br />
                place Cleaner, Healthier and Safer
              </Typography>

              <ListItem>INTEGRITY: Honesty & Truthfulness.</ListItem>
              <ListItem>RELIABILITY: Punctual & Committed.</ListItem>
              <ListItem>
                ACCOUNTABILITY: Duties, Responsibility & Liability.
              </ListItem>
              <ListItem>
                PROFESSIONALISM: Standards, Expectations & Performance.
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <List
              style={{
                fontSize: "15px",
                color: "#575757",
                fontWeight: "500",
                opacity: "0.8",
              }}
            >
              <Typography
                style={{
                  fontSize: "18px",
                  color: "#0b163f",
                  fontWeight: "600",
                  padding: "8px 14px",
                }}
              >
                Useful Links
              </Typography>
              <ListItem>Home</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Service</ListItem>
              <ListItem>Get a free Quote</ListItem>
              <ListItem>Contect</ListItem>
            </List>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <List
              style={{
                fontSize: "15px",
                color: "#575757",
                fontWeight: "500",
                opacity: "0.8",
              }}
            >
              <Typography
                style={{
                  fontSize: "18px",
                  color: "#0b163f",
                  fontWeight: "600",
                  padding: "8px 14px",
                }}
              >
                Contect Us
              </Typography>
              <ListItem>
                <CleaningServicesIcon style={{ marginRight: "10px" }} />
                Eleventh Hour Cleaning Services{" "}
              </ListItem>
              <ListItem>
                <StreetviewIcon style={{ marginRight: "10px" }} />
                12 The Broadway
              </ListItem>
              <ListItem>
                <LocationOnIcon style={{ marginRight: "10px" }} />
                Harrow, London, HA3 7EH
              </ListItem>
              <ListItem>
                <PublicIcon style={{ marginRight: "10px" }} />
                United Kingdom
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
