import { Box, Grid, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { overviewIncomeStyle, overviewInnerStyle, PerformanceInnerStyle, PerformanceStyle, PerformanceTitleStyle, TrafficIconStyle, TrafficMeterStyle } from "./Styles";

export const BusinessPerformance = ({userData}) => {
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
        Business Performance
      </Typography>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Grid sx={PerformanceStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>Total sales</Typography>
          </Box>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceInnerStyle}>
              <ShoppingBagOutlinedIcon sx={overviewIncomeStyle} />
              {userData?.totalSalesCount}
            </Typography>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              3.96%
            </Box>
          </Box>
          <Typography sx={PerformanceTitleStyle}>From Last Month</Typography>
        </Grid>
        <Grid sx={PerformanceStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>Number of users</Typography>
          </Box>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceInnerStyle}>
              <ShoppingBagOutlinedIcon sx={overviewIncomeStyle} />
              {userData?.customers}
            </Typography>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              3.96%
            </Box>
          </Box>
          <Typography sx={PerformanceTitleStyle}>From Last Year</Typography>
        </Grid>
        <Grid sx={PerformanceStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>Total Revenue</Typography>
          </Box>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceInnerStyle}>
              <ShoppingBagOutlinedIcon sx={overviewIncomeStyle} />
              ${userData?.totalRevenue}
            </Typography>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              3.96%
            </Box>
          </Box>
          <Typography sx={PerformanceTitleStyle}>From $1,750.04 last year</Typography>
        </Grid>
        <Grid sx={PerformanceStyle}>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>Number of Stores</Typography>
          </Box>
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceInnerStyle}>
              <ShoppingBagOutlinedIcon sx={overviewIncomeStyle} />
              {userData?.totalStores}
            </Typography>
            <Box sx={TrafficMeterStyle}>
              <ArrowDownwardRoundedIcon sx={TrafficIconStyle} />
              3.96%
            </Box>
          </Box>
          <Typography sx={PerformanceTitleStyle}>From 308 last year</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
