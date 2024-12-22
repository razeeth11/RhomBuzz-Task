
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { HistoryBids } from './historybids';
import { NFTCharts } from './NFTChart.jsx';
import { NftArtWork } from './NFTArtWork.jsx';
import { Box, Button, Grid, Typography } from '@mui/material';


export const DashboardComponents = () => {
    const iconStyle = {
        color: "#7758ae",
        background: "#EEE8F8",
        p: 1,
        fontSize: "28px",
        borderRadius: "3px",
    };

    const data = [
        { name: "total revenue", price: "437,547,334", percent: "3.24" },
        { name: "estimated", price: "545,345,56", percent: "1.65" },
    ];

    return (
        <Grid>
            {/* Header Section */}
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
                <Typography sx={{ fontWeight: 600 }}>NFT DASHBOARD</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    Dashboards
                    <KeyboardArrowRightRoundedIcon sx={{ color: "#878a99" }} />
                    <Typography sx={{ color: "#878a99" }}>NFT Dashboard</Typography>
                </Box>
            </Grid>

            {/* Main Content Section */}
            <Grid sx={{ p: 3, ml: "280px", display: "flex", justifyContent: "space-between", gap: "40px" }}>
                <Grid
                    sx={{ width: "75%", }}
                >
                    <Grid sx={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        height: "250px",
                    }}>
                        {/* Marketplace Banner */}
                        <Grid
                            sx={{
                                border: "2px solid #e9ebec",
                                display: "flex",
                                alignItems: "center",
                                width: "500px",
                                height: "100%",
                                padding: "20px",
                                backgroundImage:
                                    "url('https://themesbrand.com/velzon/html/galaxy/assets/images/nft/marketplace.png')",
                                backgroundSize: "cover",
                                borderRadius: "5px",
                            }}
                        >
                            <Grid sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 500,
                                        color: "#495057",
                                    }}
                                >
                                    Discover, Collect, Sell and Create your own NFTs.
                                </Typography>
                                <Typography sx={{ fontSize: "16px", color: "#878A99" }}>
                                    The world's first and largest digital marketplace.
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                        mt: 3,
                                    }}
                                >
                                    <Button
                                        sx={{
                                            background: "#7758ae",
                                            padding: "15px",
                                            color: "white",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Discover Now
                                    </Button>
                                    <Button
                                        sx={{
                                            background: "#EEE8F8",
                                            padding: "15px",
                                            color: "#7758ae",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Create Your Now
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid>
                                <img src="https://themesbrand.com/velzon/html/galaxy/assets/images/bg-d.png" alt="Decoration" />
                            </Grid>
                        </Grid>

                        {/* Data Cards */}
                        {data.map((item, index) => (
                            <Grid
                                key={index}
                                sx={{
                                    border: "2px solid #e9ebec",
                                    borderRadius: "5px",
                                    height: "100%",
                                    width: "23%",
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "40px",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                    }}
                                >
                                    {index === 0 ? (
                                        <AttachMoneyRoundedIcon sx={iconStyle} />
                                    ) : (
                                        <AccountBalanceWalletOutlinedIcon sx={iconStyle} />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            color: "#878A99",
                                            fontWeight: 500,
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        color: "#495057",
                                        fontWeight: 600,
                                    }}
                                >
                                    ${item.price}
                                </Typography>
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            whiteSpace: "nowrap",
                                            p: "2px 5px",
                                            borderRadius: "5px",
                                            background: index === 0 ? "#fce8e5" : "#e2f5ec",
                                            color: index === 0 ? "rgb(238,99,82)" : "rgb(64,187,130)",
                                            width: "min-content",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {index === 0 ? (
                                            <ArrowDownwardRoundedIcon
                                                sx={{ fontSize: "12px", fontWeight: 600, mr: "5px" }}
                                            />
                                        ) : (
                                            <ArrowUpwardRoundedIcon
                                                sx={{ fontSize: "12px", fontWeight: 600, mr: "5px" }}
                                            />
                                        )}
                                        {item.percent}%
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            color: "#878A99",
                                            fontWeight: 500,
                                        }}
                                    >
                                        vs. previous month
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <NFTCharts />
                </Grid>
                <HistoryBids />
            </Grid>
            <Grid sx={{ ml: "280px", }}>
                <NftArtWork />
            </Grid>
        </Grid>
    );
};