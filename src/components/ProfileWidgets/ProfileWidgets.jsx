import { Box, Grid, Link, Typography } from "@mui/material";
import { AppNavBarMenu } from "../appbarmenu";
import { LeftMenuDrawer } from "../leftMenu";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { EarningsOverview } from "./EarningsOverview";
import { PerformanceOverview } from "./PerformanceOverview";
import { TrafficInsights } from "./TrafficInsights";
import { BusinessPerformance } from "./BusinessPerformance";
import { useEffect, useState } from "react";

export const Widgets = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://67685d3ccbf3d7cefd37c484.mockapi.io/userDetails")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const userId = localStorage.getItem("token");
  const user = userData?.find((item) => item.userId === userId);
  return (
    <Grid>
      <LeftMenuDrawer />
      <AppNavBarMenu userData={user} />
      <Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 30px",
            borderBottom: "2px solid #e9ebec",
            ml: "280px",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>PROFILE OVERVIEW</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            RhomBuzz
            <KeyboardArrowRightRoundedIcon sx={{ color: "#878a99" }} />
            <Typography sx={{ color: "#878a99" }}>Overview</Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            ml: "280px",
            p: 3,
          }}
        >
          {/* Earnings Section */}
          <EarningsOverview userData={user} />
          {/* Performance Section */}
          <PerformanceOverview userData={user} />
          {/* TrafficInsights Section */}
          <TrafficInsights userData={user} />
          {/* BusinessPerformance Section */}
          <BusinessPerformance userData={user} />
        </Grid>
      </Grid>
    </Grid>
  );
};
