import React from "react";
import {
  Typography,
  Box,
  List,
  ListItemText,
  Button,
  Rating,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatars from "./../../assets/img/avatar.jpg";
import Dots from "./../../assets/svg/dots.svg";
import Brightness1SharpIcon from "@mui/icons-material/Brightness1Sharp";

export default function PricingPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
          {/* <img src={Header} style={{
                  position: "absolute",
                  width: "100%",
                  
                }}/> */}
          <Typography
            variant="h3"
            textAlign="left"
            style={{ fontWeight: "800", fontSize: "48px" }}
            width="100%"
          >
            Price Suit to Your Business
          </Typography>
          <Typography
            variant="h6"
            maxWidth="780px"
            style={{ fontWeight: "400", fontSize: "20px" }}
          >
            Seamlessly actualize client-based users after out-of-the-box value.
            Globally embrace strategic data through frictionless expertise.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" } }}
        paddingTop="60px"
        paddingBottom="120px"
        margin="auto"
      >
        <Box display="flex" flexWrap="wrap" gap="20px" width="inherit">
          <Box
            padding="48px"
            sx={{ width: { lg: "24%", md: "21%", sm: "34%", xs: "100%" } }}
            style={{
              boxShadow: "0 5px 20px 0 rgb(210 210 245 / 50%)",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                color: "#175cff",
              }}
            >
              Stater
            </Typography>
            <Typography
              paddingBottom="30px"
              marginBottom="30px"
              borderBottom="1px dashed #c0c0c5"
              variant="h6"
              style={{ fontWeight: "600", fontSize: "40px", color: "black" }}
            >
              $25{" "}
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#575757",
                }}
              >
                /month
              </span>
            </Typography>
            <List
              align="left"
              style={{
                fontWeight: "400",
                fontSize: "15px",
                color: "#575757",
              }}
            >
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Team
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Installed Agent
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Team
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Real-Time Feedback
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Video Dedicated Support
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Attacked Targets Per Month
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Team Collaboration Tools
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Automated Updated Features
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                24/7 Life time Support
              </ListItemText>
              <Button
                variant="outlined"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "15px",
                  color: "#175cff",
                  borderColor: "#175cff",
                  border: "2px solid ",
                  padding: "10px 28px",
                }}
              >
                Buy Now
              </Button>
            </List>
          </Box>
          <Box
            padding="48px"
            sx={{ width: { lg: "24%", md: "21%", sm: "34%", xs: "100%" } }}
            style={{
              boxShadow: "0 5px 20px 0 rgb(210 210 245 / 50%)",
              background: "linear-gradient(90deg, #071c4d, #002d97)",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                color: "#ffb116",
              }}
            >
              Advance
            </Typography>
            <Typography
              paddingBottom="30px"
              marginBottom="30px"
              borderBottom="1px dashed #c0c0c5"
              variant="h6"
              style={{ fontWeight: "600", fontSize: "40px", color: "white" }}
            >
              $25{" "}
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#d9d9d9d9",
                }}
              >
                /month
              </span>
            </Typography>
            <List
              align="left"
              style={{
                fontWeight: "400",
                fontSize: "15px",
                color: "#d9d9d9d9",
              }}
            >
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />{" "}
                1 Team
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Installed Agent
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Team
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Real-Time Feedback
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Video Dedicated Support
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Attacked Targets Per Month
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Team Collaboration Tools
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Automated Updated Features
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#FFB116",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                24/7 Life time Support
              </ListItemText>
              <Button
                variant="contained"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "15px",
                  color: "#fffff",
                  backgroundColor: "#175cff",
                  padding: "10px 28px",
                }}
              >
                Buy Now
              </Button>
            </List>
          </Box>
          <Box
            padding="48px"
            sx={{ width: { lg: "24%", md: "21%", sm: "35%", xs: "100%" } }}
            style={{
              boxShadow: "0 5px 20px 0 rgb(210 210 245 / 50%)",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                color: "#175cff",
              }}
            >
              Premiuum
            </Typography>
            <Typography
              paddingBottom="30px"
              marginBottom="30px"
              borderBottom="1px dashed #c0c0c5"
              variant="h6"
              style={{ fontWeight: "600", fontSize: "40px", color: "black" }}
            >
              $25{" "}
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#575757",
                }}
              >
                /month
              </span>
            </Typography>
            <List
              align="left"
              style={{
                fontWeight: "400",
                fontSize: "15px",
                color: "#575757",
              }}
            >
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Team
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Installed Agent
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                1 Team
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Real-Time Feedback
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Video Dedicated Support
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Attacked Targets Per Month
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Team Collaboration Tools
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                Automated Updated Features
              </ListItemText>
              <ListItemText alignItems="center" display="flex">
                <Brightness1SharpIcon
                  style={{
                    color: "#175CFF",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
                24/7 Life time Support
              </ListItemText>
              <Button
                variant="outlined"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "15px",
                  color: "#175cff",
                  borderColor: "#175cff",
                  border: "2px solid ",
                  padding: "10px 28px",
                }}
              >
                Buy Now
              </Button>
            </List>
          </Box>
        </Box>
      </Box>

      <Box style={{ backgroundColor: "#f8f9fa" }}>
        <Box
          sx={{ width: { lg: "800px", md: "540px", sm: "720px", xs: "350px" } }}
          padding="120px 0px"
          margin="auto"
          textAlign="center"
        >
          <Box>
            <Typography
              variant="h6"
              style={{ fontWeight: "600", fontSize: "20px", color: "#175cff" }}
            >
              FAQ
            </Typography>
            <Typography style={{ fontWeight: "700", fontSize: "40px" }}>
              Frequently Asked Questions
            </Typography>
            <Typography
              style={{ fontWeight: "400", fontSize: "16px", color: "#575757" }}
            >
              Completely whiteboard top-line channels and fully tested value.
              Competently generate testing procedures before visionary
              maintainable growth strategies for maintainable.
            </Typography>

            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                style={{
                  margin: "30px 0px",
                  padding: "10px",
                  border: "2px solid rgba(11, 22, 63, 0.12)",
                  borderRadius: "1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0 }}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#575757",
                    }}
                  >
                    How does back pricing work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#575757",
                      textAlign: "left",
                    }}
                  >
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                style={{
                  margin: "30px 0px",
                  padding: "10px",
                  border: "2px solid rgba(11, 22, 63, 0.12)",
                  borderRadius: "1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0 }}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#575757",
                    }}
                  >
                    Can you show me an example?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#575757",
                      textAlign: "left",
                    }}
                  >
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                style={{
                  margin: "30px 0px",
                  padding: "10px",
                  border: "2px solid rgba(11, 22, 63, 0.12)",
                  borderRadius: "1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0 }}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#575757",
                    }}
                  >
                    How do I processing I need?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#575757",
                      textAlign: "left",
                    }}
                  >
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                style={{
                  margin: "30px 0px",
                  padding: "10px",
                  border: "2px solid rgba(11, 22, 63, 0.12)",
                  borderRadius: "1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0 }}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#575757",
                    }}
                  >
                    What happens if I go over my ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "4s00",
                      color: "#575757",
                      textAlign: "left",
                    }}
                  >
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                style={{
                  margin: "30px 0px",
                  padding: "10px",
                  border: "2px solid rgba(11, 22, 63, 0.12)",
                  borderRadius: "1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0 }}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#575757",
                    }}
                  >
                    How do I calculate how much ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "4s00",
                      color: "#575757",
                      textAlign: "left",
                    }}
                  >
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
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
    </>
  );
}
