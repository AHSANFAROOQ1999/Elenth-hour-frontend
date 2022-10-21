// Library Imports

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Checkbox } from "@mui/material";

// Media & StyleSheets

import "./SignUpPage.scss";
import Logo from "../../assets/logos/text black/png/logo-text1.png";

const theme = createTheme();

export default function SignUpPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="SignUpPage"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: {
            xs: "0.7rem",
            sm: "0.9rem",
            md: "1.5rem",
            lg: "2.5rem",
            xl: "2.5rem",
          },
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box className="Reviews">
          <Container component="main" maxWidth="sm" style={{ padding: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                className="ReviewCard"
                padding="3rem"
                borderRadius="1rem 0 0 1rem"
              >
                <Link to="/">
                  <img src={Logo} alt="Logo" width="115px" height="auto" />
                </Link>
                <Typography
                  component="h1"
                  variant="h5"
                  textAlign="left"
                  width="100%"
                  fontWeight={700}
                  fontSize="1.75rem"
                  gutterBottom
                >
                  Reviews
                </Typography>
                <Typography
                  component="h1"
                  variant="subtitle1"
                  textAlign="left"
                  width="100%"
                  color="#94a3b8"
                  gutterBottom
                >
                  Get started with your free account today. No credit card
                  needed and no setup fees.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box className="SignUpForm">
          <Container component="main" maxWidth="sm" style={{ padding: 0 }}>
            <Box
              sx={{
                //   marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                className="SignUpCard"
                padding="3rem"
                borderRadius=" 0 1rem 1rem 0"
              >
                <Typography
                  component="h1"
                  variant="h5"
                  textAlign="left"
                  width="100%"
                  fontWeight={700}
                  fontSize="1.75rem"
                  gutterBottom
                >
                  Create an Account
                </Typography>
                <Typography
                  component="h1"
                  variant="subtitle1"
                  textAlign="left"
                  width="100%"
                  color="#94a3b8"
                  gutterBottom
                >
                  Get started with your free account today. No credit card
                  needed and no setup fees.
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 3 }}
                >
                  <Box display="flex" justifyContent="space-between">
                    <TextField
                      margin="normal"
                      required
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="firstName"
                      autoFocus
                      style={{ width: "48%" }}
                    />
                    <TextField
                      margin="normal"
                      required
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lastName"
                      autoFocus
                      style={{ width: "48%" }}
                    />
                  </Box>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="I have read and agree to the Terms & Conditions"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                  >
                    Submit
                  </Button>
                  <Grid container>
                    <Grid item xs={12} textAlign="center">
                      Don't have an account? &nbsp;
                      <Link to="/signup" variant="body2">
                        {"Sign Up Today"}
                      </Link>
                    </Grid>

                    <Grid item xs={12} textAlign="center" sx={{ mt: 3 }}>
                      <Link to="/resetpassword" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
