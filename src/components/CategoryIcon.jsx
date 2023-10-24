import React from "react";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import "next/image";
export const CategoryIcon = () => {
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

  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {data.map((item) => (
        <Grid key={item.id} item xs={2}>
          <Avatar
            alt='Remy Sharp'
            src={item.img}
            sx={{ width: 100, height: 100, margin: "0 auto" }}
          />
          <Typography sx={{ textAlign: "center" }}>{item.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
