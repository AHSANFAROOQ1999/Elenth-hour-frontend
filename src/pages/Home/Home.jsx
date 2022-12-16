import React,{useEffect} from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import Clean2 from "../../assets/umerbhisite/img/clean2.png";
import Clean3 from "../../assets/umerbhisite/img/clean3.png";
import Clean4 from "../../assets/umerbhisite/img/clean4.png";
import Clean6 from "../../assets/umerbhisite/img/clean6.png";
import Clean7 from "../../assets/umerbhisite/img/clean7.png";
import Clean8 from "../../assets/umerbhisite/img/clean8.png";
import banner from "./../../assets/umerbhisite/img/home.PNG";
function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <>
      <Box>
        <img src={banner} width="100%" alt="banner" />
      </Box>
      <Box style={{ backgroundColor: "#F1F5F8" }}>
        <Box
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
          paddingTop="60px"
          paddingBottom="120px"
          margin="auto"
        >
          <Box>
            <Box textAlign="center">
              <Typography
                style={{
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: "400",
                  textAlign: "center",
                  backgroundColor: "#84C8E6",
                  width: "40%",
                  margin: "auto",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                Why Eleventh Hour Cleaning Services?
              </Typography>
            </Box>
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
                  <Typography
                    style={{
                      justifyContent: "center",
                      padding: "22px",
                      backgroundColor: "transparent",
                      width: "50px",
                      alignItems: "center",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      margin: "10% 5%",
                      border: "3px solid #9cd8ff",
                      color: "#2e96db",
                    }}
                  >
                    1
                  </Typography>
                  {/* <img
                  src={Clean6}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                /> */}
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
                      Professionals
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        color: "#5d7577",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      Meet the cleaning professionals that are at the top of
                      their game.
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
                  <Box
                    style={{
                      padding: "22px",
                      backgroundColor: "transparent",
                      width: "50px",
                      alignItems: "center",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      margin: "10% 5%",
                      border: "3px solid #9cd8ff",
                      color: "#2e96db",
                      justifyContent: "center",
                    }}
                  >
                    2
                  </Box>
                  {/* <img
                src={Clean6}
                width="45px"
                height="45px"
                alt="img"
                style={{ padding: "20px" }}
              /> */}
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
                      Peace of Mind
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        color: "#5d7577",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      We offer peace of mind by having you covered with a 48
                      hour FREE Re-Clean Guarantee
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
                  <Typography
                    style={{
                      justifyContent: "center",
                      padding: "22px",
                      backgroundColor: "transparent",
                      width: "50px",
                      alignItems: "center",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      margin: "10% 5%",
                      border: "3px solid #9cd8ff",
                      color: "#2e96db",
                    }}
                  >
                    3
                  </Typography>
                  {/* <img
                src={Clean6}
                width="45px"
                height="45px"
                alt="img"
                style={{ padding: "20px" }}
              /> */}
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
                      Pay after the services
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        color: "#5d7577",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      A hold will be applied 48 hour prior to the service and
                      the payment will only be processed after the service.
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
                  <Typography
                    style={{
                      justifyContent: "center",
                      padding: "22px",
                      backgroundColor: "transparent",
                      width: "50px",
                      alignItems: "center",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      margin: "10% 5%",
                      border: "3px solid #9cd8ff",
                      color: "#2e96db",
                    }}
                  >
                    4
                  </Typography>
                  {/* <img
                  src={Clean6}
                  width="45px"
                  height="45px"
                  alt="img"
                  style={{ padding: "20px" }}
                /> */}
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
                      Re-Clean Guarantee
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        color: "#5d7577",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      We are confident of our work but for the sake of peace of
                      mind, you are covered with our 48 hour free reclean
                      gurantee.
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
                  <Box
                    style={{
                      padding: "22px",
                      backgroundColor: "transparent",
                      width: "50px",
                      alignItems: "center",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      margin: "10% 5%",
                      border: "3px solid #9cd8ff",
                      color: "#2e96db",
                      justifyContent: "center",
                    }}
                  >
                    5
                  </Box>
                  {/* <img
                src={Clean6}
                width="45px"
                height="45px"
                alt="img"
                style={{ padding: "20px" }}
              /> */}
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
                      No Cancellations Charges
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        color: "#5d7577",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      Things happen and therefore wo do not charge any
                      cancellation fee but the cancellation must be al least 24
                      hours before to the date the service is to be provided.
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
                  <Typography
                    style={{
                      justifyContent: "center",
                      padding: "22px",
                      backgroundColor: "transparent",
                      width: "50px",
                      alignItems: "center",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      margin: "10% 5%",
                      border: "3px solid #9cd8ff",
                      color: "#2e96db",
                    }}
                  >
                    6
                  </Typography>
                  {/* <img
                src={Clean6}
                width="45px"
                height="45px"
                alt="img"
                style={{ padding: "20px" }}
              /> */}
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
                      Flexibility to reschedule
                    </Typography>
                    <Typography
                      variant="p"
                      style={{
                        color: "#5d7577",
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      We provide flexibility to reschedule without any charges
                      but please notify at least 24 hours before.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
        }}
        paddingTop="60px"
        paddingBottom="120px"
        margin="auto"
      >
        <Box>
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
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              We work hard to make your place clean
            </Typography>
            <Grid container my={4} rowSpacing={2} columnSpacing={2}>
              <Grid
                sm={4}
                md={4}
                xs={12}
                style={{ justifyContent: "center", padding: "10px" }}
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
                      A standard house cleaning—also known as a basic cleaning
                      or a regular cleaning—consists of all the tasks you should
                      do on a regular basis to keep your house fresh and
                      well-organized.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                sm={4}
                md={4}
                xs={12}
                style={{ justifyContent: "center", padding: "10px" }}
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
                      We recommend our customers have a deep cleaning performed
                      at least twice a year. This frequency ensures that the
                      house is well maintained, clean, safe and free from mold.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                sm={4}
                md={4}
                xs={12}
                style={{ justifyContent: "center", padding: "10px" }}
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
                style={{ justifyContent: "center", padding: "10px" }}
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
                style={{ justifyContent: "center", padding: "10px" }}
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
                style={{ justifyContent: "center", padding: "10px" }}
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
                style={{ justifyContent: "center", padding: "10px" }}
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
                style={{ justifyContent: "center", padding: "10px" }}
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
                style={{ justifyContent: "center", padding: "10px" }}
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
        </Box>
      </Box>
      <Box className="contect-us">
        <Box
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
          padding="100px 0px"
          paddingBottom="120px"
          margin="auto"
        >
          <Box display="flex" style={{ justifyContent: "space-between" }}>
            <Typography
              style={{ fontSize: "32px", fontWeight: "300", color: "#98631d" }}
            >
              Give us a call and book now +44 2080 504941
            </Typography>
            <Button variant="contained"> contect us</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
