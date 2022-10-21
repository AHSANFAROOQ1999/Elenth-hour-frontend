// Library Imports

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Media & StyleSheets

// Pages, Components
import MainContentSection from "./Sections/MainContentSection/MainContentSection";
import ReviewSection from "./Sections/ReviewSection/ReviewSection";

export default function LandingPage() {
  return (
    <Box>
      <MainContentSection />
      <ReviewSection />
    </Box>
  );
}
