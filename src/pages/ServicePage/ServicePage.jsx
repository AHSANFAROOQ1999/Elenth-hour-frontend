import React,{useEffect} from "react";
import {
  Typography,
  Box,
  Grid,
} from "@mui/material";
import Clean2 from "../../assets/umerbhisite/img/clean2.png";
import Clean3 from "../../assets/umerbhisite/img/clean3.png";
import Clean4 from "../../assets/umerbhisite/img/clean4.png";
import Clean6 from "../../assets/umerbhisite/img/clean6.png";
import Clean7 from "../../assets/umerbhisite/img/clean7.png";
import Clean8 from "../../assets/umerbhisite/img/clean8.png";
import Quote from "../../assets/umerbhisite/img/quote.png";
import BgImg from "../../assets/umerbhisite/img/service-bg.jpg";
import ServiceBanner from "./../../assets/umerbhisite/img/servicebanner.PNG"

function ServicePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <>
      <Box><img src={ServiceBanner} width="100%" alt="banneer"/></Box>
      <Box className="servicePagebanner"><Box
        padding="120px 0px"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        margin="auto"
        sx={{
          width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
        }}
      >
        <Box
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
          paddingTop="60px"
          paddingBottom="120px"
          margin="auto"
        >
          <Typography
            style={{
              color: "#074e97",
              fontSize: "42px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            We offer the following cleaning service
          </Typography>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean6}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Regular Cleaning
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    A standard house cleaning—also known as a basic cleaning or
                    a regular cleaning—consists of all the tasks you should do
                    on a regular basis to keep your house fresh and
                    well-organized.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean6}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Deep Cleaning
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    We recommend our customers have a deep cleaning performed at
                    least twice a year. This frequency ensures that the house is
                    well maintained, clean, safe and free from mold.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean6}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    End-of-Tenancy Cleaning
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    Weather moving in or moving out, End-of-tenancy cleaning
                    ensures that every aspect of the property is cleaned and
                    returned in its original or near original condition.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean4}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Window Cleaning
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    We offer professional windows cleaning.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean7}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Laundry
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    Washing, drying and folding of Laundry
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean2}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Cloth ironing
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    Professionals to help with ironing of clothes.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean3}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Carpet / upholstery cleaning
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    We offer professional carpet and upholstery cleaning.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean8}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Trash treatment
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    We offer trash disposal / treatment
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              sm={4}
              md={4}
              xs={12}
              style={{ justifyContent: "center", padding: "30px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={Clean3}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                />
                <Box style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#074e97",
                      fontSize: "19px",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    Extra Shiny
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "#5d7577",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    Clean and shining property.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        
      </Box></Box>
      <Box style={{width:'100%',position:'relative'}}>
          <img src={BgImg} alt="banneer" style={{width:'100%',position:'relative'}}/>
          <Box>
          <img src={Quote} alt="banneer"
          style={{
            position: 'absolute',
            top: '17%',
            width: '30%',
            left: '20%',
            border: '9px solid #ffff',
            
          }}
          
          />
          </Box>
          
        </Box>
      {/* </Box> */}
    </>
  );
}

export default ServicePage;
