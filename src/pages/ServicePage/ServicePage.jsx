import React from "react";
import {
  Typography,
  Box,
  List,
  ListItemText,
  Button,
  Rating,
  Grid,
} from "@mui/material";
import Avatars from "./../../assets//img/avatar.jpg";
import Dots from "./../../assets//svg/dots.svg";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import SimCardSharpIcon from "@mui/icons-material/SimCardSharp";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";
import LoopSharpIcon from "@mui/icons-material/LoopSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";

function ServicePage() {
  return (
    <>
      <Box maxWidth="100%" backgroundColor="#0b163f">
        <Box
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
          <Typography
            variant="h3"
            textAlign="left"
            style={{
              fontWeight: "800",
              fontSize: "48px",
              marginBottom: "10px",
            }}
            width="100%"
          >
            We are Development Experts
          </Typography>
          <Typography
            variant="h6"
            textAlign="left"
            maxWidth="780px"
            style={{ fontWeight: "400", fontSize: "20px" }}
          >
            Seamlessly actualize client-based users after out-of-the-box value.
            Globally embrace strategic data through frictionless expertise.
          </Typography>
        </Box>
      </Box>

      <Box style={{ backgroundColor: "#f8f9fa" }}>
        <Box
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
          padding="120px 0px"
          margin="auto"
          textAlign="center"
        >
          <Box>
            <Typography
              variant="h6"
              style={{ fontWeight: "600", fontSize: "20px", color: "#175cff" }}
            >
              Services
            </Typography>
            <Typography style={{ fontWeight: "700", fontSize: "40px" }}>
              Best Services Grow Your Business Value
            </Typography>
            <Typography
              style={{ fontWeight: "400", fontSize: "16px", color: "#575757" }}
            >
              Globally actualize cost effective with resource maximizing
              leadership skills.
            </Typography>
            <Grid container my={4} rowSpacing={2} columnSpacing={2}>
              <Grid item sm={4} xs={12}>
                <Box
                  textAlign="left"
                  sx={{
                    padding: {
                      lg: "48px",
                      md: "25px",
                      sm: "25px",
                      xs: "20px",
                    },
                  }}
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "white",
                    boxShadow:
                      "0 0.125rem 0.3rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 0.75rem -0.0625rem rgb(12 8 0 / 6%)",
                  }}
                >
                  <Box
                    width="50px"
                    height="50px"
                    style={{
                      backgroundColor: "#d1deff",
                      borderRadius: "50%",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <SignalCellularAltSharpIcon style={{ color: "#175cff" }} />
                  </Box>
                  <Typography
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    Advanced analytics
                  </Typography>

                  <Typography
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#595959",
                    }}
                  >
                    Synergistically pursue accurate initiatives without
                    economically sound imperatives.
                    <br />
                    <br />
                    Professionally architect unique process improvements via
                    optimal.
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "600",
                      fontSize: "17px",

                      marginTop: "20px",
                    }}
                  >
                    Included with...
                  </Typography>

                  <List align="left" style={{}}>
                    <ListItemText
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#575757",
                        lineHeight: "28px",
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{
                          color: "rgb(23, 92, 255)",
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      />
                      High-converting
                    </ListItemText>
                    <ListItemText
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#575757",
                        lineHeight: "28px",
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{
                          color: "rgb(23, 92, 255)",
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      />
                      Personal branding
                    </ListItemText>
                    <ListItemText>
                      <CheckCircleOutlineIcon
                        style={{
                          color: "rgb(23, 92, 255)",
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      />
                      Modernized prospecting
                    </ListItemText>
                    <ListItemText
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#575757",
                        lineHeight: "28px",
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{
                          color: "rgb(23, 92, 255)",
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      />
                      Clean and modern
                    </ListItemText>
                    <ListItemText
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#575757",
                        lineHeight: "28px",
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{
                          color: "rgb(23, 92, 255)",
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      />
                      Showcasing success
                    </ListItemText>
                    <ListItemText
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#575757",
                        lineHeight: "28px",
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{
                          color: "rgb(23, 92, 255)",
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      />
                      Bootstrap latest version
                    </ListItemText>
                    <Button
                      variant="plain"
                      style={{
                        padding: "0px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#575757",
                        marginTop: "25px",
                      }}
                    >
                      Veiw Detail <ArrowRightAltSharpIcon />
                    </Button>
                  </List>
                </Box>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Grid container my={-2} rowSpacing={2} columnSpacing={2}>
                  <Grid item sm={6} xs={12}>
                    <Box
                      textAlign="left"
                      sx={{
                        padding: {
                          lg: "48px",
                          md: "25px",
                          sm: "25px",
                          xs: "20px",
                        },
                      }}
                      style={{
                        borderRadius: "1rem",
                        backgroundColor: "white",
                        boxShadow:
                          "0 0.125rem 0.3rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 0.75rem -0.0625rem rgb(12 8 0 / 6%)",
                      }}
                    >
                      <Box
                        width="50px"
                        height="50px"
                        style={{
                          backgroundColor: "#DEF4ED",
                          borderRadius: "50%",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "30px",
                        }}
                      >
                        <SimCardSharpIcon style={{ color: "#5CC9A7" }} />
                      </Box>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        Automated Reports
                      </Typography>

                      <Typography
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          color: "#595959",
                        }}
                      >
                        Synergistically pursue accurate initiatives without
                        economically imperatives.
                      </Typography>
                      <Button
                        variant="plain"
                        style={{
                          padding: "0px",
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "#575757",
                          marginTop: "25px",
                        }}
                      >
                        Veiw Detail <ArrowRightAltSharpIcon />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      textAlign="left"
                      sx={{
                        padding: {
                          lg: "48px",
                          md: "25px",
                          sm: "25px",
                          xs: "20px",
                        },
                      }}
                      style={{
                        borderRadius: "1rem",
                        backgroundColor: "white",
                        boxShadow:
                          "0 0.125rem 0.3rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 0.75rem -0.0625rem rgb(12 8 0 / 6%)",
                      }}
                    >
                      <Box
                        width="50px"
                        height="50px"
                        style={{
                          backgroundColor: "#FCDDE1",
                          borderRadius: "50%",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "30px",
                        }}
                      >
                        <PeopleSharpIcon style={{ color: "#F25767" }} />
                      </Box>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        User Journey Flow
                      </Typography>

                      <Typography
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          color: "#595959",
                        }}
                      >
                        Quickly productize prospective prospective value before
                        collaborative benefits.
                      </Typography>
                      <Button
                        variant="plain"
                        style={{
                          padding: "0px",
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "#575757",
                          marginTop: "25px",
                        }}
                      >
                        Veiw Detail <ArrowRightAltSharpIcon />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      textAlign="left"
                      sx={{
                        padding: {
                          lg: "48px",
                          md: "25px",
                          sm: "25px",
                          xs: "20px",
                        },
                      }}
                      style={{
                        borderRadius: "1rem",
                        backgroundColor: "white",
                        boxShadow:
                          "0 0.125rem 0.3rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 0.75rem -0.0625rem rgb(12 8 0 / 6%)",
                      }}
                    >
                      <Box
                        width="50px"
                        height="50px"
                        style={{
                          backgroundColor: "#DFDFE2",
                          borderRadius: "50%",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "30px",
                        }}
                      >
                        <LoopSharpIcon style={{ color: "#0f1a42" }} />
                      </Box>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        Compare A/B Testing
                      </Typography>

                      <Typography
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          color: "#595959",
                        }}
                      >
                        Credibly disintermediate functional processes for team
                        driven action.
                      </Typography>
                      <Button
                        variant="plain"
                        style={{
                          padding: "0px",
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "#575757",
                          marginTop: "25px",
                        }}
                      >
                        Veiw Detail <ArrowRightAltSharpIcon />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      textAlign="left"
                      sx={{
                        padding: {
                          lg: "48px",
                          md: "25px",
                          sm: "25px",
                          xs: "20px",
                        },
                      }}
                      style={{
                        borderRadius: "1rem",
                        backgroundColor: "white",
                        boxShadow:
                          "0 0.125rem 0.3rem -0.0625rem rgb(12 8 0 / 3%), 0 0.275rem 0.75rem -0.0625rem rgb(12 8 0 / 6%)",
                      }}
                    >
                      <Box
                        width="50px"
                        height="50px"
                        style={{
                          backgroundColor: "#ffefd0",
                          borderRadius: "50%",
                          alignItems: "center",
                          display: "flex",
                          marginBottom: "30px",
                          justifyContent: "center",
                        }}
                      >
                        <SettingsSharpIcon style={{ color: "#ffc145" }} />
                      </Box>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        Easy Customization
                      </Typography>

                      <Typography
                        style={{
                          fontWeight: "400",
                          fontSize: "16px",
                          color: "#595959",
                        }}
                      >
                        Dynamically develop ubiquitous opportunities whereas
                        relationships.
                      </Typography>
                      <Button
                        variant="plain"
                        style={{
                          padding: "0px",
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "#575757",
                          marginTop: "25px",
                        }}
                      >
                        Veiw Detail <ArrowRightAltSharpIcon />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              style={{
                fontWeight: "600",
                marginTop: "150px",
                fontSize: "20px",
                color: "#175cff",
              }}
            >
              Testimonial
            </Typography>
            <Typography style={{ fontWeight: "700", fontSize: "40px" }}>
              What They Say About Us
            </Typography>
            <Typography
              style={{ fontWeight: "400", fontSize: "16px", color: "#575757" }}
            >
              Dynamically initiate market positioning total linkage with
              clicks-and-mortar technology compelling data for cutting-edge
              markets..
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#f8f9fa" }}>
        <Box
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
          paddingBottom="120px"
          margin="auto"
          textAlign="left"
        >
          <Box
            display="flex"
            flexWrap="wrap"
            sx={{
              flexWrap: {
                lg: "nowrap",
                md: "nowrap",
                sm: "nowrap",
                xs: "wrap",
              },
            }}
            style={{ justifyContent: "space-between", gap: "15px" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              padding="3rem"
              border="1px solid rgba(11, 22, 63, 0.12)"
              borderRadius="1rem"
              position="relative"
            >
              <img
                src={Dots}
                alt="Dots"
                style={{
                  position: "absolute",
                  width: "110px",
                  height: "110px",
                  top: "10px",
                  left: "10px",
                }}
              />
              <Box display="flex" marginBottom="30px">
                <img
                  alt="Avavtar"
                  src={Avatars}
                  width="60px"
                  height="60px"
                  style={{ zIndex: "9999999" }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  marginLeft="15px"
                  justifyContent="space-around"
                >
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#00000",
                    }}
                  >
                    Ranu Mondal
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#575757",
                    }}
                  >
                    Lead Developer
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="h6"
                style={{ fontSize: "17px", fontWeight: "600", color: "#00000" }}
              >
                It is undeniably good!
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#575757",
                }}
              >
                Rapidiously supply client-centric e-markets and maintainable
                processes progressively engineer
              </Typography>
              <Rating
                name="read-only"
                value={3}
                readOnly
                style={{ marginTop: "15px" }}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              padding="3rem"
              border="1px solid rgba(11, 22, 63, 0.12)"
              borderRadius="1rem"
              position="relative"
            >
              <img
                src={Dots}
                alt="DOts"
                style={{
                  position: "absolute",
                  width: "110px",
                  height: "110px",
                  top: "10px",
                  left: "10px",
                }}
              />
              <Box display="flex" marginBottom="30px">
                <img
                  src={Avatars}
                  alt="Avatar"
                  width="60px"
                  height="60px"
                  style={{ zIndex: "9999999" }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  marginLeft="15px"
                  justifyContent="space-around"
                >
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#00000",
                    }}
                  >
                    Ranu Mondal
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#575757",
                    }}
                  >
                    Lead Developer
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="h6"
                style={{ fontSize: "17px", fontWeight: "600", color: "#00000" }}
              >
                It is undeniably good!
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#575757",
                }}
              >
                Rapidiously supply client-centric e-markets and maintainable
                processes progressively engineer
              </Typography>
              <Rating
                name="read-only"
                value={4}
                readOnly
                style={{ marginTop: "15px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box maxWidth="100%" backgroundColor="#0b163f">
        <Box
          padding="120px 0px"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="start"
          textAlign="center"
          margin="auto"
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: "600", fontSize: "20px", color: "#ffb116" }}
            width="100%"
          >
            Let's Try! Get Free Support
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "700", fontSize: "40px" }}
          >
            Start Your 14-Day Free Trial
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "400", fontSize: "16px", color: "d9d9d9" }}
          >
            We can help you to create your dream website for better business
            revenue.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            margin="50px 0px 30px 0px"
          >
            <Button
              variant="soft"
              sx={{
                padding: {
                  lg: "10px 28px",
                  md: "10px 28px",
                  sm: "10px 28px",
                  xs: "10px 20px",
                },
              }}
              style={{
                backgroundColor: "#175cff",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: "15px",
                color: "#ffffff",
              }}
            >
              Contect With Us
            </Button>

            <Button
              variant="plain"
              style={{ fontWeight: "500", fontSize: "15px", color: "#d9d9d9" }}
            >
              <PlayCircleOutlineIcon
                style={{ fontSize: "36px", marginRight: "10px" }}
              />
              Watch Now
            </Button>
          </Box>
          <Box
            display="flex"
            gap="30px"
            style={{ justifyContent: "center" }}
            sx={{
              flexWrap: {
                lg: "nowrap",
                md: "nowrap",
                sm: "nowrap",
                xs: "wrap",
              },
            }}
          >
            <Typography alignItems="center" display="flex">
              <CheckCircleOutlineIcon
                style={{
                  color: "rgb(23, 92, 255)",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />
              Free 14-day trial
            </Typography>
            <Typography alignItems="center" display="flex">
              <CheckCircleOutlineIcon
                style={{
                  color: "rgb(23, 92, 255)",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />
              No credit card required
            </Typography>
            <Typography alignItems="center" display="flex">
              <CheckCircleOutlineIcon
                style={{
                  color: "rgb(23, 92, 255)",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />
              Support 24/7
            </Typography>
            <Typography alignItems="center" display="flex">
              <CheckCircleOutlineIcon
                style={{
                  color: "rgb(23, 92, 255)",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />
              Cancel anytime
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ServicePage;
