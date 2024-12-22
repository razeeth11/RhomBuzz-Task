import { Box, Grid, Link, Typography } from "@mui/material";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { headingStyle, overviewIncomeStyle, overviewInnerStyle, TrafficIconStyle, TrafficMeterStyle, TrafficStyle, TrafficSub, TrafficValueStyle } from "./Styles";

export const TrafficInsights = () => {
  return (
    <Grid>
      <Typography
        sx={{
          fontSize: "20px",
          color: "#7758ae",
          fontWeight: 500,
          textDecoration: "underline",
          mb: 3,
          mt: 3,
        }}
      >
        Traffic Insights
      </Typography>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Grid sx={TrafficStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={headingStyle}>USERS</Typography>
            <PeopleAltRoundedIcon sx={overviewIncomeStyle} />
          </Box>
          <Typography sx={TrafficValueStyle}>$567,678,99k</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              16.24%
            </Box>
            <Typography sx={TrafficSub}>vs. previous month</Typography>
          </Box>
        </Grid>
        <Grid sx={TrafficStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={headingStyle}>Sessions</Typography>
            <ShowChartRoundedIcon sx={overviewIncomeStyle} />
          </Box>
          <Typography sx={TrafficValueStyle}>97.66k</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              3.96%
            </Box>
            <Typography sx={TrafficSub}>vs. previous month</Typography>
          </Box>
        </Grid>
        <Grid sx={TrafficStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={headingStyle}>bounce rate</Typography>
            <LaunchRoundedIcon sx={overviewIncomeStyle} />
          </Box>
          <Typography sx={TrafficValueStyle}>97.66k</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              3.96%
            </Box>
            <Typography sx={TrafficSub}>vs. previous month</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
