import SortRoundedIcon from "@mui/icons-material/SortRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const AppNavBarMenu = ({userData}) => {
    const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  const navIconStyle = { fontSize: "30px", color: "#878a99" };
  return (
    <Grid
      sx={{
        border: "1px solid #e9ebec",
        ml: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 999,
      }}
    >
      <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <SortRoundedIcon
          sx={{ fontSize: "28px", color: "#878a99", ml: 1, cursor: "pointer" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: "#F3F3F9",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <SearchRoundedIcon sx={{ fontSize: "28px", color: "#878a99" }} />
          <input
            placeholder="Search"
            style={{
              outline: "none",
              border: "none",
              padding: "8px",
              background: "#F3F3F9",
            }}
          />
        </Box>
      </Grid>
      <Grid sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <WidgetsOutlinedIcon sx={navIconStyle} />
        <ShoppingBagOutlinedIcon sx={navIconStyle} />
        <BedtimeOutlinedIcon sx={navIconStyle} />
        <NotificationsNoneOutlinedIcon sx={navIconStyle} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#e9ebec",
            p: 2,
          }}
        >
          <img
            src="https://themesbrand.com/velzon/html/galaxy/assets/images/users/avatar-1.jpg"
            style={{ width: "40px", borderRadius: "50px" }}
          />
          <Box>
            <Typography
              sx={{ fontSize: "16px", color: "#495057", fontWeight: 600 }}
            >
              {userData?.userName}
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#878a99", fontWeight: 600 }}
            >
              {userData?.userId}
            </Typography>
          </Box>
          <Tooltip title="Logout">
            <LogoutRoundedIcon
              onClick={handleLogout}
              sx={{
                fontSize: "30px",
                color: "#878a99",
                cursor: "pointer",
                margin: "0 10px",
                "&:hover": { color: "#495057" },
              }}
            />
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  );
};
