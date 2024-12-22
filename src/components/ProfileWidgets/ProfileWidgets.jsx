import { Box, Grid, Link, Typography } from "@mui/material";
import { AppNavBarMenu } from "../appbarmenu";
import { LeftMenuDrawer } from "../leftMenu";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { EarningsOverview } from "./EarningsOverview";
import { PerformanceOverview } from "./PerformanceOverview";
import { TrafficInsights } from "./TrafficInsights";
import { BusinessPerformance } from "./BusinessPerformance";


export const Widgets = () => {
  return (
    <Grid>
      <LeftMenuDrawer />
      <AppNavBarMenu />
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
          <Box
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
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
         <EarningsOverview />
        {/* Performance Section */}
        <PerformanceOverview />
        {/* TrafficInsights Section */}
        <TrafficInsights />
        {/* BusinessPerformance Section */}
        <BusinessPerformance />
       </Grid>
      </Grid>
    </Grid>
  );
};


