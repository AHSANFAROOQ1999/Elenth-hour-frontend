// Library Imports

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
// import img1 from './../../assets/umerbhisite/img/service.png'

import Service1 from "../../assets/umerbhisite/img/service1.png";
import Service2 from "../../assets/umerbhisite/img/service2.png";
import Service3 from "../../assets/umerbhisite/img/service3.png";
import Service4 from "../../assets/umerbhisite/img/service4.png";
import Service5 from "../../assets/umerbhisite/img/service5.png";
import Service6 from "../../assets/umerbhisite/img/service6.png";
import Clean1 from "../../assets/umerbhisite/img/clean1.png";
import Clean2 from "../../assets/umerbhisite/img/clean2.png";
import Clean3 from "../../assets/umerbhisite/img/clean3.png";
import Clean4 from "../../assets/umerbhisite/img/clean4.png";
import Clean5 from "../../assets/umerbhisite/img/clean5.png";
import Clean6 from "../../assets/umerbhisite/img/clean6.png";
import Bannerimg from "../../assets/umerbhisite/img/landingpage.PNG";
// Media & StyleSheets

// Pages, Components
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { display } from "@mui/system";

export default function LandingPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      {/* <Box style={{backgroundImage:{Bannerimg}}}> */}

      
      <Box style={{ backgroundImage:{Bannerimg} }}>
        <Box
          sx={{
            width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" },
          }}
          paddingTop="60px"
          paddingBottom="120px"
          margin="auto"
          textAlign="center"
        >
          <Typography
            style={{
              textAlign: "center",
              color: "#074e97",
              fontSize: "42px",
              fontWeight: "300",
              margin: "0px 0px 20px 0px",
            }}
          >
            Why choose Eleventh Hour Services?
          </Typography>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid sm={4} md={4} xs={12} style={{padding:'30px'}}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border:'1px solid lightgrey',
                  width: "200px",
                  height: "200px",
                  display: "inline-block",
                  position:'relative'
                }}
              >
                <img
                  src={Service1}
                  width="100px"
                  height="100px"
                  alt="img"
                  style={{ padding: "50px" }}
                />
                <Box style={{
                  backgroundColor: '#2e96db',
                  color:'white',
                  position: 'absolute',
                  padding: '10px',
                  borderRadius: '50%',
                  right: '30px',
                  bottom: '0',
                }}>1</Box>
              </Box>
              <Typography
                variant="h6"
                style={{
                  color: "#074e97",
                  fontSize: "19px",
                  fontWeight: "700",
                  margin: "15px 0px",
                }}
              >
                Professionals
              </Typography>
              <Typography
                variant="p"
                style={{
                  color: "#074e97",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Meet the cleaning professionals that are at the top of their
                game
              </Typography>
            </Grid>
            <Grid sm={4} md={4} xs={12} style={{padding:'30px'}}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border:'1px solid lightgrey',
                  width: "200px",
                  height: "200px",
                  display: "inline-block",
                  position:'relative'
                }}
              >
                <img
                  src={Service2}
                  width="100px"
                  height="100px"
                  alt="img"
                  style={{ padding: "50px" }}
                />
                <Box style={{
                  backgroundColor: '#2e96db',
                  color:'white',
                  position: 'absolute',
                  padding: '10px',
                  borderRadius: '50%',
                  right: '30px',
                  bottom: '0',
                }}>2</Box>
              </Box>
              <Typography
                variant="h6"
                style={{
                  color: "#074e97",
                  fontSize: "19px",
                  fontWeight: "700",
                  margin: "15px 0px",
                }}
              >
                Peace of Mind
              </Typography>
              <Typography
                variant="p"
                style={{
                  color: "#074e97",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >We offer peace of mind by having you covered with a 48 hour FREE Re-Clean Guarantee.
              </Typography>
            </Grid>
            <Grid sm={4} md={4} xs={12} style={{padding:'30px'}}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border:'1px solid lightgrey',
                  width: "200px",
                  height: "200px",
                  display: "inline-block",
                  position:'relative'
                }}
              >
                <img
                  src={Service3}
                  width="100px"
                  height="100px"
                  alt="img"
                  style={{ padding: "50px" }}
                />
                <Box style={{
                  backgroundColor: '#2e96db',
                  color:'white',
                  position: 'absolute',
                  padding: '10px',
                  borderRadius: '50%',
                  right: '30px',
                  bottom: '0',
                }}>3</Box>
              </Box>
              <Typography
                variant="h6"
                style={{
                  color: "#074e97",
                  fontSize: "19px",
                  fontWeight: "700",
                  margin: "15px 0px",
                }}
              >Pay after the services
              </Typography>
              <Typography
                variant="p"
                style={{
                  color: "#074e97",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >A hold will be applied 48 hour prior to the service and the payment will only be processed after the service.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            my={4}
            rowSpacing={2}
            columnSpacing={2}
            // style={{ marginTop: "80px" }}
          >
            <Grid sm={4} md={4} xs={12} style={{padding:'30px'}}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border:'1px solid lightgrey',
                  width: "200px",
                  height: "200px",
                  display: "inline-block",
                  position:'relative'
                }}
              >
                <img
                  src={Service4}
                  width="100px"
                  height="100px"
                  alt="img"
                  style={{ padding: "50px" }}
                />
                <Box style={{
                  backgroundColor: '#2e96db',
                  color:'white',
                  position: 'absolute',
                  padding: '10px',
                  borderRadius: '50%',
                  right: '30px',
                  bottom: '0',
                }}>4</Box>
              </Box>
              <Typography
                variant="h6"
                style={{
                  color: "#074e97",
                  fontSize: "19px",
                  fontWeight: "700",
                  margin: "15px 0px",
                }}
              >Re-Clean Guarantee
              </Typography>
              <Typography
                variant="p"
                style={{
                  color: "#074e97",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >We are confident of our work but for the sake of peace of mind, you are covered with our 48 hour free reclean guarantee.
              </Typography>
            </Grid>
            <Grid sm={4} md={4} xs={12} style={{padding:'30px'}}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border:'1px solid lightgrey',
                  width: "200px",
                  height: "200px",
                  display: "inline-block",
                  position:'relative'
                }}
              >
                <img
                  src={Service5}
                  width="100px"
                  height="100px"
                  alt="img"
                  style={{ padding: "50px" }}
                />
                <Box style={{
                  backgroundColor: '#2e96db',
                  color:'white',
                  position: 'absolute',
                  padding: '10px',
                  borderRadius: '50%',
                  right: '30px',
                  bottom: '0',
                }}>5</Box>
              </Box>
              <Typography
                variant="h6"
                style={{
                  color: "#074e97",
                  fontSize: "19px",
                  fontWeight: "700",
                  margin: "15px 0px",
                }}
              >No Cancellations Charges
              </Typography>
              <Typography
                variant="p"
                style={{
                  color: "#074e97",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >Things happen and therefore wo do not charge any cancellation fee but the cancellation must be al least 24 hours before to the date the service is to be provided. 
              </Typography>
            </Grid>
            <Grid sm={4} md={4} xs={12} style={{padding:'30px'}}>
              <Box
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border:'1px solid lightgrey',
                  width: "200px",
                  height: "200px",
                  display: "inline-block",
                  position:'relative'
                }}
              >
                <img
                  src={Service6}
                  width="100px"
                  height="100px"
                  alt="img"
                  style={{ padding: "50px" }}
                />
                <Box style={{
                  backgroundColor: '#2e96db',
                  color:'white',
                  position: 'absolute',
                  padding: '10px',
                  borderRadius: '50%',
                  right: '30px',
                  bottom: '0',
                }}>6</Box>
              </Box>
              <Typography
                variant="h6"
                style={{
                  color: "#074e97",
                  fontSize: "19px",
                  fontWeight: "700",
                  margin: "15px 0px",
                }}
              >Flexibility to reschedule
              </Typography>
              <Typography
                variant="p"
                style={{
                  color: "#074e97",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >We provide flexibility to reschedule without any charges but please notify at least 24 hours before.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* </Box> */}
      <Box
        sx={{ width: { lg: "1200px", md: "900px", sm: "720px", xs: "350px" } }}
        paddingTop="60px"
        paddingBottom="120px"
        margin="auto"
      >
        <Typography
          style={{ color: "#074e97", fontSize: "42px", fontWeight: "300", textAlign:'center'}}
        >
          Our Professional Services
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
                  Deep/Spring Cleaning
                </Typography>
                <Typography
                  variant="p"
                  style={{
                    color: "#5d7577",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  Thorough cleaning of the whole property including deep
                  cleaning of one oven and cupboards.
                </Typography>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#377CBE",
                  padding: "10px 20px",
                  marginTop: "15px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Get A Free Quote
              </Button>
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
                src={Clean5}
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
                  End of Tenancy Cleaning
                </Typography>
                <Typography
                  variant="p"
                  style={{
                    color: "#5d7577",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  End of tenancy cleaning for restoring a property to satisfy your landlord.
                </Typography>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#377CBE",
                  padding: "10px 20px",
                  marginTop: "15px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Get A Free Quote
              </Button>
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
                  Cleaning Gurus specialise in domestic window cleaning services in London and the surrounding areas.
                </Typography>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#377CBE",
                  padding: "10px 20px",
                  marginTop: "15px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Get A Free Quote
              </Button>
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
                  We offer professional carpet and upholstery cleaning giving the worn-out carpets a fresh look
                </Typography>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#377CBE",
                  padding: "10px 20px",
                  marginTop: "15px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Get A Free Quote
              </Button>
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
                  Appliances Cleaning
                </Typography>
                <Typography
                  variant="p"
                  style={{
                    color: "#5d7577",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  Do you need professional cleaning of the Oven, Fridge, Dishwasher, Washing machine, we have you covered.
                </Typography>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#377CBE",
                  padding: "10px 20px",
                  marginTop: "15px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Get A Free Quote
              </Button>
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
                src={Clean1}
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
                  Giving your house a fresh feel, a clean property leading to a safer and a healthier environment.
                </Typography>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#377CBE",
                  padding: "10px 20px",
                  marginTop: "15px",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Get A Free Quote
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ width: { lg: "1200", md: "900px", sm: "600px", xs: "350px" } }}
        paddingTop="60px"
        paddingBottom="120px"
        margin="auto"
      >
        <Typography
            style={{
              textAlign: "center",
              color: "#074e97",
              fontSize: "42px",
              fontWeight: "300",
              margin: "0px 0px 20px 0px",
            }}
          >
            Frequently Asked Questions
          </Typography>
        <Box
        // width="50%"
        >
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
                What is Deep Cleaning?
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
                Deep Cleaning is a professional service that offers a thorough cleaning in contrast to regular cleaning. In a professional deep cleaning, we go the extra mile by cleaning behind the radiators and cleaning inside the cupboards, drawers, and kitchen cabinets. It also covers professional cleaning of the kitchen, the hood, the hob, deep cleaning of the extractor fans, deep cleaning of the bathroom tiles, deep scaling and lime scaling of the shower heads, taps, handles, and dusting of the lighting fixtures and much more. A professional deep clean gives your property a fresh feel and a clean safe and healthy environment. It is recommended to have your house/apartment deep cleaned at least twice a year.
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
                What is End of Tenancy Cleaning?
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
                An End of Tenancy Cleaning or Move in Move out Cleaning refers to the type of cleaning required when a tenant moves out of rented accommodation. This can be undertaken by either the tenant or landlord or by the letting agency. It involves cleaning every aspect of the property to ensure it’s returned in its original condition. This is an important type of cleaning and is essential to be undertaken before a new tenant moves in
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
             How often should I have the property Deep Cleaned?
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
                A professional Deep Cleaning is recommended at least twice a year giving your property a fresh feel and a clean, safe and healthier environment.
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
                Why do I need to carry out an end of tenancy clean?
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
                Tenants are expected to leave the property in the state it was when they moved in. This includes alterations to the physical appearance of the property – like unauthorised paint jobs or damage to supplied furniture – but it also covers the level of cleanliness. If a property is not returned in its original condition, tenants will risk losing some of their deposits. Landlords can claim on the deposit if they are unhappy with how the property is left. If unresolved, the dispute will be left in the hands of the deposit adjudicators to make a reasonable decision.
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
                Is Professional Deep Cleaning expensive?
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
                Eleventh Hour Cleaning service is a professional cleaning service provider in London, United Kingdom. Our professional services are not expensive. The exact costs depend on how large your home is and the exact kind of cleaning you desire. Typically, house cleaning services are surprisingly affordable. Furthermore, you can have a tailored service as per your needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
