import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import RocketRoundedIcon from "@mui/icons-material/RocketRounded";
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import { Box, Grid, Link, Typography } from "@mui/material";
import { overviewInnerStyle, PerformanceInnerIconStyle, PerformanceInnerStyle, PerformanceOverviewInnerIconStyle, PerformanceStyle, PerformanceTitleStyle } from "./Styles";

export const PerformanceOverview = () => {
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
          Performance Overview
        </Typography>
        <Grid sx={{display:"flex",alignItems:"center",gap:"20px"}}>
        <Grid
          sx={PerformanceStyle}
        >
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>
              CAMPAIGN SENT
            </Typography>
            <KeyboardDoubleArrowUpRoundedIcon sx={PerformanceInnerIconStyle} />
          </Box>
          <Typography sx={PerformanceInnerStyle}>
            <RocketRoundedIcon sx={PerformanceOverviewInnerIconStyle} />
            197
          </Typography>
        </Grid>
        <Grid
          sx={PerformanceStyle}
        >
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>
            ANNUAL PROFIT
            </Typography>
            <KeyboardDoubleArrowUpRoundedIcon sx={PerformanceInnerIconStyle} />
          </Box>
          <Typography sx={PerformanceInnerStyle}>
            <CurrencyExchangeRoundedIcon sx={PerformanceOverviewInnerIconStyle} />
            197
          </Typography>
        </Grid>
        <Grid
          sx={PerformanceStyle}
        >
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>
            Lead Coversation
            </Typography>
            <KeyboardDoubleArrowUpRoundedIcon sx={PerformanceInnerIconStyle} />
          </Box>
          <Typography sx={PerformanceInnerStyle}>
            <ShowChartRoundedIcon sx={PerformanceOverviewInnerIconStyle} />
            197
          </Typography>
        </Grid>
        <Grid
          sx={PerformanceStyle}
        >
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>
              CAMPAIGN SENT
            </Typography>
            <KeyboardDoubleArrowUpRoundedIcon sx={PerformanceInnerIconStyle} />
          </Box>
          <Typography sx={PerformanceInnerStyle}>
            <EmojiEventsRoundedIcon sx={PerformanceOverviewInnerIconStyle} />
            197
          </Typography>
        </Grid>
        <Grid
          sx={PerformanceStyle}
        >
          <Box sx={overviewInnerStyle}>
            <Typography sx={PerformanceTitleStyle}>
              CAMPAIGN SENT
            </Typography>
            <KeyboardDoubleArrowUpRoundedIcon sx={PerformanceInnerIconStyle} />
          </Box>
          <Typography sx={PerformanceInnerStyle}>
            <HandshakeRoundedIcon sx={PerformanceOverviewInnerIconStyle} />
            197
          </Typography>
        </Grid>
        </Grid>
      </Grid>
    );
  };