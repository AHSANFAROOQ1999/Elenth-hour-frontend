// import { Box, Typography } from "@mui/material";
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Save from "./../../assets/umerbhisite/img/save.jpg";
import Blog1 from "./../../assets/umerbhisite/img/blog1.jpg";
import Blog2 from "./../../assets/umerbhisite/img/blog2.jpg";
// import React from "react";
import {
  Typography,
  Box,
  List,
  ListItemText,
  Button,
  Rating,
  Grid,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import SimCardSharpIcon from "@mui/icons-material/SimCardSharp";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";
import LoopSharpIcon from "@mui/icons-material/LoopSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";

function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <Box
    >
      <Box className="blogbanner">
      <Box style={{ padding: "170px 0 80px", textAlign: "center" }}>
        <Typography
          style={{ color: "#074e97", fontSize: "40px", fontWeight: "400" }}
        >
          What can we do for you?
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
            <span style={{ color: "rgba(7, 78, 151, 0.6)", fontSize: "13px" }}>
              Home
            </span>
          </Link>
          <ArrowForwardIosIcon style={{ fontSize: "13px" }} /> What can we do
          for you?
        </Typography>
      </Box>
      </Box>
      <Box>
      <Box style={{display:'flex', width:'65%', flexDirection:'column',float:'left',marginLeft:'10%',paddingBottom:'300px'}}>
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
            </Grid></Box>
      
      <Box style={{display:'flex', width:'20%', flexDirection:'column',float:'right',borderLeft:'0.5px solid lightgrey'}}>
        <Box style={{ margin: "20px", paddingBottom:'20px' ,borderBottom: "0.5px solid lightgrey"}}>
          <img src={Save} style={{ borderBottom: "1px solid grey" }} alt="img" />
        </Box>
        <Box style={{width:'44%' ,margin: "20px", paddingBottom:'20px' ,borderBottom: "0.5px solid lightgrey"}}>
          <Typography style={{color:'#074e97',fontSize:'18px',fontWeight:'300' ,paddingBottom:'25px'}}>Recent posts</Typography>
          <Box display="flex" flexDirction="row" gap='10px'>
            <Box>
              <Typography style={{ borderBottom: "0.5px solid lightgrey",color:'#074e97',fontSize:'13px',fontWeight:'400'  }}>
                Phasellus fermentum in dolor
              </Typography>
              <Typography style={{color:'#5d7577',fontSize:'13px',fontWeight:'400' ,paddingBottom:'25px'}}>08 ,November 2016</Typography>
            </Box>
            <Box>
              <img src={Blog1} style={{ width: "100px" }}alt="img" />
            </Box>
          </Box>
          <Box display="flex" flexDirction="row" gap='10px'>
            <Box>
              <Typography style={{ borderBottom: "0.5px solid lightgrey",color:'#074e97',fontSize:'13px',fontWeight:'400'  }}>
                Phasellus fermentum in dolor
              </Typography>
              <Typography style={{color:'#5d7577',fontSize:'13px',fontWeight:'400' ,paddingBottom:'25px'}}>08 ,November 2016</Typography>
            </Box>
            <Box>
              <img src={Blog2} style={{ width: "100px" }}alt="img" />
            </Box>
          </Box>
        </Box>
        <Box style={{ width:'44%', margin: "20px", paddingBottom:'20px' ,borderBottom: "0.5px solid lightgrey"}}>
          <Typography style={{color:'#074e97',fontSize:'18px',fontWeight:'300' ,paddingBottom:'15px'}}>About us </Typography>
          <Typography style={{color:'#5d7577',fontSize:'16px',fontWeight:'400'}}>
            Eleventh Hour Cleaning Services, making place Cleaner, Healthier and
            Safer
          </Typography>
        </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default Blog;
