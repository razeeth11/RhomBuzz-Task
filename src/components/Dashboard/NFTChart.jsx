import { Box, Button, Card, Grid, Typography } from "@mui/material"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import { useEffect, useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';

export const NFTCharts = ({marketPlace}) => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup the timer on component unmount
    }, []);

    function calculateTimeLeft() {
        const targetDate = new Date(); // Current date
        targetDate.setMonth(targetDate.getMonth() + 1); // Target date is 1 month from now
        targetDate.setHours(0, 0, 0, 0); // Set the time of the target date to midnight

        const now = new Date(); // Current time
        const difference = targetDate.getTime() - now.getTime(); // Time difference in milliseconds

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    }

    const timerStyle = { fontSize: "26px", fontWeight: 600, padding: "10px", width: "40px", textAlign: "center" }
    const timerInnerStyle = { display: "flex", flexDirection: "column", alignItems: "center" }

    return (
        <Grid sx={{ border: "1px solid #e9ebec", mt: 3, display: "flex", justifyContent: "space-between" }}>
            {/* Inner Left Grid */}
            <Grid sx={{ borderRight: '1px solid #e9ebec', width: "65%" }}>
                <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#495057" }}>Marketplace</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        {["ALL", "1M", "6M", "1Y"].map((item, index) =>
                            <Typography key={index} sx={{
                                padding: "5px 10px", borderRadius: "5px", background: "#E3EDFF", color: "#4788FF", fontSize: "12px", fontWeight: 500, cursor: "pointer", transition: "300ms", "&:hover": {
                                    color: "#E3EDFF", background: "#4788FF"
                                }
                            }}>{item}</Typography>
                        )}
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", borderTop: "1px solid #e9ebec", borderBottom: "1px solid #e9ebec", p: 3 }}>
                    {marketPlace?.map((item, index) =>
                        <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "20px", fontWeight: 500, color: "#495057" }}>{item.value}k</Typography>
                            <Typography sx={{ color: "#878A99",textTransform:"capitalize" }}>{item.name}</Typography>
                        </Box>
                    )}
                </Box>
                <Grid>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5],
                                valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                            },
                            {
                                data: [4, 6.5, 5, 6.5],
                                valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                            },
                            {
                                data: [7, 8, 5, 4,],
                                valueFormatter: (value) => (value == null ? '?' : value.toString()),
                            },
                        ]}
                        height={280}
                        margin={{ top: 30, bottom: 20 }}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", mt: 5 }}>
                        {[1, 2, 3].map((item, index) => <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box sx={{ width: "15px", height: "15px", borderRadius: "50px", background: item == 1 ? "#02B2AF" : item == 2 ? "#2E96FF" : "#B800D8" }}></Box>
                            <Typography>{item == 1 ? "Artwork" : item == 2 ? "Auction" : "Creators"}</Typography>
                        </Box>)}
                    </Box>
                </Grid>
            </Grid>
            {/* Inner Right Grid */}
            <Grid sx={{ width: "35%" }}>
                <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: "15px 25px", transition: "100ms" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src="https://img.themesbrand.com/velzon/images/img-2.gif"
                            style={{ width: "40px", height: "40px", borderRadius: "50px" }}
                        />
                        <Box>
                            <Typography sx={{ color: "#495057", fontWeight: 500 }}>Trendy Fashion Portraits</Typography>
                            <Typography sx={{ color: "#878A99", fontSize: "14px" }}>Artwork</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <ShareOutlinedIcon />
                    </Grid>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column", gap: "35px", p: "15px 25px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <DiamondRoundedIcon sx={{ color: "#7758ae", fontSize: "34px" }} />
                        <Typography sx={{ fontSize: "24px", fontWeight: 600, color: "#495057" }}>346.67 ETH</Typography>
                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgb(64,187,130)" }}>+66.98 (45.87%)</Typography>
                    </Box>
                    <Typography sx={{ color: "#878A99" }}>NFT art is a digital asset that is collectable, unique, and non-transferrable, Cortes explained Every NFT is unique duplicated.</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", mt: 2 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                            <Typography sx={{ color: "#878A99" }}>Current Bid</Typography>
                            <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#495057" }}>342.65 ETH</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                            <Typography sx={{ color: "#878A99" }}>Highest Bid</Typography>
                            <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#495057" }}>768.45 ETH</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Box sx={timerInnerStyle}>
                                <Typography sx={{ color: "#878A99", fontSize: "16px" }}>Days</Typography>
                                <Card sx={timerStyle}>{timeLeft.days}</Card>
                            </Box>
                            <Box sx={timerInnerStyle}>
                                <Typography sx={{ color: "#878A99", fontSize: "16px" }}>Hours</Typography>
                                <Card sx={timerStyle}>{timeLeft.hours}</Card>
                            </Box>
                            <Box sx={timerInnerStyle}>
                                <Typography sx={{ color: "#878A99", fontSize: "16px" }}>Minutes</Typography>
                                <Card sx={timerStyle}>{timeLeft.minutes}</Card>
                            </Box>
                            <Box sx={timerInnerStyle}>
                                <Typography sx={{ color: "#878A99", fontSize: "16px" }}>Seconds</Typography>
                                <Card sx={timerStyle}>{timeLeft.seconds}</Card>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            gap: "20px"
                        }}
                    >
                        <Button
                            sx={{
                                background: "#7758ae",
                                padding: "10px",
                                color: "white",
                                textTransform: "capitalize",
                                width: "100%"
                            }}
                        >
                            View Details
                        </Button>
                        <Button
                            sx={{
                                background: "#EEE8F8",
                                padding: "10px",
                                color: "#7758ae",
                                textTransform: "capitalize",
                                width: "100%"
                            }}
                        >
                            Bid now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}