
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Box, Grid, Link, Typography } from "@mui/material";
import { headingStyle, overviewIncomeStyle, overviewInnerStyle, PerformanceStyle } from "./Styles";

export const EarningsOverview = () => {
    return (
      <Grid>
        <Typography sx={{fontSize:"20px",color:"#7758ae",fontWeight:500,textDecoration:"underline",mb:3}}>Earnings Overview</Typography>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Grid
            sx={PerformanceStyle}
          >
            <Box sx={overviewInnerStyle}>
              <Typography sx={headingStyle}>
                TOTAL EARNINGS
              </Typography>
              <Typography sx={{ color: "rgb(64,187,130)", fontWeight: 600 }}>
                +16.87%
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "24px", fontWeight: 600, color: "#495057" }}
            >
              $567,678,99k
            </Typography>
            <Box sx={overviewInnerStyle}>
              <Link>View net earnings</Link>
              <PaidOutlinedIcon sx={overviewIncomeStyle} />
            </Box>
          </Grid>
          <Grid
            sx={PerformanceStyle}
          >
            <Box sx={overviewInnerStyle}>
              <Typography sx={headingStyle}>
                ORDERS
              </Typography>
              <Typography sx={{ color: "rgb(64,187,130)", fontWeight: 600 }}>
                +16.87%
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "24px", fontWeight: 600, color: "#495057" }}
            >
              $567,678,99k
            </Typography>
            <Box sx={overviewInnerStyle}>
              <Link>View all orders</Link>
              <ShoppingBagOutlinedIcon sx={overviewIncomeStyle} />
            </Box>
          </Grid>
          <Grid
            sx={PerformanceStyle}
          >
            <Box sx={overviewInnerStyle}>
              <Typography sx={headingStyle}>
                CUSTOMERS
              </Typography>
              <Typography sx={{ color: "rgb(64,187,130)", fontWeight: 600 }}>
                +16.87%
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "24px", fontWeight: 600, color: "#495057" }}
            >
              $567,678,99k
            </Typography>
            <Box sx={overviewInnerStyle}>
              <Link>See details</Link>
              <PersonOutlineOutlinedIcon sx={overviewIncomeStyle} />
            </Box>
          </Grid>
          <Grid
            sx={PerformanceStyle}
          >
            <Box sx={overviewInnerStyle}>
              <Typography sx={headingStyle}>
                MY BALANCE
              </Typography>
              <Typography sx={{ color: "rgb(64,187,130)", fontWeight: 600 }}>
                +16.87%
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "24px", fontWeight: 600, color: "#495057" }}
            >
              $567,678,99k
            </Typography>
            <Box sx={overviewInnerStyle}>
              <Link>Withdraw money</Link>
              <AccountBalanceWalletOutlinedIcon sx={overviewIncomeStyle} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  };