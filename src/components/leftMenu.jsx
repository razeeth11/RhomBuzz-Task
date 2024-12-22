import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import { Menu, MenuItem, Typography } from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded';
import VerticalSplitRoundedIcon from '@mui/icons-material/VerticalSplitRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import FlightLandRoundedIcon from '@mui/icons-material/FlightLandRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import SettingsInputCompositeRoundedIcon from '@mui/icons-material/SettingsInputCompositeRounded';
import FormatAlignCenterRoundedIcon from '@mui/icons-material/FormatAlignCenterRounded';
import { Navigate, useNavigate } from 'react-router';

export const LeftMenuDrawer = () => {
    const navigate = useNavigate()

    const menuHeadTitle = { fontSize: "10px", fontWeight: 600, color: "#c2a7db" }
    const menuItemStyle = { display: "flex", alignItems: "center", gap: "15px", padding: "15px" }
    const menuItemText = { fontSize: "14px", fontWeight: 400, color: "white" }

    return (
        <Grid sx={{ minHeight: "100vh", width: "280px", backgroundColor: "rgb(72, 38, 104)", color: "white", float: "left", position: "fixed", top: 0 }}>
            <Typography sx={{ fontSize: "24px", fontWeight: 600, color: "white", textAlign: "center", padding: "20px 0" }}>RhomBuzz</Typography>
            <Grid sx={{ margin: "20px 10px" }}>
                <Typography sx={menuHeadTitle}>MENU</Typography>
                <Box sx={{ mt: 1 }}>
                    {["Dashboard", "Apps", "Layouts"].map((item, index) =>
                        <MenuItem key={index} sx={menuItemStyle} onClick={() => item == "Dashboard" && navigate("/")}>
                            {index == 0 ? <DashboardRoundedIcon /> : index == 1 ? <ViewWeekRoundedIcon /> : <VerticalSplitRoundedIcon />}
                            <Typography sx={menuItemText}>{item}</Typography>
                            <KeyboardArrowRightRoundedIcon sx={{ marginLeft: "auto" }} />
                        </MenuItem>
                    )}
                </Box>
            </Grid>
            <Grid sx={{ margin: "20px 10px" }}>
                <Typography sx={menuHeadTitle}>PAGES</Typography>
                <Box sx={{ mt: 1 }}>
                    {["Authentication", "Pages", "Landing"].map((item, index) =>
                        <MenuItem key={index} sx={menuItemStyle}>
                            {index == 0 ? <PersonSearchRoundedIcon /> : index == 1 ? <AutoStoriesRoundedIcon /> : <FlightLandRoundedIcon />}
                            <Typography sx={menuItemText}>{item}</Typography>
                            <KeyboardArrowRightRoundedIcon sx={{ marginLeft: "auto" }} />
                        </MenuItem>
                    )}
                </Box>
            </Grid>
            <Grid sx={{ margin: "20px 10px" }}>
                <Typography sx={menuHeadTitle}>COMPONENTS</Typography>
                <Box sx={{ mt: 1 }}>
                    {["Base UI", "Advance UI", "Profile Overview", "Forms"].map((item, index) =>
                        <MenuItem key={index} sx={menuItemStyle} onClick={() => item == "Profile Overview" && navigate("/Profile-Overview")}>
                            {index == 0 ? <MonitorHeartRoundedIcon /> : index == 1 ? <LayersRoundedIcon /> : index == 2 ? <PersonSearchRoundedIcon /> : <FormatAlignCenterRoundedIcon />}
                            <Typography sx={menuItemText}>{item}</Typography>
                            <KeyboardArrowRightRoundedIcon sx={{ marginLeft: "auto" }} />
                        </MenuItem>
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}