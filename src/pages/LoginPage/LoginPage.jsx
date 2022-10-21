// Library Imports

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Media & StyleSheets

import "./LoginPage.scss";
import Logo from "../../assets/logos/color/Transparent-name.png";

const theme = createTheme();

export default function LoginPage() {
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
        className="LoginPage"
        sx={{
          padding: {
            xs: "0.7rem",
            sm: "0.9rem",
            md: "1.5rem",
            lg: "2.5rem",
            xl: "2.5rem",
          },
        }}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              //   marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img src={Logo} alt="Logo" width="330px" height="auto" />
            </Link>

            <Box className="LoginCard" padding="3rem" borderRadius="1rem">
              <Typography
                component="h1"
                variant="h5"
                textAlign="left"
                width="100%"
                fontWeight={700}
                fontSize="1.75rem"
                gutterBottom
              >
                Nice Seeing You Again
              </Typography>
              <Typography
                component="h1"
                variant="subtitle1"
                textAlign="left"
                width="100%"
                color="#94a3b8"
                gutterBottom
              >
                Please log in to access your account web-enabled methods of
                innovative niches.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
              >
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 3 }}
                >
                  Sign In
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
    </ThemeProvider>
  );
}
