import Head from "next/head";
import "next/image";

import { Avatar, Box, Grid, Typography } from "@mui/material";
import { CategoryCard } from "../components/CategoryCard";
import { CategoryIcon } from "../components/CategoryIcon";
import ImgCard from "@/components/ImgCard";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <ImgCard />
      </Box>

      <Grid
        xs={12}
        spacing={2}
        width={"90%"}
        margin='auto'
        justifyContent={"center"}
        container
      >
        <CategoryCard />
      </Grid>
    </Box>
  );
}
