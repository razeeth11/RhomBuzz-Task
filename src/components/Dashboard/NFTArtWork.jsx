import { Box, Button, Grid, Typography } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export const NftArtWork = ({ topArtworks,
    marketPlace }) => {
  const nftChartData = [
    {
      img: "https://themesbrand.com/velzon/html/galaxy/assets/images/nft/img-03.jpg",
      name: "Filtered Portrait",
      likes: "12.54",
      type: "Photography",
      value: 7.54,
    },
    {
      img: "https://img.themesbrand.com/velzon/images/img-4.gif",
      name: "Evolved Reality",
      likes: "12.54",
      type: "Video",
      value: 25.54,
    },
    {
      img: "https://img.themesbrand.com/velzon/images/img-1.gif",
      name: "Pattern Arts",
      likes: "12.54",
      type: "Artwork",
      value: 43.54,
    },
    {
      img: "https://img.themesbrand.com/velzon/images/img-3.gif",
      name: "Walking on Air",
      likes: "12.54",
      type: "Artwork",
      value: 33.54,
    },
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "30px",
        p: 3,
        height: "400px",
      }}
    >
      <Grid sx={{ width: "65%", height: "100%" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", color: "#495057", fontWeight: 500 }}
          >
            Featured NFTs Artworks
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <ChevronLeftRoundedIcon
              sx={{
                color: "#7758ae",
                background: "#EEE8F8",
                borderRadius: "3px",
                fontSize: "34px",
              }}
            />
            <ChevronRightRoundedIcon
              sx={{
                color: "#7758ae",
                background: "#EEE8F8",
                borderRadius: "3px",
                fontSize: "34px",
              }}
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            overflowX: "scroll",
            scrollbarWidth: "none", // For Firefox
            "&::-webkit-scrollbar": {
              display: "none", // For Chrome, Safari, and Edge
            },
            gap: "30px",
            mt: 5,
          }}
        >
          {nftChartData.map((item, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "270px",
                height: "auto",
                border: "2px solid #e9ebec",
                borderRadius: "5px",
              }}
            >
              <Box sx={{ height: "300px" }}>
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px 5px 0 0",
                  }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#7758ae",
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#878A99" }}>
                      {item.type}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <FavoriteRoundedIcon
                      sx={{ color: "red", fontSize: "18px" }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#878A99" }}>
                      {item.likes}K
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 0 10px 0",
                    fontWeight: 500,
                  }}
                >
                  Highest : {(item.value * 5).toFixed(2)}
                  <Typography sx={{ color: "#7758ae", fontWeight: 600 }}>
                    {item.value} ETH
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Grid sx={{ width: "35%", height: "100%" }}>
        <Grid
          sx={{
            border: "2px solid #e9ebec",
            borderRadius: "5px",
            height: "min-content",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "2px solid #e9ebec",
              p: 2,
            }}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: 500, color: "#495057" }}
            >
              Top Artworks
            </Typography>
            <Button
              sx={{
                background: "#EEE8F8",
                padding: "5px 10px",
                color: "#7758ae",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "3px",
              }}
            >
              See All
            </Button>
          </Grid>
          <Grid
            sx={{
              maxHeight: "450px",
              overflow: "auto",
              scrollbarWidth: "none", // For Firefox
              "&::-webkit-scrollbar": {
                display: "none", // For Chrome, Safari, and Edge
              },
            }}
          >
            {topArtworks?.map((item, index) => (
              <Grid
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: "20px 20px",
                  borderBottom: "1px solid #e9ebec",
                  transition: "100ms",
                }}
              >
                <Grid
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={item?.img}
                    style={{ width: "50px", borderRadius: "50px" }}
                  />
                  <Box>
                    <Typography sx={{ color: "#495057", fontWeight: 500 }}>
                      {item?.name}
                    </Typography>
                    <Typography sx={{ color: "#878A99", fontSize: "14px" }}>
                      {item?.sales}
                    </Typography>
                  </Box>
                </Grid>
                <Grid>
                  <Typography
                    sx={{ color: "#495057", fontWeight: 500, fontSize: "15px" }}
                  >
                    ${item?.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#878A99",
                      fontWeight: 500,
                      fontSize: "12px",
                      textAlign: "right",
                    }}
                  >
                    Total USD
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
