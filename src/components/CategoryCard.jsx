import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import "next/image";
export const CategoryCard = () => {
  const data = [
    {
      id: 1,
      title: "Category 1",
      img: "image/test.png",
    },
    {
      id: 2,
      title: "Category2",
      img: "image/test.png",
    },
    {
      id: 3,
      title: "Category3",
      img: "image/test.png",
    },
    {
      id: 4,
      title: "Category4",
      img: "image/test.png",
    },
  ];

  return data.map((item) => (
    <Grid
      item
      key={item.id}
      sx={{
        padding: "10px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <CardMedia component='img' src={item.img} width={600} height={200} />
      </Box>
      <Typography sx={{ width: "100%", textAlign: "center", marginTop: "5px" }}>
        {item.title}
      </Typography>
    </Grid>
  ));
};
