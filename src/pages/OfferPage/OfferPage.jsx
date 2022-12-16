import { Typography, Box, Grid } from "@mui/material";
import React,{useEffect} from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Home from "./../../assets/umerbhisite/img/home.jpg";
import Home2 from "./../../assets/umerbhisite/img/home2.jpg";
import Home3 from "./../../assets/umerbhisite/img/home3.jpg";
import Home4 from "./../../assets/umerbhisite/img/home4.jpg";
import { Link } from "react-router-dom";

function OfferPage() {
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
              <span
                style={{ color: "rgba(7, 78, 151, 0.6)", fontSize: "13px" }}
              >
                Home
              </span>{" "}
            </Link>
            <ArrowForwardIosIcon style={{ fontSize: "13px" }} /> What can we do
            for you?
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
          <Grid item sm={6} xs={12} style={{ padding: "30px" }}>
            <Typography
              style={{
                color: "#074e97",
                lineHeight: "30px",
                fontSize: "26px",
                fontWeight: "300",
                paddingBottom: "15px",
              }}
            >
              Regular Domestic Cleaning{" "}
              <span style={{ color: "#2e96db" }}> from $30</span>
            </Typography>
            <Typography
              style={{
                color: "#5d7577",
                lineHeight: "28px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              If you need a regular cleaning service but you are feeling
              insecure because the cleaner may change or you just can’t be there
              to let them in and you are not sure whether they could be trusted?
              Our regular cleaning service is just what you need. With our
              regular cleaning service, you get one, regular cleaner as often as
              you need and most importantly, it will be the same cleaner every
              time. Most importantly, our cleaners are fully insured and
              trained. Have you got some specific cleaning requests? No problem,
              our cleaners will carry out whatever cleaning task you need and
              much more. Maybe you need only a One-off cleaning service and are
              not able to commit at the moment. You need someone today? No
              problem. You need someone every month? We got you covered.
            </Typography>
          </Grid>

          <Grid item sm={6} xs={12}>
            <img src={Home} alt="img" width="100%" />
          </Grid>
        </Grid>
        <Grid container my={4} rowSpacing={2} columnSpacing={2}>
          <Grid item sm={6} xs={12}>
            <img src={Home2} alt="img"width="100%" />
          </Grid>
          <Grid item sm={6} xs={12} style={{ padding: "30px" }}>
            <Typography
              style={{
                color: "#074e97",
                lineHeight: "30px",
                fontSize: "26px",
                fontWeight: "300",
                paddingBottom: "15px",
              }}
            >
              Deep Cleaning
              {/* <span style={{ color: "#2e96db" }}> from $30</span> */}
            </Typography>
            <Typography
              style={{
                color: "#5d7577",
                lineHeight: "28px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Deep/Spring Cleaning service is done by a fully equipped and
              trained team that will wash away any fears you have about cleaning
              your home. We clean your home top to bottom, every nook and
              cranny, every corner, even the corners of the corners. Yes, it is
              a complete deep clean of every spot in your home. Deep oven clean*
              Cupboards inside/outside Fridge/Freezer cleaning* Cleaning of
              kitchen appliances Besides the regular Domestic Deep cleaning
              services we also provides another variety of the same service,
              Commercial Deep cleaning services that can be specifically
              tailored to your needs. This type of service mainly targets
              offices, schools, retail stores, hotels and other commercial
              properties. This is just a glimpse of what our Deep clean
              includes. The team has a detailed checklist that they go by, to
              ensure that everything is done to a high standard. We are so
              confident in our work, that we give you a 48-hour re-clean
              guarantee if needed. Free of charge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container my={4} rowSpacing={2} columnSpacing={2}>
          <Grid item sm={6} xs={12} style={{ padding: "30px" }}>
            <Typography
              style={{
                color: "#074e97",
                lineHeight: "30px",
                fontSize: "26px",
                fontWeight: "300",
                paddingBottom: "15px",
              }}
            >
              End of Tenancy Cleaning
              {/* <span style={{ color: "#2e96db" }}> from $30</span> */}
            </Typography>
            <Typography
              style={{
                color: "#5d7577",
                lineHeight: "28px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              The key concept behind the end of tenancy services we supply in
              London is to remove any traces of the previous tenant/resident, as
              well as make it presentable for new, incoming tenants. This is why
              our end of tenancy cleaning teams pay extreme attention to detail
              and they deliver a cosmetically perfect clean with nothing spared.
              We’re are highly experienced with working alongside letting agents
              and landlords and we offer end of tenancy cleaning services in
              London which exceed expectations of all parties. The best results
              are achieved at competitive market prices, using professional
              solutions and high tech equipment. Is it time for you to move out?
              Or maybe move into a property? Are you in need of professional End
              of tenancy or Pre tenancy cleaning? Excellent, we are here to help
              you. Why are we the best? -Thorough oven cleaning -Cleaning by a
              checklist approved by estate agents -Available on a very short
              notice -Working as many hours as needed to ensure spotless
              cleaning -Keys pick up/return on requests -48 hours free re-clean
              guarantee if needed
            </Typography>
          </Grid>

          <Grid item sm={6} xs={12}>
            <img src={Home3} alt="img"width="100%" />
          </Grid>
        </Grid>
        <Grid container my={4} rowSpacing={2} columnSpacing={2}>
          <Grid item sm={6} xs={12}>
            <img src={Home4} alt="img"width="100%" />
          </Grid>
          <Grid item sm={6} xs={12} style={{ padding: "30px" }}>
            <Typography
              style={{
                color: "#074e97",
                lineHeight: "30px",
                fontSize: "26px",
                fontWeight: "300",
                paddingBottom: "15px",
              }}
            >
              Laundry
              {/* <span style={{ color: "#2e96db" }}> from $30</span> */}
            </Typography>
            <Typography
              style={{
                color: "#5d7577",
                lineHeight: "28px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Coming Soon......
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default OfferPage;
