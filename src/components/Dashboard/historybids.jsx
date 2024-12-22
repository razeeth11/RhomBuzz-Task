import { Box, Grid, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const HistoryBids = ({arrayData}) => {
    return (
        <Grid sx={{ width: "25%", border: "2px solid #e9ebec", borderRadius: "5px", height: "min-content" }}>
            <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #e9ebec", p: 2 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: 500, color: "#495057" }}>History of Bids</Typography>
                <Typography sx={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between", color: "#878A99" }}>See All
                    <ArrowForwardRoundedIcon sx={{ fontSize: "20px" }} />
                </Typography>
            </Grid>
            <Grid sx={{
                maxHeight: "450px", overflow: "auto", scrollbarWidth: "none", // For Firefox
                "&::-webkit-scrollbar": {
                    display: "none", // For Chrome, Safari, and Edge
                },
            }}>
                {arrayData?.map((item, index) =>
                    <Grid key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: "10px 20px", borderBottom: "1px solid #e9ebec", transition: "100ms" }}>
                        <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <img src={item?.img}
                                style={{ width: "40px", borderRadius: "50px" }}
                            />
                            <Box>
                                <Typography sx={{ color: "#495057", fontWeight: 500 }}>{item?.name}</Typography>
                                <Typography sx={{ color: "#878A99", fontSize: "14px" }}>{item?.userId}</Typography>
                            </Box>
                        </Grid>
                        <Grid>
                            <Typography sx={{ color: "#495057", fontWeight: 500 }}>{item?.eth} ETH</Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}