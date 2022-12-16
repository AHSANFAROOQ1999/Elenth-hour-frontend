import { Typography, Box, Grid, List, ListItem } from "@mui/material";
import React,{useEffect} from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Service1 from "../../assets/umerbhisite/img/message.png";
import Service2 from "../../assets/umerbhisite/img/clean1.png";
import Service3 from "../../assets/umerbhisite/img/clean6.png";
import Banner from "./../../assets/umerbhisite/img/banner.PNG"
import Banner2 from "./../../assets/umerbhisite/img/banner2.PNG"
import Banner3 from "./../../assets/umerbhisite/img/banner3.jpg"

import { Link } from "react-router-dom";
import { height } from "@mui/system";

function Contectus() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <>
    <Box className="blogbanner">
    <Box style={{ padding: "170px 0 80px", textAlign: "center" }}>
          <Typography
            style={{ color: "#074e97", fontSize: "40px", fontWeight: "400" }}
          >
            Contact and order
          </Typography>
          <Typography
            style={{
              color: "rgba(7, 78, 151, 0.6)",
              fontSize: "13px",
              fontWeight: "400",
              //   , alignItems:'center' ,display:'flex',
              //   textAlign:'center'
            }}
          >
            <Link to="/">
              <span
                style={{ color: "rgba(7, 78, 151, 0.6)", fontSize: "13px" }}
              >
                Home
              </span>{" "}
            </Link>
            <ArrowForwardIosIcon style={{ fontSize: "13px" }} /> Contact and
            order
          </Typography>
        </Box>
    </Box>
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
        
        <Grid container my={4} rowSpacing={2} columnSpacing={2}>
          <Grid
            sm={4}
            md={4}
            xs={12}
            style={{ padding: "30px", textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                border: "1px solid lightgrey",
                width: "200px",
                height: "200px",
                display: "inline-block",
                position: "relative",
              }}
            >
              <img
                src={Service1}
                width="100px"
                height="100px"
                alt="img"
                style={{ padding: "50px" }}
              />
              <Box
                style={{
                  backgroundColor: "#2e96db",
                  color: "white",
                  position: "absolute",
                  padding: "10px",
                  borderRadius: "50%",
                  right: "30px",
                  bottom: "0",
                }}
              >
                1
              </Box>
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
              Step 1<br />
              Call us and book a term
            </Typography>
            <Typography
              variant="p"
              style={{
                color: "#5d7577",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              Give us a call, share details of the work and the property;
              highlighting any of the special concerns. Mention the frequency of
              the services needed. Confirm your booking. Upon booking you do not
              need to have any deposit with us. Payment will be charged only
              after the service.
            </Typography>
          </Grid>
          <Grid
            sm={4}
            md={4}
            xs={12}
            style={{ padding: "30px", textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                border: "1px solid lightgrey",
                width: "200px",
                height: "200px",
                display: "inline-block",
                position: "relative",
              }}
            >
              <img
                src={Service3}
                width="100px"
                height="100px"
                alt="img"
                style={{ padding: "50px" }}
              />
              <Box
                style={{
                  backgroundColor: "#2e96db",
                  color: "white",
                  position: "absolute",
                  padding: "10px",
                  borderRadius: "50%",
                  right: "30px",
                  bottom: "0",
                }}
              >
                2
              </Box>
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
              Step 2<br />
              Wait for a cleaner
            </Typography>
            <Typography
              variant="p"
              style={{
                color: "#5d7577",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              At the agreed time the cleaning professional will be at the
              property. Guide them around if necessary and leave the work to
              them. When the work will be done, they will call you for
              inspection. Inspect and confirm the work has been done properly
              and up to the standards the professionals will leave
            </Typography>
          </Grid>
          <Grid
            sm={4}
            md={4}
            xs={12}
            style={{ padding: "30px", textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                border: "1px solid lightgrey",
                width: "200px",
                height: "200px",
                display: "inline-block",
                position: "relative",
              }}
            >
              <img
                src={Service2}
                width="100px"
                height="100px"
                alt="img"
                style={{ padding: "50px" }}
              />
              <Box
                style={{
                  backgroundColor: "#2e96db",
                  color: "white",
                  position: "absolute",
                  padding: "10px",
                  borderRadius: "50%",
                  right: "30px",
                  bottom: "0",
                }}
              >
                3
              </Box>
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
              Step 3<br />
              Come back and enjoy
            </Typography>
            <Typography
              variant="p"
              style={{
                color: "#5d7577",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              Come back and enjoy. As the work has been completed, now the
              payment that has previously been put on hold, will be processed.
              As your opinion counts, a feedback form will be sent you your
              email, Please take a minute or two to provide us with your
              valuable feedback..
            </Typography>
          </Grid>
        </Grid>

        <Box style={{ borderTop: "1px solid lightgrey" }}>
       
        <Typography
                  style={{
                    marginTop:'50px',
                    fontSize: "32px",
                    color: "#074e97",
                    fontWeight: "300",
                    padding: "8px 14px",
                    textAlign:'center'
                  }}
                >
                   We working hard to make your place clean
                </Typography>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid item md={4} sm={4} xs={12}>
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
                    fontSize: "28px",
                    color: "#074e97",
                    fontWeight: "300",
                    padding: "8px 14px",
                  }}
                >
                  Eleventh Hour Cleaning Services
                </Typography>
                <Typography
                  style={{
                    fontSize: "14px",
                    // color: "#0b163f",
                    fontWeight: "600",
                    padding: "8px 14px",
                  }}
                >
                  Dedicated to make your place cleaner, safer, healthier.
                </Typography>

                <ListItem>E-mail: contact@eleventhhourservice.co.uk</ListItem>
                <ListItem>Call us: 233 455 775</ListItem>
              </List>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
                <img src={Banner} alt="banner" style={{width:"100%"}}/>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
                <img src={Banner2} alt="banner" style={{width:"96%"}}/>
            </Grid>
            {/* <Grid item md={4} sm={4} xs={12}>
            <
          </Grid>
           */}
          </Grid>
          
          <img src={Banner3} alt="banner" style={{marginTop:'80px',width:"100%", height:'100vh'}}/>
        </Box>
      </Box>
        <div> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.676440079539!2d151.2021434157453!3d-33.872228626669376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af7e18ad9a51%3A0xc0d41c2fc1b6eb80!2sMeriton%20Suites%20Sussex%20Street%2C%20Sydney!5e0!3m2!1sen!2sus!4v1666992356534!5m2!1sen!2sus" width="100%" height="320" allowfullscreen="" loading="lazy"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.676440079539!2d151.2021434157453!3d-33.872228626669376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af7e18ad9a51%3A0xc0d41c2fc1b6eb80!2sMeriton%20Suites%20Sussex%20Street%2C%20Sydney!5e0!3m2!1sen!2sus!4v1666992356534!5m2!1sen!2sus" height="320" allowfullscreen="" loading="lazy"></iframe> */}
              {/* <iframe src="https://www.google.com/maps/d/embed?mid=1B15Lgy25kfFKPbgAJN4nQpMr7Ns" width="100%" height="320"></iframe> */}
              {/* <iframe src="https://www.google.com/maps/d/embed?phYHRSWoC7bLFeii6" width="100%" height="320" allowfullscreen="" loading="lazy"></iframe> */}
              {/* <iframe id="booking-widget-iframe" src="https://www.eleventhhourservices.co.uk/book-now/" style="border:none;width:100%;min-height:2739px;overflow:hidden" scrolling="no"></iframe> */}
            </div>
    </>
  );
}

export default Contectus;
